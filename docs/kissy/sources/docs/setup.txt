.. _setup:



Setup
=============================

如何使用 KISSY ? 

* 先将kissy.js, `http://github.com/kissyteam/kissy/raw/master/build/packages/kissy.js <http://github.com/kissyteam/kissy/raw/master/build/packages/kissy.js>`_ 引入到你的页面上;
* 接着, **稍加** 编写一些js, 就可以实现下面的效果了;

..
    * 另外, Kissy也提供了CSS的reset和grid基本样式, 如果你需要, 可以引入 `http://github.com/kissyteam/kissy/raw/master/build/cssreset/reset.css <http://github.com/kissyteam/kissy/raw/master/build/cssreset/reset.css>`_ 和 `http://github.com/kissyteam/kissy/raw/master/build/cssgrids/grids.css <http://github.com/kissyteam/kissy/raw/master/build/cssgrids/grids.css>`_ ;
    * 这里还有base.css, 是将reset和grid合并起来的一个文件, `http://github.com/kissyteam/kissy/raw/master/build/cssbase/base.css <http://github.com/kissyteam/kissy/raw/master/build/cssbase/base.css>`_ , 有关布局样式, 可以使用 `自动生成工具 <http://kissyteam.github.com/kissy/src/cssgrids/css-generator.html>`_ .


.. raw:: html
   
    <div class="demo">
        <style>
            .imgwrap {
                position: relative;
                padding: 10px;
                height: 110px;
            }
            #J_kissy {
                position: absolute;
                left: 400px;
                top: 0;
                opacity: 0;
                font-size: 14px;
                line-height: 2;
                filter: alpha(opacity:0);
            }
            #J_img {
                position: absolute;
                left: 0;
                top: 0;
            }
            
        </style>
        
        <button type="button" id="J_click">Click Me!</button>
        <div class="imgwrap">
            <img id="J_img" src="http://kissyteam.github.com/kissy/docs/assets/logo.png" />
            <h2 id="J_kissy">Hello Kissy, NOT Kitty!</h2>
        </div>
        
        <script>
            KISSY.ready(function(S){
                var DOM = S.DOM,
                    Event = S.Event;
                
                var btn = DOM.get('#J_click');
                
                Event.on(btn, 'click', function(e) {
                    DOM.attr(btn, 'disabled', true);
                    var flag = DOM.css(DOM.get('#J_img'), 'left'),
                        obj = {'0px': ['#J_img', '#J_kissy'],
                                '400px': ['#J_kissy', '#J_img']},
                        anim = {'0px': [],
                                '400px': []};
                    if (!parseInt(flag)) {
                        anim[flag][0] = {'left': '400px', 'opacity': '0'};
                        anim[flag][1] = {'left': '0px', 'opacity': '1', 'font-size': '28px'};
                    } else {
                        anim[flag][0] = {'left': '400px', 'opacity': '0', 'font-size': '14px'};
                        anim[flag][1] = {'left': '0px', 'opacity': '1'};
                    } 
                    S.Anim(obj[flag][0],
                            anim[flag][0],
                            2,
                            S.Easing.easeOut,
                            function(){
                                S.Anim(obj[flag][1],
                                        anim[flag][1],
                                        2,
                                        S.Easing.easeOut, 
                                        function(){
                                            DOM.removeAttr(btn, 'disabled');
                                        }).run();
                            }).run();
                });
            });
        </script>
        
    </div>
    


使用 KISSY 实现上面的效果, 只需要不到20行的代码, 下面的章节会一步一步地教你学习 KISSY ! 

下一节将会详细介绍本节中出现的示例  :ref:`Hello Kissy <hellokissy>` ~



