KISSY.use("anim,node,button", function(S, Anim, Node, Button) {
    var anim_show = S.one("#anim_show"),
        anim_slide = S.one("#anim_slide"),
        anim_fade = S.one("#anim_fade");

    var demo_show = new Button({
        content: "show/hide",
        render: "#demo_show"
    });
    demo_show.render();
    demo_show.on("click", function() {
        anim_show.toggle(1);
    });

    var demo_slide = new Button({
        content: "show/hide",
        render: "#demo_slide"
    });
    demo_slide.render();
    demo_slide.on("click", function() {
        if (anim_slide.css("display") === "none")
            anim_slide.slideDown();
        else
            anim_slide.slideUp();
    });

    var demo_fade = new Button({
        content: "show/hide",
        render: "#demo_fade"
    });
    demo_fade.render();
    demo_fade.on("click", function() {
        if (anim_fade.css("display") === "none")
            anim_fade.fadeIn();
        else
            anim_fade.fadeOut();
    });
});
