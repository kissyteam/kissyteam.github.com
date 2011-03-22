.. _editorusage-plugin-config:

插件配置
-----------------------------------------------

pluginConfig: 为各个插件的具体配置, 配置形式为:

.. code-block:: javascript

    {
    	"插件名":插件配置
    }

图片插件配置
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

通过 ``multipart/form-data`` 格式的 form 提交

.. code-block:: javascript

		pluginConfig: {
		    // 图片插件配置
		    "image": {
		        //上传图片配置，不需要上传功能可不配置
		        upload: {
		            //返回格式
		            //正确：{"imgUrl":"http://xx.com/yy.jpg"}
		            //错误：{"error":"i am error!"}
		            //接受图片的服务器
		            //发送一个文件过去，格式为 multipart/form-data
		            serverUrl: "/code/upload/upload.jsp",
		            //传给服务器的格外参数，是函数则传递函数执行结果
		            serverParams: {
		                yy: function () {
		                    return "xx";
		                }
		            },
		            //后缀名白名单
		            suffix: "png,jpg,jpeg,gif",
		            //传递给server的文件域名字
		            fileInput: "Filedata",
		            //限制上传的文件大小，单位KB，
		            //无法客户端限制，只能作为提示信息
		            sizeLimit: 1000,
		            //k
		            //自己想要添加的其他输入域
		            extraHtml: "<p style='margin-top:5px;'>" + "<input type='checkbox' name='ke_img_up_watermark_1'> 图片加水印，防止别人盗用</p>"
		        }
		    }
		}

注意：

如果页面中设置了 document.domain='xx.com'，那么这时上传图片服务器要返回一段设置 domain 的 html，例如

.. code-block:: html
    
    <html>
    <head>
    <script>
        document.domain="xx.com";
    </script>
    </head>
    <body>
    {"imgUrl":"http://img03.taobaocdn.com/sns_album/i3/T13fhRXftcXXb1upjX.jpg"}
    </body>
    </html>



模板配置
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

不需要模板功能不需要配置

.. code-block:: javascript

		{
		    "templates": [{
		        //显示模板的简单介绍
		        demo: "模板1效果演示html",
		        //插入到编辑器区域的具体内容
		        html: "<div style='border:1px solid red'>模板1效果演示html</div><p></p>"
		    },
		    {
		        demo: "模板2效果演示html",
		        html: "<div style='border:1px solid red'>模板2效果演示html</div>"
		    }],
		}

字体大小配置
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

不要限制字体大小不需要配置

.. code-block:: javascript

		{
		    "font-size": {
		        //字体大小下拉框的配置
		        items: [{
		            //真实的字体大小值
		            value: "14px",
		            //字体大小选项框样式，可不配置
		            attrs: {
		                style: 'position: relative; border: 1px solid #DDDDDD; margin: 2px; padding: 2px;'
		            },
		            //单个字体大小的显示值
		            name: " <span style='font-size:14px'>标准</span>" + "<span style='position:absolute;top:1px;right:3px;'>14px</span>"
		        }]
		    }
		
		}



字体种类配置
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

不需要限制字体种类可不配置.

.. code-block:: javascript

		{
		    "font-family": {
		        items: [{
		            //显示值
		            name: "宋体",
		            //真实值
		            value: "SimSun"
		        },
		        {
		            name: "黑体",
		            value: "SimHei"
		        }]
		    }
		}


草稿箱
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

不需要草稿箱功能可不配置.

.. code-block:: javascript

		{
		    "draft": {
		        //分钟设置：每隔几分钟保存一次
		        interval: 5,
		        //最多保存几条历史记录?
		        limit: 10,
		        //草稿箱帮助文案，可不设置
		        helpHtml: "<div " + "style='width:200px;'>" + "<div style='padding:5px;'>草稿箱能够自动保存您最新编辑的内容，" + "如果发现内容丢失，" + "请选择恢复编辑历史</div></div>"
		    }
		}

