.. currentmodule:: DOM

.. dom-hasAttr:

hasAttr
=================================

.. versionadded:: 1.2

Class
-----------------------------------------------

  :js:data:`KISSY.DOM`

Methods
-----------------------------------------------

.. js:function:: hasAttr( selector , attrName )

    判断符合选择器的所有元素中是否有某个元素含有特定属性.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string attrname: 属性名称
    :returns: {Boolean} - 符合选择器的所有元素中是否有某个元素含有特定属性.
        