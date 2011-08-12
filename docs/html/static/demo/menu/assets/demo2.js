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
    S.each([
        {'我的淘宝': ['已买到的宝贝', '已卖出的宝贝']},
        {'收藏夹': ['收藏的宝贝', '收藏的店铺']}
    ], function(obj, idx) {
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
    menu.render();
});
