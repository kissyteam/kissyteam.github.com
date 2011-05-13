.. currentmodule:: DD

DraggableDelegate API
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
            var DraggableDelegate = DD.DraggableDelegate;
        });

.. seealso::

    KISSY 1.2 :mod:`Loader` 新增功能




构造器
================================

.. class:: DraggableDelegate(config)

    返回拖放实例，委托容器内的所有 Draggable 节点的拖放行为。    

    :param object config: 实例化可拖放对象的配置项，包括
    
        .. attribute:: config.container
        
            类型选择器字符串或者 HTMLElement ，用于委托的容器节点，所有 Draggable 节点都在其内。
            
        .. attribute:: config.selector
        
            类型选择器字符串，格式为 tag 或 tag.cls 或 .cls。用来获取容器内的 Draggable 节点。
            
        .. attribute:: config.handlers
        
            类型数组，数组每个元素是选择器字符串，格式为 tag 或 tag.cls 或 .cls，作为鼠标在其上按下时触发节点拖放的钩子。
            如果不设置，则整个可拖放节点都作为触发钩子。
            其中可拖放节点通过 :attr:`~DraggableDelegate.config.selector` 
            从容器 :attr:`~DraggableDelegate.config.container` 中取得。
            
                .. note ::
                    
                    handlers 的每个元素 dom 节点必须位于可拖放节点中。

.. note ::

    对于委托的可拖节点，当和 Droppable 实例交互时， :attr:`~Draggable.config.mode` 统一为 :data:`~Draggable.POINT`            
    
实例属性
============================================

.. attribute:: DraggableDelegate.node

    类型 ``KISSY.Node`` ，表示当前正在拖动的被委托的容器内子节点，在应用 ``DD.Proxy`` 时表示委托节点。
    
.. attribute:: DraggableDelegate.dragNode

    类型 ``KISSY.Node`` ，表示当前正在拖动的被委托的容器内子节点。    

    
.. note::

    实例属性通过 ``get`` 方法获取，例如 ``dragDelegate.get("node")``     
    
实例方法
===========================================

.. method::  DraggableDelegate.destroy()

    销毁当前可拖放对象实例，清除绑定事件。     

            
触发事件
=================================

    继承自 :class:`Draggable` .包括 :data:`~Draggable.dragstart` , :data:`~Draggable.drag` , :data:`~Draggable.dragend` , :data:`~Draggable.dragenter` , :data:`~Draggable.dragover` , :data:`~Draggable.dragexit` , :data:`~Draggable.dragdrophit` , :data:`~Draggable.dragdropmiss` .
    
    .. note::
    
        可以通过 :attr:`~DraggableDelegate.node` 来获得正在拖放的委托子节点（或委托节点的代理节点），通过 :attr:`~DraggableDelegate.dragNode` 来获得正在拖放的代理真正子节点。
