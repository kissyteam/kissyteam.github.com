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
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    
    
    .. note::

        在 ``ie`` 下会引发该元素鼠标点击获取不到焦点, 在 ``firefox`` 下要得到同样的效果则需要阻止 ``mousedown`` 事件.
            