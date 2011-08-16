.. currentmodule:: switchable


Demo - 使用基本的 Switchable
========================================================

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/switchable/>`_

Class
-----------------------------------------------

  * :class:`Switchable`


Demo - 使用基本的 Switchable
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
