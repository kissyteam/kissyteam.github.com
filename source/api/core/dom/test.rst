.. currentmodule:: dom

test
=================================

Module
-----------------------------------------------

  :mod:`DOM <dom>`


Methods
-----------------------------------------------

.. function:: test

    | Boolean **test** (selector , filter [,context=document] )
    | 判断根据选择器获取的所有元素是否都符合过滤条件.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string|function filter: 过滤选择器或函数, 具体详见 :func:`DOM.filter <dom.filter>`
    :param string|HTMLElement context: 选择器参考上下文, ``#id`` 或者 dom 节点.
    :returns: 选择器获取的所有元素是否都符合过滤条件.
    :rtype: Boolean

    例如

    .. code-block:: javascript
	
		KISSY.use("dom",function(S,DOM){
			// 如果所有 a 标签都包含 J_on 样式则向下进行
			if(DOM.test("a",".J_on")){
				//add your option
			}
		});