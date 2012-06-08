 KISSY.use("switchable", function(S,Switchable) {
    //通过DOM元素新建旋转木马
    var tiny_slide = new Switchable.Carousel('#J_TinySlide', {
        activeIndex: 0,
        effect: 'scrollx',
        easing: 'easeOutStrong',
        viewSize: [274],
        circular: true,
        prevBtnCls: 'tiny-prev',
        nextBtnCls: 'tiny-next',
        interval: 6,
        lazyDataType: 'img-src' //延迟加载图片？
    });
});