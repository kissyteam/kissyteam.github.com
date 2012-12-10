KISSY.use("node, overlay", function(S, Node, O) {
    //新建共享popup层
    var popup = new O({
        elStyle : {
            border : "2px solid gray",
            lineHeight : 0
        },
        width : 120,  //配置高和宽
        height : 120,
        effect : {
            effect : "slide", //popup层显示动画效果，slide是展开，也可以"fade"渐变
            duration : 0.5
        }
    });
    // 注意：使用定制的显示/隐藏方式
    Node.all('#multi img').each(function(t) {
        //为每个元素增加显示公共popup的事件
        t.on("mouseenter", function() {
            //每个元素在公共popup中显示自己的内容
            popup.set("content", '<img src="' + t.attr('bigpicurl') + '"/>');
            popup.set('align', {
                node : t,
                points : ["tr", "tl"]
            });
            popup.show();
        });
        t.on("mouseleave", function() {
            popup.hide();
        });
    });
});
