.. currentmodule:: DOM

DOM.scrollLeft
=================================

.. function:: scrollLeft(node)

   获取窗口或元素的 scrollLeft 值。
    
   :param Window|HTMLElement node: 某个 iframe 的 contentWindow 或当前 window 或某个节点。
   :rtype: number
   :returns: 窗口或元素的 scrollLeft 值。
   
.. function:: scrollLeft(num)

    .. versionadded:: 1.2
        设置窗口 scrollLeft 值。
    
    :param number num: 将要设置的向左滚动值
    :rtype: number
    :returns: 设置的值
    
.. function:: scrollLeft(node,num)

    .. versionadded:: 1.2
        设置窗口或元素的 scrollLeft 值。      
    
    :param Window|HTMLElement node: 某个 iframe 的 contentWindow 或当前 window 或某个节点。
    :rtype: number
    :returns: 设置的值