.. currentmodule:: menubutton

Demo - 模拟 selectbox
======================================

.. versionadded:: 1.2

|  `API <../../../api/component/menubutton/index.html>`_ | `源码 <https://github.com/kissyteam/kissy/tree/master/src/menubutton/>`_

Class
-----------------------------------------------

  * :class:`MenuButton`
  * :class:`Select`
  * :class:`Option`

Demo - 模拟 selectbox
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="200" class="iframe-demo" src="../../../static/demo/menubutton/demo2.html"></iframe>

    原本的 select 的 HTML 代码如下:

    .. code-block:: html

        <select name="decorateSelect" id="decorateSelect">
            <option value="-1" >请选择</option>
            <option value="1">北京</option>
            <option value="2">上海</option>
            <option value="3">天津</option>
            <option value="4">南京</option>
            <option value="5">杭州</option>
            <option value="6">其他</option>
        </select>

    .. literalinclude:: /_static/demo/menubutton/assets/demo2.js
           :language: javascript