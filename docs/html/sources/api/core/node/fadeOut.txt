.. currentmodule:: node

fadeOut
==================================================




Module
-----------------------------------------------

  :mod:`node`

Methods
-----------------------------------------------

.. method:: NodeList.fadeOut

    | NodeList **fadeOut** ( [ speed = 1, callback, easing ] )
    | 当前节点列表元素以渐隐效果隐藏
        
    :param Number speed: 单位秒, 动画持续时间, 不设置无动画
    :param Function callback: 每个动画结束后回调函数
    :param String easing: 动画平滑函数, 同 :class:`~anim.Anim`
    :rtype: NodeList
    
    .. note::

        注意回调 callback 在每个元素动画结束后都会回调,  this 值指向当前单个元素所属的动画对象.