---
id: database-guidelines
title: Database Guidelines
sidebar_label: Database Guidelines
---

If you want code to support other database systems, the database should support the following functions:

- **Dynamic rows**  
Netflow movements are received via templates and the templates define the data contained, resulting in different columns in different movements.  
*Result: SQL-Based database systems like MySQL or PostgreSQL won't work.*
- **Aggregate functions**  
To create reports from the flow data, you need to apply aggregations to the saved flows in the database. For example, determining the bytes total or the download size per day.  
*Result: Databases without good query functions like a raw file on the hard drive won't work.*

