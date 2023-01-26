var urlRoot = "https://archives.albany.edu/collections/catalog?f[parent_ssi][]=aspace_"
var urlParams = "&view=hierarchy&format=json"

var id = "232eda0f4bc2d1cab2fb69ce7b3062b1"


$(document).ready(function() {
    
    $title = $(".seriesTitle")
    
    
    $urlRoot = "https://archives.albany.edu/description/catalog?f[parent_ssi][]=aspace_"
    $urlParams = "&view=hierarchy&format=json"
    
    $url = $urlRoot + $title.attr('id') + $urlParams
    var years = {}
    
    /*console.log($url);*/
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: $url,
        success: function(data) {
            for (i = 0; i < data['data'].length; i++) {
                if (data["data"][i]["attributes"]["has_online_content_ssim"][0] == "true") {
                    $title = data["data"][i]["attributes"]["title_ssm"][0];
                    $date = data["data"][i]["attributes"]["normalized_date_ssm"][0];
                    $link = data["data"][i]["links"]["self"];
                    /*console.log($title + ", " + $date);*/
                    $object = [$title, $date, $link];
                    
                    $year = $date.split(" ")[0];
                    if ($year in years) {
                        years[$year].push($object);
                        /*console.log(years[$year]);*/
                    } else {
                        years[$year] = [$object]
                    }
                }
            }
            for (key in years) {
                if (years.hasOwnProperty(key)) {
                    if ($(".appendHere").attr("id").toLowerCase() == "noyears") {
                        $(".appendHere").addClass('flexbox');
                        $append = $(".flexbox");
                    } else {
                        if ($(".appendHere").attr("id").toLowerCase() == "nothumb") {
                            $(".appendHere").append('<div class="row"><div class="page-header"><h3>' + key + '</h3></div><ul class="' + key + '"></ul></div>');
                            /*$(".appendHere").append('<div class="row"><div class="page-header"><h3>' + key + '</h3></div><ul class="list-group ' + key + '"></ul></div>');*/
                            $append = $("." + key);
                        } else {
                            $(".appendHere").append('<div class="row"><div class="page-header"><h3>' + key + '</h3></div><div class="flexbox ' + key + '"></div></div>');
                            $append = $("." + key);
                        }
                    }
                    for (i = 0; i < years[key].length; i++) {
                        item = years[key][i]
                        if ($(".appendHere").attr("id").toLowerCase() == "nothumb") {
                            /*$append.append('<a class="itemLink" id="' + item[2] + '"><li class="list-group-item"><h4>' + item[0] + ', ' + item[1] + '</h4></li></a>');*/
                            $append.append('<a class="itemLink" id="' + item[2] + '"><li><h4>' + item[0] + ', ' + item[1] + '</h4></li></a>');
                        } else {
                            /*$append.append('<a class="itemLink" id="' + item[2] + '"><div class="galleryItem col-md-4 img-thumbnail"><div class="galleryThumb"><img class="galleryImage" src="https://archives.albany.edu/downloads/ff365558s?file=thumbnail" alt="' + item[0] + ', ' + item[1] + '" /></div><div class="galleryLabel"><h4><b>' + item[0] + '</b>, ' + item[1] + '</h4></div></div></a>');*/
                            $append.append('<a class="itemLink col-md-4" id="' + item[2] + '"><div class="galleryItem  img-thumbnail"><div class="galleryThumb"><img class="galleryImage" src="/sites/all/themes/New_UArchives/img/loading2.gif" alt="' + item[0] + ', ' + item[1] + '" /></div><div class="galleryLabel"><h4><p>' + item[0] + ',</p><p>' + item[1] + '</p></h4></div></div></a>');
                        }
                    }
                }
            }
            $("#loadingGif").css("display", "none");
            
            /* reify links */
            $('.itemLink').each(function(i, item) {
                $itemUrl = $(this).attr("id");
                var elem = $(this);
                $.ajax({
                    type: "GET",
                    dataType: 'json',
                    url: $itemUrl + "?format=json",
                    success: function(itemData) {
                        $id = JSON.parse(itemData["response"]["document"]["digital_objects_ssm"][0])["href"];
                        $(elem).attr("href", $id)
                        var img = $(elem).find("img");
                        $(elem).find("img").attr("id", $id)
                        if ($(".appendHere").attr("id").toLowerCase() != "nothumb") {
                            $.ajax({
                                type: "GET",
                                dataType: 'json',
                                url: $id + "?format=jsonld",
                                success: function(thumbData) {
                                    for (i = 0; i < thumbData["@graph"].length; i++) {
                                        if ("ore:proxyFor" in thumbData["@graph"][i]) {
                                            $thumbID = thumbData["@graph"][i]["ore:proxyFor"]["@id"].split("/catalog/")[1];
                                            $thumb = "https://archives.albany.edu/downloads/" + $thumbID + "?file=thumbnail"
                                            /*console.log($thumb);*/
                                            $(img).attr("src", $thumb)
                                        }
                                    }
                            }});
                        } else {
                            $('.galleryImage').each(function(i, item) {
                                $(this).attr("src", "https://archives.albany.edu/downloads/m039k521w?file=thumbnail");
                            });
                        }
                }});
            });
    }});
    
}); 
