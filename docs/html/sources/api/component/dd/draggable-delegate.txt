.. module:: DraggableDelegate

DraggableDelegate
===============================================

.. versionadded:: 1.2

|  委托容器内的所有 Draggable 节点的拖放行为.
|  作者: `承玉 <chengyu@taobao.com>`_
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/dd/draggable-delegate.js>`_  | `Demo <../../../demo/component/dd/draggable-delegate.html>`_


Class
-----------------------------------------------

  * :class:`~DraggableDelegate.DraggableDelegate`

Config Attributes
-----------------------------------------------

  * :attr:`container`
  * :attr:`selector`
  * :attr:`handlers`
  
Properties
-----------------------------------------------

  * :data:`node`
  * :data:`dragNode`
  
Methods
-----------------------------------------------

  * :meth:`destroy`

Events
-----------------------------------------------

  * :func:`dragstart`
  * :func:`drag`
  * :func:`dragend`
  * :func:`dragenter`
  * :func:`dragover`
  * :func:`dragexit`
  * :func:`dragdrophit`
  * :func:`dragdropmiss`


Class Detail
-----------------------------------------------

.. class:: DraggableDelegate
    
    | **DraggableDelegate** (config)

    :param Object config: 配置项, 详细见下方 **Config Attributes Detail**
    

Config Attributes Detail
-----------------------------------------------
    
.. attribute:: container

    {String | HTMLElement} - 用于委托的容器节点, 所有 Draggable 节点都在其内.

.. attribute:: selector

    {String} - 用来获取容器内的 Draggable 节点, 格式为 tag 或 tag.cls 或 .cls.

.. attribute:: handlers

    {Array} - 数组每个元素是选择器字符串, 格式为 tag 或 tag.cls 或 .cls, 作为鼠标在其上按下时触发节点拖放的钩子.  如果不设置, 则整个可拖放节点都作为触发钩子.  其中可拖放节点通过 selector 从容器 container 中取得.

    .. note::

        handlers 的每个元素 dom 节点必须位于可拖放节点中.
    
Properties Detail
-----------------------------------------------
    
.. attribute:: node

    {KISSY.Node} - 当前正在拖动的被委托的容器内子节点, 在应用 DD.Proxy 时表示委托节点.

.. attribute:: dragNode

    {KISSY.Node} - 当前正在拖动的被委托的容器内子节点.


Methods Detail
-----------------------------------------------

.. method:: destroy

    | **destroy** ()
    | 销毁当前可拖放对象实例, 清除绑定事件.

Events Detail
-----------------------------------------------

.. function:: dragstart
    
    | **dragstart** (ev)
    | 同 :func:`Draggable.dragstart`

.. function:: drag

    | **drag** (ev)
    | 同 :func:`Draggable.drag`

.. function:: dragend

    | **dragend** (ev)
    | 同 :func:`Draggable.dragend`

.. function:: dragenter

    | **dragenter** (ev)
    | 同 :func:`Draggable.dragenter`

.. function:: dragover

    | **dragover** (ev)
    | 同 :func:`Draggable.dragover`

.. function:: dragexit

    | **dragexit** (ev)
    | 同 :func:`Draggable.dragexit`

.. function:: dragdrophit

    | **dragdrophit** (ev)
    | 同 :func:`Draggable.dragdrophit`

.. function:: dragdropmiss

    | **dragdropmiss** (ev)
    | 同 :func:`Draggable.dragdropmiss`

