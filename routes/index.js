'use strict';
var express = require('express');
var router = express.Router();

//目前没有使用

router.get('/', function(req, res, next) {
  res.render('index',{
    title: '报表管理平台',
    pageurl :'index_v1'
  });

  next();
});

module.exports = router