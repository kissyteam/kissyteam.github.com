.. currentmodule:: DD

Scroll
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
            var Scroll = DD.Scroll;
        });

.. seealso::

    KISSY 1.2 :mod:`Loader` 新增功能




构造器
================================

.. class:: Scroll(config)

    监控容器关联的所有可拖放对象，必要时随着可拖放对象进行自动滚动。

    :param object config: 实例化可拖放对象的配置项，包括
    
        .. attribute:: config.node
        
            类型选择器字符串或者 HTMLElememt，自动滚动容器，随其内的可拖放节点自动滚动。   
            
        .. attribute:: config.rate
        
            类型 Array<number>，长度为 2，默认值 ``[10,10]`` . 表示容器自动滚动的速度，数组元素 1 表示横向滚动的速度，数组元素 2 表示纵向滚动的速度。
                    
        .. attribute:: config.diff
        
            类型 Array<number>，长度为 2，默认值 ``[20,20]`` . 当鼠标进入容器内边缘区域时开始自动滚动。
            数组元素 1 表示横向容器内边缘宽度，数组元素 2 表示纵向容器内边缘宽度。如图所示
            
            .. image:: /_images/dd/scroll.png           
    
    
实例方法
===========================================

.. method::  Scroll.attach(drag)

    注册可拖放对象到当前容器。
    
    :param Draggable drag: 需要使容器自动滚动的 Draggable 对象
    
.. method::  Scroll.unAttach(drag)

    解除当前容器关联的可拖放对象。
    
    :param Draggable drag: 使容器自动滚动的 Draggable 对象
    
.. method:: Scroll.destroy()

    解除当前容器关联的所有可拖放对象。 
