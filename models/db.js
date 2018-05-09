// var settings = require('../settings');
// var Db = require('mongodb').Db;
// //var Connection = require('mongodb').Connection;
// var Server = require('mongodb').Server;

// module.exports = new Db(settings.db, new Server(settings.host, settings.default_port, {}));

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

function DBInfo() {
}

module.exports = DBInfo;

// DBInfo.prototype.connect = function (url, dbName) {
//     MongoClient.connect(url, function (err, client) {
//         if (err == null) {
//             console.log("Connected successfully to server");
//             const db = client.db(dbName);
//             client.close();
//         } else {
//             console.log("Connected failed");
//         }
//     });
// }

DBInfo.prototype.connect = function(url, dbName, callback){
    MongoClient.connect(url, callback);
}