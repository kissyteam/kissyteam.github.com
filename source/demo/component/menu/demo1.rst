.. currentmodule:: menu

Demo - menu 的基本使用
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

Demo - menu 的基本使用
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="100" class="iframe-demo" src="../../../static/demo/menu/demo1.html"></iframe>

    .. code-block:: javascript

        KISSY.use("node,menu", function(S, Node, Menu) {
            // 初始化一个菜单, 仅包含一个菜单项
            var menu = new Menu({
                prefixCls: 'goog-',
                render: '#menu_container',
                children:[new Menu.Item({
                        prefixCls: 'goog-',
                        content: '首页'
                    })],
                width: 200
                }),
                // 构建一个子菜单
                sb = new Menu.SubMenu({
                    prefixCls: 'goog-',
                    content: '我的淘宝',
                    menu: new Menu.PopupMenu({
                        prefixCls: 'goog-',
                        elStyle: {
                            'color': 'red'
                        },
                        children: [
                            new Menu.Item({
                                prefixCls: 'goog-',
                                content: '已买到的宝贝'
                            }),
                            new Menu.Item({
                                prefixCls: 'goog-',
                                content: '已卖出的宝贝'
                            })
                        ]
                    })
                });

            // 将子菜单添加到主菜单中
            menu.addChild(sb);
            // 再添加一个菜单项
            menu.addChild(new Menu.Item({
                prefixCls: 'goog-',
                content: '购物车'
            }));
            menu.render();

            // 绑定点击事件
            menu.on("click", function(ev) {
                alert("你选中了" + ev.target.get("content"));
            });
        });
