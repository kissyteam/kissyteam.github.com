KISSY.use("event,switchable,datalazyload", function (S, Event, Switchable) {
    var Carousel = Switchable.Carousel,
        DOM = S.DOM;

    S.ready(function (S) {
        var carousel = new Carousel('#demo4', {
            effect:'scrollx',
            easing:'easeOutStrong',
            steps:5,
            viewSize:[680],
            circular:false,
            prevBtnCls:'prev',
            nextBtnCls:'next',
            disableBtnCls:'disable',
            lazyDataType:'img-src'
        });

        var btnAdd = S.one('#btnAdd'),
            i = 1,
            btnDelete = S.one("#btnDelete"),
            checkIndex = S.one("#checkIndex"),
            btnDestroy = S.one("#btnDestroy"),
            deleteIndex=S.one("#deleteIndex"),
            txtAdd = S.one('#addIndex');

        btnDelete.on("click", function () {
            var index = deleteIndex.val();
            carousel.remove({index:parseInt(index)});
        });

        btnAdd.on('click', function () {
            var index = txtAdd.val();
            carousel.add({
                index:parseInt(index),
                active:checkIndex.attr("checked"),
                trigger:DOM.create('<li>&bull;</li>'),
                panel:DOM.create('<img alt="" src="http://img03.taobaocdn.com/tps/i3/T1Hm1XXipvXXXXXXXX-110-135.png"/>')
            });
            i++;
        });
        btnDestroy.on("click", function () {
            carousel.destroy();
        });
        // window.carousel = carousel;
    });
});