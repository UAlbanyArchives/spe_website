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
  <iframe src="https://media.archives.albany.edu?manifest=https://media.archives.albany.edu/ua950.008/bad4b7c7a5a763fe46994f1825213ea0/manifest.json" title="Image viewer" allowfullscreen frameborder="0"></iframe>
</div>

#### Example v3.0 manifest

```
{
  "@context": "http://iiif.io/api/presentation/3/context.json",
  "provider": [
    {
      "id": "https://media.archives.albany.edu",
      "type": "Agent",
      "label": {
        "en": [
          "M.E. Grenander Department of Special Collections & Archives, University at Albany, SUNY"
        ]
      },
      "logo": [
        {
          "id": "https://media.archives.albany.edu/logo.png",
          "type": "Image",
          "format": "image/png"
        }
      ]
    }
  ],
  "id": "https://media.archives.albany.edu/ua950.008/bad4b7c7a5a763fe46994f1825213ea0/manifest.json",
  "type": "Manifest",
  "label": {
    "en": [
      "bad4b7c7a5a763fe46994f1825213ea0.jpg"
    ]
  },
  "metadata": [
    {
      "label": {
        "en": [
          "legacy_id"
        ]
      },
      "value": {
        "en": [
          "fn106x97k"
        ]
      }
    },
    {
      "label": {
        "en": [
          "resource_type"
        ]
      },
      "value": {
        "en": [
          "Image"
        ]
      }
    },
    {
      "label": {
        "en": [
          "coverage"
        ]
      },
      "value": {
        "en": [
          "whole"
        ]
      }
    },
    {
      "label": {
        "en": [
          "preservation_package"
        ]
      },
      "value": {
        "en": [
          "ua950.008_Pt4wqW86Mvr8jWJHEFemwS"
        ]
      }
    },
    {
      "label": {
        "en": [
          "date_uploaded"
        ]
      },
      "value": {
        "en": [
          "2018-12-21T23:33:35+00:00"
        ]
      }
    }
  ],
  "requiredStatement": {
    "label": {
      "en": [
        "Attribution"
      ]
    },
    "value": {
      "en": [
        "<span>M.E. Grenander Department of Special Collections and Archives, University Libraries, University at Albany, State University of New York <br/> <a href=\"https://creativecommons.org/licenses/by-nc-sa/4.0/\" title=\"CC BY-NC-SA 4.0\"><img src=\"https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png\"/></a></span>"
      ]
    }
  },
  "rendering": [
    {
      "id": "https://media.archives.albany.edu/ua950.008/bad4b7c7a5a763fe46994f1825213ea0/content.txt",
      "type": "Text",
      "label": {
        "en": [
          "Download Text transcription"
        ]
      },
      "format": "text/plain"
    }
  ],
  "service": [
    {
      "id": "https://media.archives.albany.edu/search/1/ua950.008/bad4b7c7a5a763fe46994f1825213ea0",
      "type": "SearchService",
      "label": {
        "en": [
          "Content Search"
        ]
      },
      "profile": "http://iiif.io/api/search/1/search"
    }
  ],
  "rights": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  "behavior": [
    "individuals"
  ],
  "items": [
    {
      "id": "https://media.archives.albany.edu/ua950.008/bad4b7c7a5a763fe46994f1825213ea0/canvas/p1",
      "type": "Canvas",
      "label": {
        "en": [
          "bad4b7c7a5a763fe46994f1825213ea0.ptif"
        ]
      },
      "height": 3637,
      "width": 5104,
      "rendering": [
        {
          "id": "https://media.archives.albany.edu/ua950.008/bad4b7c7a5a763fe46994f1825213ea0/hocr/bad4b7c7a5a763fe46994f1825213ea0.hocr",
          "type": "Text",
          "label": {
            "en": [
              "HOCR data (OCR)"
            ]
          },
          "format": "text/vnd.hocr+html",
          "profile": "http://kba.cloud/hocr-spec/1.2/"
        }
      ],
      "thumbnail": [
        {
          "id": "https://media.archives.albany.edu/ua950.008/bad4b7c7a5a763fe46994f1825213ea0/thumbnail.jpg",
          "type": "Image",
          "height": 143,
          "width": 200,
          "format": "image/jpeg"
        }
      ],
      "items": [
        {
          "id": "https://media.archives.albany.edu/ua950.008/bad4b7c7a5a763fe46994f1825213ea0/page/p1/1",
          "type": "AnnotationPage",
          "items": [
            {
              "id": "https://media.archives.albany.edu/ua950.008/bad4b7c7a5a763fe46994f1825213ea0/annotation/bad4b7c7a5a763fe46994f1825213ea0",
              "type": "Annotation",
              "motivation": "painting",
              "body": {
                "id": "https://media.archives.albany.edu/iiif/3/ua950.008%2Fbad4b7c7a5a763fe46994f1825213ea0%2Fptif%2Fbad4b7c7a5a763fe46994f1825213ea0.ptif/full/max/0/default.jpg",
                "type": "Image",
                "height": 3637,
                "width": 5104,
                "service": [
                  {
                    "id": "https://media.archives.albany.edu/iiif/3/ua950.008%2Fbad4b7c7a5a763fe46994f1825213ea0%2Fptif%2Fbad4b7c7a5a763fe46994f1825213ea0.ptif",
                    "type": "ImageService3",
                    "profile": "level1"
                  }
                ],
                "format": "image/tiff"
              },
              "target": "https://media.archives.albany.edu/ua950.008/bad4b7c7a5a763fe46994f1825213ea0/canvas/p1"
            }
          ]
        }
      ]
    }
  ]
}
```