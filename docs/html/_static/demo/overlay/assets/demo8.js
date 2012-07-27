KISSY.use("node,overlay,dd,resizable,button", function (S, Node, O, DD, R, B) {
    var stat = true,
        sh = false;
    var b1 = new B({
        content:"显示",
        prefixCls:"goog-",
        render:"#button-wrap"
    });
    b1.render();
    var b2 = new B({
        content:"释放",
        prefixCls:"goog-",
        render:"#button-wrap"
    });
    b2.render();
    var b3 = new B({
        content:"限制",
        prefixCls:"goog-",
        render:"#button-wrap"
    });
    b3.render();

    var dialog = new O.Dialog({
        width:400,
        bodyStyle:{
            height:100
        },
        mask:false,
        align:{
            node:'#c1',
            points:['cc', 'cc']
        },
        // 定义是否可拖拽
        draggable:{
            constrain:'#c1' // 设置限制在哪个容器中
        },
        closable:false,
        resize:{            // 可缩放大小, 并设置最小宽度/最小高度/缩放位置
            minWidth:150,
            minHeight:70,
            handlers:["b", "t", "r", "l", "tr", "tl", "br", "bl"]
        }
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
                node:'#c1',
                points:['cc', 'cc']
            });
            b1.set('content', '隐藏');
        } else {
            dialog.hide();
            b1.set('content', '显示');
        }
        sh = !sh;
    });

    b2.on('click', function () {
        dialog.set('draggable', {
            constrain:false
        });
        stat = false;
        dialog.set('bodyContent', '我自由啦');
    });

    b3.on('click', function () {
        dialog.set('draggable', {constrain:"#c1"});
        dialog.set("align", {
            node:'#c1',
            points:['cc', 'cc']
        });
        stat = true;
        dialog.set('bodyContent', '我的位置只能在容器中');
    });
});
