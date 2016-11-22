'use strict';

var express = require('express');
var router = express.Router();

//首页
router.get('/', function(req, res, next) {
  res.render('index',{
    title: '报表管理平台',
    pageurl :'index_v1'
  });

  // next();
});

//柱状图
router.get('/bar',function (req,res,next) {
    //重定向
    // res.redirect('/report/bar');
    res.render('index',{
        title: '柱状图',
        pageurl :'bar'
    })
});

//折线图
router.get('/line',function (req,res,next) {
    res.render('index',{
        title: '折线图',
        pageurl :'line'
    })
});

//饼状图
router.get('/pie',function (req,res,next) {
    res.render('index',{
        title: '饼状图',
        pageurl :'pie'
    })
});

//group
router.get('/group',function (req,res,next) {
    res.render('index',{
        title: 'group',
        pageurl :'group'
    })
});


module.exports = router

