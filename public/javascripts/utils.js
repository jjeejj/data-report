
/**
 * 发送ajax请求报表数据
 * 并把数据复制到页面上
 * @param  {[string]} url        请求地址
 * @param  {[DOM]} DOMElement 数据容器
 * @param  {[Object]} dateObj   startDate, endData  时间日期对象
 * @return {[type]}
 */
var sendAjax = function (url,DOMElement,dateObj) {
    $.ajax({
        url:url,
        type:'post',
        data:dateObj,
        dataType:'json',
        success:function (data) {

            let dataJSON = JSON.parse(data.option);
            console.log('dataJSON',dataJSON);
            let option = dataJSON[0];
            DOMElement.setOption(option);
        },
        error:function (res) {
            alert('请求数据失败')
            console.log('res',res);
        }
    })
};

/**
 * 得到当前日期时间的字符串
 * 格式：yyyy-mm-dd
 * @return {[type]} [description]
 */
var nowDateString = function () {
    let nowDate = new Date();
    let year = nowDate.getFullYear();//年
    let month = nowDate.getMonth() + 1; //月份
    let day = nowDate.getDate(); //日

    return `${year}-${month}-${day}`;
}

/**
 * 得到当前时间7天前的日期的字符串
 * 格式：yyyy-mm-dd
 * @return {[type]} [description]
 */
var beforeDateString = function () {

    let interval = 7 * 24 * 60 * 60 * 1000;
    let nowDateTimes = Date.now();

    let beforeDateTimes = nowDateTimes - interval;

    let beforeDate = new Date(beforeDateTimes);

    let year = beforeDate.getFullYear();//年
    let month = beforeDate.getMonth() + 1; //月份
    let day = beforeDate.getDate(); //日

    return `${year}-${month}-${day}`;
}

/**
 * 比较两个时间的先后
 * @param  {[type]} before 前时间
 * @param  {[type]} after  后时间
 * @return {[type]}
 */
var equalDate = function (before,after) {
    if(!before || !after){
        return false;
    }

    let beforeDate = new Date(before);
    let afterDate = new Date(after);

    if(beforeDate.getTime() > afterDate.getTime()){
        return false;
    }

    return true;
}
