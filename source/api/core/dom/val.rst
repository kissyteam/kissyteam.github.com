.. currentmodule:: DOM

.. _dom-val:

val
=================================

Class
-----------------------------------------------

  :js:data:`KISSY.DOM`

Methods
-----------------------------------------------

.. function:: val( selector )

    获取符合选择器的第一个元素所的 value 值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :returns: 获取符合选择器的第一个元素所的 value 值. 无值时, 返回空字符串.
    
    
.. function:: val( selector, value )

    给符合选择器的所有元素设置 value 值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string value: 将要设置的 value 值