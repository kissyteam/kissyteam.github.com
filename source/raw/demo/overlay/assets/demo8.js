KISSY.use("node,overlay,component/plugin/resize," +
    "component/plugin/drag," +
    "dd/plugin/constrain" +
    ",button", function (S, Node, O, ResizePlugin, DragPlugin, ConstrainPlugin, DD, R, B) {
    var stat = true,
        sh = false;
    var b1 = new B({
        content: "显示",
        render: "#button-wrap"
    });
    b1.render();
    var b2 = new B({
        content: "释放",

        render: "#button-wrap"
    });
    b2.render();
    var b3 = new B({
        content: "限制",

        render: "#button-wrap"
    });
    b3.render();

    var dialog = new O.Dialog({
        width: 400,
        bodyStyle: {
            height: 100
        },
        mask: false,
        align: {
            node: '#c1',
            points: ['cc', 'cc']
        },

        plugins: [
            new DragPlugin({
                handlers: ['.ks-stdmod-header'],
                plugins: [new ConstrainPlugin({
                    constrain: '#c1' // 设置限制在哪个容器中
                })]
            }),

            new ResizePlugin({
                // 可缩放大小, 并设置最小宽度/最小高度/缩放位置
                minWidth: 150,
                minHeight: 70,
                handlers: ["b", "t", "r", "l", "tr", "tl", "br", "bl"]
            })
        ],

        closable: false
    });
    dialog.on('show', function () {
        if (stat) {
            this.set('bodyContent', '我的位置只能在容器中');
        } else {
            this.set('bodyContent', '我自由啦');
        }
    });

    b1.on('click', function () {
        if (!sh) {
            dialog.show();
            dialog.set("align", {
                node: '#c1',
                points: ['cc', 'cc']
            });
            b1.set('content', '隐藏');
        } else {
            dialog.hide();
            b1.set('content', '显示');
        }
        sh = !sh;
    });

    b2.on('click', function () {
        dialog.getPlugin('component/plugin/drag')
            .getPlugin('dd/plugin/constrain')
            .set('constrain', false);
        stat = false;
        dialog.set('bodyContent', '我自由啦');
    });

    b3.on('click', function () {
        dialog.getPlugin('component/plugin/drag')
            .getPlugin('dd/plugin/constrain')
            .set('constrain', "#c1");
        dialog.set("align", {
            node: '#c1',
            points: ['cc', 'cc']
        });
        stat = true;
        dialog.set('bodyContent', '我的位置只能在容器中');
    });
});
