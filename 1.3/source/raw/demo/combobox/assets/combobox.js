KISSY.use("combobox", function (S, ComboBox) {

    /*
     local dataSource
     */

    (function () {
        var data = ["a123456", "b12345", "c3464356", "d23434"];

        var basicComboBox = new ComboBox({
            width:200,
            render:"#newNew",
            dataSource:new ComboBox.LocalDataSource({
                data:data
            }),
            maxItemCount:5,
            format:function (query, data) {
                var ret = [];
                for (var i = 0; i < data.length; i++) {
                    ret[i] = {
                        content:(data[i] + "")
                            .replace(new RegExp(S.escapeRegExp(query), "g"),
                            i % 2 ? "$&" : "<b>$&</b>"),
                        disabled:(i % 2 ? true : false)
                    };
                }
                return ret;
            }
        });
        basicComboBox.render();
        var t;
        t = S.all('#t').on("click", function () {
            basicComboBox.set("hasTrigger", t.prop("checked"));
        });

        basicComboBox.on("click", function (e) {
            var item = e.target;
            S.log(item.get("value") + "\n" + item.get("content") +
                "\n" + item.get("textContent"));
        });
    })();
});