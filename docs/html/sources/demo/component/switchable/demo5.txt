.. currentmodule:: switchable


有啊滚动新闻条
========================================================

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/switchable/>`_

Class
-----------------------------------------------

  * :class:`Switchable`


有啊滚动新闻条
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="150" class="iframe-demo" src="../../../static/demo/switchable/demo5.html"></iframe>


    **组织 HTML 结构**

    .. code-block:: html

        <div class="s-demo">
            <div id="demo5" class="section scroll-news">
                <ul class="news-items">
                    <li><a target="_blank" href="http://youa.baidu.com/shop/72e01b38fb26b4ebc5db0136">“一分钱”轻松体验有啊网购流程</a></li>
                    <li><a target="_blank" href="http://co.youa.baidu.com/content/payhelp/b12/zhaoshang/">开通网银，百付宝为您一路护航</a></li>
                    <li><a target="_blank" href="http://co.youa.baidu.com/picture/r/mall/guide/index.html">新手买家？帮助教程带您走通有啊</a></li>
                    <li><a target="_blank" href="http://youa.baidu.com/static/help/quality_form_build.html">尽情挥洒你的创意，共建百度有啊</a></li>
                    <li><a target="_blank" href="http://co.youa.baidu.com/content/help/A10/2008-09-06/153433185574.html">认准标识，精选实力卖家任您选择</a></li>
                    <li><a target="_blank" href="http://co.youa.baidu.com/content/help/A3/2/2008-09-01/143723181295.html#10">收藏</a> + <a target="_blank" href="http://co.youa.baidu.com/content/help/A3/2009-01-08/112820209991.html">购物车</a>，逛街搜店更便捷</li>
                </ul>
            </div>
        </div>

   
    **JS 初始化**

    通过容器元素的 id 和相关配置, 构建 :class:`Slide` 对象 :

    .. literalinclude:: /_static/demo/switchable/assets/demo5.js
        :language: javascript

