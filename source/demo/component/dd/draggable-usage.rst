.. currentmodule:: DD

Draggable & Proxy
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
            var Draggable = DD.Draggable;
        });

.. seealso::

    KISSY 1.2 :mod:`Loader` 新增功能


.. _draggable-usage-demo :

demo
==========================================



.. raw:: html

    <style>
        .ks-dd-proxy {
            opacity:0.2;
            *filter:alpha(opacity=20);
        }
    </style>
    
    <div id='test-drag' style='border:1px solid red;background:blue;width:100px;height:100px;color:white;'>
      drag me
    </div>
    <script>
        KISSY.use("dd",function(S,DD){
            var drag=new DD.Draggable({
                node:'#test-drag',
                cursor:'move'
            });
            
            new DD.Proxy().attach(drag);
            
            drag.on("drag",function(ev){
               drag.get("node").offset({
                left:ev.left,
                top:ev.top
               }); 
            });
        });
    </script>
    
    
分解    
=============================================    


准备节点
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: html

    <div id='test-drag' style='border:1px solid red;
                        background:blue;width:100px;
                        height:100px;color:white;'>
      drag me
    </div>
    
设置代理节点样式

.. code-block:: html

    .ks-dd-proxy {
        opacity:0.2;
        *filter:alpha(opacity=20);
    }        

    
载入 dd 模块
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: javascript
    
    KISSY.use("dd",function(S,DD){
    
    });        
    
    
初始化 draggable 对象
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    

.. code-block:: javascript

    var drag=new DD.Draggable({
        node:'#test-drag',
        cursor:'move'
    });
    
初始化 proxy 对象
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    

然后 proxy 对象和 draggable 绑定

.. code-block:: javascript

    new Proxy().attach(drag);


监控事件，处理移动
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: javascript

    drag.on("drag",function(ev){
        drag.get("node").offset({
            left:ev.left,
            top:ev.top
        }); 
    });    