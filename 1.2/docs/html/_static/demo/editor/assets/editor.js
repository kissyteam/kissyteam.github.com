KISSY.ready(function (S) {

    S.use('editor', function () {

        var KE = KISSY.Editor;
        var cfg = {
            attachForm:true,
            baseZIndex:10000,
            //自定义样式
            //customStyle:"p{color:purple;}",
            //自定义外部样式
            //customLink:["http://localhost/customLink.css","http://xx.com/y2.css"],
            //是否一开始自动聚焦
            //focus:true,
            pluginConfig:{
                "image":{
                    upload:{
                        serverUrl:"/code/upload/web/upload.jsp",
                        serverParams:{
                            waterMark:function () {
                                return S.one("#ke_img_up_watermark_1")[0].checked;
                            }
                        },
                        surfix:"png,jpg,jpeg,gif",
                        fileInput:"Filedata",
                        sizeLimit:1000, //k
                        extraHtml:"<p style='margin-top:10px;'><input type='checkbox' id='ke_img_up_watermark_1' checked='checked'> 图片加水印，防止别人盗用</p>"
                    }
                },
                "flash":{
                    defaultWidth:"300",
                    defaultHeight:"300"
                },
                "templates":[
                    {
                        demo:"模板1效果演示html",
                        html:"<div style='border:1px solid red'>模板1效果演示html</div><p></p>"
                    },
                    {
                        demo:"模板2效果演示html",
                        html:"<div style='border:1px solid red'>模板2效果演示html</div>"
                    }
                ],
                //"font-size":false,
                //"font-family":false,
                //"font-bold":false,
                // "font-italic":false,
                //"font-underline":false,

//                "font-strikeThrough":{
//                    style:{
//                        element        : 'strike',
//                        overrides    : [
//                            {element        : 'span',
//                                attributes         : { style:'text-decoration: line-through;' }},
//                            { element : 's' },
//                            { element : 'del' }
//                        ]
//                    }
//                },
                "multi-upload":{
                    serverUrl:"/code/upload/upload.jsp",
                    serverParams:{
                        waterMark:function () {
                            return S.one("#ke_img_up_watermark_2")[0].checked;
                        }
                    },
                    //previewSuffix:"_60x60",
                    previewWidth:"80px",
                    sizeLimit:1000, //k,, numberLimit:15,
                    extraHtml:"<p style='margin-top:10px;'>" +
                        "<input type='checkbox' " +
                        "style='vertical-align:middle;margin:0 5px;' " +
                        "id='ke_img_up_watermark_2'>" +
                        "<span style='vertical-align:middle;'>图片加水印，防止别人盗用</span></p>"
                },
                "video":{
                    urlCfg:[
                        {
                            reg:/tudou\.com/i,
                            url:"http://bangpai.taobao.com/json/getTudouVideo.htm?" +
                                "url=@url@&callback=@callback@"//"&rand=@rand@"
                        }
                    ],
                    urlTip:"请输入优酷网、土豆网、酷7网的视频播放页链接...",
                    providers:[
                        {
                            reg:/youku\.com/i,
                            width:480,
                            height:400,
                            detect:function (url) {
                                var m = url.match(/id_([^.]+)\.html$/);
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
                            reg:/tudou\.com/i,
                            width:480,
                            height:400,
                            detect:function (url) {
                                return url;
                            }
                        },
                        {
                            reg:/ku6\.com/i,
                            width:480,
                            height:400,
                            detect:function (url) {
                                var m = url.match(/show[^\/]*\/([^.]+)\.html$/);
                                if (m) {
                                    return "http://player.ku6.com/refer/" + m[1] + "/v.swf";
                                }
                                return url;
                            }
                        }/*,
                         {
                         reg:/taobaocdn\.com/i,
                         width:480,
                         height:400,
                         detect:function(url) {
                         return url;
                         }
                         }*/
                    ]
                },
                music:{
                    //必须和网址url同域而不是类库同域
                    musicPlayer:KE.Config.base + "music/niftyplayer.swf"
                },
                "draft":{
                    interval:5,
                    limit:10,
                    helpHtml:"<div " +
                        "style='width:200px;'>" +
                        "<div style='padding:5px;'>草稿箱能够自动保存您最新编辑的内容，" +
                        "如果发现内容丢失，" +
                        "请选择恢复编辑历史</div></div>"
                },
                "resize":{
                    direction:["y"]
                },

                dragupload:{
                    surfix:"png,jpg,jpeg,gif",
                    fileInput:"Filedata",
                    sizeLimit:1000,
                    serverUrl:"/code/upload/web/upload.jsp",
                    serverParams:{
                        waterMark:function () {
                            return true;
                        }
                    }
                }
            }
        };
        var editor = KE("#editor", S.clone(cfg)).use("elementpaths," +
            "sourcearea,preview," +
            "checkbox-sourcearea," +
            "templates,separator," +
            "undo,separator," +
            "removeformat,font,format,color,separator," +
            "list,indent," +
            "justify,separator,link," +
            "image,flash," +
            "video," +
            "music," +
            "xiami-music," +
            "smiley,separator,table,resize," +
            "draft," +
            "multi-upload," +
            "pagebreak,separator,maximize,dragupload");
    });
});
