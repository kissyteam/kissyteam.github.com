.. currentmodule:: dom

removeAttr
=================================

Module
-----------------------------------------------

  :mod:`dom`


Methods
-----------------------------------------------

.. function:: removeAttr

    | void **removeAttr** ( selector, name )
    | 移除符合选择器的所有元素的指定属性.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string name: 属性名称
	
    例如

    .. code-block:: javascript
	
		KISSY.use("dom",function(S,DOM){
			// 将所有复选框的 checked 属性移除
			DOM.removeAttr("radiobox","checked");
		});