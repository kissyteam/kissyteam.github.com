.. currentmodule:: Event

event.preventDefault
===============================

返回 :class:`Event.Object`

.. method:: Object.preventDefault()    

    阻止默认行为的发生.例如点击链接不会使浏览器跳转到新的地址。我们可以使用 :attr:`~Event.Object.isDefaultPrevented` 来判断是否某个事件处理器里调用了这个方法.
    
    
例子
------------------------------    

阻止链接的跳转


.. literalinclude:: /_static/api/core/event/preventDefault.html
   :language: html   
   
   
Demo

.. raw:: html

    <iframe width="100%" height="135" src="../../../static/api/core/event/preventDefault.html"></iframe>        

