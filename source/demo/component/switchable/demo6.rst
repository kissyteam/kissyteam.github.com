.. currentmodule:: switchable


普通旋转木马
========================================================



Class
-----------------------------------------------

  * :class:`Switchable`


普通旋转木马
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="180" class="iframe-demo" src="../../../../../source/raw/demo/switchable/demo6.html"></iframe>


    **组织 HTML 结构**

    .. code-block:: html

        <div id="demo6" class="s-demo scrollable">
            <span id="scroller-prev" class="prev disable">&lsaquo; 上一页</span>
            <span id="scroller-next" class="next">下一页 &rsaquo;</span>
            <div class="scroller">
                <div class="ks-switchable-content">
                    <!-- 1-5 -->
                    <img alt="" src="http://img02.taobaocdn.com/tps/i2/T1l_yXXiFyXXXXXXXX-110-135.png"/>
                    <img alt="" src="http://img02.taobaocdn.com/tps/i2/T1.XGaXalnXXXXXXXX-110-135.png"/>
                    <img alt="" src="http://img04.taobaocdn.com/tps/i4/T1oEmXXmVoXXXXXXXX-110-135.png"/>
                    <img alt="" src="http://img04.taobaocdn.com/tps/i4/T1oEmXXmVoXXXXXXXX-110-135.png"/>
                    <img alt="" src="http://img03.taobaocdn.com/tps/i3/T1Hm1XXipvXXXXXXXX-110-135.png"/>
                    <!-- 5-10 -->
                    <img id='carousel_lazy1' alt=""
                         data-ks-lazyload-custom="http://img02.taobaocdn.com/tps/i2/T1l_yXXiFyXXXXXXXX-110-135.png"/>
                    <img alt="" data-ks-lazyload-custom="http://img02.taobaocdn.com/tps/i2/T1l_yXXiFyXXXXXXXX-110-135.png"/>
                    <img alt="" data-ks-lazyload-custom="http://img02.taobaocdn.com/tps/i2/T1l_yXXiFyXXXXXXXX-110-135.png"/>
                    <img alt="" data-ks-lazyload-custom="http://img02.taobaocdn.com/tps/i2/T1l_yXXiFyXXXXXXXX-110-135.png"/>
                    <img alt="" data-ks-lazyload-custom="http://img02.taobaocdn.com/tps/i2/T1l_yXXiFyXXXXXXXX-110-135.png"/>
                    <!-- 10-15 -->
                    <img alt="" data-ks-lazyload-custom="http://img02.taobaocdn.com/tps/i2/T1l_yXXiFyXXXXXXXX-110-135.png"/>
                    <img alt="" data-ks-lazyload-custom="http://img02.taobaocdn.com/tps/i2/T1l_yXXiFyXXXXXXXX-110-135.png"/>
                    <img alt="" data-ks-lazyload-custom="http://img02.taobaocdn.com/tps/i2/T1l_yXXiFyXXXXXXXX-110-135.png"/>
                    <img alt="" data-ks-lazyload-custom="http://img02.taobaocdn.com/tps/i2/T1l_yXXiFyXXXXXXXX-110-135.png"/>
                    <img alt="" data-ks-lazyload-custom="http://img02.taobaocdn.com/tps/i2/T1l_yXXiFyXXXXXXXX-110-135.png"/>
                </div>
                <ul class="ks-switchable-nav">
                    <li class="ks-active">&bull;</li>
                    <li>&bull;</li>
                    <li>&bull;</li>
                </ul>
            </div>
        </div>


    **JS 初始化**

    通过容器元素的 id 和相关配置, 构建 :class:`Carousel` 对象 :

    .. literalinclude:: /raw/demo/switchable/assets/demo6.js
         :language: javascript

