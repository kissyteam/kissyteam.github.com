KISSY.use("menu", function (S, Menu) {
    var prefixCls = "my-";
    
    var menu = new Menu.PopupMenu({
        prefixCls: prefixCls,
        // 接受键盘事件
        focusable:1,
        elCls: "img-context-menu"
    });
    S.each(['图片另存为', '复制图片链接',  '复制图片', '在新窗口中打开图片'], function(s) {
        menu.addChild(new Menu.Item({
            prefixCls: prefixCls,
            content: '<a href="javascript:void(0)" tabindex="-1">'+s+'</a>'}));
    });



    var sb = new Menu.PopupMenu({
        prefixCls:prefixCls,
        elCls: "img-context-menu"
    });
    S.each(['新浪微博', '豆瓣', 'Mark之'], function(s) {
        sb.addChild(new Menu.Item({
            prefixCls: prefixCls,
            content: '<a href="javascript:void(0)" tabindex="-1">'+s+'</a>'}));
    });
    var b = new Menu.SubMenu({
        prefixCls:prefixCls,
        content:'<a href="javascript:void(0)" tabindex="-1">分享到...</a>',
        menu:sb
    });
    menu.addChild(b);

    menu.on("click", function(e) {
        S.log(e.target);
        alert("点击了" + e.target.get('content'));
    });

    // 最终绑定大图上的右键事件
    S.all("#bigimg").on("contextmenu", function(e) {
        e.halt();
        menu.render();
        menu.move(e.pageX,e.pageY);
        menu.show();
        // 接受键盘事件
        menu.get("el")[0].focus();
    });
});