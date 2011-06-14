.. currentmodule:: DOM

.. _dom-text:

text
=================================

Class
-----------------------------------------------

  :js:data:`KISSY.DOM`

Methods
-----------------------------------------------

.. js:function:: text( selector )

    获取符合选择器的第一个元素所包含的文本值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :returns: 获取符合选择器的第一个元素所包含的文本值. 无值时, 返回空字符串.
    
    
.. js:function:: text( selector, value )

    给符合选择器的所有元素设置文本值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string value: 将要设置的文本值
    
.. centered::
    相当于 ie 下调用 ``innerText`` 以及其他浏览器下调用 ``textContent`` .