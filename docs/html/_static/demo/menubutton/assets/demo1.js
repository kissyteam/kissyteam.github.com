KISSY.use("menubutton,menu", function(S, MenuButton, Menu) {
    // 首先按照创建菜单的方式创建一个弹出菜单
    var menu = new Menu.PopupMenu({

        children:[
            // 设置菜单项并且设置可支持多选
            new Menu.Item({content:"已买到的宝贝", checkable: true}),
            new Menu.Item({content:"已卖出的宝贝", checkable: true})]
    });

    // 创建一个菜单按钮, 并关联 menu 为刚才创建的弹出菜单
    var button = new MenuButton({

        content: "我的淘宝",
        matchElWidth:false,
        menu: menu
    });

    button.render();
    menu.on('click', function(e) {
        var m = e.target;
        if (m.get("checked")) {
            S.log('选中:'+m.get('content'));
        } else {
            S.log('未选中:'+m.get('content'));
        }
    });

    // 从已有HTML中生成菜单按钮
    window.srcNode=new MenuButton({
        srcNode:"#exist",
        matchElWidth:false
    }).render();
});
