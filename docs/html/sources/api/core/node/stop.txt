.. currentmodule:: node

stop
==================================================

.. versionadded:: 1.2

Module
-----------------------------------------------

  :mod:`node`

Methods
-----------------------------------------------

.. method:: NodeList.stop

    | NodeList **stop** ( [ finish ] )
    | 停止当前节点列表的所有动画
        
    :param boolean finish: flasy 时, 动画会在当前帧直接停止；为 true 时, 动画停止时会立刻跳到最后一帧.
    :rtype: NodeList    