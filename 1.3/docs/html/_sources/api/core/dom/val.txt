.. currentmodule:: dom

val
=================================

Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: val

    | String **val** ( selector )
    | 获取符合选择器的第一个元素所的 value 值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :returns: 获取符合选择器的第一个元素所的 value 值. 无值时, 返回空字符串.
	
    例如

    .. code-block:: javascript
	
		KISSY.use("dom",function(S,DOM){
			// 获取 id 是 J_username 的元素的 value 值
			DOM.val("#J_username");
		});
    

    | void **val** ( selector, value )
    | 给符合选择器的所有元素设置 value 值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string value: 将要设置的 value 值
	
    例如

    .. code-block:: javascript
	
		KISSY.use("dom",function(S,DOM){
			// 将 id 是 J_username 的元素的 value 值设置成“张三”
			DOM.val("#J_username","张三");
		});