.. _hellokissy:


Hello KISSY
===============================================

在前一小节中的示例, 用到了 KISSY 常用的 ``DOM``, ``Event``, ``Anim`` 等功能, 

完整代码如下:

.. code-block:: javascript
   :linenos:
   
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
        


这个例子中, 
 #. ``KISSY.ready()`` 指在DOM加载完毕之后执行代码. 就像jQuery中的 ``$(document).ready()`` ;
 #. ``KISSY.DOM`` , KISSY的DOM模块 [1]_ , 提供基本的DOM操作功能, 如元素的选择和遍历, css 属性的获取和修改, 还能获取位置大小等;
 #. ``KISSY.Event`` , KISSY的Event模块 [2]_ , 提供事件处理功能, 如基本的事件添加删除功能, 另外还更好的支持 ``mouseenter/mouseleave`` , ``focusin/focusout`` 事件, 在这个例子中, 给按钮添加 ``click`` 事件;
 #. ``DOM.get(selector, context)`` , 在 ``context`` 中, 根据给出的 ``selector`` 获取DOM树上对应的 **一个节点** , ``context`` 不是必需的; 另外还有一个类似的方法叫做 ``DOM.query(selector, context)`` , 与前者不同的是, 得到 **所有** 符合条件的元素;
 #. ``DOM.css()``, 获取/设置元素某个css属性, 这里获得元素的 ``left`` 属性;
 #. ``DOM.attr()/DOM.removeAttr()``, 获取/设置元素某个属性, 这里, 在动画开始前给按钮设置不可用状态, 当动画结束时恢复可用状态;
 #. ``KISSY.Anim()``, 提供动画效果, 通过给元素设定参数, 就可以让这个元素动态的从当前参数变化到设定的目标参数;



DOM/Event
----------------------------
经过上面的例子, 应该让你了解了 KISSY 最基本的 ``DOM/Event`` 的使用. 下面, 再来看另外一个例子, 加深下映象吧!

我们在做导航栏时经常需要处理包含二级导航的情况, 例如下面的效果:

.. raw:: html
   
    <div class="demo">
        <style>
            .menu, .menu li {
                list-style: none;
            }
            .menu a {
                color: white;
                text-shadow: 1px 1px 2px black;
            }
            .menu li {
                background: #fd8c01;
                background: -webkit-gradient(linear, left top, left bottom, from(#fedc89), to(#fd8c01));
                background: -moz-linear-gradient(top, #fedc89, #fd8c01);
                /*filter: progid:DXImageTransform.Microsoft.gradient(startColorstr = '#fedc89', endColorstr = '#fd8c01');*/
                text-align:center;
                width:100px;
            }
            .menu {
                *height: 40px;
            }
            .menu .headlink {
                display: inline-block;
                *display: block;
                *float: left;
                position: relative;
                zoom:1;
            }
            .submenu {
                padding-left: 0;
                position: absolute;
                left: 0;
                *top: 22px;
                border: 4px solid #CCC;
            }
            .hide {
                display: none;
            }
        </style>
        <ul id="J_menu" class="menu">
            <li class="headlink"><a href="#">Home</a></li>
            <li class="headlink">
                <a href="#">Widgets</a>
                <ul class="submenu hide">
                    <li><a href="#">Switchable</a></li>
                    <li><a href="#">Suggest</a></li>
                </ul>
            </li>
            <li class="headlink">
                <a href="#">Experiments</a>
                <ul class="submenu hide">
                    <li><a href="#">Editor</a></li>
                    <li><a href="#">Overlay</a></li>
                </ul>
            </li>
        </ul>
        <script>
            KISSY.ready(function(S){
                var DOM = S.DOM,
                    Event = S.Event;
                
                Event.on('.headlink', 'mouseenter', function(e) {
                    DOM.removeClass(DOM.get('.submenu', this), 'hide');
                });
                Event.on('.headlink', 'mouseleave', function(e) {
                    DOM.addClass(DOM.get('.submenu', this), 'hide');
                });
                
            });
        </script>
    </div>

虽说, 我们也可以用 ``:hover`` 伪类来实现二级导航, 但在IE6下只有 ``a`` 支持 ``hover`` 伪类, 所以还是得稍加一些 js 来实现:

.. code-block:: javascript
   :linenos:
   
   Event.on('.headlink', 'mouseenter', function(e) {
       DOM.removeClass(DOM.get('.submenu', this), 'hide');
   });
   Event.on('.headlink', 'mouseleave', function(e) {
       DOM.addClass(DOM.get('.submenu', this), 'hide');
   });
   


这里, KISSY 内置了 ``mouseenter/mouseleave`` 事件, 可以像使用原生事件一样的使用她们.


``DOM/Event`` 是最基本的功能了, 掌握了这两个, 就能最基本的使用KISSY了, 接下来将介绍和 jQuery/YUI3 中类似的 :ref:`Node <usenode>` 对象的使用.


.. rubric:: 参考链接

.. [1] `DOM文档 <http://KISSYteam.github.com/KISSY/docs/dom/index.html>`_ ;
.. [2] `Event文档 <http://KISSYteam.github.com/KISSY/docs/event/index.html>`_ ;

