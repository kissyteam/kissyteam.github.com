.. currentmodule:: editor

multiple-upload
=====================================================

| 批量上传

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/multiple-upload',function(S,plugin){
            // use
        });
    });

Configs
--------------------------------------------------------------

.. data:: Editor.Plugin.multiUpload.config.serverUrl
.. data:: Editor.Plugin.multiUpload.config.serverParams
.. data:: Editor.Plugin.multiUpload.config.previewSuffix
.. data:: Editor.Plugin.multiUpload.config.fileInput
.. data:: Editor.Plugin.multiUpload.config.extraHtml
.. data:: Editor.Plugin.multiUpload.config.previewWidth
.. data:: Editor.Plugin.multiUpload.config.sizeLimit
.. data:: Editor.Plugin.multiUpload.config.numberLimit


Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

无


Config Details
------------------------------------------------------

.. data:: Editor.Plugin.multiUpload.config.upload.serverUrl

    {String} - 接受文件数据的服务器端程序地址, 格式为 multipart/form-data , 返回格式为：

               * 正确：{"imgUrl":"http://xx.com/yy.jpg"}
               * 错误：{"error":"i am error!"}


.. data:: Editor.Plugin.multiUpload.config.upload.serverParams

       {Object} - 键值对. 传给服务器的格外参数, 如果 value 是函数则传递函数执行结果.

.. data:: Editor.Plugin.multiUpload.config.upload.previewSuffix

       {String} - 缩略图的后缀。例如原图:http://xx.com/yy.jpg，则加入后缀名时变为：http://xx.com/yy_80x80.jpg

.. data:: Editor.Plugin.multiUpload.config.upload.previewWidth

       {String} - 缩略图的宽度.

.. data:: Editor.Plugin.multiUpload.config.upload.fileInput

       {String} - 传给服务器的文件域名.

.. data:: Editor.Plugin.multiUpload.config.upload.sizeLimit

       {Number} - 限制上传的文件大小, 单位 KB.

.. data:: Editor.Plugin.multiUpload.config.upload.numberLimit

       {Number} - 可同时显示的图片列表个数.

.. data:: Editor.Plugin.multiUpload.config.upload.extraHtml

       {String} - 放入图片上传区域的其他 html.


实例
----------------------------------------------

.. code-block:: javascript

        pluginConfig: {
                        "multiple-upload": {
                            //同图片上传插件配置
                            //返回格式
                            //正确：{"imgUrl":""}
                            //错误：{"error":""}
                            //注意：中文 \uxxxx 转义
                            //发送一个文件过去, 格式为 multipart/form-data
                            //接受图片的服务器, 注意必须绝对地址
                            serverUrl: "http://xx.com/code/upload/upload.jsp",
                            //同图片配置
                            serverParams: {
                                waterMark: function () {
                                    return S.one("#ke_img_up_watermark_2")[0].checked;
                                }
                            },
                            //同图片配置
                            extraHtml: "<p style='margin-top:10px;'>" + "<input type='checkbox' " + "style='vertical-align:middle;margin:0 5px;' " + "id='ke_img_up_watermark_2'>" + "<span style='vertical-align:middle;'>图片加水印, 防止别人盗用</span></p>",
                            //缩略图的后缀名
                            //原图:http://xx.com/yy.jpg
                            //则加入后缀名时变为：
                            //http://xx.com/yy_80x80.jpg
                            previewSuffix: "_80x80",

                            //缩略图窗口宽度, 高度根据图片自适应
                            //若不需要缩略图功能, 不配置即可
                            previewWidth: "80px",

                            //客户端 flash 验证
                            sizeLimit: 1000 //k,
                            //新增配置：可同时显示的图片列表个数
                            numberLimit: 15
                        }
                    }


.. note::

    #. 该插件使用 flash 技术, 必须在根域名下提供 crossdomain.xml , 例如 http://www.taobao.com/crossdomain.xml , 内容如下

        .. code-block:: xml

            <cross-domain-policy>
                <allow-access-from domain="*.taobao.com"/>
                <allow-access-from domain="*.taobao.net"/>
                <allow-access-from domain="*.taobaocdn.com"/>
                <allow-access-from domain="*.tbcdn.cn"/>
                <allow-access-from domain="*.allyes.com"/>
            </cross-domain-policy>


    #. serverUrl 必须使用绝对地址, 否则如果编辑器组件和应用页面不在同一个hostname时, firefox下请求会发到编辑器组件所在的hostname.

    #. 多图上传在非 ie 下并不会携带 cookie，如确实需要可通过 serverParams 传递：

        .. code-block:: javascript

            serverParams: {
                cookie: function () {
                    return document.cookie;
                }
            }