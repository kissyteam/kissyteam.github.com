.. currentmodule:: switchable

手风琴效果
========================================================



Class
-----------------------------------------------

  * :class:`Switchable`


手风琴效果
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="200" class="iframe-demo" src="../../../_static/demo/switchable/demo8.html"></iframe>


    **组织 HTML 结构**

    .. code-block:: html

            <div id="accordion1" class="s-demo">
                <div class="ks-switchable-trigger"><i class="ks-icon"></i><h3>标题A</h3></div>
                <div class="ks-switchable-panel" style="display:none;">
                    1、支持鼠标滑过和点击触点两种方式<br/>
                    2、支持同时展开多个面板
                </div>
                <div class="ks-switchable-trigger"><i class="ks-icon"></i><h3>标题B</h3></div>
                <div class="ks-switchable-panel" style="display:none;">内容B</div>
                <div class="ks-switchable-trigger"><i class="ks-icon"></i><h3>标题C</h3></div>
                <div class="ks-switchable-panel" style="display:none;">内容C<br/>输入：<input/></div>
                <div class="ks-switchable-trigger last-trigger"><i class="ks-icon"></i><h3>标题D</h3>
                </div>
                <div class="ks-switchable-panel last-panel" style="display:none;">内容D<br/>输入：<input/></div>
            </div>



    **JS 初始化**

    .. literalinclude:: /_static/demo/switchable/assets/demo8.js
          :language: javascript




