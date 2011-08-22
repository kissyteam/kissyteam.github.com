.. currentmodule:: node


scrollTop
========================================

.. versionadded:: 1.2

Module
-----------------------------------------------

  :mod:`node`

Methods
-----------------------------------------------

.. method:: NodeList.scrollTop

    | NodeList **scrollTop** ()
    | 得到当前节点列表第一个节点的滚动条的垂直位置.
        
    :rtype: number

    | NodeList **scrollTop** ( value )
    | 设置当前节点列表每个节点的滚动条的垂直位置.

    :param number value: 新的滚动条所在位置
    :rtype: NodeList
    :returns: 自身 this


Demo
-----------------------------------------------

**得到一行的 scrollTop**

    .. literalinclude:: /_static/api/core/node/scrollTop-get.html
       :language: html


    .. raw:: html

        <iframe width="100%" height="135" src="../../../static/api/core/node/scrollTop-get.html"></iframe>


**设置 div 的 scrollTop**

    .. literalinclude:: /_static/api/core/node/scrollTop-set.html
       :language: html


    .. raw:: html

        <iframe width="100%" height="135" src="../../../static/api/core/node/scrollTop-set.html"></iframe>