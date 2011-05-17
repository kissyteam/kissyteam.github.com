.. currentmodule:: DD

Proxy API
-----------------------------------------------


引入
=====================================

页面引入 kissy.js :

.. code-block:: html

    <script src='kissy.js'></script>



.. versionadded:: 1.2
    通过 use 加载 dd 模块：
    
    .. code-block:: javascript
    
        KISSY.use("dd",function(S,DD){
            var Proxy = DD.Proxy;
        });

.. seealso::

    KISSY 1.2 :mod:`Loader` 新增功能




构造器
================================

.. class:: Proxy(config)

    :param object config: 实例化可拖放对象的配置项，包括
    
        .. attribute:: config.node
        
            类型函数，当 Draggable 对象需要代理节点时通过调用该函数产生代理节点，函数的参数为当前 Draggable 对象，
            返回值类型为 ``KISSY.Node`` 。该属性有默认值
            
                .. code-block:: javascript
                
                    function(drag) {
                        return new Node(drag.get("node")[0].cloneNode(true));
                    }
                    
                即代理节点和当前节点保持一致。    
            
        .. attribute:: config.destroyOnEnd
        
            类型 boolean，默认 false。指明是否代理节点需要每次拖放前 :data:`~Draggable.dragstart` 生成，
            拖放后 :data:`~Draggable.dragend` 销毁。用于多 :class:`Draggable` 对象共享一个 Proxy 对象实例，且要求代理节点和单个 Draggable 对象关联，或者一个 :class:`DraggableDelegate` 对象共享一个 Proxy 对象实例。
                    
    
    
实例方法
===========================================

.. method::  Proxy.attach(drag)

    使当前拖放对象具备代理功能。
    
    :param Draggable drag: 需要具备代理功能的 Draggable 对象
    
.. method::  Proxy.unAttach(drag)

    解除当前拖放对象的代理功能。
    
    :param Draggable drag: 具备代理功能的 Draggable 对象 
    
.. method:: Proxy.destroy()

    解除所有通过当前 Proxy 对象添加的代理功能       
