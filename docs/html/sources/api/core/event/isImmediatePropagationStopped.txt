.. currentmodule:: Event

event.isImmediatePropagationStopped
====================================================

返回 :class:`Event.Object`

.. attribute:: Object.isImmediatePropagationStopped    

    默认false 。是否停止了该事件的后续所有事件处理器执行,通过调用 :meth:`~Event.Object.stopImmediatePropagation` 设置状态.
    
    
例子
------------------------------    

检查是否 ``stopImmediatePropagation()`` 被调用了


.. literalinclude:: /_static/api/core/event/isImmediatePropagationStopped.html
   :language: html   
   
   
Demo

.. raw:: html

    <iframe width="100%" height="135" src="../../../static/api/core/event/isImmediatePropagationStopped.html"></iframe>        

