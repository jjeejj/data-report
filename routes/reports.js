'use strict';

//请求数据服务地址

const BAR_URL = 'http://localhost:3001/bar';
const LINE_URL = 'http://localhost:3001/line';
const PIE_URL = 'http://localhost:3001/pie';
const GROUP_URL = 'http://localhost:3001/group';

var express = require('express');
var request = require('request');
var router = express.Router();

//柱状图
router.post('/bar',function (req,res,next) {

    console.log('请求柱状图的数据');

    request(BAR_URL,function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //返回正确的数据
            res.json({
                option:body
            })
          }
    })

});

//折线图
router.post('/line',function (req,res,next) {
     console.log('请求折线图的数据');
     request(LINE_URL,function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //返回正确的数据
            res.json({
                option:body
            })
          }
    })
});

//饼状图
router.post('/pie',function (req,res,next) {

    console.log('请求饼状图的数据');
    request(PIE_URL,function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //返回正确的数据
            res.json({
                option:body
            })
          }
    })
});

//group
router.post('/group',function (req,res,next) {
    console.log('请求group的数据');
    request(GROUP_URL,function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //返回正确的数据
            res.json({
                option:body
            })
          }
    })
});


module.exports = router;