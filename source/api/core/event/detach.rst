.. currentmodule:: Event

Event.detach
=================================

.. function:: detach ( selector [ , eventType , fn , scope ] )

    从符合匹配的 dom 节点中移去相应事件的事件处理器
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string eventType: 包含一个或多个事件名称的字符串，多个事件名以空格分开
    :param function(eventObject) fn: 绑定事件时的回调函数
    :param object scope: 绑定的事件处理器的对应 this 值

.. function:: remove ( selector , eventType , fn , scope )

    为 :func:`~Event.detach` 的别名   


.. note::

    如果要解除特定的事件处理器 , ``detach`` 的参数必须和对应的 ``on`` 参数值相等( == )并且个数一致才能完成解除绑定的目标.
        
简述
------------------------------------
    
用 ``on`` 绑定的事件处理器可以用 ``detach`` 解除绑定. 最简单的情况 ``detach(elem)`` 解除该元素上的所有绑定.

.. code-block:: javascript

    Event.detach('#foo');