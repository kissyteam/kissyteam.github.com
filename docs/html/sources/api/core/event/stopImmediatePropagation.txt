.. currentmodule:: Event

event.stopImmediatePropagation
===============================

返回 :class:`Event.Object`

.. method:: Object.stopImmediatePropagation()    

    停止当前事件冒泡。不光停止冒泡到下一个事件目标，当前目标上的任何后续监听函数，也马上取消执行。
    用 :attr:`~Event.Object.isImmediatePropagationStopped` 来判断是否调用了该方法.
    
    
例子
------------------------------    

阻止其他的事件处理器执行


.. literalinclude:: /_static/api/core/event/stopImmediatePropagation.html
   :language: html   
   
   
Demo

.. raw:: html

    <iframe width="100%" height="135" src="../../../static/api/core/event/stopImmediatePropagation.html"></iframe>        

