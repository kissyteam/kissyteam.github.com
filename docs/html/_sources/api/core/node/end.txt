.. currentmodule:: node



end
==================================================

Module
-----------------------------------------------

  :mod:`node`

Methods
-----------------------------------------------

.. method:: NodeList.prototype.end

    | NodeList **end** ()
    | 得到上一次 :meth:`NodeList.prototype.one` / :meth:`NodeList.prototype.all` 操作前的 NodeList 对象
    
    :returns: 上一步的节点列表对象
    
    
    .. hint::

        引入该方法是为了更好的支持链式操作( ``chaining`` )，可以在一个语句内对不同层次得节点集合进行不同的操作.
    
   
    **一句话设置两个元素为不同颜色**

    .. raw:: html

        <iframe width="100%" height="135" class="iframe-demo"  src="../../../../../source/raw/api/core/node/end.html"></iframe>

    .. literalinclude:: /raw/api/core/node/end.html
           :language: html


