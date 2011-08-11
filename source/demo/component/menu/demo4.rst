.. currentmodule:: menu

Demo - 过滤菜单的使用
======================================

.. versionadded:: 1.2

|  `API <../../../api/component/menu/index.html>`_ | `源码 <https://github.com/kissyteam/kissy/tree/master/src/menu/>`_

Class
-----------------------------------------------

  * :class:`Menu`
  * :class:`Item`
  * :class:`DelMenuItem`
  * :class:`Separator`
  * :class:`SubMenu`
  * :class:`PopupMenu`
  * :class:`FilterMenu`

Demo - 过滤菜单的使用
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="180" class="iframe-demo" src="../../../static/demo/menu/demo4.html"></iframe>

    .. code-block:: javascript

        KISSY.use("menu", function(S, Menu) {
            // 构建各个菜单项
            var m1 = new Menu.Item({ prefixCls:"goog-",  selectable:true, content:"女鞋"}),
                m2 = new Menu.Item({ prefixCls:"goog-",  selectable:true, content:"家居服务"}),
                m3 = new Menu.Item({ prefixCls:"goog-",  selectable:true, content:"手机"}),
                m4 = new Menu.Item({ prefixCls:"goog-",  selectable:true, content:"女装女服"});
            // 过滤菜单
            var filterMenu = new Menu.FilterMenu({
                render:"#menu_container",
                width:200,
                // 支持多选
                allowMultiple:true,
                prefixCls:"goog-",
                label:"请输入"
            });
            // 依次添加各个菜单项
            filterMenu.addChild(m1);
            filterMenu.addChild(m2);
            filterMenu.addChild(m3);
            filterMenu.addChild(m4);

            // 渲染到页面中
            filterMenu.render();

            // 绑定点击事件, 记录选择项是哪个
            var selected = null;
            filterMenu.on("click", function(e) {
                if (selected != e.target) {
                    selected && selected.set("selected", false);
                    selected = e.target;
                    alert("你选中了" + selected.get("content"));
                }
            });
        });
