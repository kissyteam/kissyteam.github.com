.. currentmodule:: dom

insertBefore
=================================

Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: insertBefore

    | void **insertBefore** ( newNode, refNode )
    | 将 newNode 插入到 refNode 之前.
    
    :param string|HTMLElement newNode: 插入的节点. 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_, 获取匹配的第一个元素.
    :param string|HTMLElement refNode: 参考节点. 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_, 获取匹配的第一个元素.
    