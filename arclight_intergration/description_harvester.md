---
project-title: ArcLight Integration Project
project-subtitle: Integrating ArcLight with Digital Content, IIIF, and ArchivesSpace
title: description_harvester
layout: arclight_integration
permalink: /arclight_integration/harvester
---

The project will develop a Python command line utility for harvesting archival description and digital objects via linked IIIF manifests and posting them to an ArcLight Solr index.

In some ways this tool will be duplicative of the [ArchivesSpace Plugin]({{ site.url }}/arclight_integration/plugin), however, because of Solr permissions issues the plugin will be a better fit for local implementations and the harvester will be a better fit for aggregators. `description_harvester` will also have some more maintenance/utility features, such as deleting items from the ArcLight index, so local implementors may use the plugin primarily, with the utility as additional support.

The [current demo/beta version](https://github.com/UAlbanyArchives/description_harvester) reads from the ArchivesSpace API using [ArchivesSnake](https://github.com/archivesspace-labs/ArchivesSnake), but it is designed to read archival description from multiple sources, and more input paths are planned.

Check back for more details!
