.. currentmodule:: menubutton

简单菜单按钮/从已有 html 生成菜单按钮
======================================





Class
-----------------------------------------------

  * :class:`MenuButton`
  * :class:`Select`
  * :class:`Option`

简单菜单按钮/从已有 html 生成菜单按钮
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="120" class="iframe-demo" src="../../../_static/demo/menubutton/demo1.html"></iframe>

    .. literalinclude:: /_static/demo/menubutton/assets/demo1.js
           :language: javascript

    对于在原有 HTML 基础上生成菜单按钮时, HTML需要指定特定的结构和 class, 例如:

    .. code-block:: html

        <div class="goog-inline-block goog-button" id="exist">
            我的淘宝
            <div class="goog-menu goog-popupmenu">
                <div class="goog-menuitem">已买到的宝贝</div>
                <div class="goog-menuitem">已卖出的宝贝</div>
            </div>
        </div>