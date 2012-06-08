.. currentmodule:: dd

DraggableDelegate
===============================================

|  委托容器内的所有 Draggable 节点的拖放行为.



Class
-----------------------------------------------

  * :class:`DraggableDelegate`

Config Attributes
-----------------------------------------------

  * :attr:`~DraggableDelegate.config.container`
  * :attr:`~DraggableDelegate.config.selector`
  * :attr:`~DraggableDelegate.config.handlers`
  
Properties
-----------------------------------------------

  * :data:`~DraggableDelegate.prototype.node`
  * :data:`~DraggableDelegate.prototype.dragNode`
  
Methods
-----------------------------------------------

  * :meth:`~DraggableDelegate.destroy`

Events
-----------------------------------------------

  * :func:`~DraggableDelegate.dragstart`
  * :func:`~DraggableDelegate.drag`
  * :func:`~DraggableDelegate.dragend`
  * :func:`~DraggableDelegate.dragenter`
  * :func:`~DraggableDelegate.dragover`
  * :func:`~DraggableDelegate.dragexit`
  * :func:`~DraggableDelegate.dragdrophit`
  * :func:`~DraggableDelegate.dragdropmiss`


Class Detail
-----------------------------------------------

.. class:: DraggableDelegate
    
    | **DraggableDelegate** (config)
    
    * 继承自 :class:`dd.Draggable` , 包含其全部配置,属性,方法,事件.

    :param Object config: 配置项, 详细见下方 **Config Attributes Detail**
    

Config Attributes Detail
-----------------------------------------------
    
.. attribute:: DraggableDelegate.config.container

    {String | HTMLElement} - 用于委托的容器节点, 所有 Draggable 节点都在其内.

.. attribute:: DraggableDelegate.config.selector

    {String} - 用来获取容器内的 Draggable 节点, 格式为 tag 或 tag.cls 或 .cls.

.. attribute:: DraggableDelegate.config.handlers

    {Array} - 数组每个元素是选择器字符串, 格式为 tag 或 tag.cls 或 .cls, 作为鼠标在其上按下时触发节点拖放的钩子.  如果不设置, 则整个可拖放节点都作为触发钩子.  其中可拖放节点通过 selector 从容器 container 中取得.

    .. note::

        handlers 的每个元素 dom 节点必须位于可拖放节点中.
    
Properties Detail
-----------------------------------------------
    
.. attribute:: DraggableDelegate.prototype.node

    {KISSY.Node} - 当前正在拖动的被委托的容器内子节点, 在应用 DD.Proxy 时表示委托节点.

.. attribute:: DraggableDelegate.prototype.dragNode

    {KISSY.Node} - 当前正在拖动的被委托的容器内子节点.


Methods Detail
-----------------------------------------------

.. method:: DraggableDelegate.destroy

    | **destroy** ()
    | 销毁当前可拖放对象实例, 清除绑定事件.

Events Detail
-----------------------------------------------

.. function:: DraggableDelegate.dragstart
    
    | **dragstart** (ev)
    | 同 :func:`Draggable.dragstart`

.. function:: DraggableDelegate.drag

    | **drag** (ev)
    | 同 :func:`Draggable.drag`

.. function:: DraggableDelegate.dragend

    | **dragend** (ev)
    | 同 :func:`Draggable.dragend`

.. function:: DraggableDelegate.dragenter

    | **dragenter** (ev)
    | 同 :func:`Draggable.dragenter`

.. function:: DraggableDelegate.dragover

    | **dragover** (ev)
    | 同 :func:`Draggable.dragover`

.. function:: DraggableDelegate.dragexit

    | **dragexit** (ev)
    | 同 :func:`Draggable.dragexit`

.. function:: DraggableDelegate.dragdrophit

    | **dragdrophit** (ev)
    | 同 :func:`Draggable.dragdrophit`

.. function:: DraggableDelegate.dragdropmiss

    | **dragdropmiss** (ev)
    | 同 :func:`Draggable.dragdropmiss`

