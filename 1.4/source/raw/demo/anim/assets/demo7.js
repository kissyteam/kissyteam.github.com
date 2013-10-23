KISSY.use("anim,node", function (S, Anim, Node) {
    var $ = Node.all;
    var ctx = document.getElementById('Canvas').getContext('2d');

    function circle(cx, cy, r, opt) {
        ctx.beginPath();
        for (var x in opt) {
            ctx[x] = opt[x];
        }
        ctx.arc(cx, cy, r, 0, 2 * Math.PI, true);
        ctx.fill();
        ctx.closePath();
    }

    circle(100, 100, 5, {
        fillStyle: "#999"
    });

    var o = {r: 1};
    var anim = new Anim(o, {
        r: 100
    }, {
        easing: "swing",
        duration: 1,
        frame: function (anim, fx) {
            circle(100, 100, fx.val);
        }
    });
    anim.run();

    $('#stop').on('click', function () {
        anim.stop();
    });
});