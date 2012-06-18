(function () {
    KISSY.config("combine", true);
    KISSY.use("editor", function (S, Editor) {

        // 自定义插件
        function Plugin1(cfg) {
            this.config = cfg || {};
        }

        Plugin1.prototype.renderUI = function (editor) {
            var cfg = this.config;
            editor.addButton("plugin1", {
                content:'<div style="margin: 2px;border: 1px solid red;padding: 1px;">p1</div>',
                listeners:{
                    click:function () {
                        editor.insertHtml(S.guid(cfg.content));
                    }
                }
            });
        };


        function Plugin2() {
        }

        Plugin2.prototype.renderUI = function (editor) {
            editor.addButton("plugin2", {
                content:'<div style="margin: 2px;border: 1px solid red;padding: 1px;">p2</div>',
                listeners:{
                    click:function () {
                        alert('i am running')
                    }
                }
            });
        };


        var cfg = {
            // 是否初始聚焦
            focused:true,
            autoRender:true,
            attachForm:true,
            baseZIndex:10000,
            // 自定义样式
            // customStyle:"p{line-height: 1.4;margin: 1.12em 0;padding: 0;}",
            // 自定义外部样式
            // customLink:["http://localhost/customLink.css","http://xx.com/y2.css"],
            // render:"#container",
            render:'#editorContainer',
            width:'80%',
            height:"400px"
        };

        cfg.plugins = [
            new Plugin1({
                content:"o..."
            }),
            Plugin2
        ];

        KISSY.use("editor/plugin/button/", function () {
            new Editor(cfg);
        });

    });
})();