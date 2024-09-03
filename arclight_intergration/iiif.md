---
project-title: ArcLight Integration Project
project-subtitle: Integrating ArcLight with Digital Content, IIIF, and ArchivesSpace
title: Using IIIF
layout: arclight_integration
permalink: /arclight_integration/iiif
---

ArcLight will rely on IIIF both for adding digital object content and metadata to a Solr index, as well as for serving digital object to users. This should not necessarily require a IIIF image server, just manifests and a webserver. Many IIIF features, such as multi-resolution support (zooming) would require an IIIF image server.

Implementers who plan to use a traditional digital repository may have IIIF support already built-in! This is how some of our Pilot Partners are planning their implementation. For a minimal implementation, there just has to be a feasible way of retrieving the IIIF manifest for an object from what you have in the File Version field in an ArchivesSpace Digital Object record.

Our deliverables will include an [ArcLight IIIF Specification]({{ site.url }}/arclight_integration/spec#arclight-iiif-specification) that clearly defines how to implement full-text OCR or transcription content within IIIF so that it can be consumed by description_harvester or the ArchivesSpace plugin for indexing into ArcLight. This will be based on established best practices in the IIIF community.

We will also provide documentation for installing a [IIIF viewer](https://iiif.io/get-started/iiif-viewers/) within ArcLight for displaying digital objects.

Check back for more details!

<div class="iframe-iiif mb-4">
  <iframe src="https://archives.albany.edu/uv/uv.html#?manifest=https://archives.albany.edu/concern/daos/fn106x97k/manifest&c=0&m=0&s=0&cv=0&config=https://archives.albany.edu/uv/uv-config.json&locales=en-GB:English (GB),cy-GB:Cymraeg,fr-FR:Français (FR),pl-PL:Polski,sv-SE:Svenska,xx-XX:English (GB) (xx-XX)&xywh=-1418,-1,7938,3637&r=0" allowfullscreen frameborder="0"></iframe>
</div>

#### Example v2.0 manifest

```
{
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@type": "sc:Manifest",
  "@id": "https://archives.albany.edu/concern/daos/fn106x97k/manifest",
  "label": "Page 142: \"The Cave\" in Husted Cafeteria.",
  "sequences": [
    {
      "@type": "sc:Sequence",
      "@id": "https://archives.albany.edu/concern/daos/fn106x97k/manifest/sequence/normal",
      "rendering": [],
      "canvases": [
        {
          "@type": "sc:Canvas",
          "@id": "https://archives.albany.edu/concern/daos/fn106x97k/manifest/canvas/5d86p030t",
          "label": "bad4b7c7a5a763fe46994f1825213ea0.jpg",
          "width": 5104,
          "height": 3637,
          "images": [
            {
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@type": "dctypes:Image",
                "@id": "https://archives.albany.edu/images/5d86p030t%2Ffiles%2F71ba740c-3123-4ea3-867b-14333995efeb%2Ffcr:versions%2Fversion1/full/600,/0/default.jpg",
                "height": 3637,
                "width": 5104,
                "format": "jpg",
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://archives.albany.edu/images/5d86p030t%2Ffiles%2F71ba740c-3123-4ea3-867b-14333995efeb%2Ffcr:versions%2Fversion1",
                  "profile": "http://iiif.io/api/image/2/level2.json"
                }
              },
              "on": "https://archives.albany.edu/concern/daos/fn106x97k/manifest/canvas/5d86p030t"
            }
          ]
        }
      ]
    }
  ]
}
```