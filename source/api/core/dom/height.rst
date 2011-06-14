.. currentmodule:: DOM

.. _dom-height:

height
=================================
Class
-----------------------------------------------

  :js:data:`KISSY.DOM`

Methods
-----------------------------------------------

.. js:function:: height( selector )

    获取符合选择器的第一个元素的高度值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :returns: {Number} - 符合选择器的第一个元素的高度值.
    
    .. note::

        该方法始终返回像素值
    
    
.. function:: height( selector, value )

    给符合选择器的所有元素设置高度值. 相当于 :ref:`DOM.css(selector,"height",value) <dom-css>`
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string value: 宽度值        