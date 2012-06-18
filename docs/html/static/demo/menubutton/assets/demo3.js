KISSY.use("menubutton", function (S, MenuButton) {
    var data = {
        "上海":["上海市", "崇明"],
        "河南":["焦作", "洛阳"],
        "浙江":["杭州", "温州"]
    };

    var children = [];

    // 给第一个菜单添加各个项
    for (var d in data) {
        children.push({
            xclass:'option',
            content:d
        });
    }

    // 初始化第一个菜单
    var s1 = new MenuButton.Select({
        prefixCls:"c2c-",
        width:70,
        menu:{
            xclass:'popupmenu',
            align:{
                offset:[0, -1]
            },
            children:children
        }
    });

    s1.set("value", "上海");

    s1.render();

    // 初始化第二个菜单
    var s2 = new MenuButton.Select({
        prefixCls:"c2c-",
        width:70,
        menuCfg:{
            xclass:'popupmenu',
            align:{
                offset:[0, -1]
            }
        }
    });

    update("上海");

    s2.render();

    // 根据第一个菜单值改变时, 调整第二个菜单中的内容
    function update(v) {
        var vs = data[v];
        // 先把第二个菜单项整个删除;
        s2.removeItems(true);
        // 再添加新项
        S.each(vs, function (v_) {
            s2.addItem(new MenuButton.Option({
                value:v_,
                prefixCls:"c2c-",
                content:v_}));
        });
        // 设置第一个为选中状态
        s2.set("value", vs[0]);
    }

    s1.on("click", function (e) {
        var v = e.target.get("content");
        update(v);
    });

});
