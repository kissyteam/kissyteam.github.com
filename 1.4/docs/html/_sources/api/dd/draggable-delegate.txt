.. currentmodule:: dd

DraggableDelegate
===============================================



|  委托容器内的所有 Draggable 节点的拖放行为.

.. code-block:: javascript

    KISSY.use('dd',function(S,dd){
        // use dd.DraggableDelegate
    });


Class
-----------------------------------------------

  * :class:`DraggableDelegate`

Configs
-----------------------------------------------

  * :attr:`~DraggableDelegate.config.container`
  * :attr:`~DraggableDelegate.config.selector`
  * :attr:`~DraggableDelegate.config.handlers`
  
Attributes
-----------------------------------------------

  * :data:`~DraggableDelegate.prototype.node`
  * :data:`~DraggableDelegate.prototype.dragNode`

Methods
-----------------------------------------------

  同 :class:`~dd.Draggable`

Events
-----------------------------------------------

  * :func:`~DraggableDelegate.Events.dragstart`
  * :func:`~DraggableDelegate.Events.drag`
  * :func:`~DraggableDelegate.Events.dragend`
  * :func:`~DraggableDelegate.Events.dragenter`
  * :func:`~DraggableDelegate.Events.dragover`
  * :func:`~DraggableDelegate.Events.dragexit`
  * :func:`~DraggableDelegate.Events.dragdrophit`
  * :func:`~DraggableDelegate.Events.dragdropmiss`


Class Detail
-----------------------------------------------

.. class:: DraggableDelegate
    
    | **DraggableDelegate** (config)
    | 继承自 :class:`~dd.Draggable` , 包含其全部配置,属性,方法,事件.

    :param Object config: 配置项, 详细见下方 **Configs Detail**
    

Configs Detail
-----------------------------------------------
    
.. attribute:: DraggableDelegate.config.container

    {String | HTMLElement} - 用于委托的容器节点, 所有 Draggable 节点都在其内.

.. attribute:: DraggableDelegate.config.selector

    {String} - 用来获取容器内的 Draggable 节点, 格式为 tag 或 tag.cls 或 .cls.

.. attribute:: DraggableDelegate.config.handlers

    {Array} - 数组每个元素是选择器字符串, 格式为 tag 或 tag.cls 或 .cls, 作为鼠标在其上按下时触发节点拖放的钩子.  如果不设置, 则整个可拖放节点都作为触发钩子.  其中可拖放节点通过 selector 从容器 container 中取得.

    .. note::

        handlers 的每个元素 dom 节点必须位于可拖放节点中.
    
Attributes Detail
-----------------------------------------------
    
.. attribute:: DraggableDelegate.prototype.node

    {KISSY.Node} - 当前正在拖动的被委托的容器内子节点, 在应用 DD.Proxy 时表示委托节点.

.. attribute:: DraggableDelegate.prototype.dragNode

    {KISSY.Node} - 当前正在拖动的被委托的容器内子节点.


Events Detail
-----------------------------------------------

.. function:: DraggableDelegate.Events.dragstart
    
    | **dragstart** (ev)
    | 同 :func:`Draggable.Events.dragstart`

.. function:: DraggableDelegate.Events.drag

    | **drag** (ev)
    | 同 :func:`Draggable.Events.drag`

.. function:: DraggableDelegate.Events.dragend

    | **dragend** (ev)
    | 同 :func:`Draggable.Events.dragend`

.. function:: DraggableDelegate.Events.dragenter

    | **dragenter** (ev)
    | 同 :func:`Draggable.Events.dragenter`

.. function:: DraggableDelegate.Events.dragover

    | **dragover** (ev)
    | 同 :func:`Draggable.Events.dragover`

.. function:: DraggableDelegate.Events.dragexit

    | **dragexit** (ev)
    | 同 :func:`Draggable.Events.dragexit`

.. function:: DraggableDelegate.Events.dragdrophit

    | **dragdrophit** (ev)
    | 同 :func:`Draggable.Events.dragdrophit`

.. function:: DraggableDelegate.Events.dragdropmiss

    | **dragdropmiss** (ev)
    | 同 :func:`Draggable.Events.dragdropmiss`

