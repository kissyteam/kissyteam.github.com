.. currentmodule:: dom


replaceClass
=================================

Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: replaceClass

    | void **replaceClass** ( selector, oldClassName, newClassName )
    | 将符合选择器的所有元素的老 class 替换为新 class.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    :param string oldClassName: 样式类 class, 多个用空格分隔 , 需要删除的样式类
    :param string newClassName: 样式类 class, 多个用空格分隔 , 需要添加的样式类
	
    例如
	
    .. code-block:: javascript
	
	    KISSY.use("dom",function(S,DOM){
		    // 将 class 是 .J_on 的元素的样式 hide 替换成 show
		    var els=DOM.replaceClass(".J_on","hide","show");
	    });