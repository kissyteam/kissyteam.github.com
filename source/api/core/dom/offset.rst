.. currentmodule:: DOM

.. _dom-offset:

offset
=================================

Class
-----------------------------------------------

  :js:data:`KISSY.DOM`

Methods
-----------------------------------------------

.. js:function:: offset( selector )

    获取符合选择器的第一个元素相对页面文档左上角的偏移值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :returns: {Object} - 相对页面文档左上角的偏移值, 包括两个属性
    
        .. js:data:: left

                {Number} - 相对页面文档左上角的横坐标
                
        .. js:data:: top

                {Number} - 相对页面文档左上角的纵坐标
    
    
.. js:function:: offset( selector, value )

    给符合选择器的所有元素设置偏移值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param object value: 偏移对象, 包括两个属性 ``left`` ,``top`` ，格式同获取偏移的返回值.
    
