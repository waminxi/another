var express = require('express'),
    DBInfo = require('../models/db');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('source', {
        title: '导出数据到json文件'
    })
});

router.post('/', function (req, res) {
    // console.log('post');
    var address = req.body['address'];
    var port = req.body['port'];
    var dbName = req.body['dbName'];
    var c = new DBInfo();
    var url = "mongodb://" + address + ":" + port;
    c.connect(url, dbName);
    res.redirect('/source');
});

module.exports = router;