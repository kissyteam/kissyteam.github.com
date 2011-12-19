KISSY.use("node,menu", function(S, Node, Menu) {
    // 初始化一个菜单, 仅包含一个菜单项
    var menu = new Menu({
        prefixCls: 'goog-',
        render: '#menu_container',
        width: 200
    }),
        // 构建一个子菜单
        sb = new Menu.SubMenu({
            prefixCls: 'goog-',
            content: '我的淘宝',
            // 默认点击空白文档关闭子菜单
            menu: new Menu.PopupMenu({
                // boolean，是否鼠标脱离菜单后自动隐藏
                autoHideOnMouseLeave:true,
                // ms，鼠标脱离菜单多长时间后自动隐藏
                autoHideDelay:300,
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
    menu.addChild(new Menu.Item({
        prefixCls: 'goog-',
        content: '首页'
    }));    
    // 再添加一个菜单项
    menu.addChild(new Menu.Item({
        prefixCls: 'goog-',
        content: '购物车'
    }));
    menu.render();

    // 绑定点击事件
    menu.on("click", function(ev) {
        Node.one("#log").html("你选中了" + ev.target.get("content"));
        
        // 隐藏整个菜单
        menu.set("highlightedItem",null);
    });
});
