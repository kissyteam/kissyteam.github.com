KISSY.use("node,menu", function(S, Node, Menu) {
    // 初始化一个菜单, 仅包含一个菜单项
    var menu = new Menu({
        prefixCls: 'my-',
        children:[new Menu.DelMenuItem({
                prefixCls: 'my-',
                content: '首页',
                delTooltip: '点击删除'
            })]
        });

    // 添加各个可删除的项
    S.each(['已买到的宝贝', '已卖出的宝贝', '收藏的宝贝', '收藏的店铺', '购物车'], function(obj) {
        menu.addChild(new Menu.DelMenuItem({
            prefixCls: 'my-',
            content: obj,
            delTooltip: '点击删除'
        }));
    });
    menu.render();

    // 绑定删除事件
    menu.on('delete', function(e) {
        alert('删除了'+e.target.get('content'));
    });
});
