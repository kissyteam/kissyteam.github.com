KISSY.use('core', function (S) {
    var $ = S.all;
    $('#basic').delegate('mouseenter', '.square', function (e) {
        var currentTarget = $(e.currentTarget);
        if (!currentTarget.isRunning()) {
            S.log('run:' + currentTarget.html())
            currentTarget.animate({
                transform: currentTarget.attr('data-trans')
            }, {
                //useTransition:1,
                duration: 0.4
            });
            currentTarget.animate({
                x: 1
            }, {
                //useTransition:1,
                delay: 2,
                duration: 0.1,
                complete: function () {
                    currentTarget.css('opacity', .5)
                }
            }).animate({
                        transform: ''
                    }, {
                        //useTransition:1,
                        duration: 0.4,
                        complete: function () {
                            currentTarget.css('opacity', 1)
                        }
                    });
        }
    });

    var transforms = [
                'scale(.66) skewY(-45deg)',
                'translate(20px) scale(.66) skewY(-45deg)',
                'translate(150px,50px) scale(1.5,1)',
                'translate(280px) scale(.66) skewY(45deg)',
                'translate(300px) scale(.66) skewY(45deg)'
            ],
            $squares = $('#advanced .square').each(function (v, i) {
                $(v).css({ transform: transforms[i] });
            });

    $('#advanced').on('mouseenter',function () {
        $squares.each(function (v, i) {
            if (i != 3) {
                //return;
            }
            v.stop();
            v.animate({ transform: transforms[i + 1] }, {
                duration: 0.4
            });

        });
    }).on('mouseleave', function () {
        $squares.each(function (v, i) {
            if (i != 3) {
                //return;
            }
            v.stop();
            v.animate({ transform: transforms[i] }, {
                duration: 0.4
            });
        });
    });
});