.. currentmodule:: dom

remove
=================================

Module
-----------------------------------------------

  :mod:`DOM <dom>`


Methods
-----------------------------------------------

.. function:: remove

    | void **remove** ( selector )
    | 将符合选择器的所有元素从 DOM 中移除.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    
.. note::

    DOM.remove 会清除当前节点以及其子孙节点上已经注册的事件    