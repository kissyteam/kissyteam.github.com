.. _widgets:


组件
===============================================
KISSY UI库, 提供种类丰富的UI组件, 虽然目前发布的组件为数不多 , 但相信不久之后, 会有更多的组件开发完成.

下面介绍下 KISSY 已有组件 ``Switchable`` [1]_ .


Switchable
-------------------
``Switchable`` 是最基本的切换组件, 已有四种扩展组件 ``S.Tabs`` , ``S.Slide`` , ``S.Carousel`` , ``S.Accordin`` , 基本上这几种能够满足你大多数的应用需求. 


使用 Slide
-------------------
Slide 效果就是 Taobao 上最最经常见的多张图片相互切换效果, 如:

.. raw:: html
    
    <div class="demo">
        <script src="http://kissyteam.github.com/kissy/build/switchable/switchable-pkg-min.js"></script>
        <script src="http://kissyteam.github.com/kissy/src/switchable/plugin-countdown.js"></script>
        <style>
            .demo ol {
                margin: 0;
                padding: 0;
            }
            .demo li {
                list-style: none;
            }
            #demo1 { position: relative; width: 470px; height: 150px; border: 1px solid #B6D1E6; overflow: hidden; }
            #demo1 .ks-switchable-nav { position: absolute; bottom: 5px; right: 5px; z-index: 99; }
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
            /* for countdown plugin */
            #demo1 .ks-switchable-nav li,
            #demo1 .ks-switchable-trigger-content {
                position: relative;
            }
            #demo1 .ks-switchable-trigger-mask {
                position: absolute;
                right: 0;
                width: 18px;
                height: 18px;
                background-color: #FF9415;
                visibility: hidden
            }
            #demo1 .ks-active .ks-switchable-trigger-mask {
                visibility: visible
            }
        </style>
        
        <div id="demo1" class="section loading">
            <ol class="ks-switchable-content">
                <li><a href="#" target="_blank"><img alt="" src="http://img01.taobaocdn.com/tps/i1/T1dqdJXeJqXXXXXXXX-470-150.jpg"/></a></li>
                <li class="hidden"><a target="_blank" href="#"><img alt="" width="470" height="150" border="0" src="http://img03.taobaocdn.com/tps/i3/T1dHlJXcRDXXXXXXXX-470-150.gif"/></a></li>
                <li class="hidden"><a target="_blank" href="#"><img alt="" width="470" height="150" border="0" src="http://img.alimama.cn/bcrm/adboard/picture/2010-08-18/100818175417060.jpg"/></a></li>
                <li class="hidden"><a href="#" target="_blank"><img alt="" src="http://img.alimama.cn/bcrm/adboard/picture/2010-08-20/100820101156005.jpg"/></a></li>
                <li class="hidden">
                    <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="470" height="150" class="holiday-logo">
                        <param name="movie" value="http://img04.taobaocdn.com/tps/i4/T1bblrXfBrXXXXXXXX.swf"/>
        
                        <param name="quality" value="high"/>
                        <param name="swfversion" value="8.0.0"/>
                        <param name="wmode" value="opaque"/>
                        <!--[if !IE]>-->
                        <object type="application/x-shockwave-flash" data="http://img04.taobaocdn.com/tps/i4/T1bblrXfBrXXXXXXXX.swf" width="470" height="150" name="holiday-logo" class="holiday-logo">
                            <param name="wmode" value="opaque"/>
                        </object>
                        <!--<![endif]-->
                    </object>
                </li>
            </ol>
        </div>
        <script>
            KISSY.ready(function(S) {
                S.Slide('#demo1', {
                    effect: 'scrolly',
                    easing: 'easeOutStrong',
                    countdown: true,
                    countdownFromStyle: 'width:18px'
                });
            });
        </script>
    </div>
    


Slide 效果, 简简单单的使用 ``S.Slide(selector, cfg)`` 即可, 如: 

