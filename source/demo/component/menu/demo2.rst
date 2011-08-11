.. currentmodule:: menu

Demo - 自定义样式及分割线的使用
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

Demo - 自定义样式及分割线的使用
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="180" class="iframe-demo" src="../../../static/demo/menu/demo2.html"></iframe>

    .. code-block:: javascript

        KISSY.use("node,menu", function(S, Node, Menu) {
            // 初始化一个菜单, 仅包含一个菜单项
            var menu = new Menu({
                prefixCls: 'my-',
                render: '#menu_container',
                children:[new Menu.Item({
                        prefixCls: 'my-',
                        content: '首页'
                    }),
                    new Menu.Separator({
                        prefixCls:"my-"
                    })]
                });

            // 依次添加两个子菜单
            S.each([{'我的淘宝': ['已买到的宝贝', '已卖出的宝贝']}, {'收藏夹': ['收藏的宝贝', '收藏的店铺']}], function(obj, idx) {
                S.each(obj, function(v, k) {
                    var p = new Menu.PopupMenu({
                        prefixCls: 'my-'
                    });
                    S.each(v, function(o) {
                        p.addChild(new Menu.Item({
                            prefixCls: 'my-',
                            content: o
                        }));
                    });

                    menu.addChild(new Menu.SubMenu({
                        prefixCls: 'my-',
                        content: k,
                        menu: p,
                        // 设置子菜单与主菜单的对齐方式, 与 align 保持一致
                        menuAlign: {
                            offset: [-2, 0]
                        },
                        // 设置菜单显示延迟时间
                        menuDelay: 50
                    }));

                    menu.addChild(new Menu.Separator({
                        prefixCls:"my-"
                    }));
                });
            });

            menu.addChild(new Menu.Item({
                prefixCls: 'my-',
                content: '购物车'
            }));
            menu.show();
        });

    .. note::

        按钮完整的皮肤样式定义, 可以参考:

        - `google 的菜单样式 <../../../static/demo/menu/assets/menu.css>`_
        - `google 的菜单项样式 <../../../static/demo/menu/assets/menuitem.css>`_
        - `google 的子菜单项样式 <../../../static/demo/menu/assets/submenu.css>`_
        - `google 的过滤菜单样式 <../../../static/demo/menu/assets/filtermenu.css>`_
        - `google 的菜单分隔线样式 <../../../static/demo/menu/assets/menuseparator.css>`_

