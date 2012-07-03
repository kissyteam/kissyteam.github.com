KISSY.use('node,overlay,button', function(S, Node, O, Button) {
    //通过dom元素新建立popup
    window.popup = new O.Popup(Node.one("#dpop"), {
        trigger : '#img-download',//配置Popup的触发器
        triggerType : 'mouse',    //触发类型
        align : {
            node : '#img-download',
            points : ['tc', 'bc'],
            offset : [0, 50]
        }
    });

    var b = new Button({
        content: "销毁",
        prefixCls: "goog-",
        render: "#button-wrap"
    });
    b.render();
    b.on("click", function() {
        //调用外部接口销毁popup
        window.popup.destroy();
    });
});
