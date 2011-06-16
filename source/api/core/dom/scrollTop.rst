.. currentmodule:: DOM

scrollTop
=================================

Module
-----------------------------------------------

  :mod:`DOM`


Methods
-----------------------------------------------

.. function:: scrollTop(node)

   获取窗口或元素的 scrollTop 值.
    
   :param Window|HTMLElement node: 某个 iframe 的 contentWindow 或当前 window 或某个节点.
   :returns: 窗口或元素的 scrollTop 值.
   :rtype: Number
   
.. function:: scrollTop(num)

    .. versionadded:: 1.2
        设置窗口 scrollTop 值.
    
    :param number num: 将要设置的 scrollTop 值
    :returns: 设置的值
    :rtype: Number
    
.. function:: scrollTop(node,num)

    .. versionadded:: 1.2
        设置窗口或元素的 scrollTop 值.
    
    :param Window|HTMLElement node: 某个 iframe 的 contentWindow 或当前 window 或某个节点.
    :returns: 设置的值
    :rtype: Number