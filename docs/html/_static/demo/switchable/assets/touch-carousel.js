 KISSY.use("switchable,datalazyload", function(S, Switchable) {
    var Carousel = Switchable.Carousel;

    S.ready(function(S) {
        //通过DOM元素新建旋转木马
        var carousel = new Carousel('#demo6', {
            effect: 'scrollx',
            easing: 'easeOutStrong',
            steps: 5,
            viewSize: [680],
            circular: false,
            mouseAsTouch:true,
            prevBtnCls: 'prev',
            nextBtnCls: 'next',
            //autoplay:true,//是否自动切换
            disableBtnCls: 'disable',
            lazyDataType: 'img-src'
        });

        window.carousel = carousel;
    });
});