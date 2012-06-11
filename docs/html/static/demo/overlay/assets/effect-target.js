KISSY.use("node,overlay,button,dd", function (S, Node, O, B) {
    var show = new B({
        content:"收藏",
        prefixCls:"goog-",
        render:"#button-wrap"
    });
    show.render();

    var dialog = new O.Dialog({
        width:400,
        headerContent:'收藏',
        bodyContent:'<iframe scrolling="no" height="200" width="398" frameborder="0" name="popupIframe" src="http://favorite.taobao.com/popup/add_collection.htm?id=10166801469&amp;itemtype=1&amp;scjjc=1&amp;_tb_token_=3b38ed73a7775&amp;t=1305543755536"></iframe>',
        mask:true,
        align:{
            points:['cc', 'cc']
        },
        effect:{
            duration:.3,
            easing:'backOut',
            target:show.get("el")
        },
        aria:true
    });

    var o = dialog;

    o.on("afterBindUI", function () {
        o.on("show", function () {
            o.get("maskNode").css('opacity', 0);
            o.get("maskNode").animate({
                opacity:.5
            }, {
                duration:.3
            });
        });
        o.on("hide", function () {
            o.get("maskNode").show();
            o.get("maskNode").animate({
                opacity:0
            }, {
                duration:.3,
                complete:function () {
                    o.get("maskNode").hide();
                }
            });
        });
    });


    show.on("click", function () {
        dialog.show();
    });

});
