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

.. code-block:: javascript

    pluginConfig:{
        // 图片插件配置
        "image":{
            //上传图片配置，不需要上传功能可不配置
            upload:{
                //返回格式
                //正确：{"imgUrl":""}
                //错误：{"error":""}
                //中文 \uxxxx 转义
                //接受图片的服务器
                //发送一个文件过去，格式为 multipart/form-data
                //具体后端配置咨询：石冲
                serverUrl:"/code/upload/upload.jsp",
                //传给服务器的格外参数，是函数则传递函数执行结果
                serverParams: {
                    // cookie 只能通过参数传递
                    cookie:document.cookie,
                    watermark:function() {
                        return S.one("#ke_img_up_watermark_1")[0].checked;
                        }
                },
                 //传递给server的文件域名字
                fileInput:"Filedata",
                 //限制上传的文件大小，单位KB
                sizeLimit:1000,//k
                 //自己想要添加的其他输入域
                extraHtml:"<p style='margin-top:5px;'><input type='checkbox' id='ke_img_up_watermark_1'> 图片加水印，防止别人盗用</p>"
            }
        }
    }

.. _editorusage-plugin-config-image-notice:

注意：必须在根域名下提供 crossdomain.xml ，例如 http://www.taobao.com/crossdomain.xml ，内容如下

.. code-block:: xml

    <cross-domain-policy>
        <allow-access-from domain="*.taobao.com"/>
        <allow-access-from domain="*.taobao.net"/>
        <allow-access-from domain="*.taobaocdn.com"/>
        <allow-access-from domain="*.tbcdn.cn"/>
        <allow-access-from domain="*.allyes.com"/>
    </cross-domain-policy>


模板配置
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

不需要模板功能不需要配置

.. code-block:: javascript

    {
    "templates": [
                {
                    //显示模板的简单介绍
                    demo: "模板1效果演示html"  ,
                    //插入到编辑器区域的具体内容
                    html: "<div style='border:1px solid red'>模板1效果演示html</div><p></p>"
                },
                {
                    demo: "模板2效果演示html",
                    html: "<div style='border:1px solid red'>模板2效果演示html</div>"
                }
               ],
    }

字体大小配置
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

不要限制字体大小不需要配置

.. code-block:: javascript

    {
        "font-size":{
             //字体大小下拉框的配置
             items:[{
                 //真实的字体大小值
                 value:"14px",
                 //字体大小选项框样式，可不配置
                 attrs:{
                    style:'position: relative; border: 1px solid #DDDDDD; margin: 2px; padding: 2px;'
                 },
                 //单个字体大小的显示值
                  name:" <span style='font-size:14px'>标准</span>" +
                        "<span style='position:absolute;top:1px;right:3px;'>14px</span>"
             }]
        }

    }



字体种类配置
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

不需要限制字体种类可不配置.

.. code-block:: javascript

    {
        "font-family":{
            items:[{
                //显示值
                name:"宋体",
                //真实值
                value:"SimSun"
            },
            {name:"黑体",value:"SimHei"},
            ]}
        }
    }

草稿箱
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

不需要草稿箱功能可不配置.

.. code-block:: javascript

    {
    "draft":{
             //分钟设置：每隔几分钟保存一次
             interval:5,
             //最多保存几条历史记录?
             limit:10,
             //草稿箱帮助文案，可不设置
             helpHtml:  "<div " +
                       "style='width:200px;'>" +
                       "<div style='padding:5px;'>草稿箱能够自动保存您最新编辑的内容，" +
                       "如果发现内容丢失，" +
                       "请选择恢复编辑历史</div></div>"
             }
    }

拖放
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


不需要可不设置.

.. code-block:: javascript

    {
        "resize":{
             //只能在y轴拖放，[“x”,”y”]表示任意拖放
             direction:["y"]
    }


帮派插件
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

单独为帮派开发的插件, 若需要使用请引入外部js

.. code-block:: html

    <script src="http://a.tbcdn.cn/s/kissy/1.1.5/editor/biz/bangpai/editor-plugin-pkg-min.js"></script>


图片批量上传:
`````````````````````````````````````````````````

.. code-block:: javascript

    {
    "bangpai-upload":{
                     //同图片上传插件配置
                     serverUrl:"/code/upload/upload.jsp",
                     serverParams:{
                                waterMark:function() {
                                    return S.one("#ke_img_up_watermark_2")[0].checked;
                                }
                      },
                     extraHtml:"<p style='margin-top:10px;'>" +
                                    "<input type='checkbox' " +
                                    "style='vertical-align:middle;margin:0 5px;' " +
                                    "id='ke_img_up_watermark_2'>" +
                                    "<span style='vertical-align:middle;'>图片加水印，防止别人盗用</span></p>",
                     sizeLimit:1000//k,
                     //新增配置：可同时显示的图片列表个数
                     numberLimit:15
                 },
    }

注意：同 image 插件配置，必须提供 :ref:`crossdomain.xml <editorusage-plugin-config-image-notice>`

 

国内视频插入
`````````````````````````````````````````````````````````

可直接输入tudou,youku,ku6的url进行视频粘贴.

.. code-block:: javascript

    {
    "bangpai-video":{
                   urlCfg:[
                         {
                          reg:/tudou\.com/i,
                          //地址配置后端咨询：石冲
                          url:"http://bangpai.daily.taobao.net/json/getTudouVideo.htm?" +
                               "url=@url@&callback=@callback@"
                         }
                         ]
                   },
    }

虾米音乐插入
``````````````````````````````````````````````````````

无需配置, 只要 use 即可.

.. code-block:: javascript

    {
        "bangpai-music":{}
    }