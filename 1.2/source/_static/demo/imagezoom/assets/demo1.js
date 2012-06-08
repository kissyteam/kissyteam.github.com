KISSY.use("dom,event,imagezoom", function(S, DOM, Event, ImageZoom) {
    // 标准模式下
    new ImageZoom({
        imageNode: "#standard",
        // 设置与小图左对齐
        align:{
            node: "#standard",
            points: ["tr","tl"],
            offset: [10, 0]
        },
        bigImageSrc: "http://img03.taobaocdn.com/bao/uploaded/i3/T1fftwXf8jXXX7ps79_073021.jpg",
        bigImageWidth:900,
        bigImageHeight:900
    });
});
