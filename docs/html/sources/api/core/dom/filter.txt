.. currentmodule:: dom

filter
=================================

Module
-----------------------------------------------

  :mod:`dom`


Methods
-----------------------------------------------

.. function:: filter

    | Array<HTMLElement> **filter** ( selector , filter [,context=document] )
    | 获取符合选择器以及过滤参数的所有元素.
    
    :param string selector: 选择器字符串, 格式参见 :ref:`KISSY selector <dom-selector>`
    :param string|function filter: 过滤选择器或函数
    
       * 类型 string 时, 格式为 tag.cls , 其他格式需要引入模块 ``sizzle`` .
       * 类型 function 时, 传入参数当前 dom 节点, 返回 ``true`` 表示保留
                                        
    :param string|HTMLElement context: 选择器参考上下文,  ``#id`` 或者 dom 节点.
    :returns: 符合选择器字符串以及过滤参数的 dom 节点数组
    :rtype: Array<HTMLElement>
	
    例如

    .. code-block:: javascript
	
		KISSY.use("dom",function(S,DOM){
			// 过滤出 class 为 J_on 的 a 元素
			var els=DOM.filter("a",".J_on");
		});
