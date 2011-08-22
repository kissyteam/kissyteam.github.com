.. currentmodule:: dom

toggle
=================================

Module
-----------------------------------------------

  :mod:`dom`


Methods
-----------------------------------------------

.. function:: toggle

    | void **toggle** ( selector )
    | 将符合选择器的所有元素切换显示/隐藏两个状态.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
	
    例如：
	
    .. code-block:: js
	
	    KISSY.ready(function(S){
		    var DOM = S.DOM,Event = S.Event;
		    //点击 id 为 b1 的元素来控制 id 为 t1 的元素显示或者不显示
		    Event.on('#b1','click',function(e){
			    DOM.toggle('#t1');
		    });
	    });