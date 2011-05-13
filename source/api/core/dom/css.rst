.. currentmodule:: DOM

DOM.css
=================================

.. function:: DOM.css( selector, name )

    获取符合选择器的第一个元素的样式值。
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string name: css 样式属性名  
    :returns: 获取符合选择器的第一个元素的样式值。
    
    
.. function:: DOM.css( selector, name, value )

    给符合选择器的所有元素设置样式值。
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string name: css 样式属性名   
    :param string value: 将要设置的样式值
    

.. function:: DOM.css( selector, kv )

    给符合选择器的所有元素设置样式值。
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param object kv: 样式名与样式值的键值对          