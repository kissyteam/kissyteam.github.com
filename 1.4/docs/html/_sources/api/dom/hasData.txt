.. currentmodule:: dom

hasData
=================================

Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: hasData

    | Boolean **hasData** ( selector [ , name ] )


        判断是否符合选择器的所有元素中的一个存在对应的扩展属性( expando )值.

    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    :param string name: 扩展属性名称.如果指定 name, 则判断是否存在指定的扩展属性值. 否则判断是否存在任意扩展属性值
    :returns: 是否具有扩展属性.
    :rtype: Boolean
    
    .. note::

        hasData( selector ) 可以判断一个元素是否经过 :func:`dom.data <dom.data>` 设置过扩展属性，而如果直接调用 ``DOM.data( selector )``
        那么当元素没有设置过扩展属性时，会在元素上关联一个空存储对象，并返回它.


    .. code-block:: javascript

        var S = KISSY, DOM = S.DOM;

        // 给所有的段落节点设置扩展属性 ``x`` , 值为 ``y``
        DOM.data("p","x","y");

        DOM.hasData("p"); // => true , 设置过扩展属性

        DOM.hasData("p","x") // => true , 设置过扩展属性 ``x`` 的值

        DOM.hasData("p","z") // => false , 没有设置过扩展属性 ``z`` 的值

        DOM.removeData("p","x"); // => 删除扩展属性 ``x`` 的值

        DOM.hasData("p","x"); //=> false

        DOM.hasData("p"); //=> false