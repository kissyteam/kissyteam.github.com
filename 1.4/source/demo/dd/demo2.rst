.. currentmodule:: dd

Droppable 基本使用
===============================================

Class
-----------------------------------------------

  * :class:`Droppable`


Droppable 基本使用
-------------------------------

    .. raw:: html

        <iframe width="100%" height="300" class="iframe-demo" src="/1.4/source/raw/demo/dd/demo2.html"></iframe>


    **组织HTML**

    .. code-block:: html

        <div id="container" class="container">
            <div class="box component" id="c1">
                <s class="box-tp"><b></b></s>
                <div class="box-hd">
                    <h3>Drag</h3>
                </div>
                <div class="box-bd">
                    intersect drag
                </div>
                <s class="box-bt"><b></b></s>
            </div>
            <div class="box component" id="c2">
                <s class="box-tp"><b></b></s>
                <div class="box-hd">
                    <h3>Drag</h3>
                </div>
                <div class="box-bd">
                    strict drag
                </div>
                <s class="box-bt"><b></b></s>
            </div>
            <div class="box component" id="c3">
                <s class="box-tp"><b></b></s>
                <div class="box-hd">
                    <h3>Drag</h3>
                </div>
                <div class="box-bd">
                    point drag
                </div>
                <s class="box-bt"><b></b></s>
            </div>
            <div class="box" >
                <s class="box-tp"><b></b></s>
                <div id="drop" class="box-bd ks-dd">
                    drop zone
                </div>
                <s class="box-bt"><b></b></s>
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
            mode:Draggable.INTERSECT,
            move:true
        });


        var c3 = new Draggable({
            node:"#c3",
            mode:Draggable.STRICT,
            move:true
        });


        var c2 = new Draggable({
            node:"#c2",
            move:true
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