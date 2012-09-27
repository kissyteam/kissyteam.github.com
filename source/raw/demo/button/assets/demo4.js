KISSY.use("overlay,button", function(S, Overlay, Button) {
    // 把 button 嵌入到一个对话框中
    var p = new Overlay.Dialog({
        elCls: 'alert-box',
        bodyContent: '我是对话框',
        width: 300,  // 对话框宽度
        closable: false,
        mask: true  //  有遮罩层
    });
    p.show();
    p.center();

    // 生成一个按钮
    var b = new Button({
        content: " OK ",
        render: p.get('footer'),

        tooltip: "点击关闭~"
    });

    // 插入到DOM中并显示
    b.render();

    // 绑定点击事件
    b.on("click", function() {
        p.hide();
    });
});