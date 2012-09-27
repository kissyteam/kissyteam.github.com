KISSY.use("dom,event,imagezoom", function(S, DOM, Event, ImageZoom) {
    var m = new ImageZoom({
        imageNode: "#multi",
        align:{
            node: "#multi",
            points: ["tr","tl"],
            offset: [0, 0]
        },
        bigImageWidth:900,
        bigImageHeight:900
    });
    // 切换时, 动态设置大图路径
    Event.on("#imgList img", 'click', function() {
        var data = DOM.attr(this, 'data-ks-imagezoom');
        m.set('hasZoom', DOM.attr(this, 'data-has-zoom'));
        m.changeImageSrc(data + '_310x310.jpg');
        if (data) {
            m.set('bigImageSrc', data);
            m.set("bigImageWidth",parseInt(DOM.attr(this, 'data-bigimagewidth')));
            m.set("bigImageHeight",parseInt(DOM.attr(this, 'data-bigimageheight')));
        }
    });
});
