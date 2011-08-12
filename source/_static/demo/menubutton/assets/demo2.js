KISSY.use("menubutton", function(S, MenuButton) {
    // 调用 Select.decorate 接口替换已有的 select 元素
    var select = MenuButton.Select.decorate('#decorateSelect', {
        prefixCls:"c2c-",
        // 设置对齐方式, 与普通的 Align 大体一致
        menuAlign:{
            points:["bl","tl"],
            offset:[0,-1],
            overflow:{
                failX:1,
                failY:1,
                adjustX:1,
                adjustY:1
            }
        },
        // 该配置同菜单配置项
        menuCfg:{
            width:82,
            height:150,
            elStyle:{
                overflow:"auto",
                overflowX:"hidden"
            }
        }
    });
    select.on("click", function(e) {
        alert('当前值为: ' + select.get("value"));
    });
});
