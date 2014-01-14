KISSY.config('packages', {
    slide: {
        debug:1,
        base: './assets/'
    }
});
KISSY.use('node,slide,gallery/image-gesture-zoom/1.1/', function (S, Node, Slide, imageZoomer) {
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