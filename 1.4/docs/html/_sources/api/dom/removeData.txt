.. currentmodule:: dom

removeData
=================================


Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: removeData

    | void **removeData** ( selector [ , name ] )
    | 将符合选择器的所有元素的对应扩展属性( expando )删除.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    :param string name: 扩展属性名称. 如果指定 name, 则只删除名为 name 的 expando . 如果不指定 name, 则删除元素的整个 expando .

    .. code-block:: javascript
        
        var S = KISSY, DOM = S.DOM;

        // 删除 img 元素的名为 data-size 的 expando;
        DOM.removeData('img', 'data-size');

        // 删除 img 元素的 expando;
        DOM.removeData('img');