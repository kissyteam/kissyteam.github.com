.. currentmodule:: dom


css
=================================

Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: css

    | String **css** ( selector, name )
    | 获取符合选择器的第一个元素的样式值.

    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string name: css 样式属性名
    :returns: 获取符合选择器的第一个元素的样式值.
    :rtype: String

    例如

    .. code-block:: javascript

        DOM.css("#J_wrap", "width");


    | void **css** ( selector, name, value )
    | 给符合选择器的所有元素设置样式值.

    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string name: css 样式属性名
    :param string value: 将要设置的样式值

    例如

    .. code-block:: javascript

        DOM.css('#J_wrap', "width","200px");


    | void **css** ( selector, kv )
    | 给符合选择器的所有元素设置样式值.

    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param object kv: 样式名与样式值的键值对, 例如

    .. code-block:: javascript

        DOM.css('.widget', {position: 'absolute', top: '10px', left: '10px'});

    .. note::

        支持跨浏览器的transform

        .. code-block:: javascript

            Dom.css(t,'transform','rotate(39deg) skew(40deg)');