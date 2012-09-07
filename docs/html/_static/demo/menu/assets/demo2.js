KISSY.use("node,menu,separator", function (S, Node, Menu,Separator) {
    // 初始化一个菜单, 仅包含一个菜单项
    var menu = new Menu({
        prefixCls: 'my-',
        width:100,
        render: '#menu_container',
        children: [new Menu.Item({
            prefixCls: 'my-',
            content: '首页'
        })]
    });

    // 依次添加两个子菜单
    S.each([
        {'我的淘宝': ['已买到的宝贝', '已卖出的宝贝']},
        {'收藏夹': ['收藏的宝贝', '收藏的店铺']}
    ], function (obj, idx) {
        S.each(obj, function (v, k) {

            var p = [];

            S.each(v, function (o) {
                p.push({
                    prefixCls: 'my-',
                    content: o,
                    xclass: 'menuitem'
                });
            });

            menu.addChild(new Menu.SubMenu({
                prefixCls: 'my-',
                content: "<div class='ks-menuitem-content'>" + k + "</div>",
                // 设置子菜单与主菜单的对齐方式, 与 align 保持一致
                menu: {
                    xclass: 'popupmenu',
                    prefixCls: 'my-',
                    align: {
                        offset: [-2, 0]
                    },
                    children: p
                },
                // 设置菜单显示延迟时间
                menuDelay: 0.5
            }));
        });
    });

    menu.addChild(new Separator({
        prefixCls: 'my-'
    }));

    menu.addChild(new Menu.Item({
        prefixCls: 'my-',
        content: '购物车'
    }));

    menu.render();
});
