.. currentmodule:: DOM

DOM.attr
=================================

.. function:: attr( selector, name )

    获取符合选择器的第一个元素的属性值。
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string name: 属性名称
    :returns: 对应属性名的属性值
    
    
.. function:: attr( selector, name, value )

    给符合选择器的所有元素设置属性值。
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string name: 属性名称
    :param value: 属性值
    
.. function:: attr( selector, kv )

    给符合选择器的所有元素设置属性值。
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param object kv: 属性名与属性值的键值对
    
例如

.. code-block:: javascript

    var S = KISSY, DOM = S.DOM;

    // 同时设置多个属性
    DOM.attr('img', { src: 'kissy.png', width: 400, height: 400 });    