KISSY.use("waterfall", function (S, Waterfall) {
    var waterFall = new Waterfall.Async({
        container: "#container",    //节点容器
        remote: function () {       //函数或者对象，和 ajax 部分一致，只包括 data （服务器端参数）,url（地址），dataType （ajax 类型）
            return {
                data: {
                    from: S.all("#container .ks-waterfall").length
                },
                url: "data.json",
                dataType: "json"
            };
        },
        minColCount: 2,            //最小列数 
        colWidth: 180,             //每列的宽度
        itemTpl: S.all("#tpl").html()  //模板代码，此处从放置代码的dom元素中找到
    });
    
    //外部调用destroy接口卸载瀑布，卸载后将不再有瀑布效果
    S.all("#uninstall").on("click", function () {
        waterFall.destroy();
    });
});