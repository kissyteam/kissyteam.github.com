.. module:: Scroll

Scroll
===============================================

|  监控容器关联的所有可拖放对象，必要时随着可拖放对象进行自动滚动。
|  作者: 承玉<chengyu@taobao.com>
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/dd/scroll.js>`_ 

Class
-----------------------------------------------

  * :class:`DD.Scroll`

Config Attributes
-----------------------------------------------

  * :attr:`node`
  * :attr:`rate`
  * :attr:`diff`
  
Methods
-----------------------------------------------

  * :meth:`attach`
  * :meth:`unAttach`
  * :meth:`destroy`


Class Detail
-----------------------------------------------

.. class:: DD.Scroll
    
    | **DD.Scroll** (config)

    :param Object config: 配置项, 详细见下方 **Config Attributes Detail**
    

Config Attributes Detail
-----------------------------------------------
    
.. attribute:: node

    {String | HTMLElement} - 自动滚动容器，随其内的可拖放节点自动滚动。

.. attribute:: rate

    {Array<number>} - 长度为 2，默认值 [10,10] . 表示容器自动滚动的速度，数组元素 1 表示横向滚动的速度，数组元素 2 表示纵向滚动的速度。

.. attribute:: diff

    {String} - 长度为 2，默认值 [20,20] . 当鼠标进入容器内边缘区域时开始自动滚动。 数组元素 1 表示横向容器内边缘宽度，数组元素 2 表示纵向容器内边缘宽度。

    .. image:: /docs/html/images/scroll.png


Methods Detail
-----------------------------------------------

.. method:: attach

    | **attach** (drag)
    | 注册可拖放对象到当前容器。

    :param Draggable drag: 需要使容器自动滚动的 Draggable 对象

.. method:: unAttach

    | **unAttach** (drag)
    | 解除当前容器关联的可拖放对象。

    :param Draggable drag: 使容器自动滚动的 Draggable 对象

.. method:: destroy

    | **destroy** (drag)
    | 解除当前容器关联的所有可拖放对象。

