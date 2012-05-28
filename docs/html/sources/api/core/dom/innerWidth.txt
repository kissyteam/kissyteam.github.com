.. currentmodule:: dom

innerWidth
=================================



Module
-----------------------------------------------

  :mod:`DOM <dom>`


Methods
-----------------------------------------------

.. function:: innerWidth

    | Number **innerWidth** ( selector )
    | 获取符合选择器的第一个元素的宽度值, 注意: **该值包含 padding** .
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :returns: 符合选择器的第一个元素的宽度值.
    :rtype: Number

    .. code-block:: html

        <div style="width: 100px;">
            <div id="test" style="width: 80%; height: 20px; padding: 10px;"></div>
        </div>
        <script>
            var S = KISSY, DOM = S.DOM,
            elem = S.get('#test');

            DOM.innerWidth(elem); // 返回 100
            DOM.innerHeight(elem); // 返回 40
        </script>