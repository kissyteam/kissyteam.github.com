.. currentmodule:: Overlay

Demo - 全新创建一个 Dialog
========================================================

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/overlay/>`_

Class
-----------------------------------------------

  * :class:`~overlay.Dialog`

Demo - 全新创建一个 Dialog
----------------------------------------------------------------------

    有时可能弹窗本身并没有在 html 中存在, 而是由脚本完全生成的, 这时就不需要 :attr:`~Overlay.config.srcNode` 配置了, 直接配置相关属性后即可完全由脚本生成所需的 dom 节点.

    .. raw:: html

        <iframe width="100%" height="400" class="iframe-demo" src="../../../static/demo/overlay/demo2.html"></iframe>
        
        
    **设置初始样式**

    .. code-block:: html
    
        <!--最好定义下，和 ie 下初始定位有关系-->
        <style>
            .ks-dialog {
                position:absolute;
                left:-9999px;
                top:-9999px;
            }
        </style>


    **调用JS**

    第一步, 生成 dialog 对象, 注意：要使得弹出对话框头部可拖动, 需要 ``use("dd")`` 使用拖放模块:

    .. code-block:: javascript
        :linenos:

        KISSY.use("overlay,dd",function(S,Overlay){

            // if kissy >= 1.2
            var Dialog=Overlay.Dialog;

            // 所有 kissy 版本可用
            var Dialog=S.Dialog;

            // 脚本完全生成 dialog 对象
            var dialog = new Dialog({
                width: 400,  // 对话框宽度
                bodyStyle:{
                    height: 300 // 对话框体的高度
                },
                headerContent: 'this is title', // 对话框头信息 html
                footerContent: 'footer',    // 对话框底部信息 html
                bodyContent: 'content', // 对话框体信息 html
                mask: true,  //  有遮罩层
                draggable: true // 允许头部可拖放
            });

        });

    第二步, 触发 dialog 对象显示

    当点击按钮时, 首先调用 :meth:`~Overlay.Overlay.prototype.render` 渲染 :class:`~Overlay.Dialog` 对象, 使得 dialog 生成的 dom 节点加入到文档树中, 再调用 :meth:`~Overlay.Overlay.prototype.center` 使得对话框位置在当前视窗中央, 最后调用 :meth:`~Overlay.Overlay.prototype.show` 显示 dialog：

    .. code-block:: javascript
        :linenos:

        S.one("#btn4").on("click", function() {
            dialog.render();
            dialog.center();
            dialog.show();
        });
