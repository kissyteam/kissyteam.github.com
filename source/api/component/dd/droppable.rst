.. currentmodule:: dd

Droppable
===============================================

|  放置功能


.. code-block:: javascript

    KISSY.use('dd',function(S,dd){
        // use dd.Droppable
    });

Class
-----------------------------------------------

  * :class:`~Droppable`

  
Configs
-----------------------------------------------
  
  * :data:`~Droppable.config.node`
  * :data:`~Droppable.config.groups`

  
Events
-----------------------------------------------

  * :func:`~Droppable.Event.dropenter`
  * :func:`~Droppable.Event.dropover`
  * :func:`~Droppable.Event.dropexit`
  * :func:`~Droppable.Event.drophit`


Class Detail
-----------------------------------------------

.. class:: Droppable
    
    | **Droppable** ( config )
    | 继承自 :class:`~rich-base.RichBase` ，包含其所有配置，属性，方法.
    
    :param Object config: 配置项, 详细见下方 **Configs Detail** .

    
Configs Detail
-----------------------------------------------

.. data:: Droppable.config.node

    {String | HTMLElement} - 可与拖动对象交互的节点.

.. data:: Droppable.config.groups

    {Object} - 可与拖动对象交互的节点.

    
Events Detail
-----------------------------------------------

.. function:: Droppable.Event.dropenter

    | **dropenter** ( ev )
    | 当一个 :mod:`Draggable` 对象根据其 :data:`Draggable.mode` 配置达到和当前 Droppable 实例交互条件时触发.
    | 一般即鼠标进入当前 Droppable 对象代表节点的区域, 可简单理解成 mouseenter. 相当于 html5 dd API targetNode 的 dragenter 事件的概念.
    
    :param Object ev.drag: 当前交互的 Draggable 对象.
    :param Object ev.drop: 自身, 当前Droppable对象.

.. function:: Droppable.Event.dropover 

    | **dropover** ( ev )
    | 当一个 :mod:`Draggable` 在当前 Droppable 实例上移动时触发, 可简单理解成 mouseover. 相当于 html5 dd API targetNode 的 dragover 事件的概念.
    
    :param Object ev.drag: 当前交互的 Draggable 对象.
    :param Object ev.drop: 自身, 当前Droppable对象.

.. function:: Droppable.Event.dropexit

    | **dropexit** ( ev )
    | 当一个 :mod:`Draggable` 离开当前 Droppable 实例时触发, 可简单理解成 mouseleave. 相当于 html5 dd API targetNode 的 dragleave 事件的概念.
    
    :param Object ev.drag: 当前交互的 Draggable 对象.
    :param Object ev.drop: 自身, 当前Droppable对象.

.. function:: Droppable.Event.drophit

    | **drophit** ( ev )
    | 当一个 :mod:`Draggable` 被放置在当前 Droppable 实例时触发. 相当于 html5 dd API targetNode 的 drop 事件的概念.
    
    :param Object ev.drag: 当前交互的 Draggable 对象.
    :param Object ev.drop: 自身, 当前Droppable对象.
