# MySQL

MySQL is an open-source relational database management system (RDBMS). Its name is a combination of "My", the name of co-founder Michael Widenius's daughter My, and "SQL", the acronym for Structured Query Language. A relational database organizes data into one or more data tables in which data may be related to each other; these relations help structure the data. 

SQL is a language that programmers use to create, modify and extract data from the relational database, as well as control user access to the database. In addition to relational databases and SQL, an RDBMS like MySQL works with an operating system to implement a relational database in a computer's storage system, manages users, allows for network access and facilitates testing database integrity and creation of backups.

This section is curated collection of resources for MySQL Database.


## Table of Contents

- [MySQL](#mysql-1)
  - [Introduction](#introduction)
  - [User Management](#user-management)
  - [MySQL Database](#mysql-database)
  - [MySQL Table & Views](#mysql-table--views)
  - [MySQL Queries](#mysql-queries)
  - [MySQL Indexes](#mysql-indexes)
  - [MySQL Clauses](#mysql-clauses)
  - [MySQL Privileges](#mysql-privileges)
- [Conclusion](#conclusion)


### MySQL
>

### Introduction

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/MySQL/mysql_intro.asp">MySQL Tutorial</a></td>
    <td>A comprehensive introduction to MySQL, covering basic to advanced concepts.</td>
  </tr>
  <tr>
    <td><a href="https://www.britannica.com/topic/MySQL#:~:text=In%201995%20MySQL%20was%20developed,source%20and%20free%20to%20download">History and Evolution of MySQL</a></td>
    <td>A detailed history of MySQL's development and evolution over the years.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-features">MySQL Features</a></td>
    <td>Overview of the key features that MySQL offers, including performance, reliability, and ease of use.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-versions">MySQL Versions</a></td>
    <td>A guide to the different versions of MySQL, highlighting their features and improvements.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-data-types">MySQL Data Types</a></td>
    <td>A detailed description of the various data types supported by MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-variables">MySQL Variables</a></td>
    <td>Information on MySQL variables, including system and user-defined variables.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/how-to-install-mysql">Install MySQL</a></td>
    <td>Step-by-step instructions on how to install MySQL on various operating systems.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-connection">MySQL Connection</a></td>
    <td>Guide on how to connect to a MySQL database, including connection string details and troubleshooting tips.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-workbench">MySQL Workbench</a></td>
    <td>An introduction to MySQL Workbench, a visual tool for database design, development, and administration.</td>
  </tr>
</table>

### User Management

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-create-user">MySQL Create User</a></td>
    <td>Instructions on how to create a new user in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-drop-user">MySQL Drop User</a></td>
    <td>Guide on how to delete a user from MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-show-users">MySQL Show Users</a></td>
    <td>Information on how to list all users in a MySQL database.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/change-mysql-user-password">Change User Password</a></td>
    <td>Steps to change the password of an existing MySQL user.</td>
  </tr>
</table>

###  MySQL Database

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-create-database">MySQL Create Database</a></td>
    <td>Guide on how to create a new database in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-select-database">MySQL Select Database</a></td>
    <td>Instructions on how to select an existing database in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-show-list-databases">MySQL Show Databases</a></td>
    <td>Information on how to list all databases in a MySQL server.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-drop-database">MySQL Drop Database</a></td>
    <td>Steps to delete an existing database in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-copy-database">MySQL Copy Database</a></td>
    <td>Guide on how to copy an existing database in MySQL.</td>
  </tr>
</table>

### MySQL Table & Views

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-create-table">MySQL CREATE Table</a></td>
    <td>Instructions on how to create a new table in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-alter-table">MySQL ALTER Table</a></td>
    <td>Guide on how to modify an existing table in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-show-list-tables">MySQL Show Tables</a></td>
    <td>Information on how to list all tables in a MySQL database.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-rename-table">MySQL Rename Table</a></td>
    <td>Steps to rename an existing table in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-truncate-table">MySQL TRUNCATE Table</a></td>
    <td>Guide on how to truncate a table in MySQL, removing all its data.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-describe-table">MySQL Describe Table</a></td>
    <td>Instructions on how to describe the structure of a table in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-drop-table">MySQL DROP Table</a></td>
    <td>Steps to delete an existing table in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-temporary-table">MySQL Temporary Table</a></td>
    <td>Guide on how to create and use temporary tables in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-copy-table">MySQL Copy Table</a></td>
    <td>Instructions on how to copy the structure and/or data of a table in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-repair-table">MySQL Repair Table</a></td>
    <td>Steps to repair a corrupted table in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-add-delete-column">MySQL Add/Delete Column</a></td>
    <td>Guide on how to add or delete columns in a MySQL table.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-show-columns">MySQL Show Columns</a></td>
    <td>Information on how to list all columns in a MySQL table.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-rename-column">MySQL Rename Column</a></td>
    <td>Steps to rename a column in a MySQL table.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-view">MySQL Views</a></td>
    <td>Guide on how to create and manage views in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-table-locking">MySQL Table Locking</a></td>
    <td>Instructions on how to lock and unlock tables in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-lock-account">MySQL Account Lock</a></td>
    <td>Guide on how to lock a MySQL user account.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-unlock-account">MySQL Account Unlock</a></td>
    <td>Steps to unlock a MySQL user account.</td>
  </tr>
</table>


### MySQL Queries

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-queries">MySQL Queries</a></td>
    <td>A comprehensive guide to writing and executing queries in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-constraints">MySQL Constraints</a></td>
    <td>Overview of various constraints available in MySQL, including PRIMARY KEY, FOREIGN KEY, and UNIQUE constraints.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-insert">MySQL INSERT Record</a></td>
    <td>Instructions on how to insert records into a MySQL table.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-update">MySQL UPDATE Record</a></td>
    <td>Guide on how to update existing records in a MySQL table.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-delete">MySQL DELETE Record</a></td>
    <td>Steps to delete records from a MySQL table.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-select">MySQL SELECT Record</a></td>
    <td>Guide on how to retrieve records from a MySQL table using the SELECT statement.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-replace">MySQL Replace</a></td>
    <td>Instructions on how to use the REPLACE statement in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-insert-on-duplicate-key-update">Insert On Duplicate Key Update</a></td>
    <td>Guide on how to insert records and update them if a duplicate key is found.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-insert-ignore">MySQL INSERT IGNORE</a></td>
    <td>Instructions on how to use the INSERT IGNORE statement to avoid insertion errors.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-insert-into-select">Insert Into Select</a></td>
    <td>Guide on how to insert records into a table by selecting data from another table.</td>
  </tr>
</table>

### MySQL Indexes

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/how-to-create-index-in-mysql">MySQL Create Index</a></td>
    <td>Instructions on how to create an index on a table in MySQL to improve query performance.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-drop-index">MySQL Drop Index</a></td>
    <td>Guide on how to delete an index from a MySQL table.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-show-indexes">MySQL Show Indexes</a></td>
    <td>Information on how to list all indexes of a table in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-unique-index">MySQL Unique Index</a></td>
    <td>Guide on how to create and manage unique indexes in MySQL.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-clustered-index">MySQL Clustered Index</a></td>
    <td>Explanation of clustered indexes in MySQL, including their benefits and use cases.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-clustered-vs-non-clustered-index">MySQL Clustered vs Non-Clustered Index</a></td>
    <td>Comparison between clustered and non-clustered indexes in MySQL, highlighting their differences and applications.</td>
  </tr>
</table>

### MySQL Clauses

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-where">MySQL WHERE</a></td>
    <td>Guide on how to use the WHERE clause to filter records in a MySQL query.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-distinct">MySQL DISTINCT</a></td>
    <td>Instructions on how to use the DISTINCT clause to remove duplicate records in query results.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-from">MySQL FROM</a></td>
    <td>Explanation of the FROM clause, used to specify the table(s) to retrieve data from.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-order-by">MySQL ORDER BY</a></td>
    <td>Guide on how to use the ORDER BY clause to sort query results.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-group-by">MySQL GROUP BY</a></td>
    <td>Instructions on how to use the GROUP BY clause to group records by one or more columns.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-having">MySQL HAVING</a></td>
    <td>Guide on how to use the HAVING clause to filter groups of records in a MySQL query.</td>
  </tr>
</table>


# MySQL Privileges

<table>
  <tr>
    <th>Resource Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-grant-privilege">MySQL Grant Privilege</a></td>
    <td>Guide on how to grant privileges to users in MySQL, allowing them to perform various actions.</td>
  </tr>
  <tr>
    <td><a href="https://www.javatpoint.com/mysql-revoke-privilege">MySQL Revoke Privilege</a></td>
    <td>Instructions on how to revoke privileges from users in MySQL.</td>
  </tr>
</table>



## Conclusion
