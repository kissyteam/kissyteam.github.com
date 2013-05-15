.. _quickstart-usenode:


Node 初步
===============================================

如果你使用过 jQuery, YUI3 或 Ext, 那对链式风格应该已有了解. 链式风格的书写让人使用更加方便, 代码看起来也更整洁.

KISSY 也提供了这种链式风格的支持.


简易 API
-------------------

KISSY 提供两种使用方式:

#. :func:`S.one <node.NodeList.one>`  -  根据 css selector, 返回  :class:`~node.NodeList` 对象;
#. :func:`S.all <node.NodeList.all>`  -  根据 css selector, 返回 :class:`~node.NodeList` 对象;

上面两个方法, 和 :func:`dom.get <dom.get>` / :func:`dom.query <dom.query>` 是遥相呼应的.
唯一的不同是, ``get/query`` 返回的是原生 DOM ``Node/NodeList``.
   
而 ``KISSY.NodeList`` 类似 jQuery 全局对象, 但只包含 DOM/Event 等方法, 我们可以这样写代码：


.. code-block:: javascript
   
   S.one('#test').parent().next().html('<p>').on('click', function() { /* ... */ });


基本上和 jQuery 的语法风格是一样的, 大部分 API 也一样.


使用范例
-------------------
这里我们拿先前玉伯博客 [2]_ 上的 ``KISSY.all('.good-student')`` 举个 Node 使用的小例子.
   
实现的效果就是, 点击按钮之后, 好多好学生都慢慢漂入 Taobao 中^o^
   
.. raw:: html

   <script src="http://a.tbcdn.cn/s/kissy/1.3.0/seed.js" data-config="{combine:true}"></script>
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
        KISSY.use('dom,event,node',function (S,DOM,Event,Node) {
            var timers = [];
        
            var i_can_fly = function(self) {
                var targetX = 500, targetY = 100,
                    maxX = 650, maxY = 250;
        
                S.each(self, function(item, i) {
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
        
            Node.one('#go').on('click', function() {
                S.each(timers, function(timer) { timer.cancel() });
                i_can_fly(Node.all('.good-student').appendTo('#taobao'));
            });
        })
        </script>
        
   </div>


再来看看源码:
   
.. code-block:: javascript
   :linenos:

   KISSY.use('dom,event,node',function (S,DOM,Event,Node) {
               var timers = [];

               var i_can_fly = function(self) {
                   var targetX = 500, targetY = 100,
                       maxX = 650, maxY = 250;

                   S.each(self, function(item, i) {
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

               Node.one('#go').on('click', function() {
                   S.each(timers, function(timer) { timer.cancel() });
                   i_can_fly(Node.all('.good-student').appendTo('#taobao'));
               });
           })
   

在这个小例子中, 先从 21 行开始看:

 #. ``Node.one('#go').on('click', function(){});``, 选择 id 为 ``go`` 的元素, 即 button, 然后绑定点击事件.
 #. ``Node.all('.good-student').appendTo('#taobao').icanfly();``, 获取所有 class 为 good-student 的元素, 即那些所有蓝色背景的小框, 然后 ``appendTo`` 到 id 为 taobao 的容器中, 最后执行第 4 行定义的 ``icanfly`` 动作.
 #. ``icanfly``, 给 ``NodeList`` 中每个对象设置一个随机运动速度的定时器 ``timer``, 然后定时器不断修改该对象的位置, 到达目标区域时清除定时器.
 #. 另外, 原生 ``DOMNode`` 和 Node 对象的相互转换, 可以使用 ``new Node(anElment)`` 将 ``DOMNode`` 转换成 ``Node`` 对象; 使用 ``node.getDOMNode()`` 获得对应的 ``DOMNode``; 使用 ``node.getDOMNodes()`` 获得对应的 ``DOMNodes``;.


使用 ``Node`` 可以让你一直 ``.`` 下去, 只要你愿意! 

|

好了, 关于 ``Node`` 就告一段落, 下面会讲述目前 Web 站点中经常被使用的技术 -- :ref:`Ajax <quickstart-ajax>` 异步请求!


.. rubric:: 参考链接

.. [1]  :mod:`Node API <node>`
.. [2] `Join Taobao 例子 <http://lifesinger.org/blog/2010/07/kissy-all-good-student/>`_
