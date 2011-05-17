.. currentmodule:: DOM

DOM.offset
=================================

.. function:: DOM.offset( selector )

    获取符合选择器的第一个元素相对页面文档左上角的偏移值。
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :rtype: object
    :returns: 相对页面文档左上角的偏移值，包括两个属性
    
        .. attribute:: left
                
                类型 number，相对页面文档左上角的横坐标
                
        .. attribute:: top
                
                类型 number，相对页面文档左上角的纵坐标        
    
    
.. function:: DOM.offset( selector, value )

    给符合选择器的所有元素设置偏移值。
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param object value: 偏移对象，包括两个属性 ``left`` ,``top`` ，格式同获取偏移的返回值。
    
