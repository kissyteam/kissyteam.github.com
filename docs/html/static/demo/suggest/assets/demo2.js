KISSY.use("suggest", function(S, Suggest) {
    // 1.1.6
    Suggest = S.Suggest;

    // 有啊
    // http://youa.baidu.com/suggest/se/s?cmd=suggest&type=kwd&max_count=10&callback=suggestCallback&keyword=n
    var dataUrl = 'http://youa.baidu.com/suggest/se/s?cmd=suggest&type=kwd&max_count=10';
    var sug = new Suggest('#q2', dataUrl, {
        containerCls: 'youa-suggest-container',
        // 可以设置数据接口返回数据的编码
        charset: 'gbk',
        // 设置回调函数的函数名, Suggest 会自动创建该函数, 参数为返回过来的data
        callbackFn: 'suggestCallback',
        // 设置查询的参数名, 不同的数据接口有不同的参数名
        queryName: 'keyword'
    });

    // youa: suggestCallback({"err":"ok", "r":[{"key":"nike", "val":140000}, {"key":"nike鞋", "val":119000}, {"key":"nike板鞋", "val":44300}, {"key":"nike运动鞋", "val":115000}, {"key":"nike正品", "val":47400}, {"key":"nike包", "val":8300}, {"key":"nike篮球鞋", "val":18400}, {"key":"nike新款", "val":27600}, {"key":"nike 耐克", "val":140000}, {"key":"nike女鞋", "val":7850}], "num":10})
    // taobao: g_ks_suggest_callback({"result": [["nike 正品", "2170000"], ["nike 专柜 正品", "834000"], ["nike 短袖", "242000"], ["nike 板 鞋", "989000"], ["nike 女鞋", "253000"], ["nike 运动鞋", "550000"], ["nike 包", "295000"], ["nike 鞋", "3160000"], ["nike 单肩包", "38500"], ["nike 09", "786000"]]})
    // 当数据返回时, 对返回的数据进行筛选
    sug.on('dataReturn', function() {
        var data = this.returnedData['r'] || [], result = [];

        for (var i = 0, len = data.length; i < len; ++i) {
            result.push([data[i]['key'], data[i]['val']]);
        }
        this.returnedData = result;
    });
});