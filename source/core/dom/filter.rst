.. currentmodule:: DOM

DOM.filter
=================================

.. function:: DOM.filter( selector , filter [,context=document] )

    获取符合选择器以及过滤参数的所有元素。
    
    :param string selector: 选择器字符串，格式参见 `KISSY selector <dom-selector>`_
    :param string|function filter: 过滤选择器或函数
    
                                   * 类型 string 时，格式为 tag.cls ，其他格式需要引入 ``sizzle``
                                   * 类型 function 时，传入参数当前 dom 节点，返回 ``true`` 表示保留
                                        
    :param string|HTMLElement context: 选择器参考上下文， ``#id`` 或者 dom 节点。
    :returns: 符合选择器字符串以及过滤参数的 dom 节点数组
    :rtype: Array<HTMLElement>