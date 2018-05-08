var express = require('express'),
    users = require('../models/users');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('source', {
        title: '导出数据到json文件'
    })
});

router.post('/', function (req, res) {
    // console.log('post');
    console.log(req.body['address']);
    users.get("123",function(err){
        console.log(err);
    })
    // res.redirect('/source');
});

module.exports = router;