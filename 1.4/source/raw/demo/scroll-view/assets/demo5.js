KISSY.config('packages', {
    slide: {
        base: './assets/'
    },
    'image-zoomer': {
        base: 'http://dev.kissyui.com/kissy/src/scroll-view/sub-modules/plugin/scrollbar/demo/'
    }
});
KISSY.use('node,slide,image-zoomer', function (S, Node, Slide, imageZoomer) {
    var $ = Node.all;
    var slide = new Slide({
        srcNode: '#demo2',
        hasTrigger: true,
        direction: 'y'
    }).render();
    slide.triggers.each(function (t, i) {
        t.html(i + 1);
    });
    $('#demo2').delegate(Node.Gesture.tap, 'img',function (e) {
        imageZoomer.showImage({
            src: e.currentTarget.src,
            width: 1200,
            height: 1200
        });
    });
    //  .on('touchstart', function (e) {
    //          // ios mousedown bug
    //          e.preventDefault();
    //      });
    window.slide = slide;
    $('#wait').css({
        color: 'green'
    }).html('ok');
});