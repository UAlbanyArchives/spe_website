---
project-title: ArcLight Integration Project
project-subtitle: Integrating ArcLight with Digital Content, IIIF, and ArchivesSpace
title: Specifications
layout: arclight_integration
permalink: /arclight_integration/spec
---

The project will facilitate a collaborative community process to develop a conceptual model and open specifications for combining archival description, digital objects metadata and full-text content.

#### Conceptual Model

While adding digital object records into an ArcLight index is feasible technically, it opens a can of worms as the archival community lacks a common understanding of how digital objects and text content fit both conceptually and practically within archival description. This is an area that is currently undertheorized with substantial variations in practice. Thus, the first focus of this project will be to develop a collaborative community effort to better understand this challenge and develop both common system-agnostic frameworks and actionable specifications to sort out the best path forward. This takes up the [recommendations of the Lighting the Way National Forum](https://exhibits.stanford.edu/lightingtheway/feature/recommendations), which called for collaborative strategic planning for archival discovery and delivery using generative and care-focused facilitation methods.

#### ArcLight Solr Index Specification

The fields in an ArcLight Solr index are not documented or defined outside of the `solrconfig.xml`. We will document existing fields and clearly define how to make the index extensible for digital objects, content, and digital object metadata.

#### ArcLight IIIF Specification

Both the ArchivesSpace plugin and description_harvester will parse IIIF manifests to add digital objects to an ArcLight Solr index. This will include reading digital object metadata, which is well-defined in IIIF, but also full-text content. There are multiple ways of including this data in IIIF manifests, so the project will define a clear implementation based on established best practices in the IIIF community.

#### Digital Object Discovery Storage Specification

This will be a local specification developed by UAlbany that defines how to store digital objects on a filesystem in a consistent manner so that they can be indexed into an ArcLight instance via description_harvester. This will allow us to store digital object without needing to maintain a digital repository web application. While we don't expect to suggest using it as a community best practice, it will still be made publicly available under an open license.
