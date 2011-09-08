.. currentmodule:: dom

scrollIntoView
=================================

Module
-----------------------------------------------

  :mod:`DOM <dom>`


Methods
-----------------------------------------------

.. function:: scrollIntoView

    | void **scrollIntoView** ( selector , [ container = window , top = true , hscroll = true ] )
    | 使当前选择器匹配的第一个元素出现在指定容器可视区域内.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param window|HTMLElement container: 指定容器
    :param boolean top: 是否强制元素的上边界与容器的上边界对齐, 左边界和左边界对齐
    :param boolean hscroll: 是否允许容器左右滚动以保证元素显示在其可视区域.
	
	.. code-block:: javascript
	
	    KISSY.ready(function(S){
			var DOM = S.DOM,Event = S.Event;
			//将 id 为 J_t2 的元素显示在浏览器中
			DOM.scrollIntoView('#J_t2',window);
		});