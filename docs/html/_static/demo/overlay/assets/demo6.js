KISSY.use("node,overlay,button", function(S, Node, O, B) {
    var dialog = new O.Dialog({
        width: 400,
        headerContent: '收藏',
        bodyContent: '<iframe scrolling="no" height="200" width="398" frameborder="0" name="popupIframe" src="http://favorite.taobao.com/popup/add_collection.htm?id=10166801469&amp;itemtype=1&amp;scjjc=1&amp;_tb_token_=3b38ed73a7775&amp;t=1305543755536"></iframe>',
        mask: true,
        align: {
            points: ['cc', 'cc']
        },
        draggable: false,
        aria:true
    });

    var show = new B({
        content: "收藏",

        render: "#button-wrap"
    });
    show.render();
    show.on("click", function() {
        dialog.show();
    });

    var dis = new B({
        content: "销毁",

        render: "#button-wrap"
    });
    dis.render();
    dis.on("click", function() {
        dialog.destroy();
        Node.one('#btn4').detach();
    });
});
