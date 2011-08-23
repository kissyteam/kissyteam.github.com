.. currentmodule:: overlay

Demo - 从 markup 中构建 overlay
========================================================

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/overlay/>`_

Class
-----------------------------------------------

  * :class:`Overlay`

Demo - 从 markup 中构建 overlay
----------------------------------------------------------

    .. raw:: html


        <iframe width="100%" height="300" class="iframe-demo" src="../../../static/demo/overlay/demo1.html"></iframe>

    **定义CSS**

    .. code-block:: html
    
        <!--最好定义下，和 ie 下初始定位有关系-->
        <style>
            #popup1 {
                position:absolute;
                left:-9999px;
                top:-9999px;
            }
        </style>

    初始载入时, 弹出层所在 div 是浮出在屏幕之外而隐藏的, 当点击 Show 按钮时, 该弹层对齐在 Hide 按钮旁边, 当点击 Hide 按钮时, 已经显示的弹层就隐藏了.


    **组织 HTML 结构**

    .. code-block:: html

        <div id='popup1'>
            我是一些提示信息
        </div>

        <button id="btn1">Show</button>
        <button id="btn2">Hide</button>


    **JS初始化**

    通过 srcNode 配置项配置从已存的 dom 节点来生成 :class:`~Overlay.Overlay` 对象 :

    .. code-block:: javascript
        :linenos:

        KISSY.use("overlay",function(S,Overlay){
            // 对于 kissy < 1.2 ,可使用 Overlay = S.Overlay; 获取构造器

            var popup = new Overlay({
                srcNode:S.one("#popup1"), // 配置已存在 dom 节点
                width: 300, // 配置宽度
                height: 200,    // 配置高度
                align: {    // 配置对齐属性
                    node: '#btn2',
                    points: ['tr', 'tl'],
                    offset: [50, 0]
                }
            });

        });


    当点击 Show 按钮时会触发弹出层的显示, 以及点击 Hide 按钮时会触发弹出层的隐藏.

    .. code-block:: javascript
        :linenos:

        S.one('#btn1').on('click', function() {
            // 根据对齐属性, 显示在 Hide 按钮旁
            popup.show();
        });

        S.one('#btn2').on('click', function() {
            // 隐藏弹出层
            popup.hide();
        });
