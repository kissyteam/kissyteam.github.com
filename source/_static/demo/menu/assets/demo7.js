KISSY.use("node,menu", function (S,Node, Menu) {
        var context = S.all("#context");

        var sb = new Menu.PopupMenu({
            prefixCls:"nav-",
            width: 150
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

        var b = new Menu.SubMenu({
            prefixCls:"nav-",

            content:"<span class='title' style='width:58px'>淘宝网</span>",
            menuAlign:{
                offset:[-1, -1],
                points:['bl', 'tl']
            },
            menu:sb
        });

        var menu = new Menu({
            prefixCls:"nav-",
            width:90,
            elCls:"horizonal",
            render:'#context',
            children:[b]
        });
        
        
        menu.render();
        
        menu.on("click",function(e){
            Node.one("#log").html("你选中了" + e.target.get("content"));
        });
    });