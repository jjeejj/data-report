'use strict';

var Report = require('../routes/reports.js'); // 报表数据 Api路由
var Page = require('../routes/pages.js'); //页面路由
// var Index = require('../routes/index.js'); //页面路由




/**
 * 暴露出该路由配置项
 * @param  {[type]} app express服务
 * @return {[type]}
 */
module.exports = function (app) {

    /**
     * 首页 &&
     * 页面路由
     */
    app.use('/',Page);


    /**
     * report-data 路由控制
     */

     app.use('/report',Report);

}