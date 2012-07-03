.. currentmodule:: switchable


使用基本的 Switchable
========================================================



Class
-----------------------------------------------

  * :class:`Switchable`


使用基本的 Switchable
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="180" class="iframe-demo" src="../../../static/demo/switchable/demo1.html"></iframe>


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

    通过容器元素的 id 和相关配置, 构建 :class:`Switchable` 对象 :

    .. literalinclude:: /_static/demo/switchable/assets/demo1.js
           :language: javascript


    .. caution::

        很多朋友在使用 Switchable 时, 经常会碰到 panels 从最后一个切换到第一个时, 出现白屏现象, 经过我们仔细排查后, 发现总体有以下三种情况:

        1) ks-switchable-content 及其子元素 CSS 设置不正确, ks-switchable-content 该层不需要设置宽高, 因为会根据子元素个数和子元素宽高自动设置. 请完全参考上述事例, 特别是设置 diaplay, margin, position 这种属性时更要注意;
        2) 在使用 scrollx/scrolly 动画时, panels 各元素需要 **固定宽/高** ;
        3) 页面当引入了 http://a.tbcdn.cn/tbra/1.0/tbra-widgets.js 时, 也会诡异的出现白屏. 可能是 tbra 修改了一些原生方法影响到 switchable;
        4) 当 Switchable 和 Datalazyload 一起使用时, 注意, 有可能还是会出现白屏, 原因是, 切换时, 特别是从第一个切换到最后一个时, 动画过程中, 经过中间元素时, 还没有触发 lazyload 替换内容导致动画过程中有白屏;
