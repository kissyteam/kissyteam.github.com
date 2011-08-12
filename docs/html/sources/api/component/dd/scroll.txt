.. currentmodule:: DD

Scroll
===============================================

.. versionadded:: 1.2

|  监控容器关联的所有可拖放对象, 必要时随着可拖放对象进行自动滚动.
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/dd/scroll.js>`_  | `Demo <../../../demo/component/dd/droppabledelegate.html>`_

Class
-----------------------------------------------

  * :class:`~Scroll`

Config Attributes
-----------------------------------------------

  * :attr:`~Scroll.config.node`
  * :attr:`~Scroll.config.rate`
  * :attr:`~Scroll.config.diff`
  
Methods
-----------------------------------------------

  * :meth:`~Scroll.attach`
  * :meth:`~Scroll.unAttach`
  * :meth:`~Scroll.destroy`


Class Detail
-----------------------------------------------

.. class:: Scroll
    
    | **Scroll** (config)

    :param Object config: 配置项, 详细见下方 **Config Attributes Detail**
    

Config Attributes Detail
-----------------------------------------------
    
.. attribute:: Scroll.config.node

    {String | HTMLElement} - 自动滚动容器, 随其内的可拖放节点自动滚动.

.. attribute:: Scroll.config.rate

    {Array<number>} - 长度为 2, 默认值 [10,10] . 表示容器自动滚动的速度, 数组元素 1 表示横向滚动的速度, 数组元素 2 表示纵向滚动的速度.

.. attribute:: Scroll.config.diff

    {String} - 长度为 2, 默认值 [20,20] . 当鼠标进入容器内边缘区域时开始自动滚动.  数组元素 1 表示横向容器内边缘宽度, 数组元素 2 表示纵向容器内边缘宽度.

    .. image:: /_images/dd/scroll.png


Methods Detail
-----------------------------------------------

.. method:: Scroll.attach

    | **attach** (drag)
    | 注册可拖放对象到当前容器.

    :param Draggable drag: 需要使容器自动滚动的 Draggable 对象

.. method:: Scroll.unAttach

    | **unAttach** (drag)
    | 解除当前容器关联的可拖放对象.

    :param Draggable drag: 使容器自动滚动的 Draggable 对象

.. method:: Scroll.destroy

    | **destroy** (drag)
    | 解除当前容器关联的所有可拖放对象.

