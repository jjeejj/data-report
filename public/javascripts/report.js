var report = echarts.init(document.getElementById('report'));

//页面加载完后执行的方法

//时间范围默认为一周
$(function () {

    //请求的地址
    let url = $('#search-form').attr('action');

    console.log('url',url);

    var startDate = beforeDateString(); //默认开始时间
    var endDate = nowDateString(); // 默认结束时间

    $('#startDate').val(startDate);
    $('#endDate').val(endDate);

    //页面加载的时候发送请求
    var dateObj = {
        startDate: startDate,
        endDate:endDate
    };
    sendAjax(url,report,dateObj);
});

//点击查询按钮的事件
$('#searchBtn').on('click',function () {

    //请求的地址
    let url = $('#search-form').attr('action');

    var startDate = $('#startDate').val();
    var endDate = $('#endDate').val();

    console.log('startDate',startDate);
    console.log('endDate',endDate);

    if(!startDate || !endDate){
        alert('请选择开始时间或结束时间');
        return;
    }

    if(!equalDate(startDate,endDate)){
        alert('开始时间不能大于结束时间');
        return;
    }

    var dateObj = {
        startDate: startDate,
        endDate:endDate
    };

    sendAjax(url,report,dateObj);
})