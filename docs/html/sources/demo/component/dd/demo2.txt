.. currentmodule:: DD

Demo - Droppable 基本使用
===============================================

.. versionadded:: 1.2

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/dd/droppable.js>`_

Class
-----------------------------------------------

  * :class:`Droppable`


Demo - Droppable 基本使用
-------------------------------

    .. raw:: html

        <iframe width="100%" height="500" class="iframe-demo" src="../../../static/demo/dd/demo2.html"></iframe>


    **引入 kissy.js**

    .. code-block:: html

        <script src='http://a.tbcdn.cn/s/kissy/1.2.0/kissy.js'></script>


    **组织HTML**

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
    
    **加载 dd**

    .. code-block:: javascript

        KISSY.use("node,dd", function (S, Node, DD) {
            var DDM = DD.DDM,
                Draggable = DD.Draggable,
                Droppable = DD.Droppable;
        });

    **全局监控**

    开始拖放前保存节点的定位信息：

    .. code-block:: javascript

        DDM.on("dragstart", function(ev) {
            var c = ev.drag;
            p = c.get("dragNode").css("position");
        });

    拖放中, 根据位置信息设置节点坐标

    .. code-block:: javascript

        DDM.on("drag", function(ev) {
            var c = ev.drag;
            /**
             * node 和 dragNode 区别：
             * node : 可能是 proxy node, 指实际拖放节点
             */
            c.get("node").offset(ev);
        });

    拖放结束后, 恢复节点的定位信息

    .. code-block:: javascript

        DDM.on("dragend", function(ev) {
            var c = ev.drag;
            c.get("dragNode").css("position", p);
        });


    **初始拖放对象**

    实例化 3 个普通的拖实例以及一个放实例

    .. code-block:: javascript

        var c1 = new Draggable({
            node:"#c1",
            //模式,
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

    
    **监听放实例的 drophit 事件**

    当在 drop 区域放入 draggable 对象时, 该 draggable 代表的节点被放入 drop 区域中

    .. code-block:: javascript

        function onhit(ev) {
            ev.drag.get("node").css("margin", "5px 10px");
            ev.drag.get("node").appendTo(ev.drop.get("node"));
            ev.drag.destroy();
        }

        drop.on("drophit",onhit);