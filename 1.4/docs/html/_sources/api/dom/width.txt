.. currentmodule:: dom

width
=================================

Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: width

    | Number **width** ( selector )
    | 获取符合选择器的第一个元素的宽度值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    :returns: 符合选择器的第一个元素的宽度值.
    
    .. note::

        - 该方法获取的是元素的真实宽度, 不包含 padding, border, margin. 且始终返回像素值
        - 注意: 该方法与 :func:`innerWidth` 和 :func:`outerWidth` 的区别.

    .. code-block:: html

        <div style="width: 100px;">
            <div id="test" style="width: 80%; height: 20px"></div>
        </div>
        <script>
            var S = KISSY, DOM = S.DOM,
            elem = S.get('#test');

            DOM.style(elem, 'width'); // 返回 80%
            DOM.css(elem, 'width'); // 返回 80px
            DOM.css(elem, 'height'); // 返回 20px

            DOM.width(elem); // 返回 80
            DOM.height(elem); // 返回 20
        </script>


    | void **width** ( selector, value )
    | 给符合选择器的所有元素设置宽度值. 相当于 :func:`dom.css(selector,"width",value) <dom.css>`
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    :param string value: 宽度值        