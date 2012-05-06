KISSY.use("anim,node,button", function(S, Anim, Node, Button) {
    var $ = Node.all;

    var go = new Button({
        content: "GO!",
        prefixCls: "goog-"
    }), stop = new Button({
        content: "STOP!",
        prefixCls: "goog-"
    }), back = new Button({
        content: "BACK!",
        prefixCls: "goog-"
    });
    go.render();
    stop.render();
    back.render();

    /* Start animation */
    go.on("click", function(e) {
        go.set("disabled", true);
        back.set("disabled", true);
        $(".block").animate({left: (parseInt($(".block").css("left")) + 100) + 'px'}, 2, undefined, function() {
            go.set("disabled", false);
            back.set("disabled", false);
        });
        e.halt();
    });

    /* Stop animation when button is clicked */
    stop.on('click', function() {
        go.set("disabled", false);
        back.set("disabled", false);
        $(".block").stop();
    });

    /* Start animation in the opposite direction */
    back.on('click', function(e) {
        go.set("disabled", true);
        back.set("disabled", true);
        $(".block").animate({left: (parseInt($(".block").css("left")) - 100) + 'px'}, 2, undefined, function() {
            go.set("disabled", false);
            back.set("disabled", false);
        });
        e.halt();
    });
});
