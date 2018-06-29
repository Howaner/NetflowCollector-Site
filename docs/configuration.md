---
id: configuration
title: Configuration
sidebar_label: Configuration
---

## Default confguration

The software creates a default configuration if no config file exists.
```json
{
	"Binding": {
		"Host": "0.0.0.0",
		"Port": 9876
	},
	"Collection": {
		"Adapter": "SingleCollection",
		"CollectionName": "Flows",
		"Indexes": [
			"L4_SRC_PORT",
			"L4_DST_PORT",
			"IPV4_SRC_ADDR",
			"IPV4_DST_ADDR",
			"PROTOCOL",
			"INPUT_INTERFACE",
			"OUTPUT_INTERFACE",
			"DIRECTION"
		]
	},
	"Cache": {
		"Size": 100,
		"Timeout": 300
	},
	"Database": {
		"Type": "MongoDB",
		"IP": "localhost",
		"Port": 27017,
		"User": "netflowcollector",
		"Password": "netflowcollector",
		"Database": "netflowcollector"
	}
}
```

## Binding

- Host: The binding ip for the udp server (default all interfaces aka. 0.0.0.0)
- Port: The binding port for the udp server (default 9876)

## Collection

NetflowCollector can save flows into different collections to avoid super-large single collections.

### Adapter

The adapter is the provider you want to use for the collection names. You can choose between the following adapters:

- SingleCollection  
Saves all flows into one collection. You need to specify the collection name in the *CollectionName* config option.
- FlowField  
Saves the flow in a collection based on a data-entry of the flow (like the destination/source ip address). You need to specify the field you want to use for collection name in the *Field* config option.
- Date  
Saves the flows in a collection based on the current date. You need to specify the date-format in the *Format* config option. The format is based on the SimpleDateFormat in Java (look [JavaDoc](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html))

### CollectionName

This field is dynamicly and depends on the choosen adapter. Look [Adapter](#adapter) for available options.

### Indexes

If the software creates a new collection, this indexes will be automaticly created in the collection.

## Cache

### Size

The cache size specify the amount of flows that get cached in memory before it get written into the database with a bulk-write.

### Timeout

If no flows coming in in this time period (seconds), the software writes all cached flows into the database and clears the cache.

## Database

Currently only MongoDB is supported, so you need to choose *MongoDB* in the *Type* option.  
If mongodb authorization is disabled, remove the *User* and *Password* config option to do a anonymous login.