.. currentmodule:: dom

removeClass
=================================

Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: removeClass

    | void **removeClass** ( selector , value )
    | 给符合选择器的所有元素移除指定 class.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    :param string value: 样式类 class, 多个用空格分隔
	
    例如

    .. code-block:: javascript
	
		KISSY.use("dom",function(S,DOM){
			// 给 class 是 .J_on 的元素移除样式 hide
			var els=DOM.removeClass(".J_on","hide");
		});