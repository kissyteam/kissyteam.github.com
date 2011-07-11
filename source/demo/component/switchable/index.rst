.. currentmodule:: Switchable


Switchable
========================================================

|  作者: `玉伯 <lifesinger@gmail.com>`_
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/switchable/>`_

Class
-----------------------------------------------

  * :class:`Switchable`

Demo - 使用基本的 Switchable
--------------------------------------------------

    .. raw:: html

        <div class="demo">
            <style>
            #J_Slide {
                position: relative;
                width: 470px;
                height: 150px;
                border: 1px solid #B6D1E6;
                overflow: hidden;
            }

            #J_Slide .ks-switchable-nav {
                position: absolute;
                bottom: 5px;
                right: 5px;
                z-index: 99;
            }

            #J_Slide .ks-switchable-nav li {
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

            #J_Slide .ks-switchable-nav li.ks-active {
                width: 18px;
                height: 18px;
                line-height: 18px;
                margin-top: -1px;
                color: #FFF;
                background-color: #FFB442;
                font-weight: bold;
            }

            #J_Slide .ks-switchable-content {
                margin: 0;
            }
            #J_Slide .ks-switchable-content li {
                height: 150px;
                width: 470px;
                overflow: hidden;
                margin: 0;
            }

            #J_Slide .ks-switchable-nav li,
            #J_Slide .ks-switchable-trigger-content {
                position: relative;
            }

            #J_Slide .ks-switchable-trigger-mask {
                position: absolute;
                right: 0;
                width: 18px;
                height: 18px;
                background-color: #FF9415;
                visibility: hidden
            }

            #J_Slide .ks-active .ks-switchable-trigger-mask {
                visibility: visible
            }

            .list li {
                margin-left: 10px;
                margin-top: 5px;
                margin-bottom: 5px;
                list-style-type: circle;
            }

            </style>
            <div id="J_Slide" class="loading">
                <ol class="ks-switchable-content">
                    <li><a href="slide-taobao.html#" target="_blank"><img alt="" src="http://img05.taobaocdn.com/tps/i5/T1HllqXjXpXXXXXXXX-470-150.jpg"/></a></li>
                    <li class="hidden"><a target="_blank" href="slide-taobao.html#"><img alt="" width="470" height="150" border="0" src="http://img.alimama.cn/bcrm/adboard/picture/2009-12-24/091224170529.gif"/></a></li>
                    <li class="hidden"><a target="_blank" href="slide-taobao.html#"><img alt="" width="470" height="150" border="0" src="http://img.alimama.cn/bcrm/adboard/picture/2009-12-29/091229160359.jpg"/></a></li>
                    <li class="hidden"><a href="slide-taobao.html#" target="_blank"><img alt="" src="http://img01.taobaocdn.com/tps/i1/T1qS0qXhBhXXXXXXXX-470-150.jpg"/></a></li>
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
                KISSY.use("switchable", function(S, Switchable) {
                    var s = new Switchable.Slide('#J_Slide', {
                        effect: 'scrolly',
                        easing: 'easeOutStrong',
                        countdown: true,
                        countdownFromStyle: 'width:18px'
                    });
                });
            </script>
        </div>



    **组织 HTML 结构**

    通常情况下, Switchable 组件的 HTML 结构为外层一个容器元素,内部又分成 trigger 列表 和 panel 列表 两部分,trigger 列表可无, 如下的 HTML 结构最为常见:

        .. code-block:: html

            <div id="J_Slide">  <!-- 容器元素 -->
                <ul class="ks-switchable-nav">  <!-- 触发器列表 -->
                    <li class="ks-active">标题 A</li>
                    <li>标题 B</li>
                    <li>标题 C</li>
                    <li>标题 D</li>
                </ul>
                <div class="ks-switchable-content">  <!-- 面板列表 -->
                    <div>内容 A</div>
                    <div style="display: none">内容 B</div>
                    <div style="display: none">内容 C</div>
                    <div style="display: none">内容 D</div>
                </div>
            </div>

    但注意: 这种结构并不固定, 且有时需要根据不同组件, 不同需求修改结构并定义它们的样式;



    **JS 初始化**

    通过容器元素的 id 和相关配置, 构建 :class:`~Switchable.Switchable` 对象 :

    .. code-block:: javascript
        :linenos:

        KISSY.use("switchable",function(S,Switchable){
            // 对于 kissy < 1.2 ,可使用 Switchable = S.Switchable; 获取构造器

            var s = new Switchable.Slide('#J_Slide', {
                effect: 'scrolly',
                easing: 'easeOutStrong',
                countdown: true,
                countdownFromStyle: 'width:18px'
            });
        });



全部示例
-------------------------------------------------------------------------------

Tabs
``````````````````````````
* `普通标签页 <http://yiminghe.github.com/kissy/src/switchable/demo/tabs.html>`_

Slide
``````````````````````````

* `淘宝首页卡盘 <http://yiminghe.github.com/kissy/src/switchable/demo/slide.html#demo2>`_
* `有啊首页开盘 <http://yiminghe.github.com/kissy/src/switchable/demo/slide.html#demo3>`_
* `有啊滚动新闻条 <http://yiminghe.github.com/kissy/src/switchable/demo/slide.html#demo5>`_
* `土豆今日焦点 <http://yiminghe.github.com/kissy/src/switchable/demo/slide.html#slideFocus>`_

Carousel
``````````````````````````

* `普通旋转木马 <http://yiminghe.github.com/kissy/src/switchable/demo/carousel.html#demo4>`_
* `类似于首页上的旋转木马 <http://yiminghe.github.com/kissy/src/switchable/demo/carousel.html#J_TinySlide>`_

Accordion
``````````````````````````

* `普通手风琴 <http://yiminghe.github.com/kissy/src/switchable/demo/accordion.html>`_