拖放调节大小
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


不需要可不设置.

.. code-block:: javascript

		{
		    "resize": {
		        //只能在y轴拖放，[“x”,”y”]表示任意拖放
		        direction: ["y"]
		    }
		}

音乐插件
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

支持音乐文件地址输入，可播放mp3

.. code-block:: javascript

		music: {
		    //必须和网址url同域而不是类库同域
		    musicPlayer: "/music/niftyplayer.swf"
		}


扩展插件
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

一些包含格外功能的插件, 若需要使用请引入外部js

.. code-block:: html

    <script src="http://a.tbcdn.cn/s/kissy/1.1.7/editor/biz/ext/editor-plugin-pkg-min.js"></script>


图片批量上传:
`````````````````````````````````````````````````

.. code-block:: javascript

		{
		    "multi-upload": {
		        //同图片上传插件配置
		        //返回格式
		        //正确：{"imgUrl":""}
		        //错误：{"error":""}
		        //注意：中文 \uxxxx 转义
		        //发送一个文件过去，格式为 multipart/form-data
		        //接受图片的服务器，注意必须绝对地址
		        serverUrl: "http://xx.com/code/upload/upload.jsp",
		        //同图片配置
		        serverParams: {
		            waterMark: function () {
		                return S.one("#ke_img_up_watermark_2")[0].checked;
		            }
		        },
		        //同图片配置
		        extraHtml: "<p style='margin-top:10px;'>" + "<input type='checkbox' " + "style='vertical-align:middle;margin:0 5px;' " + "id='ke_img_up_watermark_2'>" + "<span style='vertical-align:middle;'>图片加水印，防止别人盗用</span></p>",
		        //缩略图的后缀名
		        //原图:http://xx.com/yy.jpg
		        //则加入后缀名时变为：
		        //http://xx.com/yy_80x80.jpg
		        previewSuffix: "_80x80",
		
		        //缩略图窗口宽度，高度根据图片自适应
		        //若不需要缩略图功能，不配置即可
		        previewWidth: "80px",
		
		        //客户端 flash 验证
		        sizeLimit: 1000 //k,
		        //新增配置：可同时显示的图片列表个数
		        numberLimit: 15
		    },
		}
		
注意
=========================================


1.该插件使用 flash 技术，必须在根域名下提供 crossdomain.xml ，例如 http://www.taobao.com/crossdomain.xml ，内容如下

.. code-block:: xml

    <cross-domain-policy>
        <allow-access-from domain="*.taobao.com"/>
        <allow-access-from domain="*.taobao.net"/>
        <allow-access-from domain="*.taobaocdn.com"/>
        <allow-access-from domain="*.tbcdn.cn"/>
        <allow-access-from domain="*.allyes.com"/>
    </cross-domain-policy>

2.serverUrl 必须使用绝对地址，否则如果编辑器组件和应用页面不在同一个hostname时，firefox下请求会发到编辑器组件所在的hostname。
 

国内视频插入
`````````````````````````````````````````````````````````

可直接输入tudou,youku,ku6的url进行视频粘贴.

.. code-block:: javascript

		{
		    "video": {
		        urlCfg: [{
		            reg: /tudou\.com/i,
		            //地址配置后端咨询：石冲
		            url: "http://bangpai.daily.taobao.net/json/getTudouVideo.htm?" + "url=@url@&callback=@callback@"
		        }],
		        //输入框提示信息     
		        urlTip: "请输入优酷网、土豆网、酷7网的视频播放页链接...",
		        //静态转换规则，从用户输入转换为flash地址，例如优酷：
		        providers: [{
		            reg: /youku\.com/i,
		            width: 480,
		            height: 400,
		            detect: function (url) {
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
		        }]
		    }
		}
		
虾米音乐插入
``````````````````````````````````````````````````````

无需配置, 只要 use 即可.

.. code-block:: javascript

    {
        "xiami-music":{}
    }