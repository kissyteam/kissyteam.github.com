.. py:currentmodule:: Draggable

Draggable & Proxy Demos
=====================================================

|  作者: 承玉<chengyu@taobao.com>
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/dd/draggable.js>`_

.. versionadded:: 1.2

Class
-----------------------------------------------

  * :class:`~Draggable.Draggable`


.. _Component-dd-demo1:

Demo - Draggable & Proxy 使用示例
----------------------------------------------

    .. raw:: html

        <style>
            .ks-dd-proxy {
                opacity:0.2;
                *filter:alpha(opacity=20);
            }
        </style>

        <div id='test-drag' style='border:1px solid red;background:blue;width:100px;height:100px;color:white;'>
          drag me
        </div>
        <script>
            KISSY.use("dd",function(S,DD){
                var drag=new DD.Draggable({
                    node:'#test-drag',
                    cursor:'move'
                });

                new DD.Proxy().attach(drag);

                drag.on("drag",function(ev){
                   drag.get("node").offset({
                    left:ev.left,
                    top:ev.top
                   });
                });
            });
        </script>


    **引入 kissy.js**

        .. code-block:: html

            <script src='kissy.js'></script>


    **组织HTML**

        .. code-block:: html

            <div id='test-drag' style='border:1px solid red;
                                background:blue;width:100px;
                                height:100px;color:white;'>
              drag me
            </div>
    
    **设置代理节点样式**

        .. code-block:: html

            .ks-dd-proxy {
                opacity:0.2;
                *filter:alpha(opacity=20);
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