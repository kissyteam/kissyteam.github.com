.. currentmodule:: switchable


手风琴效果（二）
========================================================

.. warning::

    本组件停止维护，推荐使用 `gallery/slide <http://t.cn/zTqcfXr>`_

Class
-----------------------------------------------

  * :class:`Switchable`


手风琴效果（二）
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="180" class="iframe-demo" src="../../../../../source/raw/demo/switchable/demo9.html"></iframe>


    **组织 HTML 结构**

    .. code-block:: html

        <div class="shop-hesper  s-demo" id="accordion2">
            <div class="hesper-cats">
                <ol>
                    <li><a href="http://shop62814299.taobao.com?browseType=&search=y">所有宝贝</a><i></i></li>
                </ol>
                <ul class="hesper-cats-list" style="display:none">
                    <li><p>内容</p><p>输入：<input /></p></li>
                </ul>
                <i class="trigger" title="展开或者收缩"></i>
            </div>
        </div>



    **JS 初始化**

    .. literalinclude:: /raw/demo/switchable/assets/demo9.js
          :language: javascript




