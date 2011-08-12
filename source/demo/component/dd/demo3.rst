.. currentmodule:: dd

Demo - DraggableDelegate 使用示例
=============================================

.. versionadded:: 1.2

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/dd/draggable-delegate.js>`_


Class
-----------------------------------------------

  * :class:`DraggableDelegate`

Demo - DraggableDelegate 使用示例
-----------------------------------------------

    .. raw:: html

        <iframe width="100%" height="360" class="iframe-demo" src="../../../static/demo/dd/demo3.html"></iframe>

    **引入 kissy.js**

    .. code-block:: html

        <script src='http://a.tbcdn.cn/s/kissy/1.2.0/kissy.js'></script>

    **组织HTML**

    .. code-block:: html

        <div id="container3" class="container">

            <div class="component">
                <div class="cheader">
                    拖动头
                </div>
                delegate drag
            </div>

            <button id="add_delegate">add delegate drag</button>


            <div id="drop3">
                drop zone
            </div>
        </div>



    **调用DraggableDelegate**

    .. code-block:: javascript

        KISSY.use("node,dd", function (S, Node, DD) {
            var DDM = DD.DDM,
                DraggableDelegate = DD.DraggableDelegate,
                Droppable = DD.Droppable;
        });

    .. versionadded:: 1.2
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
                    selector:'.component'
                });


        * 生成 :class:`Droppable` 对象

        .. code-block:: javascript

            var drop = new Droppable({
                    node:"#drop3"
                });



        * 监控 :class:`Draggable`, 集中在 :data:`DDM` 上处理移动

        .. code-block:: javascript

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
                 * node : 可能是 proxy node, 指实际拖放节点
                 */
                c.get("node").offset(ev);
            });

            DDM.on("dragend", function(ev) {
                var c = ev.drag;
                c.get("dragNode").css("position", p);
            });
    

        * 监控 :data:`~Droppable.drophit` 事件, 将被委托的节点放入 :class:`Droppable` 区域

        .. code-block:: javascript

                function onhit(ev) {
                    ev.drag.get("dragNode").css("margin", "5px 10px");
                    ev.drag.get("dragNode").appendTo(ev.drop.get("node"));
                    ev.drag.get("dragNode").one(".cheader")[0].className="cheader2";
                }

                drop.on("drophit",onhit);