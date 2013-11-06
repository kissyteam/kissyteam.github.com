.. currentmodule:: dom

attr
=================================

Module
-----------------------------------------------

  :mod:`dom <dom>`

Methods
-----------------------------------------------

.. function:: attr

    | String **attr** ( selector, name )
    | 获取符合选择器的第一个元素的属性值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    :param string name: 属性名称
    :returns: 对应属性名的属性值

    例如

    .. code-block:: javascript

       var S = KISSY, DOM = S.DOM;
       var c=DOM.create("<input type='checkbox' checked='checked'/>");
       DOM.attr(c,"checked") // => "checked"
       DOM.prop(c,"checked") // => true
        
    .. note
        判断属性设置与否请使用 :func:`dom.hasAttr <dom.hasAttr>` . 如果需要获取 DOM properties, 请使用 :func:`dom.prop <dom.prop>` 方法

    | void **attr** ( selector, name, value )
    | 给符合选择器的所有元素设置属性值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    :param string name: 属性名称
    :param value: 属性值


    | void **attr** ( selector, kv )
    | 给符合选择器的所有元素设置属性值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    :param object kv: 属性名与属性值的键值对
    
    例如

    .. code-block:: javascript

        var S = KISSY, DOM = S.DOM;

        // 同时设置多个属性
        DOM.attr('img', { src: 'kissy.png', width: 400, height: 400 });