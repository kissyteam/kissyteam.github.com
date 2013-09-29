.. currentmodule:: node

all
==================================================

Module
-----------------------------------------------

  :mod:`node`

Methods
-----------------------------------------------


.. method:: NodeList.prototype.all

    | NodeList **all** ( selector )
    | 得到当前节点列表内符合选择器字符串的子孙节点列表
    
    :param string selector: 选择器字符串            
    :rtype: NodeList
    
    实际上是
    
    .. code-block:: javascript

        NodeList.prototype.all=function(selector) {
            if (this.length > 0) {
                return NodeList.all(selector, this);
            }
            // 否则空节点列表
            return new NodeList();
        };

举例
--------------------------------------------------
.. raw:: html

    <iframe width="100%" height="135" class="iframe-demo"  src="/1.4/source/raw/api/core/node/instance_all.html"></iframe>

.. literalinclude:: /raw/api/core/node/instance_all.html
       :language: html


