KISSY.use("dom,event,imagezoom", function(S, DOM, Event, ImageZoom) {
    var m = new ImageZoom({
        imageNode: "#multi",
        align:{
            node: "#multi",
            points: ["tr","tl"],
            offset: [0, 0]
        }
    });
    // 切换时, 动态设置大图路径
    Event.on("#imgList img", 'click', function() {
        var data = DOM.attr(this, 'data-ks-imagezoom');
        DOM.attr('#multi', 'src', data + '_310x310.jpg');
        m.set('hasZoom', DOM.attr(this, 'data-has-zoom'));
        if (data) {
            m.set('bigImageSrc', data);
        }
    });
});
