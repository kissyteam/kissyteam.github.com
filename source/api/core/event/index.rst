.. module:: event

Event
====================================

|  事件机制

.. code-block:: javascript

    KISSY.use('event',function(S,Event){
        // use Event
    });

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

    手势开始事件 ``Event.Gesture.start`` ，pc 上为 ``'mousedown'`` , 触屏为 ``'touchstart'``

.. data:: Event.Gesture.move

    手势进行事件 ``Event.Gesture.move`` ，pc 上为 ``'mousemove'`` , 触屏为 ``'touchmove'``

.. data:: Event.Gesture.end

    手势结束事件 ``Event.Gesture.end`` ，pc 上为 ``'mouseup'`` , 触屏为 ``'touchend'``

.. data:: Event.Gesture.tap

    手势结束事件 ``Event.Gesture.tap`` ，pc 上为 ``'click'`` , 触屏为 ``'tap'``

.. data:: Event.Gesture.doubleTap

    手势结束事件 ``Event.Gesture.doubleTap`` ，pc 上为 ``'dblclick'`` , 触屏为 ``'doubleTap'``