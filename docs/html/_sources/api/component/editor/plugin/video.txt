.. currentmodule:: editor

video
===============================

|  插入图片插件


Configs
-------------------------------

.. data:: Editor.Plugin.video.config.urlCfg
.. data:: Editor.Plugin.video.config.urlTip
.. data:: Editor.Plugin.video.config.providers

Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

无


Config Details
------------------------------------------------------

.. data:: Editor.Plugin.video.config.urlCfg

    {Object[]} - 动态地址转化规则，其中每个 Object 包括

    .. data:: Editor.Plugin.video.config.urlCfg.reg

        {RegExp} - 判断匹配与否的正则

    .. data:: Editor.Plugin.video.config.urlCfg.url

        {RegExp} - 转化服务器的地址

    .. data:: Editor.Plugin.video.config.urlCfg.paramName

        {String} - 待转化 url 的参数名称

.. data:: Editor.Plugin.video.config.urlTip

    {String} - 输入框提示信息

.. data:: Editor.Plugin.video.config.providers

    {Object[]} - 静态转换规则, 从用户输入转换为flash地址，其中每个 Object 包括

    .. data:: Editor.Plugin.video.config.providers.reg

        {RegExp} - 判断匹配与否的正则

    .. data:: Editor.Plugin.video.config.providers.width

        {Number} - 转化后 flash 的默认宽度

    .. data:: Editor.Plugin.video.config.providers.height

        {Number} - 转化后 flash 的默认高度

    .. function:: Editor.Plugin.video.config.providers.detect(url)

         {function} - 转化函数，参数为用户输入的 url




实例
----------------------------------------------

.. code-block:: javascript

    {
        "video": {
            urlCfg: [
                {
                    reg:/tudou\.com/i,
                    url:"http://bangpai.daily.taobao.net/json/getTudouVideo.htm",
                    paramName:"url"
                }
            ],
            // 输入框提示信息
            urlTip: "请输入优酷网、土豆网、酷7网的视频播放页链接...",
            // 静态转换规则, 从用户输入转换为flash地址, 例如优酷：
            providers: [
                {
                    // 允许白名单
                    reg:/taohua\.com/i,
                    //默认高宽
                    width:480,
                    height:400,
                    detect:function (url) {
                        return url;
                    }
                },
                {
                    reg:/youku\.com/i,
                    width:480,
                    height:400,
                    detect:function (url) {
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
                        var m = url.match(/show[^\/]*\/([^\/]+)\.html(\?[^?]+)?$/);
                        if (m) {
                            return "http://player.ku6.com/refer/" + m[1] + "/v.swf";
                        }
                        return url;
                    }
                }
            ]
        }
    }