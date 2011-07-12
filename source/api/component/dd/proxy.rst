.. module:: Proxy

Proxy
===============================================

|  代理可拖放对象
|  作者: 承玉<chengyu@taobao.com>
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/dd/proxy.js>`_  | `Demo <../../../demo/component/dd/draggable.html>`_

Class
-----------------------------------------------

  * :class:`DD.Proxy`

Config Attributes
-----------------------------------------------

  * :attr:`node`
  * :attr:`destroyOnEnd`
  
Methods
-----------------------------------------------

  * :meth:`attach`
  * :meth:`unAttach`
  * :meth:`destroy`

Class Detail
-----------------------------------------------

.. class:: DD.Proxy
    
    | **DD.Proxy** (config)

    :param Object config: 配置项, 详细见下方 **Config Attributes Detail**
    

Config Attributes Detail
-----------------------------------------------
    
.. attribute:: node

    {Function} - 当 Draggable 对象需要代理节点时通过调用该函数产生代理节点，函数的参数为当前 Draggable 对象， 返回值类型为 KISSY.Node 。该属性有默认值

    .. code-block:: javascript
    
        function(drag) {
            return new Node(drag.get("node")[0].cloneNode(true));
        }

    即代理节点和当前节点保持一致。

.. attribute:: destroyOnEnd

    {Boolean} - 默认 false。指明是否代理节点需要每次拖放前 dragstart 生成， 拖放后 dragend 销毁。用于多 Draggable 对象共享一个 Proxy 对象实例，且要求代理节点和单个 Draggable 对象关联，或者一个 DraggableDelegate 对象共享一个 Proxy 对象实例。

    
Methods Detail
-----------------------------------------------

.. method:: attach

    | **attach** (drag)
    | 使当前拖放对象具备代理功能。

    :param draggable drag: 需要具备代理功能的 draggable 对象

.. method:: unAttach

    | **unAttach** (drag)
    | 解除当前拖放对象的代理功能。

    :param draggable drag: 具备代理功能的 Draggable 对象

.. method:: destroy

    | **destroy** ()
    | 解除所有通过当前 Proxy 对象添加的代理功能

