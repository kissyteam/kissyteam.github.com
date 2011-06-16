.. currentmodule:: DOM

html
=================================

Module
-----------------------------------------------

  :mod:`DOM`


Methods
-----------------------------------------------

.. function:: html( selector )

    获取符合选择器的第一个元素的 innerHTML.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :returns: 符合选择器的第一个元素的 innerHTML.
    :rtype: String

    
.. function:: html( selector , html[ , loadScripts , callback ] )

    给符合选择器的所有元素设置 innerHTML 值.        
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string html: 将要设置的 html 值
    :param boolean loadScripts: 是否执行 html 中的内嵌脚本
    :param function callback: 操作成功后的回调函数