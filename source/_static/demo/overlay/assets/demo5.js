//最简单好用的！
var node = document.createElement("div");
node.innerHTML = '<div class="loading" style="width:600px;height:200px;"> '
    + '<div class="mask"></div> '
    + '<i class="icon" style="position: absolute;left:200px;top:100px;">加载中，请稍候…</i> '
    + '</div>';

KISSY.use('ua,event,node,overlay,button', function(S, UA, Event, Node, O, B) {
    var popup = new O.Popup({
        content: node,
        width: 600,
        height: 200,
        elStyle:{
            position:UA.ie == 6 ? "absolute" : "fixed",
            background:"transparent"
        },
        align: {
            points: ['cc', 'cc']
        },
        effect: {
            effect:"fade",
            duration:0.5
        }
    });

    if (UA.ie == 6) {
        Event.on(window, "scroll", function() {
            if (popup.get("visible"))
                popup.center();
        });
    }
    var show = new B({
        content: "显示",
        prefixCls: "goog-",
        render: "#button-wrap"
    });
    show.render();
    show.on("click", function() {
        popup.show();
    });

    var hide = new B({
        content: "隐藏",
        prefixCls: "goog-",
        render: "#button-wrap"
    });
    hide.render();
    hide.on("click", function() {
        popup.hide();
    });
});
