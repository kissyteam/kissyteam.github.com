.. currentmodule:: dom

hasAttr
=================================




Module
-----------------------------------------------

  :mod:`dom <dom>`

Methods
-----------------------------------------------

.. function:: hasAttr

    | Boolean **hasAttr** ( selector , attrName )
    | 判断符合选择器的所有元素中是否有某个元素含有特定属性.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    :param string attrname: 属性名称
    :returns: 符合选择器的所有元素中是否有某个元素含有特定属性.
    :rtype: Boolean
    

    例如

    .. code-block:: javascript
	
		KISSY.use("dom",function(S,DOM){
			// 如果有 lazyloadimg 样式的元素包含 alt 属性则向下进行
			if(DOM.hasAttr(".lazyloadimg","alt")){
				//add your option
			}
		});    