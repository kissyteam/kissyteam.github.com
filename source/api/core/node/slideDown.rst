.. currentmodule:: Node

slideDown()
==================================================

.. method:: NodeList.slideDown( [ speed = 1, callback ] )

    当前节点列表元素从上到下滑动显示
        
    :param number speed : 单位秒，动画持续时间，不设置无动画
    :param function callback: 每个动画结束后回调函数
    :rtype: NodeList    
    
.. note::

    注意回调 callback 在每个元素动画结束后都会回调， this 值指向当前单个元素所属的动画对象.       