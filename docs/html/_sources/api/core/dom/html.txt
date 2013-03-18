.. currentmodule:: dom

html
=================================

Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: html

    | String **html** ( selector )
    | 获取符合选择器的第一个元素的 innerHTML.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :returns: 符合选择器的第一个元素的 innerHTML.
    :rtype: String


    | void **html** ( selector , html[ , loadScripts] )
    | 给符合选择器的所有元素设置 innerHTML 值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string html: 将要设置的 html 值
    :param boolean loadScripts: 是否执行 html 中的内嵌脚本

	.. code-block:: javascript
	
	    var S = KISSY, DOM = S.DOM;

	    // 等价 document.createElement('div')
	    DOM.create('<div id="J_check"></div>');
	    DOM.html("#J_check","<h3>This is the added part</h3>");
	    DOM.html("#J_check"); // => <h3>This is the added part</h3>
