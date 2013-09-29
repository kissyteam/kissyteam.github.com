(function () {
    KISSY.use("editor", function (S, Editor) {

        var cfg = {
            // 是否初始聚焦
            focused: true,
            attachForm: true,
            // 自定义样式
            // customStyle:"p{line-height: 1.4;margin: 1.12em 0;padding: 0;}",
            // 自定义外部样式
            // customLink:["http://localhost/customLink.css","http://xx.com/y2.css"],
            // render:"#container",
            srcNode: '#editorEl',
            width: '80%',
            height: "400px"
        };

        var plugins = ("source-area" +
            ",separator" +
            ",bold" +
            ",italic," +
            "font-family," +
            "font-size," +
            "strike-through," +
            "underline," +
            "separator," +
            "checkbox-source-area" +
            ",image" +
            ",link" +
            ",fore-color" +
            ",back-color" +
            ",resize" +
            ",draft" +
            ",undo" +
            ",indent" +
            ",outdent" +
            ",unordered-list" +
            ",ordered-list" +
            //",elementPath" +
            ",page-break" +
            ",preview" +
            ",maximize" +
            ",remove-format" +
            ",heading" +
            ",justify-left" +
            ",justify-center" +
            ",justify-right" +
            ",table" +
            ",smiley" +
            ",flash" +
            ",xiami-music" +
            ",multiple-upload" +
            ",video" +
            ",drag-upload").split(",");

        var fullPlugins = [];

        S.each(plugins, function (p, i) {
            fullPlugins[i] = "editor/plugin/" + p + "/";
        });

        var pluginConfig = {
            link: {
                target: "_blank"
            },
            "image": {
                defaultMargin: 0,
                // remote:false,
                upload: {
                    serverUrl: "upload.php",
                    serverParams: {
                        waterMark: function () {
                            return S.one("#ke_img_up_watermark_1")[0].checked;
                        }
                    },
                    suffix: "png,jpg,jpeg,gif",
                    fileInput: "Filedata",
                    sizeLimit: 1000, //k
                    extraHtml: "<p style='margin-top:10px;'><input type='checkbox' id='ke_img_up_watermark_1' checked='checked'> 图片加水印，防止别人盗用</p>"
                }
            },
            "flash": {
                "defaultWidth": "300",
                "defaultHeight": "300"
            },
            "templates": [
                {
                    demo: "模板1效果演示html",
                    html: "<div style='border:1px solid red'>模板1效果演示html</div><p></p>"
                },
                {
                    demo: "模板2效果演示html",
                    html: "<div style='border:1px solid red'>模板2效果演示html</div>"
                }
            ],
            "multiple-upload": {
                serverUrl: "http://localhost/kissy_git/kissy/src/editor/demo/upload.php",
                serverParams: {
                    waterMark: function () {
                        return S.one("#ke_img_up_watermark_2")[0].checked;
                    }
                },
                "previewWidth": "80px",
                sizeLimit: 1000, //k,, numberLimit:15,
                extraHtml: "<p style='margin-top:10px;'>" +
                    "<input type='checkbox' " +
                    "style='vertical-align:middle;margin:0 5px;' " +
                    "id='ke_img_up_watermark_2'>" +
                    "<span style='vertical-align:middle;'>图片加水印，防止别人盗用</span></p>"
            },
            "video": {
                urlCfg: [
                    {
                        reg: /tudou\.com/i,
                        url: "http://bangpai.daily.taobao.net/json/getTudouVideo.htm",
                        paramName: "url"
                    }
                ],
                "urlTip": "请输入优酷网、土豆网、酷7网的视频播放页链接...",
                "providers": [
                    {
                        // 允许白名单
                        reg: /taohua\.com/i,
                        //默认高宽
                        width: 480,
                        height: 400,
                        detect: function (url) {
                            return url;
                        }
                    },
                    {
                        reg: /youku\.com/i,
                        width: 480,
                        height: 400,
                        detect: function (url) {
                            var m = url.match(/id_([^.]+)\.html(\?[^?]+)?$/);
                            if (m) {
                                return "http://player.youku.com/player.php/sid/" + m[1] + "/v.swf";
                            }
                            m = url.match(/v_playlist\/([^.]+)\.html$/);
                            if (m) {
                                return;
                                //return "http://player.youku.com/player.php/sid/" + m[1] + "/v.swf";
                            }
                            return url;
                        }
                    },
                    {
                        reg: /tudou\.com/i,
                        width: 480,
                        height: 400,
                        detect: function (url) {
                            return url;
                        }
                    },
                    {
                        reg: /ku6\.com/i,
                        width: 480,
                        height: 400,
                        detect: function (url) {
                            var m = url.match(/show[^\/]*\/([^\/]+)\.html(\?[^?]+)?$/);
                            if (m) {
                                return "http://player.ku6.com/refer/" + m[1] + "/v.swf";
                            }
                            return url;
                        }
                    }
                ]
            },
            "draft": {
                // 当前编辑器的历史是否要单独保存到一个键值而不是公用
                // saveKey:"xxx",
                interval: 5,
                limit: 10,
                "helpHtml": "<div " +
                    "style='width:200px;'>" +
                    "<div style='padding:5px;'>草稿箱能够自动保存您最新编辑的内容，" +
                    "如果发现内容丢失，" +
                    "请选择恢复编辑历史</div></div>"
            },
            "resize": {
                //direction:["y"]
            },

            "drag-upload": {
                suffix: "png,jpg,jpeg,gif",
                fileInput: "Filedata",
                sizeLimit: 1000,
                serverUrl: "upload.php",
                serverParams: {
                    waterMark: function () {
                        return true;
                    }
                }
            }
        };

        KISSY.use(fullPlugins, function (S) {
            var args = S.makeArray(arguments);

            args.shift();

            S.each(args, function (arg, i) {
                var argStr = plugins[i], cfg;
                if (cfg = pluginConfig[argStr]) {
                    args[i] = new arg(cfg);
                }
            });

            cfg.plugins = args;

            var editor = new Editor(cfg).render();

            S.all("#getCur").on("click", function () {
                alert(editor.get("data"));
            });


        });

    });
})();