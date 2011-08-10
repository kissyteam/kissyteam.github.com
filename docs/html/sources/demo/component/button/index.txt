.. currentmodule:: button

Button Demos
======================================

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/button/>`_

Class
-----------------------------------------------

  * :class:`Button`


.. _Component-button-demo1:

Demo - button 的基本使用
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="80" style="border: none;" src="../../../static/demo/button/demo1.html"></iframe>

    **载入1.2的 kissy**

    .. code-block:: html

        <script src="http://a.tbcdn.cn/s/kissy/1.2.0/kissy.js"></script>

    **初始化按钮**

    .. code-block:: javascript

        KISSY.use("button", function(S, Button) {
            // 生成一个按钮
            var b = new Button({
                content: "我是类Google按钮1",
                render: "#button_container",
                prefixCls: "goog-",
                tooltip: "点击我有惊喜~"
            });

            // 插入到DOM中并显示
            b.render();

            // 绑定事件
            b.on("click", function() {
                alert(this.get('content'));
            });

            // 新建一个button插入到某个指定元素之前
            var b1 = new Button({
                content: "我是类Google按钮2",
                elBefore: "#exist",
                prefixCls: "goog-",
                tooltip: "点击我有惊喜~"
            });

            // 插入到DOM中并显示
            b1.render();
            b1.on("click", function() {
                alert(this.get('content'));
            });

            // 从已有DOM中生成一个按钮
            var exist = new Button({
                srcNode:"#exist",
                prefixCls: "goog-",
                tooltip: "点击我有惊喜~"
            });
            exist.render();
            exist.on("click", function() {
                alert(this.get('content'));
            });
        });


.. _Component-button-demo2:

Demo - 定制button的样式
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="80" style="border: none;" src="../../../static/demo/button/demo2.html"></iframe>

    **载入1.2的 kissy**

    .. code-block:: html

        <script src="http://a.tbcdn.cn/s/kissy/1.2.0/kissy.js"></script>

    **初始化按钮**

    .. code-block:: javascript

        KISSY.use("button", function(S, Button) {
            // 定制样式方式1, 通过 prefixCls 设置样式前缀
            var b = new Button({
                content: "自定义样式按钮1",
                width: 200,
                prefixCls: "liz-",
                tooltip: "我有新皮肤"
            });
            b.render();

            // 定制样式方式2, 通过 elCls 或 elStyle 设置样式类或行内样式
            // 样式代码参考页面源代码
            var b1 = new Button({
                content: "自定义样式按钮2",
                width: 200,
                elCls: 'my-button-cls',
                tooltip: "我有新皮肤"
            });
            b1.render();
        });

    .. note::

        按钮完整的皮肤样式定义, 可以参考 `google 的样式 <../../../static/demo/button/assets/custombutton.css>`_

.. _Component-button-demo3:

Demo - 禁用Button
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="80" style="border: none;" src="../../../static/demo/button/demo3.html"></iframe>

    **载入1.2的 kissy**

    .. code-block:: html

        <script src="http://a.tbcdn.cn/s/kissy/1.2.0/kissy.js"></script>

    **组织HTML代码**

    .. code-block:: html

        <div id="exist">我是类Google按钮</div>

    **初始化按钮**

    .. code-block:: javascript

        KISSY.use("node,button", function(S, Node, Button) {
            var b = new Button({
                content:"我是类Google按钮",
                render: "#button_container",
                prefixCls: "goog-",
                tooltip: "点击我有惊喜~"
            });
            b.render();
            b.on("click", function() {
                alert("你好你好!");
            });

            var dis = Node.one("#disabled");

            dis.on("click", function() {
                if (dis[0].checked) {
                    b.set("disabled", true);
                } else {
                    b.set("disabled", false);
                }
            });

            if (dis[0].checked) {
                b.set("disabled", true);
            } else {
                b.set("disabled", false);
            }
        });


.. _Component-button-demo4:

Demo - 模拟alert对话框
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="160" style="border: none;" src="../../../static/demo/button/demo4.html"></iframe>

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