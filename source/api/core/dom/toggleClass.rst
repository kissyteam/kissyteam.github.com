.. _dom-toggleClass:

toggleClass
=================================

Class
-----------------------------------------------

  :js:data:`KISSY.DOM`

Methods
-----------------------------------------------

.. js:function:: toggleClass( selector, value  )

    操作符合选择器的所有元素, 如果存在值为 value 的 class, 则移除掉, 反之添加.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string value: 样式类 class, 多个用空格分隔 , 需要 toggle 的样式类