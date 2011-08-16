.. currentmodule:: dd

Demo - Draggable & Proxy 使用示例
=====================================================

.. versionadded:: 1.2

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/dd/draggable.js>`_


Class
-----------------------------------------------

  * :class:`Draggable`

Demo - Draggable & Proxy 使用示例
----------------------------------------------

    .. raw:: html

        <iframe width="100%" height="200" class="iframe-demo" src="../../../static/demo/dd/demo1.html"></iframe>


    **引入 kissy.js**

    .. code-block:: html

        <script src='http://a.tbcdn.cn/s/kissy/1.2.0/kissy.js'></script>


    **组织HTML**

    .. code-block:: html

        <div class="box" id="test-drag">
            <s class="box-tp"><b></b></s>
            <div class="box-hd">
                <h3>Drag Me</h3>
            </div>
            <div class="box-bd">
                鼠标拖动
            </div>
            <s class="box-bt"><b></b></s>
        </div>
    
    **设置代理节点样式**

    .. code-block:: css

        .ks-dd-proxy {
            opacity:0.6;
            *filter:alpha(opacity=60);
        }

    
    **初始化 draggable 对象**

    .. code-block:: javascript

        KISSY.use("dd",function(S,DD){
            var drag=new DD.Draggable({
                node:'#test-drag',
                cursor:'move'
            });
        });

    **初始化 proxy 对象**

    .. code-block:: javascript

        new Proxy().attach(drag);


    **监控事件, 处理移动**

    .. code-block:: javascript

        drag.on("drag",function(ev){
            drag.get("node").offset({
                left:ev.left,
                top:ev.top
            });
        });

    .. note::

        此Demo使用了KISSY设计模式的Box样式, 详情可以参考 `KISSY设计模式 <http://docs.kissyui.com/kissy-dpl/base/>`_