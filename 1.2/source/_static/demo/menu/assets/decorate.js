KISSY.ready(function(S) {
    S.use("menu", function(S, Menu) {
        new Menu({
            srcNode:"#menuTest",
            prefixCls:"my-"
        }).render();
    });
});