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

DBInfo.prototype.connect = function (url, callback) {
    MongoClient.connect(url, callback);
}

DBInfo.prototype.read = async function (url, dbName, collectionName, condition, callback) {
    let client;
    try {
        client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const col = db.collection(collectionName);
        const docs = col.find(condition).limit(2).toArray();
        console.log("docs -> " + docs);
    } catch (error) {
        console.log(error.stack);
    }
    client.close();
}