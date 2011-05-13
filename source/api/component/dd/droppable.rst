.. currentmodule:: DD

Droppable API
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
            var Droppable = DD.Droppable;
        });

.. seealso::

    KISSY 1.2 :mod:`Loader` 新增功能

构造器
=====================================

.. class:: Droppable(config)

    :param object config: 可放对象的一些初始化配置，包括
    
        .. attribute:: config.node
        
            类型选择器字符串或者 HTMLElement。可与拖动对象交互的节点。
        
    
实例属性
=============================================

.. attribute:: Droppable.node

    类型 ``KISSY.Node`` ，获取配置项的 :attr:`~Droppable.config.node` 值。

    
            
实例方法
==================================== 

.. method:: Droppable.destroy()

    销毁可放对象实例，清除绑定事件
    
    

.. _droppable-events:
    
触发事件
====================================

.. data::  Droppable.dropenter

    当一个 :class:`Draggable` 对象根据其 :attr:`~Draggable.config.mode` 配置达到和当前 Droppable 实例交互条件时触发。
    一般即鼠标进入当前 Droppable 对象代表节点的区域，可简单理解成 mouseenter。传给事件处理函数一个事件对象 event，包含
    
        .. attribute:: Droppable.dropenter.event.drag
        
            当前交互的 ``Draggable`` 对象
            
        .. attribute:: Droppable.dropenter.event.drop
        
            自身，当前 Droppable 兑现。
        
                        
    
.. data::  Droppable.dropover          

    当一个 :class:`Draggable` 在当前 Droppable 实例上移动时触发，可简单理解成 mouseover。
    传给事件处理函数一个事件对象 event，包含
    
        .. attribute:: Droppable.dropover.event.drag
        
            当前交互的 ``Draggable`` 对象
            
        .. attribute:: Droppable.dropover.event.drop
        
            自身，当前 Droppable 兑现。
        
.. data::  Droppable.dropexit          

    当一个 :class:`Draggable` 离开当前 Droppable 实例时触发，可简单理解成 mouseleave。
    传给事件处理函数一个事件对象 event，包含
    
        .. attribute:: Droppable.dropexit.event.drag
        
            当前交互的 ``Draggable`` 对象
            
        .. attribute:: Droppable.dropexit.event.drop
        
            自身，当前 Droppable 兑现。
            
.. data::  Droppable.drophit

    当一个 :class:`Draggable` 被放置在当前 Droppable 实例时触发，传给事件处理函数一个事件对象 event，包含
    
        .. attribute:: Droppable.drophit.event.drag
        
            当前交互的 ``Draggable`` 对象
            
        .. attribute:: Droppable.drophit.event.drop
        
            自身，当前 Droppable 对象。

                              