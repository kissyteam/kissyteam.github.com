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
