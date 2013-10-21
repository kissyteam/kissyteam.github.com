.. currentmodule:: dom

addClass
===============================================

Module
-----------------------------------------------

  :mod:`dom <dom>`

Methods
-----------------------------------------------

.. function:: addClass

    | void **addClass** ( selector , value )
    | 给符合选择器的所有元素添加指定 class.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string value: 样式类 class, 多个用空格分隔
	
    例如

    .. code-block:: javascript
	
		KISSY.use("dom",function(S,DOM){
			// 给 class 是 .J_on 的元素添加样式 hide
			var els=DOM.addClass(".J_on","hide");
		});