KISSY.use("menubutton,menu", function (S, MenuButton, Menu) {

    // 创建一个菜单按钮, 并关联 menu 为刚才创建的弹出菜单
    var button = new MenuButton({

        content:"我的淘宝",
        matchElWidth:false,
        // 按照创建菜单的方式创建一个弹出菜单
        menu:{
            xclass:'popupmenu',
            children:[
                {
                    xclass:'menuitem',
                    content:"已买到的宝贝",
                    checkable:true
                },

                {
                    xclass:'menuitem',
                    content:"已卖出的宝贝"
                }
            ]
        },
        listeners:{
            click:{
                fn:function (e) {
                    var m = e.target;
                    if (m.get("checked")) {
                        S.log('选中:' + m.get('content'));
                    } else {
                        S.log('未选中:' + m.get('content'));
                    }
                }
            }
        }
    });

    button.render();
});
