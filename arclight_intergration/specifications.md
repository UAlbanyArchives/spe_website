---
project-title: ArcLight Integration Project
project-subtitle: Integrating ArcLight with Digital Content, IIIF, and ArchivesSpace
title: Specifications
layout: arclight_integration
permalink: /arclight_integration/spec
---

The project will facilitate a collaborative community process to develop a conceptual model and open specifications for combining archival description, digital objects metadata and full-text content.

#### Delivering Archives and Digital Objects: a Conceptual Model (DadoCM)

[Delivering Archives and Digital Objects: a Conceptual Model (DadoCM)](https://docs.google.com/document/d/1-mATld2FJLL7V5b_PYawaGUS8BO3Vawo6AISj6zoMqg/edit?tab=t.0#heading=h.7nrgyg3ymco4) offers a practical, minimal framework to help archivists make digital materials available more efficiently and meaningfully by integrating them into archival description rather than treating them as isolated items. Traditional digital repositories often demand item-level metadata for every object, which doesn’t scale for large collections and burdens archivists with duplicative work. DadoCM embraces archival principles to support bulk access to digital content—whether stored in file systems, spreadsheets, or databases—and enables discovery and delivery within a unified interface. Designed for flexibility and ease of adoption, especially by under-resourced institutions, DadoCM supports implementation ranging from basic file links to structured IIIF ([International Image Interoperability Framework](https://iiif.io/)) manifests. It defines a small set of essential metadata elements to answer four core access questions—what, where, how, and why—and works alongside, not in place of, existing systems to reduce barriers, improve interoperability, and promote scalable, effective access to digital collections.

#### ArcLight Solr Index Specification

The fields in an ArcLight Solr index are not documented or defined outside of the `solrconfig.xml`. We will document existing fields and clearly define how to make the index extensible for digital objects, content, and digital object metadata.

#### ArcLight IIIF Specification

Both the ArchivesSpace plugin and description_harvester will parse IIIF manifests to add digital objects to an ArcLight Solr index. This will include reading digital object metadata, which is well-defined in IIIF, but also full-text content. There are multiple ways of including this data in IIIF manifests, so the project will define a clear implementation based on established best practices in the IIIF community.

#### Digital Object Discovery Storage Specification

This will be a local specification developed by UAlbany that defines how to store digital objects on a filesystem in a consistent manner so that they can be indexed into an ArcLight instance via description_harvester. This will allow us to store digital object without needing to maintain a digital repository web application. While we don't expect to suggest using it as a community best practice, it will still be made publicly available under an open license.
