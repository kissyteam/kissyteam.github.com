.. module:: DroppableDelegate

DroppableDelegate
===============================================

.. versionadded:: 1.2

|  为 Draggable 对象提供所需要的代理节点
|  作者: `承玉 <chengyu@taobao.com>`_
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/dd/droppable-delegate.js>`_  | `Demo <../../../demo/component/dd/droppable-delegate.html>`_


Class
-----------------------------------------------

  * :class:~DroppableDelegate.DroppableDelegate`

Config Attributes
-----------------------------------------------

  * :attr:`container`
  * :attr:`selector`
  
Properties
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

.. class:: DroppableDelegate
    
    | **DroppableDelegate** (config)

    :param Object config: 配置项, 详细见下方 **Config Attributes Detail**
    

Config Attributes Detail
-----------------------------------------------
    
.. attribute:: container

    {String | HTMLElement} - 用于委托的容器节点, 所有 Droppable 节点都在其内.

.. attribute:: selector

    {String} - 类型选择字符串, 用来获取容器内的 Droppable 节点, 格式为 tag 或 tag.cls 或 .cls.

    
Properties Detail
-----------------------------------------------
    
.. attribute:: node

    {KISSY.Node} - 表示当前容器内正在和 Draggble 对象交互的节点,  通过 selector 获取.


Methods Detail
-----------------------------------------------

.. method:: destroy

    | **destroy** ()
    | 销毁可放对象实例, 清除绑定事件

Events Detail
-----------------------------------------------

.. function:: dropenter

    | **dropenter** (ev)
    | 同 :func:`Droppable.dropenter`

.. function:: dropover

    | **dropover** (ev)
    | 同 :func:`Droppable.dropover`

.. function:: dropexit

    | **dropexit** (ev)
    | 同 :func:`Droppable.dropexit`

.. function:: drophit

    | **drophit** (ev)
    | 同 :func:`Droppable.drophit`

