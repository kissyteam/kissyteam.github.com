.. currentmodule:: dom

query
===============================================

Module
-----------------------------------------------

  :mod:`DOM <dom>`

Method
-----------------------------------------------

.. function:: query

    | static Array<HTMLElement> **query** (selector [,context=document])
    | 获取符合选择器的所有元素.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>` 
    :param string|HTMLCollection|Array<HTMLElement> context: 选择器参考上下文,.
    
    .. versionadded:: 1.2
        ``context`` 限制同 ``selector`` 相同.
        
    :returns: 符合选择器字符串的 dom 节点数组
    

    注意 ``context`` 的取值

    .. raw:: html

        <iframe width="100%" height="135" class="iframe-demo" src="../../../static/api/core/dom/query.html"></iframe>

    .. literalinclude:: /_static/api/core/dom/query.html
           :language: html


