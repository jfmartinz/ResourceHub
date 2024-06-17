# NoSQL

NoSQL is a type of database management system (DBMS) that is designed to handle and store large volumes of unstructured and semi-structured data. Unlike traditional relational databases that use tables with pre-defined schemas to store data, NoSQL databases use flexible data models that can adapt to changes in data structures and are capable of scaling horizontally to handle growing amounts of data.

The term NoSQL originally referred to “non-SQL” or “non-relational” databases, but the term has since evolved to mean “not only SQL,” as NoSQL databases have expanded to include a wide range of different database architectures and data models.

This section is curated collection of NoSQL Resources.

## Table of Contents

- [NoSQL](#nosql-1)
   - [Introduction](#introduction)
   - [Setting Up NoSQL Environments](#setting-up-nosql-environments)
   - [NoSQL Data Modeling](#nosql-data-modeling)
   - [Querying NoSQL Databases](#querying-nosql-databases)
- [Performance Optimization](#performance-optimization)
- [NoSQL Database Administration]


### NoSQL
>

### Introduction

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.mongodb.com/resources/basics/databases/nosql-explained">What is NoSQL?</a></td>
    <td>This resource provides an explanation of NoSQL databases, including what they are and how they differ from traditional SQL databases.</td>
  </tr>
  <tr>
    <td><a href="https://www.dataversity.net/a-brief-history-of-non-relational-databases/">History and Evolution of NoSQL Databases</a></td>
    <td>This article offers a brief history and evolution of non-relational (NoSQL) databases, detailing their development over time.</td>
  </tr>
  <tr>
    <td><a href="https://www.mongodb.com/resources/basics/databases/nosql-explained/advantages">Key Features and Advantages</a></td>
    <td>This page outlines the key features and advantages of NoSQL databases, highlighting their benefits over traditional SQL databases.</td>
  </tr>
  <tr>
    <td><a href="https://www.mongodb.com/resources/basics/databases/nosql-explained/nosql-vs-sql">NoSQL vs. SQL Databases</a></td>
    <td>This resource compares NoSQL and SQL databases, discussing their differences, advantages, and use cases.</td>
  </tr>
  <tr>
    <td><a href="https://www.geeksforgeeks.org/types-of-nosql-databases/">Types of NoSQL Databases</a></td>
    <td>This article categorizes the different types of NoSQL databases, explaining the various models and their applications.</td>
  </tr>
  <tr>
    <td><a href="https://www.mongodb.com/resources/basics/databases/document-databases">Document Stores</a></td>
    <td>This resource explains document stores, a type of NoSQL database, including how they work and their use cases.</td>
  </tr>
  <tr>
    <td><a href="https://www.geeksforgeeks.org/key-value-data-model-in-nosql/">Key-Value Stores</a></td>
    <td>This article discusses key-value stores, another type of NoSQL database, detailing their structure and applications.</td>
  </tr>
  <tr>
    <td><a href="https://www.geeksforgeeks.org/columnar-data-model-of-nosql/">Column-Family Stores</a></td>
    <td>This resource covers column-family stores, a type of NoSQL database, explaining their model and usage.</td>
  </tr>
  <tr>
    <td><a href="https://www.geeksforgeeks.org/introduction-to-graph-database-on-nosql/">Graph Databases</a></td>
    <td>This article introduces graph databases, a type of NoSQL database, describing their structure and use cases.</td>
  </tr>
</table>


### Setting Up NoSQL Environments

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://yadavmamta176.medium.com/acomprehensive-guide-to-installing-and-configuring-nosql-databases-mongodb-cf8d2577c812">Installing and Configuring NoSQL Databases</a></td>
    <td>This comprehensive guide covers the installation and configuration of various NoSQL databases, including MongoDB.</td>
  </tr>
  <tr>
    <td><a href="https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/">MongoDB Installation and Setup</a></td>
    <td>This tutorial provides step-by-step instructions for installing and setting up MongoDB on Windows.</td>
  </tr>
  <tr>
    <td><a href="https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/">Redis Installation and Setup</a></td>
    <td>This documentation offers guidance on installing and setting up Redis, including operating system-specific instructions.</td>
  </tr>
  <tr>
    <td><a href="https://www.hostinger.in/tutorials/set-up-and-install-cassandra-ubuntu/">Cassandra Installation and Setup</a></td>
    <td>This tutorial explains how to install and set up Cassandra on Ubuntu, providing a detailed walkthrough.</td>
  </tr>
  <tr>
    <td><a href="https://www.geeksforgeeks.org/neo4j-installation/">Neo4j Installation and Setup</a></td>
    <td>This article provides instructions for installing and setting up Neo4j, a popular graph database.</td>
  </tr>
  <tr>
    <td><a href="https://robomongo.org/">MongoDB Compass, Robo 3T for MongoDB</a></td>
    <td>This resource discusses MongoDB Compass and Robo 3T, two popular tools for interacting with MongoDB.</td>
  </tr>
  <tr>
    <td><a href="https://redis.io/insight/">Redis CLI and GUI Tools</a></td>
    <td>This page covers various CLI and GUI tools available for managing and interacting with Redis.</td>
  </tr>
  <tr>
    <td><a href="https://cassandra.apache.org/doc/stable/cassandra/tools/cqlsh.html">cqlsh for Cassandra</a></td>
    <td>This documentation details cqlsh, a command-line interface for interacting with Cassandra databases.</td>
  </tr>
  <tr>
    <td><a href="https://neo4j.com/docs/operations-manual/current/tools/cypher-shell/">Neo4j Browser and Cypher Shell</a></td>
    <td>This manual provides information on using the Neo4j Browser and Cypher Shell for interacting with Neo4j databases.</td>
  </tr>
</table>


### NoSQL Data Modeling

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/">Data Modeling Principles</a></td>
    <td>This article discusses various data modeling techniques and principles for NoSQL databases.</td>
  </tr>
  <tr>
    <td><a href="https://www.talend.com/resources/sql-vs-nosql/">Differences Between NoSQL and SQL Data Modeling</a></td>
    <td>This resource outlines the key differences between data modeling for SQL and NoSQL databases.</td>
  </tr>
  <tr>
    <td><a href="https://www.mongodb.com/resources/basics/databases/nosql-explained/data-modeling#:~:text=Schema%20Design%20for%20NoSQL%20Databases&text=They%20are%20typically%20developing%20applications,use%20to%20organize%20the%20data">Schema Design Best Practices for NoSQL</a></td>
    <td>This page provides best practices for schema design in NoSQL databases, including strategies for data organization.</td>
  </tr>
  <tr>
    <td><a href="https://www.mongodb.com/docs/manual/data-modeling/data-consistency/">Handling Data Consistency and Integrity</a></td>
    <td>This documentation covers methods for ensuring data consistency and integrity in NoSQL databases.</td>
  </tr>
  <tr>
    <td><a href="https://www.mongodb.com/resources/basics/databases/document-databases">Document Stores</a></td>
    <td>This resource explains document stores, a type of NoSQL database, and their use cases.</td>
  </tr>
  <tr>
    <td><a href="https://www.geeksforgeeks.org/mongodb-data-modelling/">Modeling Data in MongoDB</a></td>
    <td>This article discusses data modeling techniques specific to MongoDB.</td>
  </tr>
  <tr>
    <td><a href="https://www.mongodb.com/docs/manual/data-modeling/concepts/embedding-vs-references/#:~:text=Use%20references%20to%20link%20related,the%20embedded%20data%20frequently%20changes">Embedding vs. Referencing</a></td>
    <td>This documentation explains the concepts of embedding and referencing data in MongoDB, along with their use cases.</td>
  </tr>
  <tr>
    <td><a href="https://www.mongodb.com/docs/manual/applications/indexes/">Indexing Strategies</a></td>
    <td>This page covers various indexing strategies to optimize data retrieval in MongoDB.</td>
  </tr>
  <tr>
    <td><a href="https://www.geeksforgeeks.org/key-value-data-model-in-nosql/">Key-Value Stores</a></td>
    <td>This article explains the key-value data model, a common type of NoSQL database.</td>
  </tr>
  <tr>
    <td><a href="https://redis.io/blog/nosql-data-modeling/">Modeling Data in Redis</a></td>
    <td>This blog post covers data modeling techniques for Redis, a popular key-value store.</td>
  </tr>
  <tr>
    <td><a href="https://www.dragonflydb.io/faq/key-value-database-use-cases">Use Cases for Key-Value Pairs</a></td>
    <td>This resource outlines various use cases for key-value pairs in NoSQL databases.</td>
  </tr>
  <tr>
    <td><a href="https://www.mongodb.com/docs/manual/tutorial/expire-data/">Managing Expiry and TTL (Time to Live)</a></td>
    <td>This documentation explains how to manage data expiry and TTL in MongoDB.</td>
  </tr>
  <tr>
    <td><a href="https://www.geeksforgeeks.org/columnar-data-model-of-nosql/">Column-Family Stores</a></td>
    <td>This article discusses the column-family data model, another type of NoSQL database.</td>
  </tr>
  <tr>
    <td><a href="https://www.scylladb.com/glossary/cassandra-data-model/#:~:text=Data%20modeling%20in%20Cassandra%20follows,retrieval%20improves%20with%20schema%20design">Modeling Data in Cassandra</a></td>
    <td>This resource provides an overview of data modeling techniques specific to Cassandra.</td>
  </tr>
  <tr>
    <td><a href="https://www.baeldung.com/cassandra-keys">Partitioning and Clustering Keys</a></td>
    <td>This article explains the concepts of partitioning and clustering keys in Cassandra.</td>
  </tr>
  <tr>
    <td><a href="https://www.techtarget.com/searchdatamanagement/definition/denormalization">Denormalization and Wide Rows</a></td>
    <td>This resource covers denormalization and the concept of wide rows in NoSQL databases.</td>
  </tr>
  <tr>
    <td><a href="https://www.geeksforgeeks.org/introduction-to-graph-database-on-nosql/">Graph Databases</a></td>
    <td>This article provides an introduction to graph databases, a type of NoSQL database.</td>
  </tr>
  <tr>
    <td><a href="https://www.geeksforgeeks.org/data-model-in-neo4j/#:~:text=The%20data%20model%20in%20Neo4j,%2C%20one%2C%20or%20several%20labels">Modeling Data in Neo4j</a></td>
    <td>This resource discusses data modeling techniques for Neo4j, a popular graph database.</td>
  </tr>
  <tr>
    <td><a href="https://www.nebula-graph.io/posts/what-is-a-nosql-database#:~:text=Essential%20components%20of%20a%20NoSQL%20graph%20database&text=Edges%20are%20the%20lines%20that,to%20categorize%20nodes%20and%20edges">Nodes, Relationships, and Properties</a></td>
    <td>This page explains the fundamental components of NoSQL graph databases, including nodes, relationships, and properties.</td>
  </tr>
  <tr>
    <td><a href="https://stackoverflow.com/questions/41508003/global-indexing-in-graph-databases">Graph Traversal and Indexing</a></td>
    <td>This Stack Overflow discussion covers global indexing techniques and graph traversal in graph databases.</td>
  </tr>
</table>


### Querying NoSQL Databases

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://codehooks.io/docs/nosql-database-query-language#:~:text=NoSQL%20queries%20are%20used%20in,for%20developing%20backend%20application%20logic.&text=The%20NoSQL%20query%20language%20can,API%20queries%20on%20this%20page">Query Languages and APIs</a></td>
    <td>This resource provides an overview of various query languages and APIs used for querying NoSQL databases.</td>
  </tr>
  <tr>
    <td><a href="https://www.geopits.com/blog/mongodb-query-language.html#:~:text=Just%20like%20structured%20databases%20use,complex%20structure%2C%20when%20queried%20correctly">MongoDB Query Language (MQL)</a></td>
    <td>This article explains the MongoDB Query Language (MQL), which is used to query MongoDB databases.</td>
  </tr>
  <tr>
    <td><a href="https://redis.io/docs/latest/develop/interact/programmability/eval-intro/#:~:text=Redis%20lets%20users%20upload%20and,from%20scripts%20is%20very%20efficient">Redis Commands and Lua Scripting</a></td>
    <td>This documentation covers the commands and Lua scripting capabilities available in Redis.</td>
  </tr>
  <tr>
    <td><a href="https://www.scylladb.com/glossary/cassandra-query-language-cql/#:~:text=CQL%20query%20language%20is%20a,of%20entry%20to%20Apache%20Cassandra">Cassandra Query Language (CQL)</a></td>
    <td>This resource provides an overview of the Cassandra Query Language (CQL) used to interact with Cassandra databases.</td>
  </tr>
  <tr>
    <td><a href="https://www.tutorialspoint.com/neo4j-query-cypher-language#:~:text=Neo4j%20has%20developed%20its%20own,data%20in%20nodes%20and%20relationships">Cypher Query Language for Neo4j</a></td>
    <td>This tutorial explains the Cypher query language used in Neo4j for querying graph data.</td>
  </tr>
  <tr>
    <td><a href="https://ravendb.net/why-ravendb/advanced-query-engine">Advanced Query Techniques</a></td>
    <td>This page discusses advanced query techniques available in RavenDB.</td>
  </tr>
  <tr>
    <td><a href="https://www.prisma.io/dataguide/mongodb/mongodb-aggregation-framework#:~:text=The%20purpose%20of%20MongoDB's%20Aggregation,will%20be%20the%20desired%20documents">Aggregation Frameworks (MongoDB Aggregation Pipeline)</a></td>
    <td>This resource explains the MongoDB Aggregation Pipeline, a framework for performing advanced data aggregation operations.</td>
  </tr>
  <tr>
    <td><a href="https://www.mongodb.com/resources/basics/full-text-search">Full-Text Search and Indexing (Elasticsearch with MongoDB)</a></td>
    <td>This page provides information on integrating Elasticsearch with MongoDB for full-text search and indexing capabilities.</td>
  </tr>
  <tr>
    <td><a href="https://www.mongodb.com/docs/manual/geospatial-queries/">Geospatial Queries</a></td>
    <td>This documentation covers how to perform geospatial queries in MongoDB.</td>
  </tr>
  <tr>
    <td><a href="https://www.timescale.com/blog/time-series-data-why-and-how-to-use-a-relational-database-instead-of-nosql-d0cd6975e87c/">Time-Series Data Queries</a></td>
    <td>This blog post discusses the querying of time-series data and the use of relational databases versus NoSQL for time-series data.</td>
  </tr>
</table>


### Performance Optimization
>

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.couchbase.com/blog/query-optimization-in-nosql-couchbase-mongodb/">Indexing and Query Optimization</a></td>
    <td>This blog post discusses various techniques for indexing and query optimization in NoSQL databases like Couchbase and MongoDB.</td>
  </tr>
  <tr>
    <td><a href="https://docs.oracle.com/en/database/other-databases/nosql-database/23.3/nsdev/using-indexes-nosql-database.html#:~:text=In%20an%20Oracle%20NoSQL%20Database,primary%20index%20will%20be%20used">Creating and Using Indexes Effectively</a></td>
    <td>This documentation provides guidelines on creating and using indexes effectively in Oracle NoSQL Database.</td>
  </tr>
  <tr>
    <td><a href="https://www.couchbase.com/blog/query-optimization-in-nosql-couchbase-mongodb/#:~:text=Queries%20can%20be%20executed%20in,throughput%2C%20depending%20on%20the%20workload">Understanding Query Plans and Optimizers</a></td>
    <td>This article explains how query plans and optimizers work in NoSQL databases to improve query performance.</td>
  </tr>
  <tr>
    <td><a href="https://aws.amazon.com/caching/database-caching/">Caching Strategies for NoSQL Databases</a></td>
    <td>This resource discusses various caching strategies that can be used to improve the performance of NoSQL databases.</td>
  </tr>
  <tr>
    <td><a href="https://www.scylladb.com/glossary/database-scalability/#:~:text=Typically%2C%20NoSQL%20databases%20are%20horizontally,and%20lower%20cost%20of%20scaling">Scalability and Replication</a></td>
    <td>This glossary entry explains the concepts of scalability and replication in NoSQL databases, focusing on horizontal scaling.</td>
  </tr>
  <tr>
    <td><a href="https://www.linkedin.com/advice/0/what-best-practices-data-sharding-partitioning#:~:text=Data%20sharding%20and%20partitioning%20are,query%20complexity%2C%20and%20network%20latency">Sharding and Partitioning Data</a></td>
    <td>This LinkedIn article discusses best practices for data sharding and partitioning to improve database performance.</td>
  </tr>
  <tr>
    <td><a href="https://www.geeksforgeeks.org/mongodb-replication-and-sharding/">Configuring Replication and Clustering</a></td>
    <td>This tutorial provides information on configuring replication and clustering in MongoDB to ensure data availability and reliability.</td>
  </tr>
  <tr>
    <td><a href="https://www.researchgate.net/publication/301417975_Load_balancing_for_hybrid_NoSQL_database_management_systems">Load Balancing Techniques</a></td>
    <td>This research paper discusses various load balancing techniques for hybrid NoSQL database management systems.</td>
  </tr>
</table>

### NoSQL Database Administration
>

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.scylladb.com/learn/nosql/sql-vs-nosql-database-administration/#:~:text=NoSQL%20databases%20make%20it%20easier,running%20on%20inexpensive%20commodity%20servers">NoSQL Database Administration</a></td>
    <td>This resource explains how NoSQL databases make administration easier and discusses the differences from SQL database administration.</td>
  </tr>
  <tr>
    <td><a href="https://www.linkedin.com/advice/3/how-do-you-implement-backup-recovery-strategies-1e#:~:text=Unlike%20relational%20databases%2C%20NoSQL%20databases,case%20of%20failure%20or%20disaster">Backup and Recovery</a></td>
    <td>This LinkedIn article discusses how to implement backup and recovery strategies for NoSQL databases.</td>
  </tr>
  <tr>
    <td><a href="https://www.linkedin.com/advice/3/how-do-you-implement-backup-recovery-strategies-1e#:~:text=3%20Backup%20tools%20and%20storage,-The%20third%20step&text=There%20are%20various%20tools%20available,%2Dparty%20or%20open%2Dsource">Backup Strategies for NoSQL Databases</a></td>
    <td>This resource provides an overview of various tools and strategies for backing up NoSQL databases.</td>
  </tr>
  <tr>
    <td><a href="https://www.mongodb.com/docs/atlas/recover-pit-continuous-cloud-backup/">Point-in-Time Recovery and Snapshots</a></td>
    <td>This MongoDB documentation covers point-in-time recovery and snapshot backups.</td>
  </tr>
  <tr>
    <td><a href="https://www.studocu.com/in/document/nirmala-college/database-technology-and-nosql/disaster-recovery-in-no-sql-databases/53627645">Disaster Recovery Planning</a></td>
    <td>This document provides information on disaster recovery planning specifically for NoSQL databases.</td>
  </tr>
  <tr>
    <td><a href="https://www.scylladb.com/learn/nosql/sql-vs-nosql-database-administration/">Monitoring and Maintenance</a></td>
    <td>This resource explains how to monitor and maintain NoSQL databases, highlighting key differences from SQL databases.</td>
  </tr>
  <tr>
    <td><a href="https://grafana.com/docs/grafana-cloud/send-data/metrics/metrics-prometheus/prometheus-config-examples/the-nosqlbench-community-nosqlbench/">Monitoring Tools and Metrics (Prometheus, Grafana)</a></td>
    <td>This documentation provides examples of using Prometheus and Grafana for monitoring NoSQL databases.</td>
  </tr>
  <tr>
    <td><a href="https://www.linkedin.com/advice/0/what-some-common-performance-tuning-techniques">Performance Tuning and Resource Management</a></td>
    <td>This LinkedIn article discusses common performance tuning techniques and resource management for NoSQL databases.</td>
  </tr>
  <tr>
    <td><a href="https://www.spinnakersupport.com/open-source/managed-services/nosql/">Routine Maintenance Tasks</a></td>
    <td>This resource outlines routine maintenance tasks necessary for managing NoSQL databases.</td>
  </tr>
</table>


