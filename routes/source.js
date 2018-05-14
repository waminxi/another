/**
 * 作为router只处理server端的代码，
 * 前端的js不在router中出现
 */
var express = require('express'),
    DBInfo = require('../models/db');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('source', {
        title: '导出数据到json文件'
    })
});

router.post('/', function (req, res) {
    // $("#loading").hide();// 这种前端事件，在router中无效
    var address = req.body['address'];
    var port = req.body['port'];
    var dbName = req.body['dbName'];
    var collName = req.body['collName'];
    var c = new DBInfo();
    var url = "mongodb://" + address + ":" + port;
    console.log("url -> " + url);
    // c.connect(url, function (err, client) {
    //     if (err == null) {
    //         // 返回json数据，注意引号
    //         res.json('{"message":"success"}');
    //     } else {
    //         res.json('{"message":"failure"}');
    //     }
    // });
    c.read(url, dbName, collName, "{}", 20, function (data) {
        // 将返回的 js object 转为 json ---- JSON.stringify(data[0])
        res.json(JSON.stringify(data));
    });
});

module.exports = router;