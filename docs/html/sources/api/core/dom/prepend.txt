.. currentmodule:: dom

prepend
=================================

Module
-----------------------------------------------

  :mod:`DOM <dom>`


Methods
-----------------------------------------------

.. function:: prepend

    | void **prepend** ( node, parent )
    | 将 node 追加到 parent 子节点最前.
    
    :param string|HTMLElement node: 插入的节点. 字符串格式参见 :ref:`KISSY selector <dom-selector>` , 获取匹配的第一个元素.
    :param string|HTMLElement parent: 参照父节点. 字符串格式参见 :ref:`KISSY selector <dom-selector>`, 获取匹配的第一个元素.
	
    举例
	
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
		    DOM.prepend('<li>0</li>',u);
	    });
    