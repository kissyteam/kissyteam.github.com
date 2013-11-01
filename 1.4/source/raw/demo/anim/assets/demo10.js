KISSY.use('core', function (S) {
    S.all('#run').on('click', function () {
        this.disabled = true;
        var start = S.now();
        var t = S.all('#t');
        alert("\u4E2D\u95F4\u8FC7\u7A0B\u53C2\u6570\u8BE6\u89C1 console");
        t.animate({
            height:190,
            left: {
                easing: 'easeOut',
                value: 500,
                frame: function (anim,fx) {
                    console.log(fx.pos);
                }
            },
            backgroundPosition: {
                easing: 'easeInStrong',
                fx: {
                    frame: function (anim, fx) {
                        var pos=fx.pos;
                        var top = -140 * pos;
                        var left = -450 * pos;
                        t[0].style.backgroundPosition = left + 'px ' + top + 'px';
                    }
                }
            }
        }, {
            duration: 5,
            easing: 'easeIn',
            complete: function () {
                alert('ok: ' + (S.now() - start));
            }
        })
    });
});