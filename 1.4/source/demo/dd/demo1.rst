.. currentmodule:: dd

Draggable & Proxy 使用示例
=====================================================

Class
-----------------------------------------------

  * :class:`Draggable`

Draggable & Proxy 使用示例
----------------------------------------------

    .. raw:: html

        <iframe width="100%" height="200" class="iframe-demo" src="/1.4/source/raw/demo/dd/demo1.html"></iframe>


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
                cursor:'move',
                move:true
            });
        });

    **插入 Proxy 插件**

    .. code-block:: javascript

        drag.plug(Proxy);