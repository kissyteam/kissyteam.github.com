.. currentmodule:: button

Button - 禁用Button
=====================================================

.. versionadded:: 1.2

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/button/>`_


Class
-----------------------------------------------

  * :class:`Button`

Button - 禁用Button
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="80" class="iframe-demo" src="../../../static/demo/button/demo3.html"></iframe>

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
