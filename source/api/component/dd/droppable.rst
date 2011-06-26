.. module:: Droppable

Droppable
===============================================

|  放置功能
|  作者: `承玉 <yiminghe@gmail.com>`_
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/dd/droppable.js>`_ 

.. versionadded:: 1.2


Class
-----------------------------------------------

  * :class:`Droppable`

  
Config Attributes
-----------------------------------------------
  
  * :data:`node`
  
 
Methods
-----------------------------------------------

  * :meth:`destroy`

  
Events
-----------------------------------------------

  * :func:`dropenter`
  * :func:`dropover`
  * :func:`dropexit`
  * :func:`drophit`


Class Detail
-----------------------------------------------

.. class:: Droppable
    
    | **Droppable** ( config )
    
    :param Object config: 配置项, 详细见下方 **Config Attributes Detail** .

    
Config Attributes Detail
-----------------------------------------------

.. data:: node

    {String | HTMLElement} - 可与拖动对象交互的节点。。

    
Methods Detail
-----------------------------------------------

.. method:: destroy
    
    | **destroy** ()
    | 销毁可放对象实例，清除绑定事件。   

    
Events Detail
-----------------------------------------------

.. function:: dropenter

    | **dropenter** ( ev )
    | 当一个 :mod:`Draggable` 对象根据其 :data:`Draggable.mode` 配置达到和当前 Droppable 实例交互条件时触发。
    | 一般即鼠标进入当前 Droppable 对象代表节点的区域，可简单理解成 mouseenter。
    
    :param Object ev.drag: 当前交互的 Draggable 对象。
    :param Object ev.drop: 自身, 当前Droppable对象。

.. function:: dropover 

    | **dropover** ( ev )
    | 当一个 :mod:`Draggable` 在当前 Droppable 实例上移动时触发，可简单理解成 mouseover。
    
    :param Object ev.drag: 当前交互的 Draggable 对象。
    :param Object ev.drop: 自身, 当前Droppable对象。

.. function:: dropexit

    | **dropexit** ( ev )
    | 当一个 :mod:`Draggable` 离开当前 Droppable 实例时触发，可简单理解成 mouseleave。
    
    :param Object ev.drag: 当前交互的 Draggable 对象。
    :param Object ev.drop: 自身, 当前Droppable对象。

.. function:: drophit

    | **drophit** ( ev )
    | 当一个 :mod:`Draggable` 被放置在当前 Droppable 实例时触发。
    
    :param Object ev.drag: 当前交互的 Draggable 对象。
    :param Object ev.drop: 自身, 当前Droppable对象。
