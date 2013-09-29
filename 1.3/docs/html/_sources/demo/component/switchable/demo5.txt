.. currentmodule:: switchable


滚动新闻条
========================================================

.. warning::

    本组件停止维护，推荐使用 `gallery/slide <https://github.com/kissygalleryteam/slide>`_

Class
-----------------------------------------------

  * :class:`Switchable`


滚动新闻条
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="150" class="iframe-demo" src="/1.3/source/raw/demo/switchable/demo5.html"></iframe>


    **组织 HTML 结构**

    .. code-block:: html

        <div class="s-demo">
            <div id="demo5" class="section scroll-news">
                <ul class="news-items">
                    <li><a target="_blank" href="#">“一分钱”轻松体验淘宝网购流程</a></li>
                    <li><a target="_blank" href="#">开通网银，支付宝为您一路护航</a></li>
                    <li><a target="_blank" href="#">新手买家？帮助教程带您走通淘宝</a></li>
                    <li><a target="_blank" href="#">尽情挥洒你的创意，共建淘宝</a></li>
                    <li><a target="_blank" href="#">认准标识，精选实力卖家任您选择</a></li>
                    <li><a target="_blank" href="#">收藏</a> + <a target="_blank" href="#">购物车</a>，逛街搜店更便捷</li>
                </ul>
            </div>
        </div>

   
    **JS 初始化**

    通过容器元素的 id 和相关配置, 构建 :class:`Slide` 对象 :

    .. literalinclude:: /raw/demo/switchable/assets/demo5.js
        :language: javascript

