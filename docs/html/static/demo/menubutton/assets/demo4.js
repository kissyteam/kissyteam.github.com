KISSY.ready(function(S) {
        KISSY.use("menubutton,button,menu", function(S, MenuButton, Button, Menu) {
            var $ = S.all;

            var b = new Button({
                prefixCls:"goog-",
                content:"已买到的宝贝"
            });

            var mb = new MenuButton({
                prefixCls:"goog-",
                content:"请选择"
            });

            mb.addItem(new Menu.Item({content:"已买到的宝贝",
                prefixCls:"goog-"}));

            mb.addItem(new Menu.Item({content:"已卖出的宝贝",
                prefixCls:"goog-"}));


            // 渲染为一组分离按钮
            new Button.Split({
                first:b,
                second:mb
            }).render();


            b.on("click", function() {
                alert(b.get("content") + " : clicked");
            });

        });
    });