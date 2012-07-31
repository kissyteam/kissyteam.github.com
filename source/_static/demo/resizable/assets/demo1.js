KISSY.use("node, button, resizable", function(S, Node, Button, Resizable) {
    var r = new Resizable({
        node:"#something-can-resize",
        // 指定可拖动的位置
        handlers:["b","t","r","l","tr","tl","br","bl"],

        // 可选, 设置最小/最大 宽高
        minHeight:50,
        minWidth:50,
        maxHeight:445,
        maxWidth:700
    });
    var b = new Button({
        content: "销毁"
    });
    b.render();
    b.on("click", function() {
        r.destroy();
    });
});
