KISSY.use("combobox", function (S, ComboBox) {

    var tmpl = "<div class='item-wrapper'>" +
        "<span class='item-text'>{text}</span>" +
        "<span class='item-count'>约{count}个宝贝</span>" +
        "</div>"

    var basicComboBox = new ComboBox({
        render:S.one("#container"),
        hasTrigger:false,
        width:500,
        dataSource:new ComboBox.RemoteDataSource({
            xhrCfg:{
                url:'http://suggest.taobao.com/sug',
                dataType:'jsonp',
                data:{
                    code:"utf-8"
                }
            },
            paramName:"q",
            parse:function (query, results) {
                // 返回结果对象数组
                return results.result;
            },
            cache:true
        }),
        format:function (query, results) {
            var ret = [];
            S.each(results, function (r) {
                ret.push({
                    // 点击菜单项后要放入 input 中的内容
                    textContent:r[0],
                    // 菜单项的
                    content:S.substitute(tmpl, {
                        text:r[0],
                        count:r[1]
                    })
                });
            });
            return ret;
        }
    });
    basicComboBox.render();
});