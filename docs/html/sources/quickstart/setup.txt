.. _setup:

Setup
=============================

如何使用 KISSY ? 

* 先将 `https://github.com/kissyteam/kissy/raw/master/build/kissy.js <https://github.com/kissyteam/kissy/raw/master/build/kissy.js>`_ 引入到你的页面;
* 接着, **稍加** 编写一些代码, 就可以实现下面的效果了:

.. raw:: html
   
    <div class="demo">
        <style>
            .demo-wrap {
                position: relative;
                margin-top: 20px;
                height: 110px;
            }
            #demo-txt {
                position: absolute;
                left: 400px;
                top: 0;
                color:#333333;
                font: normal 26px/2 Futura,"Century Gothic",AppleGothic,sans-serif;
                opacity: 0;
                filter: alpha(opacity:0);
            }
            #demo-img {
                position: absolute;
                left: 0;
                top: 0;
            }
        </style>
        
        <button type="button" id="demo-btn" autocomplete="off">Click Me!</button>
        <div class="demo-wrap">
            <img id="demo-img" src="http://kissyteam.github.com/kissy/docs/assets/logo.png" />
            <h2 id="demo-txt">Hello KISSY, NOT KITTY!</h2>
        </div>        
        <script>
            KISSY.ready(function(S){
                var DOM = S.DOM, Event = S.Event,
                    btn = DOM.get('#demo-btn');
                
                Event.on(btn, 'click', function() {
                    DOM.attr(btn, 'disabled', true);

                    S.Anim('#demo-img', 'left: 400px; opacity: 0', 2, 'easeOut', function() {
                        S.Anim('#demo-txt',
                               'left: 0; opacity: 1; fontSize: 28px',
                               2, 'bounceOut').run();
                    }).run();
                });
            });
        </script>
    </div>
    


使用 KISSY 实现上面的效果, 只需大约 10 行代码.

下一节将会详细介绍上面的示例，请看 :ref:`Hello KISSY  <hellokissy>` ~



