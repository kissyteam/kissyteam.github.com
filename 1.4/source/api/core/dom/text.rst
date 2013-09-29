.. currentmodule:: dom

text
=================================


Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: text

    | String **text** ( selector )
    | 获取符合选择器的第一个元素所包含的文本值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :returns: 获取符合选择器的第一个元素所包含的文本值. 无值时, 返回空字符串.
	
	例如：
	
	.. code-block:: js
		
		KISSY.use("dom",function(S,DOM){
			// 获得id 为 J_on 的 dom 元素内的文本
			var els=DOM.text("#J_on");
		});
    
    | void **text** ( selector, value )
    | 给符合选择器的所有元素设置文本值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string value: 将要设置的文本值
	
	例如：
	
	.. code-block:: js
		
		KISSY.use("dom",function(S,DOM){
			// 获得id 为 J_on 的 dom 元素内的文本设置为The text
			var els=DOM.text("#J_on","The text");
		});
    
    .. centered::
        相当于 ie 下调用 ``innerText`` 以及其他浏览器下调用 ``textContent`` .