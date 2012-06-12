KISSY.use("dom,node,ua,event,overlay", function (S, DOM, Node, UA, Event, Overlay) {
    var Dialog = Overlay.Dialog, $ = S.all;

    S.ready(function (S) {

        var dialog = new Dialog({
            width:424,
            elCls:'my',
            elStyle:{
                overflow:'hidden'
            },
            align:{
                points:['cc', 'cc']
            },
            effect:{
                target:'#btn18',
                easing:'easingStrong',
                duration:.3
            },
            bodyContent:'<img '
                + 'width="424" '
                + 'height="282" '
                + 'src = "http://img02.taobaocdn.com/tps/i2/T10J9bXnlgXXXXXXXX-424-282.jpg?noq=y" / > '
        });

        var b = Node.one("#btn18");

        b.on("click", function () {
            dialog.show();
        });

    });
});
