.. currentmodule:: Event

event.target
===============================

返回 :class:`Event.Object`

.. attribute:: Object.target    

    target 属性可以是绑定事件的元素的子孙节点. 常被用来和 this 比较来确定是否这个事件是冒泡过来的。
    这个属性在委托情况下非常有用，可以得到事件的真正触发源。    

    
例子
------------------------------    

显示点击事件触发源的节点名称

.. literalinclude:: /_static/api/core/event/target.html
   :language: html   
   
   
Demo

.. raw:: html

    <iframe width="100%" height="135" src="../../../static/api/core/event/target.html"></iframe>     
    
简单的委托实现，点击处理器被绑定到 ul 上面， 点击 li 会使得该 li 下的子 ul 菜单显示与隐藏.

.. literalinclude:: /_static/api/core/event/target_2.html
   :language: html   
   
   
Demo

.. raw:: html

    <iframe width="100%" height="135" src="../../../static/api/core/event/target_2.html"></iframe>

   