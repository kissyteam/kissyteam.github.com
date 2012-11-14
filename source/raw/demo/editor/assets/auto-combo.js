(function () {
    KISSY.config("combine", true);
    KISSY.use("editor", function (S, Editor) {

        var cfg = {
            // 是否初始聚焦
            focused:true,
            attachForm:true,
            // 自定义样式
            // customStyle:"p{line-height: 1.4;margin: 1.12em 0;padding: 0;}",
            // 自定义外部样式
            // customLink:["http://localhost/customLink.css","http://xx.com/y2.css"],
            // render:"#container",
            render:'#editorContainer',
            width:'80%',
            height:"400px"
        };

        KISSY.use("editor/plugin/source-area/," +
            "editor/plugin/font-size/," +
            "editor/plugin/image/," +
            "editor/plugin/code/", function (S, SourceArea, FontSize, Image,Code) {

            cfg.plugins = [SourceArea, FontSize, new Image({
                upload:{
                    serverUrl:"http://localhost/kissy_git/kissy/src/editor/demo/upload.php",
                    serverParams:{
                        waterMark:function () {
                            return S.one("#ke_img_up_watermark_1")[0].checked;
                        }
                    },
                    suffix:"png,jpg,jpeg,gif",
                    fileInput:"Filedata",
                    sizeLimit:1000, //k
                    extraHtml:"<p style='margin-top:10px;'><input type='checkbox' id='ke_img_up_watermark_1' checked='checked'> 图片加水印，防止别人盗用</p>"
                }
            }),Code];

            new Editor(cfg).render();
        });

    });
})();