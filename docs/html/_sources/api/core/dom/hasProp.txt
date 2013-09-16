.. currentmodule:: dom

hasProp
=================================




Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: hasProp

    | Boolean **hasProp** ( selector , propertyName )
    | 判断符合选择器的第一个元素是否含有特定 property 属性.

    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string propertyName: property 名称
    :returns: 符合选择器的所有元素中是否有某个元素含有特定 property.
    :rtype: Boolean


    .. note::

        当你使用该方法时, 请先考虑下是否是自定义 property , 如果是自定义 property 推荐采用 :func:`dom.data <dom.data>` 系列方法.
        如果是 DOM property , 一般直接判断 :func:`dom.prop <dom.prop>` 返回值即可
        