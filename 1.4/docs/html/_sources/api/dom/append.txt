.. currentmodule:: dom

append
=================================

Module
-----------------------------------------------

  :mod:`dom <dom>`

Methods
-----------------------------------------------

.. function:: append

    | void **append** ( node, parent )
    | 将 node 追加到 parent 子节点最后.
    
    :param string|HTMLElement node: 插入的节点. 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_ , 获取匹配的第一个元素.
    :param string|HTMLElement parent: 参照父节点. 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_ , 获取匹配的第一个元素.
    