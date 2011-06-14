.. currentmodule:: DOM

.. _dom-siblings:

siblings
=================================

Class
-----------------------------------------------

  :js:data:`KISSY.DOM`

Methods
-----------------------------------------------

.. js:function:: siblings(selector [ , filter ])

   获取符合选择器的第一个元素的相应同级节点。
    
   :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
   :param string|function filter: 过滤条件，格式参见 :ref:`DOM.filter <dom-filter>` 的相应参数
   :returns: {Array<HTMLElement>} - 符合选择器的第一个元素的相应同级节点。
