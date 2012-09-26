KISSY.use("node,button", function(S, Node, Button) {
    var b = new Button({
        content:"我是类Google按钮",
        render: "#button_container",
        tooltip: "点击我有惊喜~"
    });
    b.render();
    b.on("click", function() {
        alert("你好你好!");
    });

    var dis = Node.one("#disabled");

    // 设置 button 实例的 disabled 属性, 可以设置 button 的可用状态
    dis.on("click", function() {
        if (dis[0].checked) {
            b.set("disabled", true);
        } else {
            b.set("disabled", false);
        }
    });

    if (dis[0].checked) {
        b.set("disabled", true);
    } else {
        b.set("disabled", false);
    }
});