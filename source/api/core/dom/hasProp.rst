.. currentmodule:: DOM

.. _dom-hasProp:

hasProp
=================================

.. versionadded:: 1.2

Class
-----------------------------------------------

  :js:data:`KISSY.DOM`

Methods
-----------------------------------------------

.. function:: hasProp( selector , propertyName )

    判断符合选择器的第一个元素是否含有特定 property 属性.

    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string propertyName: property 名称
    :returns: {Boolean} -  符合选择器的第一个元素是否含有特定 property 属性.


.. note::

    当你使用该方法时, 请先考虑下是否是自定义 property , 如果是自定义 property 推荐采用 :js:func:`data` 系列方法.
    如果是 DOM property , 一般直接判断 :js:func:`prop` 返回值即可
        