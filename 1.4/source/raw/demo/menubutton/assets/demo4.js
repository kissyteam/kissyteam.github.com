KISSY.ready(function (S) {
    KISSY.use("menubutton,button,menu", function (S, MenuButton, Button, Menu) {
        var $ = S.all;

        var b = new Button({
            id:'button-test1',
            content:"已买到的宝贝",
            elCls:'ks-button-collapse-right',
            render:'#container',
            listeners:{
                click:function () {
                    alert(this.get("content"));
                }
            }
        }).render();

        new MenuButton({
            content:"",
            render:'#container',
            matchElWidth:false,
            elCls:'ks-button-collapse-left empty-button',
            menu:{
                xclass:'popupmenu',
                children:[
                    {
                        xclass:'menuitem',
                        content:"已买到的宝贝"
                    },
                    {
                        xclass:'menuitem',
                        content:"已卖出的宝贝"
                    }
                ]
            },
            listeners:{
                click:function (e) {
                    b.set("content", e.target.get("content"));
                    this.set("collapsed", true);
                }
            }
        }).render();
    });
});