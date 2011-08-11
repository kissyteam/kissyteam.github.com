.. currentmodule:: button

Button - 定制button的样式
=====================================================

.. versionadded:: 1.2

|   `API <../../../api/component/button/index.html>`_ | `源码 <https://github.com/kissyteam/kissy/tree/master/src/button/>`_


Class
-----------------------------------------------

  * :class:`Button`

Button - 定制button的样式
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="80" class="iframe-demo" src="../../../static/demo/button/demo2.html"></iframe>

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
