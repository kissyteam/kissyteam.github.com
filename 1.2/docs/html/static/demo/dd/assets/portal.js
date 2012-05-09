KISSY.use("dd,node", function (S, DD, Node) {


    var DDM = DD.DDM,
        $ = Node.all,
        DraggableDelegate = DD.DraggableDelegate,
        DroppableDelegate = DD.DroppableDelegate,
        Draggable = DD.Draggable,
        Droppable = DD.Droppable,
        Scroll = DD.Scroll,
        Proxy = DD.Proxy;

    var proxy = new Proxy({
        /**
         * 如何产生替代节点
         * @param drag 当前拖对象
         */
        node:function (drag) {
            var n = $(drag.get("dragNode").clone(true));
            n.attr("id", S.guid("ks-dd-proxy"));
            n.css("opacity", 0.2);
            return n;
        },
        moveOnEnd:false,
        destroyOnEnd:true
    });

    var dragDelegate = new DraggableDelegate({
        container:"#cols",
        move:1,
        handlers:['.header'],
        selector:function (el) {
            el = $(el);
            return el.hasClass('col') || el.hasClass('component');
        }
    });
    proxy.attachDrag=proxy.attach;
    proxy.attachDrag(dragDelegate);

    /**
     * 一列也为可拖放节点，防止空列无法拖入
     */
    new DroppableDelegate({
        container:"#cols",
        selector:'.col'
    });

    /**
     * 单个 component 为可拖放节点
     */
    new DroppableDelegate({
        container:"#cols",
        selector:'.component'
    });

    dragDelegate.on("dragover", function (ev) {
        var drag = ev.drag;
        var drop = ev.drop;
        var dragNode = drag.get("dragNode"),
            dropNode = drop.get("node");


        if (dragNode.hasClass("component")) {

            if (dropNode.hasClass("col")) {
                var nodes = dropNode.all(".component");

                if (nodes.length) {

                    if (nodes.length == 1 &&

                        ( nodes[0] === drag.get("node")[0] &&
                            nodes[0] !== drag.get("dragNode")[0])

                        ) {
                        // 只有 proxy
                    } else {
                        return;
                    }
                }

                // S.log("添加到列");

                //空列
                dropNode.append(dragNode);
            } else {

                // 纵轴中线位置
                var middleDropY = (dropNode.offset().top * 2 + dropNode.height()) / 2;

                //当前鼠标位置
                if (ev.pageY > middleDropY) {
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
            }
        }
        // 列之间拖动
        else if (dropNode.hasClass("col")) {

            // 横轴中线位置
            var middleDropX = (dropNode.offset().left * 2 + dropNode.width()) / 2;

            //当前鼠标位置
            if (ev.pageX > middleDropX) {
                next = dropNode.next();
                if (next && next[0] == dragNode) {
                } else {
                    dragNode.insertAfter(dropNode);
                }
            } else {
                prev = dropNode.prev();
                if (prev && prev[0] == dragNode) {
                } else {
                    dragNode.insertBefore(dropNode);
                }
            }
        }
    });
});
