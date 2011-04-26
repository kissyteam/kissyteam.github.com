.. currentmodule:: DD

DroppableDelegate API
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
            var DroppableDelegate = DD.DroppableDelegate;
        });

.. seealso::

    KISSY 1.2 :mod:`Loader` 新增功能

构造器
=====================================

.. class:: DroppableDelegate(config)

    :param object config: 可放对象的一些初始化配置，包括
    
        .. attribute:: config.container
        
            类型选择器字符串或者 HTMLElement ，用于委托的容器节点，所有 Droppable 节点都在其内。
            
        .. attribute:: config.selector
        
            类型选择器字符串，格式为 tag 或 tag.cls 或 .cls。用来获取容器内的 Droppable 节点。            
        
    
实例属性
=============================================

.. attribute:: DroppableDelegate.node

    类型 ``KISSY.Node`` ，表示当前容器内正在和 Draggble 对象交互的节点，
    通过 :attr:`~DroppableDelegate.config.selector` 获取。

    
            
实例方法
==================================== 

.. method:: DroppableDelegate.destroy()

    销毁可放对象实例，清除绑定事件
    
    
触发事件
====================================

继承自 :class:`Droppable` .包括 :data:`~Droppable.dropenter` , :data:`~Droppable.dropover` , :data:`~Droppable.dropexit` , :data:`~Droppable.drophit` .
    
.. note::

    可以通过 :attr:`~DroppableDelegate.node` 来获得当前正在和 :class:`Draggable` 对象交互的被委托的容器内的子节点。

                              