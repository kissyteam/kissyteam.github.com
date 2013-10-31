KISSY.use('core', function (S) {
    S.all('#run').on('click', function () {
        this.disabled = true;
        var start = S.now();
        var t = S.all('#t');
        t.animate({
            height:190,
            left: {
                easing: 'easeOut',
                value: 500,
                frame: function (anim,fx) {
                    alert(fx);
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