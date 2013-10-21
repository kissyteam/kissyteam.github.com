.. currentmodule:: dom

outerWidth
=================================



Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: outerWidth

    | Number **outerWidth** ( selector , includeMargin)
    | 获取符合选择器的第一个元素的宽度值, 注意: **该值除了包含元素本身宽度和 padding 外, 还包含 border或margin** .
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param Boolean includeMargin: 是否包含 margin, 默认仅包含 border
    :returns: 符合选择器的第一个元素的宽度值.
    :rtype: Number

    .. code-block:: html

        <div style="width: 100px;">
            <div id="test" style="width: 80%; height: 20px; padding: 10px;border: 2px solid gray;margin: 6px;"></div>
        </div>
        <script>
            var S = KISSY, DOM = S.DOM,
            elem = S.get('#test');

            DOM.outerWidth(elem); // 返回 104
            DOM.outerHeight(elem); // 返回 44
            DOM.outerWidth(elem, true); // 返回 116
            DOM.outerHeight(elem, true); // 返回 56
        </script>