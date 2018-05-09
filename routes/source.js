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
    var c = new DBInfo();
    var url = "mongodb://" + address + ":" + port;
    c.connect(url, dbName);
    res.send(200);
});

module.exports = router;