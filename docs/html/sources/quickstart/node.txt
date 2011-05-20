.. _usenode:


Node 初步
===============================================

如果你使用过 jQuery, YUI3 或 Ext, 那对链式风格应该已有了解. 链式风格的书写让人使用更加方便, 代码看起来也更整洁.

KISSY 也提供了这种链式风格的支持.


简易 API
-------------------

KISSY 提供两种使用方式:
 #. ``S.one``  -  根据 css selector, 返回 ``Node`` 对象;
 #. ``S.all``  -  根据 css selector, 返回 ``NodeList`` 对象;

上面两个方法, 和 ``S.get`` / ``S.query`` 是遥相呼应的.
唯一的不同是, ``get/query`` 返回的是原生 DOM ``Node/NodeList``.
   
而 ``KISSY.Node/NodeList`` 类似 jQuery 全局对象, 但只包含 DOM/Event 等方法, 我们可以这样写代码：


.. code-block:: javascript
   
   S.one('#test').parent().next().html('<p>').on('click', function() { /* ... */ });


基本上和 jQuery 的语法风格是一样的, 大部分 API 也一样.


使用范例
-------------------
这里我们拿先前玉伯博客 [2]_ 上的 ``KISSY.all('.good-student')`` 举个 Node 使用的小例子.
   
实现的效果就是, 点击按钮之后, 好多好学生都慢慢漂入 Taobao 中^o^
   
.. raw:: html
   
   <div class="demo" style="height: 500px;">
        <style>
            .demo {
                position: relative;
            }
            .good-student {
                background:none repeat scroll 0 0 #E6FFFF;
                border:1px solid #CCCCCC;
                float:left;
                padding:5px;
                position:absolute;
            }
            #taobao {
                height:300px;
                left:50px;
                position:absolute;
                top:200px;
                width:700px;
            }
            #dest {
                border:1px dashed #CCCCCC;
                bottom:0;
                height:200px;
                position:absolute;
                right:0;
                width:200px;
            }
        </style>
        <button id="go">Go!</button>
        
        <div class="good-student">Alan Turing</div>
        <div class="good-student">You</div>
        <div class="good-student">马云</div>
        <div class="good-student">Bill Gates</div>
        <div class="good-student">Ted Hoff</div>
        <div class="good-student">Steve Wozniak</div>
        <div class="good-student">Bob Bemer</div>
        <div class="good-student">Gary Kildall</div>
        <div class="good-student">Vint Cerf</div>
        <div class="good-student">老陆</div>
        
        <div id="taobao"><div id="dest"></div></div>
        
        <script>
        KISSY.ready(function(S) {
            var DOM = S.DOM, Event = S.Event, timers = [];
        
            S.NodeList.prototype.icanfly = function() {
                var targetX = 500, targetY = 100,
                    maxX = 650, maxY = 250;
        
                S.each(this, function(item, i) {
                    var x = 0, y = 0, speed = Math.random() * 80;
                    timers[i] = S.later(function() {
                        x += Math.random() * speed * (x > maxX ? -1 : 1);
                        y += Math.random() * speed * (y > maxY ? -1 : 1);
                        DOM.css(item, { left: x, top: y });
                        if(x > targetX && y > targetY && x < maxX && y < maxY) {
                            timers[i].cancel();
                        }
                    }, 100, true);
                });
            };
        
            S.one('#go').on('click', function() {
                S.each(timers, function(timer) { timer.cancel() });
                S.all('.good-student').appendTo('#taobao').icanfly();
            });
        })
        </script>
        
   </div>


再来看看源码:
   
.. code-block:: javascript
   :linenos:

   KISSY.ready(function(S) {
       var DOM = S.DOM, Event = S.Event, timers = [];
   
       S.NodeList.prototype.icanfly = function() {
           var targetX = 600, targetY = 200,
               maxX = 750, maxY = 350;
   
           S.each(this, function(item, i) {
               var x = 0, y = 0, speed = Math.random() * 80;
               timers[i] = S.later(function() {
                   x += Math.random() * speed * (x > maxX ? -1 : 1);
                   y += Math.random() * speed * (y > maxY ? -1 : 1);
                   DOM.css(item, { left: x, top: y });
                   if(x > targetX && y > targetY && x < maxX && y < maxY) {
                       timers[i].cancel();
                   }
               }, 100, true);
           });
       };
   
       S.one('#go').on('click', function() {
           S.each(timers, function(timer) { timer.cancel() });
           S.all('.good-student').appendTo('#taobao').icanfly();
       });
   })
   

在这个小例子中, 先从 21 行开始看:

 #. ``S.one('#go').on('click', function(){});``, 选择 id 为 ``go`` 的元素, 即 button, 然后绑定点击事件.
 #. ``S.all('.good-student').appendTo('#taobao').icanfly();``, 获取所有 class 为 good-student 的元素, 即那些所有蓝色背景的小框, 然后 ``appendTo`` 到 id 为 taobao 的容器中, 最后执行第 4 行定义的 ``icanfly`` 动作.
 #. ``S.NodeList.prototype.icanfly``, 为 ``NodeList`` 添加一个 ``icanfly`` 方法, 再给 ``NodeList`` 中每个对象设置一个随机运动速度的定时器 ``timer``, 然后定时器不断修改该对象的位置, 到达目标区域时清楚定时器.
 #. 另外, 原生 ``DOMNode`` 和 Node 对象的相互转换, 可以使用 ``new S.Node(anElment)`` 将 ``DOMNode`` 转换成 ``Node`` 对象; 使用 ``node.getDOMNode()`` 获得对应的 ``DOMNode``; 对于 ``NodeList`` 也有对应的方法, 移步见 [1]_.


使用 ``Node`` 可以让你一直 ``.`` 下去, 只要你愿意! 

好了, 关于 ``Node`` 就告一段落, 下面会讲述目前 Web 站点中经常被使用的技术 -- :ref:`Ajax <ajax>` 异步请求!


.. rubric:: 参考链接

.. [1] `Node API 文档 <http://kissy.googlecode.com/svn/trunk/docs/node/index.html>`_
.. [2] `Join Taobao 例子 <http://lifesinger.org/blog/2010/07/kissy-all-good-student/>`_
