.. currentmodule:: Event

event.which
===============================

返回 :class:`Event.Object`

.. attribute:: Object.which    

    对于键盘和鼠标按键，这个属性代表键盘或鼠标按键的代码.
    which 对 charCode 和 keyCode 以及 button 进行了兼容。推荐使用 which 来代替这些属性.
    
例子
------------------------------    

显示当前按键信息

.. literalinclude:: /_static/api/core/event/which.html
   :language: html   
   
   
Demo

.. raw:: html

    <iframe width="100%" height="135" src="../../../static/api/core/event/which.html"></iframe>     