.. code-block:: javascript
   :linenos:
   
   KISSY.ready(function(S) {
       S.Slide('#demo1', {
           effect: 'scrolly',       // 指定哪种效果, 可选: 'scrollx', 'scrolly', 'fade',
                                    // 或者直接传入 自定义的效果函数
           easing: 'easeOutStrong', // 设置哪种擦除效果
           countdown: true,         // 是否显示导航上的倒计时功能
           countdownFromStyle: 'width:18px' // 倒计时的最终样式
       });
   });
   



使用 Carousel
-------------------
Carousel , 中文名字叫 旋转木马, 比较奇怪为何叫这个?  不管如何, 反正还是一排东西切换来切换去的. 比如淘宝首页 Slide 下面的品牌广告展示:

.. raw:: html
    
    <div class="demo">
        <style>
            .mall-content {
                height:135px;
                margin:0 0 0 15px;
                overflow:hidden;
                position:relative;
                width:440px;
            }
            .mall-content ol {
                float:left;
                position:absolute;
                width:1260px;
            }
            .mall-content .ks-switchable-content li {
                border-top:1px solid #D8D8D8;
                float:left;
                font-size:0;
                height:135px;
                overflow:hidden;
                position:relative;
                width:440px;
            }
            .mall-content .ks-switchable-nav {
                position: absolute;
                right: 30px;
                top: -10px;
                margin: 0;
                padding: 0;
            }
            .mall-content .ks-switchable-nav li {
                float: left;
                padding: 5px;
                font-size: 18px;
                cursor: pointer;
            }
            .mall-content .ks-switchable-nav li.ks-active {
                color: #C8282B;
            }
            
        </style>
        <div id="demo2" class="mall-content">
            <ol class="ks-switchable-content">
                <li>
                    <div>
                        <a title="独享VIP" href="#"><img height="135" width="110" alt="独享VIP" src="http://img02.taobaocdn.com/tps/i2/T1zFpJXlhNXXXXXXXX-110-135.png"></a>
                        <a title="数码电器" href="#"><img height="135" width="110" alt="数码电器" src="http://img02.taobaocdn.com/tps/i2/T1MX8JXaBrXXXXXXXX-110-135.png"></a>
                        <a title="食尚周末" href="#"><img height="135" width="110" alt="食尚周末" src="http://img01.taobaocdn.com/tps/i1/T1ZqVJXX0dXXXXXXXX-110-135.png"></a>
                        <a title="八零九零" href="#"><img height="135" width="110" alt="八零九零" src="http://img02.taobaocdn.com/tps/i2/T1vF0JXcFvXXXXXXXX-110-135.png"></a>
                    </div>
                </li>
                <li>
                    <a class="bbrand" href="#" title=""><img src="http://img03.taobaocdn.com/tps/i3/T1ZHNJXdBrXXXXXXXX-440-135.png" width="440" height="135" alt="" /></a>
                </li>
            </ol>
        </div>
        <script>
            KISSY.ready(function(S) {
            
                var carousel = new S.Carousel('#demo2', {
                    contentCls: 'ks-switchable-content',
                    effect: "scrollx",
                    //hasTriggers: false,
                    activeIndex: parseInt(S.DOM.get('#demo2').getAttribute('data-active-index')) || 0
                });
                
            });
            
        </script>
    </div>




.. code-block:: javascript
   :linenos:
   
   KISSY.ready(function(S) {
   
       var carousel = new S.Carousel('#demo2', {
            contentCls: 'ks-switchable-content', 
            effect: "scrollx",
            activeIndex: parseInt(S.DOM.get('#demo2').getAttribute('data-active-index')) || 0  
       });
       
   });
   


.. note::
 #. 切换组件默认是显示第一个内容块, 如果当前显示不是首个, 可以使用 ``switchTo(index)`` 切换到对应的内容块;
 #. 一般情况下, 非当前显示内容中如果包含 异步请求 或者 iframe 或者 图片, 可以加入延迟加载插件 ``datalazyload`` ;




Config 选项
--------------------
Switchable 类组件, 提供了丰富的配置选项, 这里大体说明一下各选项的作用:

