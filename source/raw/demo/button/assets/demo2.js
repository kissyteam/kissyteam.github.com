KISSY.use("button", function(S, Button) {
    // 定制样式方式1, 通过 prefixCls 设置样式前缀
    var b = new Button({
        content: "自定义样式按钮1",
        width: 200,
        prefixCls: "liz-",
        tooltip: "我有新皮肤"
    });
    b.render();

    // 定制样式方式2, 通过 elCls 或 elStyle 设置样式类或行内样式
    // 样式代码参考页面源代码
    var b1 = new Button({
        content: "自定义样式按钮2",
        width: 200,
        elCls: 'my-button-cls',
        tooltip: "我有新皮肤"
    });
    b1.render();
});