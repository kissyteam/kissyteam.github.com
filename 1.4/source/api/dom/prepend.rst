.. currentmodule:: dom

prepend
=================================

Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: prepend

    | void **prepend** ( node, parent )
    | 将 node 追加到 parent 子节点最前.
    
    :param string|HTMLElement node: 插入的节点. 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_ , 获取匹配的第一个元素.
    :param string|HTMLElement parent: 参照父节点. 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_, 获取匹配的第一个元素.

	.. code-block:: javascript
	
	    <ul id="J_ul">
		    <li>1</li>
		    <li>2</li>
		    <li>3</li>
	    </ul>
		
	    KISSY.ready(function(S){
		    var DOM = S.DOM,Event = S.Event;
		    var u = DOM.get('#J_ul');
		    //将节点 <li>0</li> 添加到ul的第一个 li 节点
		    DOM.prepend(DOM.create('<li>0</li>'),u);
	    });
    