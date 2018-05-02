var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
    res.render('source',{
        title:'导出数据到json文件'
    })
});

module.exports = router;