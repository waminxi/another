//引入mongodb模块，获得客户端对象


define(function (host, port, dbName) {
  var MongoClient = require('mongodb').MongoClient;
  const assert = require('assert');

  function connect(host, port, dbName) {
    let url = 'mongodb://' + host + ":" + port;
    MongoClient.connect(url, function (err, client) {
      assert.equal(null, err);
      console.log("Connected correctly to server");
      const db = client.db(dbName);
    });
  }

  connect();
})
