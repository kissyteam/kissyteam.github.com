.. currentmodule:: DOM

DOM.width
=================================

.. function:: DOM.width( selector )

    获取符合选择器的第一个元素的宽度值。
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :returns: 符合选择器的第一个元素的宽度值。
    
.. note::

    该方法始终返回像素值，例如
    
.. code-block:: html

    <div style="width: 100px;">
        <div id="test" style="width: 80%; height: 20px"></div>
    </div>
    <script>
        var S = KISSY, DOM = S.DOM,
        elem = S.get('#test');
    
        DOM.css(elem, 'width'); // 返回 80%
        DOM.css(elem, 'height'); // 返回 20px
    
        DOM.width(elem); // 返回 80
        DOM.height(elem); // 返回 20
    </script>    
    
    
.. function:: DOM.width( selector, value )

    给符合选择器的所有元素设置宽度值。相当于 :func:`DOM.css(selector,"width",value) <DOM.css>`
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string value: 宽度值        