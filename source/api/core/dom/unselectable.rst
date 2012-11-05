.. currentmodule:: dom

unselectable
=================================




Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: unselectable

    | void **unselectable** ( selector )
    | 使符合选择器的所有元素都不可以作为选择区域的开始.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    
    
    .. note::

        在 ``ie`` 下会引发该元素鼠标点击获取不到焦点, 在 ``firefox`` 下要得到同样的效果则需要阻止 ``mousedown`` 事件.
            