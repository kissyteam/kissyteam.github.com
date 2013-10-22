KISSY.use("anim, node", function (S, Anim, Node) {
    var $ = Node.all;

    var $box = S.one("#J_Box");
    var anim = new Anim($box, {"width": "500px"}, {
        useTransition: true
    });
    anim.run();

    S.one("#J_Box2").animate({"width": "500px"});

    var node = S.one("#J_Box3");
    var anim2 = new Anim(node, {"width": "500px"}, {easing: "ease-in", duration: 5, useTransition: true});

    $('#start').on('click', function () {
        anim2.run();
    });

    $('#pause').on('click', function () {
        anim2.pause();
    });

    $('#resume').on('click', function () {
        anim2.resume();
    });

    $('#stop').on('click', function () {
        anim2.stop();
    });
});