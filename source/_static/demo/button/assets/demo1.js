KISSY.use("button", function(S, Button) {
    // 生成一个按钮
    var b = new Button({
        content: "我是类Google按钮1",
        render: "#button_container",
        prefixCls: "goog-",
        tooltip: "点击我有惊喜~"
    });
    
    // 插入到DOM中并显示
    b.render();

    // 绑定事件
    b.on("click", function() {
        alert(this.get('content'));
    });

    // 新建一个button插入到某个指定元素之前
    var b1 = new Button({
        content: "我是类Google按钮2",
        elBefore: "#exist",
        prefixCls: "goog-",
        tooltip: "点击我有惊喜~"
    });

    // 插入到DOM中并显示
    b1.render();
    b1.on("click", function() {
        alert(this.get('content'));
    });

    // 从已有DOM中生成一个按钮
    var exist = new Button({
        srcNode:"#exist",
        prefixCls: "goog-",
        tooltip: "点击我有惊喜~"
    });
    exist.render();
    exist.on("click", function() {
        alert(this.get('content'));
    });
});