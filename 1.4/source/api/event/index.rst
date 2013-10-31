.. module:: event

event
====================================

.. raw:: html

    <a class='source-button' href='https://github.com/kissyteam/kissy/tree/1.4.x/src/event' target='_blank'>view event source</a>


.. code-block:: javascript

    KISSY.use('event',function(S,Event){
        // use Event
    });

.. note::

    | support windows8 touch
    | 增加 Event.global 全局事件源

Module
-----------------------------------------------

  :mod:`event`


Methods
-----------------------------------------------

.. toctree::
   :titlesonly:


   on.rst
   delegate.rst
   detach.rst
   undelegate.rst
   fire.rst
   fireHandler.rst
   event-target.rst
   event-object.rst


特殊事件支持
----------------------------------------------------

对于 DOM 节点， ``kissy`` 支持以下特殊事件


    .. toctree::
       :titlesonly:


       focusin.rst
       focusout.rst
       hashchange.rst
       valuechange.rst
       mouseenter.rst
       mouseleave.rst
       mousewheel.rst



移动设备
-----------------------------------------------------------
对于移动设备， ``kissy`` 支持以下特殊事件


    .. toctree::
       :titlesonly:


       double-tap.rst
       single-tap
       tap
       tap-hold
       swipe
       rotate-start
       rotate
       rotate-end
       pinch-start
       pinch
       pinch-end
       shake



平台统一
----------------------------------------------------
为了兼容移动与pc， kissy event 提供手势事件的枚举：

.. data:: Event.Gesture.start

    手势开始事件   
    
.. data:: Event.Gesture.move

    手势进行事件

.. data:: Event.Gesture.end

    手势结束事件

.. data:: Event.Gesture.tap

    单击事件

.. data:: Event.Gesture.doubleTap

    双击事件
    

.. note::

    手势进行事件在支持触屏的设备和只支持鼠标的设备表现不同。
    
    触屏设备中（pad,ie10,ie11）只有在手势开始事件触发后才会开始手势进行事件。
    
    而支持鼠标的设备（chrome pc，ie<19）则鼠标移动就会开始手势进行事件。