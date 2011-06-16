.. currentmodule:: DOM

hasData
=================================

Module
-----------------------------------------------

  :mod:`DOM`


Methods
-----------------------------------------------

.. function:: hasData( selector [ , name ] )

    .. versionadded:: 1.2
        判断是否符合选择器的所有元素中的一个存在对应的扩展属性( expando )值.

    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string name: 扩展属性名称.如果指定 name, 则判断是否存在指定的扩展属性值. 否则判断是否存在任意扩展属性值
    :returns: 是否具有扩展属性.
    :rtype: Boolean


    举例：

        .. code-block:: javascript

            var S = KISSY, DOM = S.DOM;

            // 给所有的段落节点设置扩展属性 ``x`` ，值为 ``y``
            DOM.data("p","x","y");

            DOM.hasData("p"); // => true , 设置过扩展属性

            DOM.hasData("p","x") // => true , 设置过扩展属性 ``x`` 的值

            DOM.hasData("p","z") // => false , 没有设置过扩展属性 ``z`` 的值

            DOM.removeData("p","x"); // => 删除扩展属性 ``x`` 的值

            DOM.hasData("p","x"); //=> false

            DOM.hasData("p"); //=> false