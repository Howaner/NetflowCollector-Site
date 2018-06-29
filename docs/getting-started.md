---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

NetflowCollector is a java application which starts a udp server that can receive netflows from a router. This flows are written into a database which gives you excelent abilities to create own reporting/diagram scripts.

## Setup

### Database

Currently NetflowCollector only supports MongoDB as a database. If you want to use other database systems, you can create an issue in github or [program the integration yourself](database-guidelines.md).

For the MongoDB installation on your server I can recommend the following instructions:  
[MongoDB 3.6 Installation](https://docs.mongodb.com/manual/administration/install-on-linux/)

### Dependencies

The software is written in java so a java runtime is important to run the software on your server.  
If you use a debian/ubuntu server, simple install the open-source openjdk:
```
apt-get install openjdk-8-jre-headless
```

### Download

The software can be downloaded from my jenkins server: [Download NetflowCollector.jar](https://ci.howaner.de/job/NetflowCollector/)

### Run software

```
java -jar NetflowCollector.jar
```
The software will create a config file *config.json* with following default options:

- MongoDB connection to 127.0.0.1, user/password/database netflowcollector
- UDP Server binding to all interfaces with port 9876

See [Config documentation](configuration.md) for config options.