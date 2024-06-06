# Database

A database is an organized collection of structured information, or data, typically stored electronically in a computer system. Databases are designed to make it easy to store, retrieve, manage, and update data efficiently.

## Table of Contents

- [Database Category](#database-category)
  - [SQL Databases](#sql-databases)
  - [NoSQL Databases](#nosql-databases)
- [Tutorial or Courses](#tutorial-or-courses)
- [Database Design and Modeling](#database-design-and-modeling)
- [Tools](#tools)
- [Best Practices](#best-practices)
- [Challenges](#challenges)
- [Books](#books)
- [Interview](#interview)
- [GitHub Repositories](#github-repositories)
- [projects](#projects)
- [Conclusion](#conclusion)


### Database Category
#### SQL Databases

<table width="100%">
    <tr>
        <th>Resource Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><a href="https://www.mysql.com/">MySQL</a></td>
        <td>MySQL is an open-source relational database management system known for its speed, reliability, and ease of use. It is widely used in web applications and has comprehensive documentation and community support.</td>
    </tr>
    <tr>
        <td><a href="https://www.postgresql.org/">PostgreSQL</a></td>
        <td>PostgreSQL is a powerful, open-source object-relational database system with a strong reputation for reliability, feature robustness, and performance. It supports advanced data types and performance optimization features.</td>
    </tr>
    <tr>
        <td><a href="https://www.sqlite.org/">SQLite</a></td>
        <td>SQLite is a C-language library that provides a lightweight, disk-based database. It is self-contained, serverless, and requires zero configuration, making it ideal for embedded database solutions.</td>
    </tr>
    <tr>
        <td><a href="https://www.oracle.com/in/database/">Oracle</a></td>
        <td>Oracle Database is a proprietary multi-model database management system produced and marketed by Oracle Corporation. It is a database commonly used for running online transaction processing, data warehousing and mixed database workloads.</td>
    </tr>
    <tr>
        <td><a href="https://www.microsoft.com/en-IN/sql-server/sql-server-downloads">Microsoft SQL Server</a></td>
        <td>Microsoft SQL Server is primarily a SQL (Structured Query Language) database system. It is an RDBMS designed for managing and querying relational data using SQL.</td>
    </tr>
    <tr>
        <td><a href="https://mariadb.org/">MariaDB</a></td>
        <td>MariaDB is an open-source relational database that is designed for handling structured data and using SQL for data management tasks such as querying, updating, and managing relational databases.</td>
    </tr>

</table>

#### NoSQL Databases

<table width="100%">
    <tr>
        <th>Resource Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><a href="https://www.mongodb.com/">MongoDB</a></td>
        <td>MongoDB is a document-oriented NoSQL database known for its high performance, high availability, and easy scalability. It is designed for handling large volumes of unstructured data.</td>
    </tr>
    <tr>
        <td><a href="https://cassandra.apache.org/">Apache Cassandra</a></td>
        <td>Apache Cassandra is a highly scalable, high-performance distributed NoSQL database designed to handle large amounts of data across many commodity servers without a single point of failure.</td>
    </tr>
    <tr>
        <td><a href="https://aws.amazon.com/dynamodb/">Amazon DynamoDB</a></td>
        <td>Amazon DynamoDB is a fully managed NoSQL database service provided by Amazon Web Services (AWS). It offers fast and predictable performance with seamless scalability, ideal for applications that require consistent, single-digit millisecond latency at any scale.</td>
    </tr>
    <tr>
        <td><a href="https://redis.io/">Redis</a></td>
        <td>Redis is an open-source, in-memory data structure store that is used as a database, cache, and message broker. It supports various data structures such as strings, hashes, lists, sets, and more, providing high performance and versatility for real-time applications.</td>
    </tr>
    <tr>
        <td><a href="https://neo4j.com/product/neo4j-graph-database/">Neo4j</a></td>
        <td>Neo4j is a graph database management system designed for storing, querying, and analyzing highly connected data. It uses graph structures with nodes, relationships, and properties to represent and manipulate complex relationships between data entities.</td>
    </tr>
    <tr>
        <td><a href="https://azure.microsoft.com/en-us/products/cosmos-db/">Azure Cosmos DB</a></td>
        <td>Azure Cosmos DB is a database service provided by Microsoft Azure. It is designed to globally distribute and scale data with high availability and low latency. Cosmos DB supports various data models including document, key-value, graph, and column-family stores, making it a multi-model database service.</td>
    </tr>
</table>

### Tutorial or Courses

<table width="100%">
    <tr>
        <th>Resource Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><a href="https://www.w3schools.com/sql/">SQL</a></td>
        <td>The W3Schools offers a structured learning path for SQL beginners, covering everything from basic concepts like querying data to more advanced topics like database normalization and transactions.</td>
    </tr>
    <tr>
        <td><a href="https://www.geeksforgeeks.org/introduction-to-nosql/">NoSQL</a></td>
        <td>The GeeksforGeeks provides a comprehensive introduction to NoSQL databases, explaining the need for NoSQL, its key characteristics, and how it differs from traditional relational databases (SQL).</td>
    </tr>
    <tr>
      <td><a href="https://www.edx.org/learn/databases">edX</a></td>
      <td>Offers Courses on database development and database queries.</td>
    </tr>
    <tr>
      <td><a href="https://www.youtube.com/watch?v=ExcRbA7fy_A&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA&ab_channel=NetNinja">NetNinja Youtube</a></td>
      <td>This free playlist on MongoDb is very useful to learn MongoDb from scratch.</td>
    </tr>
  <tr>
      <td><a href="https://www.udemy.com/course/database-engines-crash-course/?couponCode=LEADERSALE24A">Udemy</a></td>
      <td>Learn ACID, Indexing, Partitioning, Sharding, Concurrency control, Replication, DB Engines, Best Practices and More!.</td>
    </tr>
    <tr>
      <td><a href="https://www.youtube.com/watch?v=aoMOmSx5Zyw&list=PLWPirh4EWFpHMw9bRo47tn4aknBUvuXNU">Tuturialspoint Youtube</a></td>
      <td>The "DBMS in Simple Steps" playlist is beneficial for anyone seeking to understand the fundamentals and advanced concepts of DBMS</td>
    </tr>
    <tr>
      <td><a href="https://www.youtube.com/watch?v=us1XyayQ6fU&list=PLZoTAELRMXVNMRWlVf0bDDSxNEn38u9Cl">Krish Naik Youtube</a></td>
      <td>Krish Naik’s "MySQL Playlist" is beneficial to understand and work with MySQL databases.</td>
    </tr>
    <tr>
      <td><a href="https://www.youtube.com/watch?v=T7AxM7Vqvaw&list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc">Jenny’s Lectures CS IT Youtube</a></td>
      <td>The "DBMS" playlist is helpful for clearing the basic and advanced of DBMS.</td>
    </tr>
</table>


### Database Design and Modeling
Database design and modeling are critical steps in the creation and management of a database system. These processes ensure that the database will meet the requirements of the users and applications it serves.Here we discuss some important components of Database Design and Modeling.

<table width="100%">
    <tr>
        <th>Resource Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=gbVev8RuZLg">Entity Relationship(ER) Model</a></td>
        <td>The Entity-Relationship Model (ER Model) is a conceptual framework used in database design to describe the structure of data and the relationships between different data entities. It provides a way to visually represent the data and their interconnections, making it easier to design and understand the database.</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/playlist?list=PLLGlmW7jT-nTr1ory9o2MgsOmmx2w8FB3">Normalization</a></td>
        <td>The process of organizing data to reduce redundancy and improve data integrity.It involves dividing large tables into smaller ones and defining relationships between them.Normal forms (1NF, 2NF, 3NF, etc.) guide this process.</td>
        </tr>
    <tr>
        <td><a href="https://www.youtube.com/playlist?list=PL4RCxklHWZ9tB00Sh2nMftVIBaVG_-bmY">Schema Design</a></td>
        <td>Schema design is a crucial step in database design and modeling. It involves defining the structure of the database, including tables, columns, data types, relationships, and constraints. A well-designed schema ensures data integrity, efficiency, and scalability.</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=uPOGPL2C0_8">Relational Model Constraints</a></td>
        <td>In the relational model of database design, constraints are critical for maintaining data integrity and enforcing business rules. </td>
    </tr>
</table>

### Tools

<table width="100%">
    <tr>
        <th>Resource Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><a href="https://www.phpmyadmin.net/">phpMyAdmin</a></td>
        <td>phpMyAdmin is a free and open-source administration tool for MySQL and MariaDB. It provides a convenient web interface for managing databases, making it popular among developers and database administrators.</td>
    </tr>
    <tr>
        <td><a href="https://www.mysql.com/products/workbench/">MySQL Workbench</a></td>
        <td>MySQL Workbench is a unified visual tool for database architects, developers, and DBAs. It provides comprehensive tools for database modeling, SQL development, and administration. </td>
        </tr>
    <tr>
        <td><a href="https://www.drawio.com/">Draw.io</a></td>
        <td>Draw.io, now known as diagrams.net, is a free, web-based diagramming tool that allows users to create a wide variety of diagrams. It's used for creating flowcharts, network diagrams, UML diagrams, ER diagrams, mind maps, and more.</td>
    </tr>
    <tr>
        <td><a href="https://www.lucidchart.com/pages/">Lucidchart</a></td>
        <td>Lucidchart is a powerful online diagramming tool used for creating a variety of diagrams, such as flowcharts, UML diagrams, ER diagrams, network diagrams, and more. It is known for its ease of use, collaboration features, and integration with other tools. </td>
    </tr>
    <tr>
        <td><a href="https://vertabelo.com/">Vertabelo</a></td>
        <td>Vertabelo is an online database design tool that is specifically tailored for creating and managing database models. It supports the design of logical and physical data models and is especially useful for relational databases.</td>
    </tr>
</table>

### Best Practices

<table width="100%">
    <tr>
        <th>Resource Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><a href="https://support.microsoft.com/en-us/office/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5">Microsoft-Database Design Best Practices</a></td>
        <td>When it comes to designing databases on Microsoft's Azure platform, there are several best practices to ensure optimal performance, scalability, and security.</td>
    </tr>
    <tr>
        <td><a href="https://cloud.google.com/sql/docs/best-practices?_gl=1*1s44e20*_up*MQ..&gclid=5b761ccf825b14bfc98c7a897d4a2255&gclsrc=3p.ds">Google Cloud-Best Practices for Cloud Databases</a></td>
        <td>When it comes to managing databases in the cloud, Google Cloud offers several best practices to ensure optimal performance, reliability, and security. </td>
        </tr>
</table>

### Challenges

<table width="100%">
    <tr>
        <th>Resource Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><a href="https://www.hackerrank.com/domains/sql">HackerRank</a></td>
        <td>Offers a variety of SQL challenges ranging from basic to advanced levels. The platform allows you to practice with different types of queries and compete with others. Each challenge comes with a sample data set and a leaderboard to track your progress​ </td>
    </tr>
    <tr>
        <td><a href="https://www.databasestar.com/sql-practice/">SQLBolt</a></td>
        <td>Provides interactive lessons and exercises to help you learn SQL concepts step-by-step. At the end of each lesson, there are practice exercises to reinforce the concepts covered​.</td>
        </tr>
    <tr>
        <td><a href="https://www.w3schools.com/SQl/sql_exercises.asp">W3Schools</a></td>
        <td>Includes SQL exercises that help you practice different SQL commands. The exercises cover a wide range of topics from basic SELECT queries to more advanced operations.</td>
    </tr>
     <tr>
        <td><a href="https://learnsql.com/blog/sql-query-practice/">LearnSQL.com</a></td>
        <td>Offers structured exercises for beginners to practice SQL queries. Each exercise is designed to improve specific SQL skills, such as selecting data, filtering, and using aggregate functions</td>
    </tr>
     <tr>
        <td><a href="https://www.w3resource.com/sql-exercises/#google_vignette">w3resource</a></td>
        <td>Features a comprehensive set of SQL exercises that cover various databases like soccer, hospital, and employee databases. The exercises range from basic queries to complex challenges involving joins and subqueries​.</td>
     </tr>
    <tr>
        <td><a href="https://pgexercises.com/">PostgreSQL Exercises</a></td>
        <td>Focuses on providing practical exercises for PostgreSQL. The site includes a variety of exercises that cover different aspects of SQL, such as basic queries, joins, subqueries, and more advanced topics like recursive queries and window functions​.</td>
    </tr>
</table>

### Books

<table width="100%">
    <tr>
        <th>Resource Name</th>
        <th>Description</th>
        <th>Status</th>
    </tr>
    <tr>
        <td><a href="https://pdflink.to/70a9bab5/">Database Design-2nd Edition</a></td>
        <td>This book covers the fundamental concepts of database design, including data models, database management systems, and integrity rules. It is well-suited for introductory courses and provides clear explanations and examples.</td>
        <td>Free</td>
    </tr>
    <tr>
        <td><a href="https://pdflink.to/7c7844d6/">Relational Databases and Microsoft Access 365-Version 4.0</a></td>
        <td>This book provides a comprehensive introduction to relational database principles and practical usage of Microsoft Access. It is ideal for beginners and includes detailed chapters on tables, queries, and forms</td>
        <td>Free</td>
        </tr>
    <tr>
        <td><a href="https://ocw.mit.edu/courses/6-830-database-systems-fall-2010/ce269ab3b1fe758df40aec6cad51371e_MIT6_830F10_lec01.pdf#:~:text=URL%3A%20https%3A%2F%2Focw.mit.edu%2Fcourses%2F6">Introduction to Database Systems</a></td>
        <td>This lecture series provides an in-depth introduction to database systems, including database management systems, design, and implementation​.</td>
        <td>Free</td>
    </tr>
</table>

### Interview

<table width="100%">
    <tr>
        <th>Resource Name</th>
        <th>Description</th>
    </tr>
    <td><a href="https://www.hackerrank.com/blog/database-interview-questions-you-should-know/">HackerRank</a></td>
        <td>Known for its extensive library of coding challenges, HackerRank includes many database-specific problems. You can practice basic to advanced SQL queries, relational algebra, database normalization, and more. It’s a good place to get familiar with the type of questions that might be asked during technical interviews​.</td>
    </tr>
    <tr>
        <td><a href="https://www.interviewquery.com/">Interview Query</a></td>
        <td>This site offers a comprehensive set of tools and resources to prepare for data science and database interviews. It provides company-specific guides, challenge quizzes, and a large database of interview questions, covering areas like SQL, Python, machine learning, and system design​ </td>
    </tr>
    <tr>
        <td><a href="https://learnsql.com/blog/common-sql-job-interview-questions/">LearnSQL.com</a></td>
        <td>This platform is great for practicing SQL through a variety of exercises and challenges. It offers practical SQL problems that simulate real-world scenarios you might encounter in interviews, such as writing complex queries and optimizing SQL statements​ </td>
        </tr>
    <tr>
        <td><a href="https://www.codecademy.com/resources/blog/top-sql-interview-questions-to-practice/">Codecademy</a></td>
        <td>Codecademy offers a variety of courses and interview prep materials focused on SQL and other data-related skills. They provide free-response questions and AI-generated feedback to help you prepare for technical interviews. Their courses cover essential topics like data analysis, SQL querying, and data visualization​.</td>
    </tr>
    <tr>
      <td><a href="https://www.geeksforgeeks.org/sql-interview-questions/">Geeks for Geeks </a></td>
      <td>This platform covers 70+ SQL Interview Questions with answers asked in SQL developer interviews at MAANG and other high-paying companies.This article helps not only an experienced professional , but also a fresher to ace their interview</td>
    </tr>
</table>

# GitHub Repositories

<table width="100%">
    <tr>
    <th>Resource Name</th>
    <th>Description</th>
    </tr>
    <tr>
        <td><a href="https://github.com/ramnes/awesome-mongodb">Awesome Mongo DB</a></td>
        <td>This GitHub repository is a collection of high-quality resources, tools, libraries, and tutorials for MongoDB, and this is also designed to help developers find everything they need to effectively work with MongoDB, including client libraries, tools for database management, educational materials, and more. 
        </td>
    </tr>
    <tr>
        <td><a href="https://github.com/danhuss/awesome-sql">Awesome SQL</a></td>
        <td>This GitHub repository is a comprehensive  collection of high-quality resources, libraries, tools, and tutorials for SQL and also designed to assist developers and database administrators in finding useful SQL-related content, including learning materials, query optimization techniques, database design best practices, and advanced SQL usage examples.
        </td>
    </tr>
    <tr>
        <td><a href="https://github.com/shlomi-noach/awesome-mysql">Awesome mysql</a></td>
        <td>This github repository serves as a guide for developers and database administrators, offering everything from beginner tutorials and educational materials to advanced tools for database management, performance optimization, security and more in mysql. 
        </td>
    </tr>
    <tr>
        <td><a href="https://github.com/dhamaniasad/awesome-postgres">Awesome Postgre</a></td>
        <td>This Github repository aims to help developers and database administrators find valuable content, including educational materials, tools for database management, performance tuning, extensions, and best practices for Postgre.
        </td>
    </tr>
</table>

# Projects
<table width="100%">
    <tr>
    <th>Resource Name</th>
    <th>Description</th>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=jtfuwnN2NoA&t=1122s">Library Database Management System</a></td>
        <td>This tutorial explains how to set up database for libraries as libraries store vast amounts of data related to books, members, loans, authors, and categories. A DBMS helps in efficiently managing this data, ensuring data integrity, supporting concurrent access, and providing mechanisms for data recovery and security.
        </td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=-1CHie8day4&list=PLqr8f5JwnhhOoqR6MOoi1K6cZkLzBXuvc">Hospital Information Management System</a></td>
        <td>This tutorial explains  how to setup database in hospitals .Hospital Information Management System (HIMS) is a comprehensive, integrated information system designed to manage the administrative, clinical aspects of a hospital.
        </td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=z1mR2rxpo6s&t=7606s">Student Database Management System</a></td>
        <td>This tutorial explains how to  set up student database management system to manage various administrative and academic process within educational institutions.
        </td>
    </tr>
   
</table>

### Conclusion

Database Management Systems (DBMS) play a fundamental role in organizing and managing data efficiently, ensuring its integrity, security, and accessibility. With the rise of big data and the increasing complexity of data-driven applications, DBMS has become indispensable across various industries. The diverse range of DBMS options, including relational databases like MySQL, PostgreSQL, and SQL Server, as well as NoSQL databases like MongoDB and Cassandra, cater to different use cases and scalability needs. The extensive toolsets and features offered by DBMS, such as data indexing, transaction management, and query optimization, empower developers and administrators to handle data effectively. The DBMS community is active and supportive, providing ample resources such as tutorials, forums, and documentation to assist both beginners and experts. To excel in DBMS, practical experience is key—participate in coding challenges, contribute to open-source projects, and work on real-world database designs and optimizations. This hands-on approach not only deepens your understanding of database concepts but also opens up exciting career opportunities in database administration, data engineering, and beyond.

Never stop learning !
    
