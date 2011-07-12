.. currentmodule:: DOM

insertBefore
=================================

Module
-----------------------------------------------

  :mod:`DOM`


Methods
-----------------------------------------------

.. function:: insertBefore

    | void **insertBefore** ( newNode, refNode )
    | 将 newNode 插入到 refNode 之前.
    
    :param string|HTMLElement newNode: 插入的节点. 字符串格式参见 :ref:`KISSY selector <dom-selector>`, 获取匹配的第一个元素.
    :param string|HTMLElement refNode: 参考节点. 字符串格式参见 :ref:`KISSY selector <dom-selector>`, 获取匹配的第一个元素.
    