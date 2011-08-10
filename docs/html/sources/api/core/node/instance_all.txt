.. currentmodule:: Node

all
==================================================

Module
-----------------------------------------------

  :mod:`Node`

Methods
-----------------------------------------------


.. method:: NodeList.prototype.all

    | NodeList **all** ( selector )
    | 得到当前节点列表第一个节点内符合选择器字符串的子孙节点列表
    
    :param string selector: 选择器字符串            
    :rtype: NodeList
    
    实际上是
    
    .. code-block:: javascript

        NodeList.prototype.all=function(selector) {
            if (this.length > 0) {
                // 只查找第一个元素的子孙节点
                return NodeList.all(selector, this[0]);
            }
            // 否则空节点列表
            return new NodeList();
        };

    例如:
    
    .. code-block:: javascript

            KISSY.all("#noexist").all(".cls") // => KISSY.all("#noexist .cls")
