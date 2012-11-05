.. currentmodule:: dom

siblings
=================================

Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: siblings

    | Array<HTMLElement> **siblings** (selector [ , filter ])
    | 获取符合选择器的第一个元素的相应同级节点.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string|function filter: 过滤条件, 格式参见 :func:`DOM.filter <dom.filter>` 的相应参数
    :returns: 符合选择器的第一个元素的相应同级节点.
    :rtype: Array<HTMLElement>
