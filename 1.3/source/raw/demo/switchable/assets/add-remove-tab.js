KISSY.use("switchable,node", function (S, Switchable) {

    var Tabs = Switchable.Tabs,
        btnAdd = S.one('#btnAdd'),
        btnDel = S.one('#btnDel'),
        txtAdd = S.one('#addIndex'),
        checkIndex = S.one("#checkIndex"),
        btnDestroy = S.one("#btnDestroy"),
        txtDel = S.one('#delIndex');

    S.ready(function (S) {
        var i = 0;
        window.tabs = new Tabs('#demo2', {
            // aria:false 默认 true，支持 aria
            switchTo:0
        });

        btnAdd.on('click', function () {
            var index = txtAdd.val(),
                t = S.DOM.create('<li>自定义添加' + (++i) + '</li>'),
                p = S.DOM.create('<div style="display: none">' +
                    '<a href="#">内容添加 ' +
                    (i) +
                    '</a>' +
                    '</div>');

            tabs.add({
                index:parseInt(index),
                active:checkIndex.attr("checked"),
                trigger:t,
                panel:p
            });
        });

        btnDestroy.on("click", function () {
            tabs.destroy();
        });

        btnDel.on('click', function () {
            var index = txtDel.val();
            tabs.remove({index:parseInt(index)});
        });

    });
});