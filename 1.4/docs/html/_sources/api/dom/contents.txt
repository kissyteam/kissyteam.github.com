.. currentmodule:: dom

contents
=================================

Module
-----------------------------------------------

  :mod:`dom <dom>`

Methods
-----------------------------------------------

.. function:: contents

    | Array<HTMLElement> **contents** (selector [ , filter ])
    | 获取符合选择器的所有子节点（包括文字节点）.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string|function filter: 过滤条件, 格式参见 :func:`dom.filter <dom.filter>` 的相应参数
    :returns: 获取符合选择器的所有子节点（包括文字节点）.
    :rtype: Array<HTMLElement>
