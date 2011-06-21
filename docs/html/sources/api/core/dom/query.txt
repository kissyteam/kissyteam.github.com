.. currentmodule:: DOM

query
====================================

Module
-----------------------------------------------

  :mod:`DOM`


Methods
-----------------------------------------------

.. function:: query(selector [,context=document] )

    获取符合选择器的所有元素。
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>` 
    :param string|HTMLElement context: 选择器参考上下文, '#id' 或者 dom 节点。
    :returns: 符合选择器字符串的 dom 节点数组
    :rtype: Array<HTMLElement>

.. function:: KISSY.query(selector [,context=document] )

    :func:`DOM.query` 的快捷方式.