.. code-block:: javascript

    /**** 所有 Switchable 类通用配置   ****/
    markupType: 0,                      // markup 的类型，取值如下：

    // 0 - 默认结构：通过 nav 和 content 来获取 triggers 和 panels
    navCls: CLS_PREFIX + 'nav',         // CLS_PREFIX 为 'ks-switchable-', 
    contentCls: CLS_PREFIX + 'content',

    // 1 - 适度灵活：通过 cls 来获取 triggers 和 panels
    triggerCls: CLS_PREFIX + 'trigger',
    panelCls: CLS_PREFIX + 'panel',

    // 2 - 完全自由：直接传入 triggers 和 panels
    triggers: [],
    panels: [],

    // 是否有触点
    hasTriggers: true,

    // 触发类型
    triggerType: 'mouse',       // or 'click'
    
    // 触发延迟
    delay: .1,                  // 100ms

    activeIndex: 0,             // markup 的默认激活项，应该与此 index 一致
    
    activeTriggerCls: 'ks-active',

    // 可见视图内有多少个 panels
    steps: 1,

    // 可见视图区域的大小。一般不需要设定此值，仅当获取值不正确时，用于手工指定大小
    viewSize: []
    
    
    /**** S.Plugins.autoplay 额外的配置  ****/
    autoplay: false,        // 是否自动切换
    interval: 5,            // 自动播放间隔时间
    pauseOnHover: true      // triggerType 为 mouse 时，鼠标悬停在 slide 上是否暂停自动播放
    
    
    /**** S.Plugins.circular 额外的配置  ****/
    circular: false         // 是否循环切换
    
    
    /**** S.Plugins.effect 额外的配置  ****/
    effect: NONE,           // 'scrollx', 'scrolly', 'fade' 或者直接传入 custom effect fn
    duration: .5,           // 动画的时长
    easing: 'easeNone'      // 擦除效果
    
    
    /**** S.Plugins.lazyload 额外的配置  ****/
    lazyDataType: AREA_DATA     // 设置延迟加载时使用的数据类型, 可以是 AREA_DATA('area-data', 
                                // 即使用 textarea 标签) 或 IMG_SRC('img-src', 即使用 img 标签)
    
    
    /**** S.Plugins.countdown  ****/
    countdown: false,               // 是否启动倒计时功能
    countdownFromStyle: '',         // 倒计时的初始样式
    countdownToStyle: 'width: 0'    // 初始样式由用户在 css 里指定，配置里仅需要传入有变化的最终样式
    
    
    /**** S.autoRender  ****/
    // 根据页面上的钩子, 自动渲染页面上的 Switchable 组件, 没有其他配置
    
    
    
    /**** S.Tabs  ****/
    // 没有额外的配置
    
    
    /**** S.Slide 默认或额外的配置  ****/
    autoplay: true,                             // 默认自动切换
    circular: true                              // 默认循环切换

    
    /**** S.Accordion 额外的配置  ****/
    markupType: 1,                              // 选择自定义 trigger 和 panel 的 class
    triggerType: 'click',                       // 点击触发
    multiple: false                             // 默认不开启同时展开多个面板功能
    
    
    
    /**** S.Carousel 额外的配置  ****/
    circular: true,                             // 默认循环切换
    prevBtnCls: CLS_PREFIX + 'prev-btn',        // 前一个触发器的 cls
    nextBtnCls: CLS_PREFIX + 'next-btn',        // 后一个触发器的 cls
    disableBtnCls: CLS_PREFIX + 'disable-btn'   // 触发器不可用时的 cls
    
    


就是这么简单~~ 

Switchable 类组件先介绍到这里. 更多关于 Switchable 相关的例子见 [2]_ .


下一节将介绍, 如果你需要自己写个组件, 该注意写什么? -- :ref:`自定义组件 <yourwidgets>` ...

.. rubric:: 参考链接

.. [1] `Switchable <http://kissyteam.github.com/kissy/docs/switchable/index.html>`_ ;
.. [2] `Switchable Demo <http://kissyteam.github.com/kissy/src/switchable/test.html>`_ ;

