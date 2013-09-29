.. currentmodule:: dd

基于拖放委托 + 容器自动滚动的拖放排序
==============================================================

Class
-----------------------------------------------

  * :class:`DroppableDelegate`


基于拖放委托 + 容器自动滚动的拖放排序
---------------------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="320" class="iframe-demo" src="/1.3/source/raw/demo/dd/demo4.html"></iframe>



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

    1) 生成 :class:`DraggableDelegate` 对象，并使用 Proxy 和 Scroll 插件

        .. code-block:: javascript

            var dragDelegate = new DraggableDelegate({
                container: "#container2",
                handlers: ['.cheader'],
                selector: '.component',
                move: true,
                plugins: [
                    new Proxy({
                        /**
                         * 如何产生替代节点
                         * @param drag 当前拖对象
                         */
                        node: function (drag) {
                            var n = S.one(drag.get("dragNode")[0].cloneNode());
                            n.removeAttr('id');
                            n.css("opacity", 0.8);
                            return n;
                        },
                        // 主体位置不跟随 proxy
                        moveOnEnd: false,
                        // 每次 proxy 都重新生成
                        destroyOnEnd: true
                    }),
                    new Scroll({
                        node: "#container2"
                    })
                ]
            });

    2) 生成 :class:`DroppableDelegate` 对象

        .. code-block:: javascript

            var dropDelegate = new DroppableDelegate({
                container:"#container2",
                selector:'.component'
            });


    **交换节点位置**

    当触发 :data:`~Draggable.dragover` 事件时, 交换当前 DraggableDelegate 的被委托节点与对应 DroppableDelegate 的被委托节点

    .. code-block:: javascript

        dragDelegate.on("dragover", function (ev) {
            var drag = ev.drag;
            var drop = ev.drop;
            var dragNode = drag.get("dragNode"),
                    dropNode = drop.get("node");
            var middleDropX = (dropNode.offset().left * 2 + dropNode.width()) / 2;
            if (ev.pageX > middleDropX) {
                var next = dropNode.next();
                if (next && next[0] == dragNode[0]) {

                } else {
                    dragNode.insertAfter(dropNode);
                }
            } else {
                var prev = dropNode.prev();
                if (prev && prev[0] == dragNode[0]) {
                } else {
                    dragNode.insertBefore(dropNode);
                }
            }
        });