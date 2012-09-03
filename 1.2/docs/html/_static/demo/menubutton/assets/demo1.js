KISSY.use("menubutton,menu", function(S, MenuButton, Menu) {
    // 首先按照创建菜单的方式创建一个弹出菜单
    var menu = new Menu.PopupMenu({
        prefixCls:"goog-",
        children:[
            // 设置菜单项并且设置可支持多选
            new Menu.Item({content:"已买到的宝贝",prefixCls:"goog-", checkable: true}),
            new Menu.Item({content:"已卖出的宝贝",prefixCls:"goog-", checkable: true})]
    });

    // 创建一个菜单按钮, 并关联 menu 为刚才创建的弹出菜单
    var button = new MenuButton({
        prefixCls: "goog-",
        content: "我的淘宝",
        menu: menu
    });

    button.render();
    menu.on('click', function(e) {
        var m = e.target;
        if (m.get("checked")) {
            alert('选中:'+m.get('content'));
        } else {
            alert('未选中:'+m.get('content'));
        }
    });

    // 从已有HTML中生成菜单按钮
    new MenuButton({
        srcNode:"#exist",
        prefixCls:"goog-"
    }).render();
});
