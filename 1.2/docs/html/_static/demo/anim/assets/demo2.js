KISSY.use("anim,button", function(S, Anim, Button) {
    var b = new Button({
        content: "run scroll animation",
        prefixCls: "goog-"
    });
    b.render();
    b.on("click", function() {
        b.set("disabled", true);
        Anim(S.get("#test8"), {
            //设置 scrollLeft 或者 scrollTop 属性
            scrollLeft:500
        }, 5, undefined,
            function() {
                Anim(S.get("#test8"), {
                    scrollLeft:0
                }, 5, undefined,
                    function() {
                        b.set("disabled", false);
                    }).run();
            }).run();
    });
});
