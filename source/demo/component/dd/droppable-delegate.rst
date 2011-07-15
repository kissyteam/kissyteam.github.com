.. currentmodule:: DD

DroppableDelegate & Scroll Demo
==============================================================

|  作者: 承玉<chengyu@taobao.com>
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/dd/droppable-delegate.js>`_

.. versionadded:: 1.2

Class
-----------------------------------------------

  * :class:`DD.DroppableDelegate`

.. _Component-dd-demo4:

Demo - 基于拖放委托 + 容器自动滚动的拖放排序
---------------------------------------------------------------

    .. raw:: html

        <style>
            .container {
                border: 1px solid red;
                height: 200px;
                padding: 10px;
                position: relative;
                overflow: auto;
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

            .component .cheader {
                cursor: move;
            }

            .ks-dd-dragging * {
                visibility: hidden;
            }

            .ks-dd-dragging {
                border: 2px blue dashed;
            }
        </style>

        <button id="add"> add module</button>
        <br/><br/>
        <div id="container2" class="container">

            <div class="component">
                <div class="cheader">
                    拖动头
                </div>
                <span>
                drag proxy1
                    </span>
            </div>

            <div class="component">
                <div class="cheader">
                    拖动头
                </div>
                 <span>
                drag proxy2
                </span>
            </div>

            <div class="component">
                <div class="cheader">
                    拖动头
                </div>
                 <span>
                drag proxy3
                </span>
            </div>
        </div>

        <script>
            KISSY.use("node,dd", function(S, Node, DD) {

                var DDM = DD.DDM,
                        DraggableDelegate = DD.DraggableDelegate,
                        DroppableDelegate = DD.DroppableDelegate,
                        Draggable = DD.Draggable,
                        Droppable = DD.Droppable,
                        Scroll = DD.Scroll,
                        Proxy = DD.Proxy;

                /**
                 * 拖放排序
                 */

                S.ready(function() {

                    var proxy = new Proxy({
                        /**
                         * 如何产生替代节点
                         * @param drag 当前拖对象
                         */
                        node:function(drag) {
                            var n = S.one(drag.get("dragNode")[0].cloneNode(true));
                            n.attr("id", S.guid("ks-dd-proxy"));
                            n.css("opacity", 0.2);
                            return n;
                        },
                        destroyOnEnd:true
                    });

                    var dragDelegate = new DraggableDelegate({
                        container:"#container2",
                        handlers:['.cheader'],
                        selector:'.component'
                    });

                    proxy.attach(dragDelegate);




                    var dropDelegate = new DroppableDelegate({
                        container:"#container2",
                        selector:'.component'
                    });


                    var p;
                    /**
                     * 集中监听所有
                     */
                    dragDelegate.on("dragstart", function(ev) {
                        var c = this;
                        p = c.get("dragNode").css("position");
                    });
                    dragDelegate.on("drag", function(ev) {

                        var c = this;
                        /**
                         * node 和 dragNode 区别：
                         * node : 可能是 proxy node, 指实际拖放节点
                         */
                        c.get("node").offset(ev);
                    });
                    dragDelegate.on("dragend", function(ev) {
                        var c = this;
                        c.get("dragNode").css("position", p);
                    });

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


                    var s=new Scroll({
                        node:"#container2"
                    });

                    s.attach(dragDelegate);

                    var container = S.one("#container2");
                    var id = 4;
                    container.unselectable();
                    S.one("#add").on("click", function() {
                        new Node('<div class="component">' +
                                '<div class="cheader">拖动头</div>' +
                                '<span>drag proxy' + (id++) + '</span></div>').appendTo(container).unselectable();
                    });
                });
            });
        </script>


    **引入 kissy.js**

        .. code-block:: html

            <script src='kissy.js'></script>


    **组织HTML**

        .. code-block:: html

                <div id="container2" class="container">
                    <div class="component">
                        <div class="cheader">
                            拖动头
                        </div>
                        <span>
                        drag proxy1
                            </span>
                    </div>

                    <div class="component">
                        <div class="cheader">
                            拖动头
                        </div>
                         <span>
                        drag proxy2
                        </span>
                    </div>

                    <div class="component">
                        <div class="cheader">
                            拖动头
                        </div>
                         <span>
                        drag proxy3
                        </span>
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
                        n.css("opacity", 0.2);
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