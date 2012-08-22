KISSY.use("menu", function (S, Menu) {
    // 构建各个菜单项
    var m1 = new Menu.Item({

        selectable: true,
        pinyin: "nx",
        content: "女鞋"
    }),
        m2 = new Menu.Item({

        selectable: true,
        pinyin: "jjfw",
        content: "家居服务"
    }),
        m3 = new Menu.Item({

        selectable: true,
        pinyin: "sj",
        content: "手机"
    }),
        m4 = new Menu.Item({

        selectable: true,
        pinyin: "nznf",
        content: "女装女服"
    });
    // 过滤菜单
    var filterMenu = new Menu.FilterMenu({
        render: "#menu_container",
        width: 200,
        // 支持多选
        allowMultiple: true,

        label: "请输入"
    });
    // 依次添加各个菜单项
    filterMenu.addChild(m1);
    filterMenu.addChild(m2);
    filterMenu.addChild(m3);
    filterMenu.addChild(m4);

    var origFilterItems = filterMenu.filterItems;

    /**
     * 自定义过滤策略，不自定义则是简单的内容 indexOf 查找
     * @param str
     */
    filterMenu.filterItems = function (str) {
        var self = this,
            view = self.get("view"),
            _labelEl = view.get("labelEl"),
            filterInput = view.get("filterInput");

        // 有过滤条件提示隐藏，否则提示显示
        _labelEl[str ? "hide" : "show"]();

        var children = self.get("children");

        // 拼音
        if (/^[a-z\s]+$/i.test(str)) {

            // 过滤所有子组件
            S.each(children, function (c) {
                var pinyin = c.get("pinyin"),
                    content = c.get("content");

                var index;
                if ((index = pinyin.indexOf(str)) > -1) {
                    // 如果符合过滤项
                    // 显示
                    c.show();
                    content = content.substring(0, index) +

                    "<span class='" + "ks-menuitem-hit" + "'>" + content.substring(index, index + str.length) + "<" + "/span>" + content.substring(index + str.length, content.length);

                    // 匹配子串着重 wrap
                    c.get("el").html(content);
                } else {
                    c.hide();
                }
            });

        } else {
            origFilterItems.call(this, str);
        }
    };

    // 渲染到页面中
    filterMenu.render();

    // 绑定点击事件, 记录选择项是哪个
    var selected = null;
    filterMenu.on("click", function (e) {
        if (selected != e.target) {
            selected && selected.set("selected", false);
            selected = e.target;
            alert("你选中了" + selected.get("content"));
        }
    });
});