.. currentmodule:: dom

offset
=================================

Module
-----------------------------------------------

  :mod:`dom <dom>`

Methods
-----------------------------------------------

.. function:: offset

    | Object **offset** ( selector )
    | 获取符合选择器的第一个元素相对页面文档左上角的偏移值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    :returns: 相对页面文档左上角的偏移值, 包括两个属性
    :rtype: Object

        .. attribute:: left

                {Number} - 相对页面文档左上角的横坐标
                
        .. attribute:: top

                {Number} - 相对页面文档左上角的纵坐标
    

    | void **offset** ( selector, value )
    | 给符合选择器的所有元素设置偏移值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    :param object value: 偏移对象, 包括两个属性 ``left`` ,``top`` , 格式同获取偏移的返回值.
    
