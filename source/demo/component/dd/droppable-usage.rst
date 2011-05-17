.. currentmodule:: DD

Droppable Usage
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


demo
==========================================

.. raw:: html

    <style>

        .container {
            border: 1px solid red;
            height: 450px;
            padding: 10px;
            position: relative;
        }
    
        .component {
            margin: 50px 10px;
            width: 100px;
            height: 100px;
            line-height: 100px;
            border: 1px solid black;
            display: inline-block;
            *display: inline;
            *zoom: 1;
            overflow: hidden;
        }
    
        .cheader {
            cursor: move;
            border: 1px solid black;
            height: 20px;
            line-height: 20px;
        }
    
        #drop, #drop3 {
            border: 1px solid green;
            height: 130px;
            line-height: 100px;
        }
    
        .ks-dd-drag-over {
            background: #a52a2a;
        }
    
        .ks-dd-drop-over {
            background: #fa8072;
        }
    
        #container3 .component .cheader {
            cursor: move;
        }
    </style>

    <div id="container" class="container">
        <div id="c1" class="component">
            intersect drag
        </div>
    
        <div id="c2" class="component">    
            point drag
        </div>
    
        <div id="c3" class="component">    
            strict drag
        </div>
        
        <div id="drop">
            drop zone
        </div>
    </div>
    
    <script>
    KISSY.use("node,dd", function (S, Node, DD) {
        var DDM = DD.DDM,
    
        Draggable = DD.Draggable,
            Droppable = DD.Droppable;
    
    
        var p;
        /**
         * 集中监听所有
         */
        DDM.on("dragstart", function(ev) {
    
            var c = ev.drag;
            p = c.get("dragNode").css("position");
        });
        DDM.on("drag", function(ev) {
    
            var c = ev.drag;
            /**
             * node 和 dragNode 区别：
             * node : 可能是 proxy node，指实际拖放节点
             */
            c.get("node").offset(ev);
        });
        DDM.on("dragend", function(ev) {
            var c = ev.drag;
            c.get("dragNode").css("position", p);
        });
    
        /**
         * 简单拖放
         */
        
            
        var c1 = new Draggable({
            node:"#c1",
            //模式，
            // intersect :区域相交就算enter
            // strict : drag 区域完全在 drop 区域内才算
            // point : 鼠标在 drop 区域内
            //默认 point
            mode:Draggable.INTERSECT
        });


        var c3 = new Draggable({
            node:"#c3",
            mode:Draggable.STRICT
        });


        var c2 = new Draggable({
            node:"#c2"
        });


        var drop = new Droppable({
            node:"#drop"
        });
      

        function onhit(ev) {
            ev.drag.get("node").css("margin", "5px 10px");
            ev.drag.get("node").appendTo(ev.drop.get("node"));
            ev.drag.destroy();
        }     

        drop.on("drophit",onhit);

    });              
    </script>
    
    
分解    
=============================================    

准备节点
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: html

    <div id="container" class="container">
        <div id="c1" class="component">
            intersect drag
        </div>
    
        <div id="c2" class="component">    
            point drag
        </div>
    
        <div id="c3" class="component">    
            strict drag
        </div>
        
        <div id="drop">
            drop zone
        </div>
    </div>
    
获取模块定义
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: javascript

    KISSY.use("node,dd", function (S, Node, DD) {
        var DDM = DD.DDM,    
            Draggable = DD.Draggable,
            Droppable = DD.Droppable;
    });

全局监控
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

开始拖放前保存节点的定位信息：

.. code-block:: javascript
    
    DDM.on("dragstart", function(ev) {    
        var c = ev.drag;
        p = c.get("dragNode").css("position");
    });
    
拖放中，根据位置信息设置节点坐标

.. code-block:: javascript

    DDM.on("drag", function(ev) {    
        var c = ev.drag;
        /**
         * node 和 dragNode 区别：
         * node : 可能是 proxy node，指实际拖放节点
         */
        c.get("node").offset(ev);
    });
    
拖放结束后，恢复节点的定位信息

.. code-block:: javascript

    DDM.on("dragend", function(ev) {
        var c = ev.drag;
        c.get("dragNode").css("position", p);
    });        
    

初始拖放对象
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

实例化 3 个普通的拖实例以及一个放实例

.. code-block:: javascript

    var c1 = new Draggable({
        node:"#c1",
        //模式，
        // intersect :区域相交就算enter
        // strict : drag 区域完全在 drop 区域内才算
        // point : 鼠标在 drop 区域内
        //默认 point
        mode:Draggable.INTERSECT
    });


    var c3 = new Draggable({
        node:"#c3",
        mode:Draggable.STRICT
    });


    var c2 = new Draggable({
        node:"#c2"
    });


    var drop = new Droppable({
        node:"#drop"
    });
    
    
监听放实例的 drophit 事件
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

当在 drop 区域放入 draggable 对象时，该 draggable 代表的节点被放入 drop 区域中

.. code-block:: javascript

    function onhit(ev) {
        ev.drag.get("node").css("margin", "5px 10px");
        ev.drag.get("node").appendTo(ev.drop.get("node"));
        ev.drag.destroy();
    }     

    drop.on("drophit",onhit);       