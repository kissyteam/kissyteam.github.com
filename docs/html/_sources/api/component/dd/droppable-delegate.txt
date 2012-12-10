.. currentmodule:: dd

DroppableDelegate
===============================================

|  为 Draggable 对象提供所需要的代理节点

.. code-block:: javascript

    KISSY.use('dd',function(S,dd){
        // use dd.DroppableDelegate
    });


Class
-----------------------------------------------

  * :class:`~DroppableDelegate`

Configs
-----------------------------------------------

  * :attr:`~DroppableDelegate.config.container`
  * :attr:`~DroppableDelegate.config.selector`
  
Attributes
-----------------------------------------------

  * :data:`~DroppableDelegate.prototype.node`

Events
-----------------------------------------------

  * :func:`~DroppableDelegate.Events.dropenter`
  * :func:`~DroppableDelegate.Events.dropover`
  * :func:`~DroppableDelegate.Events.dropexit`
  * :func:`~DroppableDelegate.Events.drophit`


Class Detail
-----------------------------------------------

.. class:: DroppableDelegate
    
    | **DroppableDelegate** (config)
    
    * 继承自 :class:`dd.Droppable` , 包含其全部配置,属性,方法,事件.

    :param Object config: 配置项, 详细见下方 **Configs Detail**
    

Configs Detail
-----------------------------------------------
    
.. attribute:: DroppableDelegate.config.container

    {String | HTMLElement} - 用于委托的容器节点, 所有 Droppable 节点都在其内.

.. attribute:: DroppableDelegate.config.selector

    {String} - 类型选择字符串, 用来获取容器内的 Droppable 节点, 格式为 tag 或 tag.cls 或 .cls.

    
Attributes Detail
-----------------------------------------------
    
.. attribute:: DroppableDelegate.prototype.node

    {KISSY.Node} - 表示当前容器内正在和 Draggble 对象交互的节点,  通过 selector 获取.


Events Detail
-----------------------------------------------

.. function:: DroppableDelegate.Events.dropenter

    | **dropenter** (ev)
    | 同 :func:~Droppable.Events.dropenter`

.. function:: DroppableDelegate.Events.dropover

    | **dropover** (ev)
    | 同 :func:~Droppable.Events.dropover`

.. function:: DroppableDelegate.Events.dropexit

    | **dropexit** (ev)
    | 同 :func:~Droppable.Events.dropexit`

.. function:: DroppableDelegate.Events.drophit

    | **drophit** (ev)
    | 同 :func:~Droppable.Events.drophit`

