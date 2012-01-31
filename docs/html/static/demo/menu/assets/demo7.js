KISSY.use("menu", function (S, Menu) {
    var context = S.all("#context"), b, bb;
    (function () {

        var sb = new Menu.PopupMenu({
            prefixCls:"nav-",
            // boolean，是否鼠标脱离菜单后自动隐藏
            autoHideOnMouseLeave:true,
            // ms，鼠标脱离菜单多长时间后自动隐藏
            autoHideDelay:300,
            width:150
        });

        sb.addChild(new Menu.Item({
            prefixCls:"nav-",
            content:"<a>我要买</a>"}));
        sb.addChild(new Menu.Item({
            prefixCls:"nav-",
            content:"<a>我要卖</a>"}));

        sb.addChild(new Menu.Separator({
            prefixCls:"nav-"
        }));

        var sb2 = new Menu.PopupMenu({
            prefixCls:"nav-",
            width:90,
            // boolean，是否鼠标脱离菜单后自动隐藏
            autoHideOnMouseLeave:true,
            // ms，鼠标脱离菜单多长时间后自动隐藏
            autoHideDelay:300,
            children:[
                new Menu.Item({
                    prefixCls:"nav-",
                    content:"<a>旺铺</a>"})
            ],
            // bug elStyle 无效
            elStyle:{
                color:"red"
            }
        });

        sb2.addChild(new Menu.Item({
            prefixCls:"nav-",
            content:"<a>装修</a>"}));

        var b2 = new Menu.SubMenu({
            prefixCls:"nav-",
            content:"<a>卖家中心</a>",
            menu:sb2
        });

        sb.addChild(b2);

        b = new Menu.SubMenu({
            prefixCls:"nav-",
            content:"<span class='title' style='width:58px'>淘宝网</span>",
            menuAlign:{
                offset:[-1, -1],
                points:['bl', 'tl']
            },
            menu:sb
        });

    })();

    var menu = new Menu({
        prefixCls:"nav-",
        width:90,
        elCls:"horizonal",
        render:'#context',
        children:[b]
    });

    menu.render();

    menu.on("click", function (e) {
        alert(e.target.get("content"));
    });
});
