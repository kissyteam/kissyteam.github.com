.. _widgets:


Widgets
===============================================
KISSY 提供种类丰富的 UI 组件, 下面介绍下强大的 ``Switchable``.


Switchable
-------------------
``Switchable`` 是最基本的切换组件, 已有四种扩展组件 ``S.Tabs`` , ``S.Slide`` , ``S.Carousel`` , ``S.Accordin``, 能满足大多数应用需求.


Slide 实例
-------------------
Slide 效果就是 Taobao 上最最经常见的多张图片切换效果, 如:

.. raw:: html
    
    <div class="demo">
        <style>
            .demo ol {
                margin: 0;
                padding: 0;
            }
            .demo li {
                list-style: none;
                margin-bottom: 0;
            }
            #demo1 { position: relative; width: 470px; height: 150px; border: 1px solid #B6D1E6; overflow: hidden; }
            #demo1 .ks-switchable-nav { position: absolute; bottom: 5px; right: 5px; z-index: 99; margin: 0; }
            #demo1 .ks-switchable-nav li {
                float: left;
                width: 16px;
                height: 16px;
                line-height: 16px;
                margin-left: 3px;
                background-color: #FCF2CF;
                border: 1px solid #F47500;
                color: #D94B01;
                text-align: center;
                cursor: pointer;
                list-style: none;
            }
            #demo1 .ks-switchable-nav li.ks-active {
                width: 18px;
                height: 18px;
                line-height: 18px;
                margin-top: -1px;
                color: #FFF;
                background-color: #FFB442;
                font-weight: bold;
            }
            #demo1 .ks-switchable-content li { height: 150px; width: 470px; overflow: hidden; }
            .hidden { display: none; }
        </style>
        
        <div id="demo1" class="section loading">
            <ol class="ks-switchable-content">
                <li><a href="#" target="_blank"><img alt="" src="http://img01.taobaocdn.com/tps/i1/T1dqdJXeJqXXXXXXXX-470-150.jpg"/></a></li>
                <li class="hidden"><a target="_blank" href="#"><img alt="" width="470" height="150" border="0" src="http://img03.taobaocdn.com/tps/i3/T1dHlJXcRDXXXXXXXX-470-150.gif"/></a></li>
                <li class="hidden"><a target="_blank" href="#"><img alt="" width="470" height="150" border="0" src="http://img.alimama.cn/bcrm/adboard/picture/2010-09-17/100917152855813.jpg"/></a></li>
                <li class="hidden"><a href="#" target="_blank"><img alt="" src="http://img.alimama.cn/bcrm/adboard/picture/2010-08-20/100820101156005.jpg"/></a></li>
                <li class="hidden"><a href="#" target="_blank"><img alt="" src="http://img01.taobaocdn.com/tps/i1/T1uQNLXjNeXXXXXXXX-470-150.jpg"/></a></li>
            </ol>
        </div>
        <script>
            KISSY.use('switchable', function(S) {
                S.Slide('#demo1', {
                    effect: 'scrolly',
                    easing: 'easeOutStrong'
                });
            });
        </script>
    </div>


Slide 效果, 简简单单的使用 ``S.Slide(selector, cfg)`` 即可, 如: 

.. code-block:: javascript
   :linenos:

   KISSY.use('switchable', function(S) {
       S.Slide('#demo1', {
           effect: 'scrolly',       // 指定哪种效果, 可选: 'scrollx', 'scrolly', 'fade'
           easing: 'easeOutStrong'  // 设置平滑函数
       });
   });


Config 选项
--------------------
Switchable 类组件, 提供了丰富的配置选项, 详见 API 文档 [1]_


就是这么简单~~ 

Switchable 组件先介绍到这里. 更多关于 Switchable 相关的例子见 [2]_


下一节将介绍, 如果你需要自己写个组件, 该注意什么? -- `自定义组件 <yourwidgets.html>`_ ...


.. rubric:: 参考链接

.. [1] `Switchable API 文档 <http://kissyteam.github.com/kissy/docs/switchable/index.html>`_
.. [2] `Switchable Demo 页面 <http://kissyteam.github.com/kissy/src/switchable/test.html>`_
