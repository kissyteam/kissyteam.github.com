.. currentmodule:: dom

children
=================================

Module
-----------------------------------------------

  :mod:`dom <dom>`

Methods
-----------------------------------------------

.. function:: children

    | Array<HTMLElement> **children** (selector [ , filter ])
    | 获取符合选择器的所有非文字节点的子节点.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string|function filter: 过滤条件, 格式参见 :func:`dom.filter <dom.filter>` 的相应参数
    :returns: 获取符合选择器的所有非文字节点的子节点.
    :rtype: Array<HTMLElement>
