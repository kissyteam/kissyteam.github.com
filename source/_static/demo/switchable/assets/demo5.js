KISSY.use("event,switchable", function (S, Event) {
    var Slide = S.Slide;
    S.ready(function (S) {
        Slide('#demo5', {
            contentCls : 'news-items',
            hasTriggers : false,
            effect : 'scrolly',
            easing : 'easeOutStrong',
            interval : 3,
            duration : .2
        });
    });
});
 