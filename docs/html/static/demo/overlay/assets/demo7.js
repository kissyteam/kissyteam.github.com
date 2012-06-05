KISSY.use("node,overlay,button", function(S, Node, O, B) {
    var show = new B({
        content: "选择",
        prefixCls: "goog-",
        render: "#button-wrap"
    });
    show.render();

    // 从现有HTML中创建出一个对话框
    var d = new O.Dialog({
        srcNode: "#choose",
        width: 480,
        closable: true,
        // 与button对齐
        align: {
            node: show.get('el'),
            points: ['tr', 'cl']
        },
        effect: {
            effect:"slide",//"fade",
            duration:0.5
        }
    });

    show.on("click", function() {
        d.show();
    });
});
