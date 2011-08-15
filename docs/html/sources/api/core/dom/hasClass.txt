.. currentmodule:: dom


hasClass
=================================

Module
-----------------------------------------------

  :mod:`dom`


Methods
-----------------------------------------------

.. function:: hasClass

    | Boolean **addClass** ( selector , value )
    | 判断符合选择器的所有元素中是否有某个元素含有特定 class.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string value: 样式类 class, 多个用空格分隔, 表示同时包含多个样式类
    :returns: 是否符合选择器的元素中存在某个元素含有特定样式类 value
    :rtype: Boolean
