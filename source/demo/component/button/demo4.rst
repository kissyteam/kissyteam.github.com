.. currentmodule:: button

Button - 模拟alert对话框
=====================================================

.. versionadded:: 1.2

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/button/>`_


Class
-----------------------------------------------

  * :class:`Button`

Button - 模拟alert对话框
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="160" class="iframe-demo" src="../../../static/demo/button/demo4.html"></iframe>

    **载入1.2的 kissy**

    .. code-block:: html

        <script src="http://a.tbcdn.cn/s/kissy/1.2.0/kissy.js"></script>

    **组织HTML代码**

    .. code-block:: html

        <div id="exist">我是类Google按钮</div>

    **初始化按钮**

    .. code-block:: javascript

        KISSY.use("overlay,button", function(S, Overlay, Button) {
            var p = new Overlay.Dialog({
                elCls: 'alert-box',
                bodyContent: '我是对话框',
                width: 300,  // 对话框宽度
                closable: false,
                mask: true  //  有遮罩层
            });
            p.show();
            p.center();

            // 生成一个按钮
            var b = new Button({
                content: " OK ",
                render: p.get('footer'),
                prefixCls: "goog-",
                tooltip: "点击关闭~"
            });

            // 插入到DOM中并显示
            b.render();

            // 绑定事件
            b.on("click", function() {
                p.hide();
            });
        });