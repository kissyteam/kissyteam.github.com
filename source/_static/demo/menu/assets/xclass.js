KISSY.use("node,menu", function (S, Node, Menu) {
    // 初始化一个菜单, 仅包含一个菜单项
    var menu = new Menu({
        prefixCls:'goog-',
        render:'#menu_container',
        width:200,
        children:[
            {
                xclass:'menuitem',
                content:'首页'
            },
            {
                xclass:'menuitem',
                content:'购物车'
            },
            {
                xclass:'submenu',
                content:'我的淘宝',
                menu:{
                    xclass:'popupmenu',
                    // boolean，是否鼠标脱离菜单后自动隐藏
                    autoHideOnMouseLeave:true,
                    // ms，鼠标脱离菜单多长时间后自动隐藏
                    autoHideDelay:300,
                    elStyle:{
                        'color':'red'
                    },
                    children:[
                        {
                            xclass:'menuitem',
                            content:'已买到的宝贝'
                        },
                        {
                            xclass:'menuitem',
                            content:'已卖出的宝贝'
                        }
                    ]
                }
            }
        ],
        listeners:{
            // 绑定点击事件
            'click':{
                fn:function (ev) {
                    Node.one("#log").html("你选中了" + ev.target.get("content"));
                    // 隐藏整个菜单
                    this.set("highlightedItem", null);
                }
            }
        }
    });

    menu.render();
});
