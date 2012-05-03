KISSY.use("menubutton", function(S, MenuButton) {
    (function(){
        // 调用 Select.decorate 接口替换已有的 select 元素
        var select = MenuButton.Select.decorate('#decorateSelect', {
            prefixCls:"c2c-",
            // 设置对齐方式, 与普通的 Align 大体一致
            menuAlign:{
                offset:[0,-1]
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
    })();

    (function(){
        // 调用 Select.decorate 接口替换已有的 select 元素
        var select = MenuButton.Select.decorate('#decorateSelect2', {
            //defaultCaption:"请选择",
            prefixCls:"pix-",
            menuAlign:{
                points:['tl', 'tl'],
                offset:[0, -1]
            },
            menuCfg:{
                width:278,
                elStyle:{
                    "max-height":"200px",
                    overflow:"auto",
                    overflowX:"hidden"
                }
            }
        });
        select.on("click", function(e) {
            alert('当前值为: ' + select.get("value"));
        });
    })();
});
