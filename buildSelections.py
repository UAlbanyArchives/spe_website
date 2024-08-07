import os
import json
import requests
from asnake.client import ASnakeClient

def buildSelections(colID, refID=None, filter=None, date=False, verbose=False):

    client = ASnakeClient()
    client.authorize()
    
    collection = []
    page = 1

    outDir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_data")
    
    if refID:
        url = "https://archives.albany.edu/catalog?f[record_parent_sim][]=" + refID + "&format=json&per_page=100"
        outFile = os.path.join(outDir, refID + ".json")
        descriptionURL = "https://archives.albany.edu/description/catalog/" + colID.replace(".", "-") + "aspace_" + refID
        outDesc = os.path.join(outDir, "desc_" + refID + ".json")
    else:
        url = "https://archives.albany.edu/catalog?f[collection_number_tesim][]=" + colID + "&format=json&per_page=100"
        outFile = os.path.join(outDir, colID.replace(".", "-") + ".json")
        descriptionURL = "https://archives.albany.edu/description/catalog/" + colID.replace(".", "-")
        outDesc = os.path.join(outDir, "desc_" + colID.replace(".", "-") + ".json")
    if filter:
        url = url + "&" + filter
    
    #print ("--> " + descriptionURL + "?format=json")
    #r = requests.get(descriptionURL + "?format=json", verify=False)
    #print (r.status_code)
    #with open(outDesc, 'w', encoding='utf-8', newline='') as f:
    #    json.dump(r.json()["response"], f, ensure_ascii=True, indent=4)
        

    def getPage(page, collection, url):

        r = requests.get(url + "&page=" + str(page), verify=False)
        print (r.status_code)
        for item in r.json()["data"]:

            obj = {}
            print (item["attributes"]["title"])
            obj["title"] = item["attributes"]["title"].split(">")[1].split("<")[0]
            obj["date"] = item["attributes"]["date_created_tesim"]["attributes"]["value"].split(">")[1].split("<")[0]
            #print (item)
            #ref_id = item["archivesspace_record_tesim"][0]

            obj["thumb"] = "https://archives.albany.edu" + item["attributes"]["thumbnail_path_ss"]["attributes"]["value"]
            obj["url"] = "https://archives.albany.edu/concern/" + item["type"].lower() + "s/" + item["id"]
            
            """
            obj_page = requests.get(obj["url"] + "?format=json", verify=False)
            print (obj["url"] + "?format=json")
            print (obj_page.status_code)
            ref_id = obj_page.json()["archivesspace_record"]
            
            record = client.get("repositories/2/find_by_id/archival_objects?ref_id[]=" + ref_id).json()
            ao = client.get(record["archival_objects"][0]["ref"]).json()
            #print (ao["ref_id"])
            dateNormal = ao["dates"][0]["begin"]
            if "end" in ao["dates"][0].keys():
                dateNormal = dateNormal + "/" + ao["dates"][0]["end"]
            if "undated" in ao["dates"][0]["expression"].lower():
                obj["date_normal"] = "9999"
            else:
                obj["date_normal"] = dateNormal
            """
            if date:
                if not obj["date"].lower() == "undated":
                    if obj["date"].lower().startswith("ca."):
                        objDate = obj["date"].split(" ")[1]
                    else:
                        if "-" in obj["date"]:
                            objDate = obj["date"].split("-")[0]
                        else:
                            objDate = obj["date"].split(" ")[0]
                    print (objDate)
                    try:
                        if "-" in date:
                            if int(objDate) >= int(date.split("-")[0]) and int(objDate) <= int(date.split("-")[1]):
                                collection.append(obj)
                        else:
                            if int(objDate) < int(date):
                                collection.append(obj)
                    except:
                        print ("Date Error: " + objDate)
            else:
                collection.append(obj)
        if r.json()["meta"]["pages"]["last_page?"] == False:
            getPage(page + 1, collection, url)

    getPage(page, collection, url)
        
        
    #print (collection)
    sortedTitle = sorted(collection, key = lambda i: i['title'].split(" ")[0])
    #sortedCollection = sorted(sortedTitle, key = lambda i: i['date_normal'].split(" ")[0])
    sortedCollection = sorted(sortedTitle, key = lambda i: i['date'].split(" ")[0])
    print (len(sortedCollection))

    with open(outFile, 'w', encoding='utf-8', newline='') as f:
        json.dump(sortedCollection, f, ensure_ascii=True, indent=4)
        
# for running with command line args
if __name__ == '__main__':
    import argparse

    argParse = argparse.ArgumentParser()
    argParse.add_argument("colID", help="ID for a package in Processing directory.")
    argParse.add_argument("-id", help="Optional ref_id for components below the collection level.", default=None)
    argParse.add_argument("-f", "--filter", help="Hyrax filter to limit results, such as \"f[resource_type_sim][]=Periodical\"", default=None)
    argParse.add_argument("-d", "--date", help="Only return items prior to a certain year of creation.", default=None)
    #argParse.add_argument("-v", "--verbose", help="lists all files written.", default=False)
    args = argParse.parse_args()
    
    buildSelections(args.colID, args.id, args.filter, args.date, True)
