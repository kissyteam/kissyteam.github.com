KISSY.use("waterfall", function(S, Waterfall) {
    var waterFall = new Waterfall.Async({
        container:"#ColumnContainer",
        remote:function() {  // 设置外部数据接口
            return {
                data:{
                    from:S.all("#ColumnContainer .ks-waterfall").length
                },
                url:"data.json",
                dataType:"json"
            };
        },
        minColCount:2,
        colWidth:235,
        itemTpl:S.all("#tpl").html() // 设置每个数据块的默认代码
    });

    // 分别在加载开始和加载结束后, 显示 loading 标志
    waterFall.on('loadStart', function() {
        S.one('#loadingPins').show();
    });
    waterFall.on('loadEnd', function() {
        S.one('#loadingPins').hide();
    });

});