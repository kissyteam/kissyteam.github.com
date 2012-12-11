KISSY.use("combobox", function (S, ComboBox) {

    /*
     local dataSource
     */
    (function () {
        var data = ["a123456", "b12345", "c3464356", "d23434"];

        var basicComboBox = new ComboBox({
            width:100,
            srcNode:S.one("#combobox"),
            // 初始就聚焦
            focused:true,
            hasTrigger:false,
            dataSource:new ComboBox.LocalDataSource({
                data:data
            })
        });
        basicComboBox.render();

        // 得到焦点时展示全部
        basicComboBox.get("input").on("focus", function () {
            basicComboBox.sendRequest('');
        });
    })();


    (function () {
        var data = ["a123456", "b12345", "c3464356", "d23434"];

        var basicComboBox = new ComboBox({
            render:"#newNew",
            // width:S.one("#inp").css("width"),
            dataSource:new ComboBox.LocalDataSource({
                data:data
            }),
            hasTrigger:false,
            maxItemCount:2,
            format:function (query, data) {
                var ret = [];
                for (var i = 0; i < data.length; i++) {
                    ret[i] = {
                        content:(data[i] + "")
                            .replace(new RegExp(S.escapeRegExp(query), "g"),
                            "<b>$&</b>"),
                        disabled:(i % 2 ? true : false)
                    };
                }
                return ret;
            }
        });
        basicComboBox.render();

        basicComboBox.on("click", function (e) {
            var item = e.target;
            S.log(item.get("value") + "\n" + item.get("content") +
                "\n" + item.get("textContent"));
        });
    })();
});