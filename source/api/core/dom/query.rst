.. currentmodule:: DOM

query
===============================================

Module
-----------------------------------------------

    KISSY.DOM

Method
-----------------------------------------------

.. function:: query

    | static Array<HTMLElement> **query** (selector [,context=document])
    | 获取符合选择器的所有元素。
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>` 
    :param string|HTMLElement context: 选择器参考上下文, '#id' 或者 dom 节点。
    :returns: 符合选择器字符串的 dom 节点数组
    
    
