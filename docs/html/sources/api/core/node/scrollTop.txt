.. currentmodule:: Node


scrollTop()
========================================

.. method:: NodeList.scrollTop()

    .. versionadded:: 1.2
        得到当前节点列表第一个节点的滚动条的垂直位置。
        
    :rtype: number
    
    
例子：

得到一行的 scrollTop

.. literalinclude:: /_static/api/core/node/scrollTop-get.html
   :language: html
    
Demo

.. raw:: html

    <iframe width="100%" height="135" src="../../../static/api/core/node/scrollTop-get.html"></iframe>
    
    

.. method:: NodeList.scrollTop( value )

    .. versionadded:: 1.2
        设置当前节点列表每个节点的滚动条的垂直位置。
        
    :param number value: 新的滚动条所在位置
    :rtype: NodeList
    :returns: 自身 this
    
例子：

设置 div 的 scrollTop

.. literalinclude:: /_static/api/core/node/scrollTop-set.html
   :language: html
    
Demo

.. raw:: html

    <iframe width="100%" height="135" src="../../../static/api/core/node/scrollTop-set.html"></iframe>               