---
id: contribution
title: Contribution
sidebar_label: Contribution
---

NetflowCollector is an open source project and the source code is publicly available on Github.
I am very much looking forward to every helper who wants to help in the project.

## Source contribution

Simple fork the project on github, push your work into your branch and create a merge request.  
If you want to add new database systems, please read the [database guidelines](database-guidelines.md).

* [Github NetflowCollector](https://github.com/Howaner/NetflowCollector)
* [Github NetflowCollector-Site](https://github.com/Howaner/NetflowCollector-Site)

### Compiling

The project is built in java and uses maven as build-management-system. You can build the project by this commands:
```shell
# Build
git clone https://github.com/Howaner/NetflowCollector.git
cd NetflowCollector
mvn clean install
# Run
cd target/
java -jar NetflowCollector.jar
```
