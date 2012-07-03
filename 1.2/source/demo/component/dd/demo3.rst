.. currentmodule:: dd

DraggableDelegate 使用示例
=============================================






Class
-----------------------------------------------

  * :class:`DraggableDelegate`

DraggableDelegate 使用示例
-----------------------------------------------

    .. raw:: html

        <iframe width="100%" height="360" class="iframe-demo" src="../../../_static/demo/dd/demo3.html"></iframe>

    **引入 kissy.js**

    .. code-block:: html

        <script src='http://a.tbcdn.cn/s/kissy/1.2.0/kissy-min.js'></script>

    **组织HTML**

    .. code-block:: html

        <div id="container3" class="container">
            <div class="box component">
                <s class="box-tp"><b></b></s>
                <div class="box-hd cheader">
                    <h3>拖动头</h3>
                </div>
                <div class="box-bd">
                    delegate drag 1
                </div>
                <s class="box-bt"><b></b></s>
            </div>
            <button id="add_delegate">add delegate drag</button>
            <div class="box" >
                <s class="box-tp"><b></b></s>
                <div id="drop" class="box-bd ks-dd">
                    drop zone
                </div>
                <s class="box-bt"><b></b></s>
            </div>
        </div>




    **调用DraggableDelegate**

    .. code-block:: javascript

        KISSY.use("node,dd", function (S, Node, DD) {
            var DDM = DD.DDM,
                DraggableDelegate = DD.DraggableDelegate,
                Droppable = DD.Droppable;
        });


        通过 use 加载 dd 模块：

        .. code-block:: javascript

            KISSY.use("dd",function(S,DD){
                var DraggableDelegate = DD.DraggableDelegate;
            });

        得到 :class:`DraggableDelegate` 构造器.

    .. seealso::

        KISSY 1.2 :mod:`seed` 新增功能


    **初始化拖放委托对象**

        * 指明容器以及容器内需要委托的可拖放节点

        .. code-block:: javascript

            var delegate = new DraggableDelegate({
                    container:"#container3",
                    handlers:['.cheader'],
                    selector:'.component',
                    move:true
                });


        * 生成 :class:`Droppable` 对象

        .. code-block:: javascript

            var drop = new Droppable({
                    node:"#drop"
                });



        * 监控 :class:`Draggable`, 拖放后复原 position

        .. code-block:: javascript

            var p;
            /**
             * 集中监听所有
             */
            DDM.on("dragstart", function(ev) {

                var c = ev.drag;
                p = c.get("dragNode").css("position");
            });

            DDM.on("dragend", function(ev) {
                var c = ev.drag;
                // 恢复原有定位
                c.get("dragNode").css("position", p);
            });
    

        * 监控 :data:`~Droppable.drophit` 事件, 将被委托的节点放入 :class:`Droppable` 区域

        .. code-block:: javascript

                function onhit(ev) {
                    ev.drag.get("dragNode").css("margin", "5px 10px");
                    ev.drag.get("dragNode").appendTo(ev.drop.get("node"));
                }

                drop.on("drophit",onhit);
                
    .. note::

        此Demo使用了KISSY设计模式的Box样式, 详情可以参考 `KISSY设计模式 <http://docs.kissyui.com/kissy-dpl/base/>`_