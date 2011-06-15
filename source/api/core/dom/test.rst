.. currentmodule:: DOM

.. _dom-test:

test
=================================

Class
-----------------------------------------------

  :js:data:`KISSY.DOM`

Methods
-----------------------------------------------

.. function:: test(selector , filter [,context=document] )

    判断根据选择器获取的所有元素是否都符合过滤条件.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string|function filter: 过滤选择器或函数, 具体详见 :ref:`DOM.filter <dom-filter>`
    :param string|HTMLElement context: 选择器参考上下文, ``#id`` 或者 dom 节点.
    :returns: {Boolean} - 选择器获取的所有元素是否都符合过滤条件.
