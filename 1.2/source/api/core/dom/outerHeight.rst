.. currentmodule:: dom

outerHeight
=================================



Module
-----------------------------------------------

  :mod:`DOM <dom>`


Methods
-----------------------------------------------

.. function:: outerHeight

    | Number **outerHeight** ( selector , includeMargin)
    | 获取符合选择器的第一个元素的高度值, 注意: **该值除了包含元素本身宽度和 padding 外, 还包含 border或margin** .
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param Boolean includeMargin: 是否包含 margin, 默认仅包含 border
    :returns: 符合选择器的第一个元素的高度值.
    :rtype: Number
