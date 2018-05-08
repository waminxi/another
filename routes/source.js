var express = require('express'),
    DBInfo = require('../models/db'),
    jsdom = require('jsdom');
var router = express.Router();
var window = jsdom.jsdom().createWindow();
var $ = require('jquery')(window);

router.get('/', function (req, res) {
    res.render('source', {
        title: '导出数据到json文件'
    })
});

router.post('/', function (req, res) {
    $("#loading").hide();

    var address = req.body['address'];
    var port = req.body['port'];
    var dbName = req.body['dbName'];
    var c = new DBInfo();
    var url = "mongodb://" + address + ":" + port;
    c.connect(url, dbName);
    res.redirect('/source');
});

module.exports = router;