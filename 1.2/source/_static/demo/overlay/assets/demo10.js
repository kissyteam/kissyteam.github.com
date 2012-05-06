KISSY.use("dom,node,ua,event,overlay", function(S, DOM, Node, UA, Event, Overlay) {
    var Dialog = Overlay.Dialog,$ = S.all;

    // 在 new overlay 后立即调用
    var animCenter = function(b, overlay) {
        overlay.on("afterRenderUI", function() {
            var el = overlay.get("el");
            var ow = el.width();
            var oh = el.height();
            var hasHeight = el[0].style.height;

            overlay.on("afterVisibleChange", function(ev) {
                var bo = b.offset(),
                        bl = bo.left,
                        bt = bo.top,
                        bw = b.width(),
                        bh = b.height();
                var v = ev.newVal,el = overlay.get("el");
                el.stop();
                if (v) {
                    el.width(bw);
                    el.height(bh);
                    el.offset(b.offset());

                    var d = {
                        left:Math.max(($(window).width() - ow) / 2 + $(window).scrollLeft(), $(window).scrollLeft()) + "px",
                        top:Math.max(($(window).height() - oh) / 2 + $(window).scrollTop(), $(window).scrollTop()) + "px",
                        width:ow + "px",
                        height:oh + "px"
                    };
                    el.animate(d, 0.3, undefined, function() {
                        if (!hasHeight) {
                            el.css("height", "");
                        }
                    }, false);
                } else {

                    el.css("visibility", "visible");

                    el.animate({
                        left:bl + "px",
                        top:bt + "px",
                        width:bw + "px",
                        height:bh + "px"
                    }, 0.3, undefined, function() {
                        el.css("visibility", "hidden");
                    }, false);
                }
            });
        });
    };

    S.ready(function(S) {

        var dialog = new Dialog({
            width:424,
            elCls: 'my',
            elStyle:{
                overflow:'hidden'
            },
            <!-- width height 一定要设-->
            bodyContent:'<img '
                    + 'width="424" '
                    + 'height="282" '
                    + 'src = "http://img02.taobaocdn.com/tps/i2/T10J9bXnlgXXXXXXXX-424-282.jpg?noq=y" / > '
        });

        var b = Node.one("#btn18");

        animCenter(b, dialog);

        b.on("click", function() {
            dialog.show();
        });

    });
});
