.. currentmodule:: dd

Demo - 基于拖放委托 + 容器自动滚动的拖放排序
==============================================================

.. versionadded:: 1.2

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/dd/droppable-delegate.js>`_


Class
-----------------------------------------------

  * :class:`DroppableDelegate`


Demo - 基于拖放委托 + 容器自动滚动的拖放排序
---------------------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="320" class="iframe-demo" src="../../../static/demo/dd/demo4.html"></iframe>


    **引入 kissy.js**

    .. code-block:: html

        <script src='http://a.tbcdn.cn/s/kissy/1.2.0/kissy.js'></script>


    **组织HTML**

    .. code-block:: html

        <div id="container2" class="container">
            <div class="box component">
                <s class="box-tp"><b></b></s>
                <div class="box-hd cheader">
                    <h3>拖动头</h3>
                </div>
                <div class="box-bd">
                    drag proxy 1
                </div>
                <s class="box-bt"><b></b></s>
            </div>       
            <div class="box component">
                <s class="box-tp"><b></b></s>
                <div class="box-hd cheader">
                    <h3>拖动头</h3>
                </div>
                <div class="box-bd">
                    drag proxy 2
                </div>
                <s class="box-bt"><b></b></s>
            </di>   
            <div class="box component">
                <s class="box-tp"><b></b></s>
                <div class="box-hd cheader">
                    <h3>拖动头</h3>
                </div>
                <div class="box-bd">
                    drag proxy 3
                </div>
                <s class="box-bt"><b></b></s>
            </div>
        </div>


        
    **加载 dd**

    .. code-block:: javascript

        KISSY.use("node,dd", function(S, Node, DD) {

            var DDM = DD.DDM,
                DraggableDelegate = DD.DraggableDelegate,
                DroppableDelegate = DD.DroppableDelegate,
                Draggable = DD.Draggable,
                Droppable = DD.Droppable,
                Scroll = DD.Scroll,
                Proxy = DD.Proxy;

        });


    **初始化模块类实例**

    1) 生成 :class:`DraggableDelegate` 对象

        .. code-block:: javascript

            var dragDelegate = new DraggableDelegate({
                container:"#container2",
                handlers:['.cheader'],
                selector:'.component'
            });

    2) 生成 :class:`DroppableDelegate` 对象

        .. code-block:: javascript

            var dropDelegate = new DroppableDelegate({
                container:"#container2",
                selector:'.component'
            });

    3) 生成 :class:`Proxy` 对象, 并关联到 :class:`DraggableDelegate` 对象

        .. code-block:: javascript

            var proxy = new Proxy({
                /**
                 * 如何产生替代节点
                 * @param drag 当前拖对象
                 */
                node:function(drag) {
                    var n = S.one(drag.get("dragNode")[0].cloneNode(true));
                    n.attr("id", S.guid("ks-dd-proxy"));
                    n.css("opacity", 0.8);
                    return n;
                },
                destroyOnEnd:true
            });

            proxy.attach(dragDelegate);

    4) 生成指定容器的 :class:`Scroll` 对象, 并关联到 :class:`DraggableDelegate` 对象

        .. code-block:: javascript

            var s=new Scroll({
                node:"#container2"
            });

            s.attach(dragDelegate);


    **监控移动**

    在 :class:`DraggableDelegate` 上监听移动事件, 并移动相应的被委托节点

    .. code-block:: javascript

        dragDelegate.on("drag", function(ev) {

            var c = this;
            /**
             * node 和 dragNode 区别：
             * node : 可能是 proxy node, 指实际拖放节点
             */
            c.get("node").offset(ev);
        });


    **交换节点位置**

    当触发 :data:`~Draggable.dragover` 事件时, 交换当前 DraggableDelegate 的被委托节点与对应 DroppableDelegate 的被委托节点

    .. code-block:: javascript

        dragDelegate.on("dragover", function(ev) {
            var drag = ev.drag;
            var drop = ev.drop;
            var dragNode = drag.get("dragNode"),
                    dropNode = drop.get("node");
            var middleDropX = (dropNode.offset().left * 2 + dropNode.width()) / 2;
            if (ev.pageX > middleDropX) {
                var next = dropNode.next();
                if (next && next[0] == dragNode) {

                } else {
                    dragNode.insertAfter(dropNode);
                }
            } else {
                var prev = dropNode.prev();
                if (prev && prev[0] == dragNode) {

                } else {
                    dragNode.insertBefore(dropNode);
                }
            }
        });
        
    .. note::

        此Demo使用了KISSY设计模式的Box样式, 详情可以参考 `KISSY设计模式 <http://docs.kissyui.com/kissy-dpl/base/>`_