KISSY.use('core', function (S) {
    var $ = S.all, t = $('#t');
    var run = $('#run');

    var FRICTION = 0.5;
    var ACCELERATION = 30;
    var THETA = Math.log(1 - (FRICTION / 10));
    var ALPHA = THETA / ACCELERATION;

    run.attr('disabled', false);
    run.on('click', function () {
        run.attr('disabled', true);
        // alert(t.isRunning());

        var startVelocity = 0.5;
        var startValue = parseInt(t.css('left'));
        var velocity = startVelocity * ACCELERATION;

        t.animate({
            left: {
                frame: function (anim,fx) {
                    var deltaTime = S.now() - anim.startTime;
                    // Math.exp(-0.1) -> Math.exp(-999)
                    // big -> small
                    // 1 -> 0
                    var frictionFactor = Math.exp(deltaTime * ALPHA);
                    var value = parseInt(startValue - velocity * (1 - frictionFactor) / THETA);
                    //S.log(frictionFactor*velocity);
                    t[0].style.left = value + 'px';
                    if (fx.lastValue === value) {
                        S.log('duration: ' + deltaTime);
                        fx.pos = 1;
                    }
                    fx.lastValue = value;

                }
            }
        }, {
            duration: 999,
            complete: function () {
                run.attr('disabled', false);
            }
        });
    });
});