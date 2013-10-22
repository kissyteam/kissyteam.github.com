.. currentmodule:: filter-menu

过滤菜单的使用
======================================

Class
-----------------------------------------------

  * :class:`FilterMenu`

过滤菜单的使用
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="750" class="iframe-demo" src="/1.4/source/raw/demo/filter-menu/demo1.html"></iframe>

    .. code-block:: javascript

        KISSY.ready(function (S) {
            S.use("menu,filter-menu", function (S, Menu,FilterMenu) {
                if (1)(function () {

                    var m1 = new Menu.Item({
                        selectable: true,
                        content: "女鞋",
                        pinyin: "nx"
                    });
                    var m4 = new Menu.Item({
                        selectable: true,
                        content: "女装女服",
                        pinyin: "nznf"
                    });
                    var m2 = new Menu.Item({
                        selectable: true, content: "家居服务",
                        elCls: "hasChildren",
                        pinyin: "jjfw"
                    });
                    var m3 = new Menu.Item({
                        selectable: true,
                        content: "手机",
                        elCls: "hasChildren",
                        pinyin: "sj"
                    });
                    var filterMenu = new FilterMenu({
                        render: "#container",
                        width: 500,
                        allowMultiple: true,
                        placeholder: "请输入"
                    });
                    filterMenu.addChild(m1);
                    filterMenu.addChild(m2);
                    filterMenu.addChild(m3);
                    filterMenu.addChild(m4);
                    filterMenu.render();
                    var selected = null;

                    var origFilterItems = filterMenu.filterItems;

                    /**
                     * 自定义过滤策略，不自定义则是简单的内容 indexOf 查找
                     * @param str
                     */
                    filterMenu.filterItems = function (str) {
                        var self = this,
                                _labelEl = self.get("placeholderEl"),
                                filterInput = self.get("filterInput");

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

                                            "<span class='" + "ks-menuitem-hit" + "'>" +
                                            content.substring(index, index + str.length)
                                            + "<" + "/span>"
                                            + content.substring(index + str.length, content.length);

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

                    filterMenu.on("click", function (e) {
                        if (selected != e.target) {
                            selected && selected.set("selected", false);
                            selected = e.target;
                            alert("selected : " + selected.get("content"));
                        }
                    });


                    S.all("#reset").on("click", function () {
                        filterMenu.reset();
                    });
                })();

                (function () {
                    /**
                     *  从 html 生成
                     */
                    var filterMenu = new FilterMenu({
                        srcNode: '#filterMenuExist',
                        width: 200
                    });

                    filterMenu.render();

                    var selected = null;

                    filterMenu.on("click", function (e) {
                        if (selected != e.target) {
                            selected && selected.set("selected", false);
                            selected = e.target;
                            alert("selected : " + selected.get("content"));
                        }
                    });

                })();

            });
        });