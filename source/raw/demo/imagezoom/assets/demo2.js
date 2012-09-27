KISSY.use("dom,event,imagezoom", function(S, DOM, Event, ImageZoom) {
    // 内嵌模式
    new ImageZoom({
        imageNode: "#inner",
        type: 'inner',
        // 内嵌模式下, 设置对齐是没有用的, 默认都是覆盖在小图之上
        align:{
            node: "#inner",
            points: ["tr","tl"],
            offset: [0, 0]
        },
        bigImageSrc: "http://img03.taobaocdn.com/bao/uploaded/i3/T1fftwXf8jXXX7ps79_073021.jpg",
        bigImageWidth:900,
        bigImageHeight:900
    });
});
