.. currentmodule:: DOM

prop
=================================

.. versionadded:: 1.2


Module
-----------------------------------------------

  :mod:`DOM`


Methods
-----------------------------------------------


.. function:: prop( selector, name )

    获取符合选择器的第一个元素的对应 property 值.

    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string name: property 名称
    :returns: 对应 property 的值

    .. note::
    
        对于不存在的 property , 该方法返回 ``null`` , 如果要判断是否设置过, 可以使用 :func:`DOM.hasProp`,
        注意区别该方法与 :func:`DOM.attr`, 也即区别 `DOM property 与 attribute <http://javascript.info/tutorial/attributes-and-custom-properties>`_ .

    例如

    .. code-block:: javascript

       var S = KISSY, DOM = S.DOM;
       var c=DOM.create("<input type='checkbox' checked='checked'/>");
       DOM.attr(c,"checked") // => "checked"
       DOM.prop(c,"checked") // => true
       DOM.attr(c,"nodeName") // => null
       DOM.prop(c,"nodeName").toLowerCase() // => input

    
    
.. function:: prop( selector, name, value )

    给符合选择器的所有元素设置 property 值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string name: property 名称
    :param value: property 值
    
.. function:: prop( selector, kv )

    给符合选择器的所有元素设置 property 值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param object kv: property 名与 property 值的键值对

    .. note::

        - 请使用 :func:`DOM.data` 方法来处理自定义属性, 而不要使用 :func:`DOM.prop` 方法, 否则在 ie<9 下会有内存泄露.
        - ``prop`` 方法可以改变 ``DOM`` 元素的状态而不改变其对应的序列化 ``html`` 属性 ( IE <9 除外). 例如设置 ``input`` 或 ``button`` 的 ``disabled`` property 或者 ``checkbox`` 的 ``checked`` property . 最常见的情况即是用 ``prop`` 来设置 ``disabled`` 以及 ``checked`` 而不是 func:`DOM.attr` . 而 :func:`DOM.val` 方法用来设置和读取 `value` property.

    例如

    .. code-block:: javascript

        var S = KISSY, DOM = S.DOM;

        DOM.prop("input","disabled", false);
        DOM.prop("input","checked", true);
        DOM.val("input","someValue");

