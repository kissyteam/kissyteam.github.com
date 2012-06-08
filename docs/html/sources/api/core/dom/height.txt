.. currentmodule:: dom

height
=================================

Module
-----------------------------------------------

  :mod:`DOM <dom>`


Methods
-----------------------------------------------

.. function:: height

    | Number **height** ( selector )
    | 获取符合选择器的第一个元素的高度值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :returns: 符合选择器的第一个元素的高度值.
    :rtype: Number
    
    .. note::

        - 该方法获取的是元素的真实高度, 不包含 padding, border, margin. 且始终返回像素值
        - 注意: 该方法与 :func:`innerHeight` 和 :func:`outerHeight` 的区别.

    | void **height** ( selector, value )
    | 给符合选择器的所有元素设置高度值. 相当于 :func:`DOM.css(selector,"height",value) <dom.css>`
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string value: 宽度值        