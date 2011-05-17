.. currentmodule:: DOM

DOM.data
=================================

.. function:: DOM.data( selector [ , name ] )

    获取符合选择器的第一个元素的扩展属性（expando）。
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string name: 扩展属性名称
    :returns: 对应扩展属性名的属性值，如不指定扩展属性名，则取得所有扩展属性键值对像。
    
.. note::

    embed，object，applet 这三个标签不能设置 expando 。    
    
.. function:: DOM.data ( selector, name, data )

    给符合选择器的所有元素的扩展属性（expando）。设置扩展属性 name 为 data。
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string name: 扩展属性名称
    :param value: 扩展属性值
    
举例

.. code-block:: javascript

    var S = KISSY, DOM = S.DOM;

    // 设置所有 img 的名为 data-size 的 expando , 值为 400;
    DOM.data('img', 'data-size', 400);
    
    // 获取第一个 img 元素中, 名为 data-size 的 expando 值;
    DOM.data('img', 'data-size');            