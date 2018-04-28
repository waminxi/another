//引入mongodb模块，获得客户端对象
var MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://124.239.146.228:29017';

// Database Name
const dbName = 'Warning';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
  
    const db = client.db(dbName);
  
    // Insert a single document
    db.collection('inserts').insertOne({a:1}, function(err, r) {
      assert.equal(null, err);
      assert.equal(1, r.insertedCount);
  
      // Insert multiple documents
      db.collection('inserts').insertMany([{a:2}, {a:3}], function(err, r) {
        assert.equal(null, err);
        assert.equal(2, r.insertedCount);
  
        client.close();
      });
    });
  });
  