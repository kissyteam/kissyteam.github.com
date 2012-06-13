.. currentmodule:: editor

image
===============================

|  插入图片插件


Configs
-------------------------------

.. data:: Editor.Plugin.image.config.remote
.. data:: Editor.Plugin.fontSize.config.upload


Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

无


Config Details
------------------------------------------------------

.. data:: Editor.Plugin.fontSize.config.remote

    {Boolean} - 图片配置，如果设为 false ，则图片弹层中网络图片 tab 消失

.. data:: Editor.Plugin.fontSize.config.upload

    {Object} - 图片配置，上传图片配置, 不需要上传功能可不配置, 包括以下子配置.



    .. data:: Editor.Plugin.fontSize.config.upload.serverUrl

        {String} - 接受文件数据的服务器端程序地址, 格式为 multipart/form-data , 返回格式为：

                   * 正确：{"imgUrl":"http://xx.com/yy.jpg"}
                   * 错误：{"error":"i am error!"}


    .. data:: Editor.Plugin.fontSize.config.upload.serverParams

           {Object} - 键值对. 传给服务器的格外参数, 如果 value 是函数则传递函数执行结果.


    .. data:: Editor.Plugin.fontSize.config.upload.suffix

           {String} - 允许图片的后缀名.


    .. data:: Editor.Plugin.fontSize.config.upload.fileInput

           {String} - 传给服务器的文件域名.


    .. data:: Editor.Plugin.fontSize.config.upload.sizeLimit

           {Number} - 限制上传的文件大小, 单位 KB, ie 下只能作为提示.


    .. data:: Editor.Plugin.fontSize.config.upload.extraHtml

           {String} - 放入图片上传区域的其他 html.


实例
----------------------------------------------

.. code-block:: javascript

        pluginConfig: {
            // 图片插件配置
            "image": {
                //上传图片配置, 不需要上传功能可不配置
                upload: {
                    //返回格式
                    //正确：{"imgUrl":"http://xx.com/yy.jpg"}
                    //错误：{"error":"i am error!"}
                    //接受图片的服务器
                    //发送一个文件过去, 格式为 multipart/form-data
                    serverUrl: "/code/upload/upload.jsp",
                    //传给服务器的格外参数, 是函数则传递函数执行结果
                    serverParams: {
                        yy: function () {
                            return "xx";
                        }
                    },
                    //后缀名白名单
                    suffix: "png,jpg,jpeg,gif",
                    //传递给server的文件域名字
                    fileInput: "Filedata",
                    //限制上传的文件大小, 单位KB,
                    //无法客户端限制, 只能作为提示信息
                    sizeLimit: 1000,
                    //k
                    //自己想要添加的其他输入域
                    extraHtml: "<p style='margin-top:5px;'>" + "<input type='checkbox' name='ke_img_up_watermark_1'> 图片加水印, 防止别人盗用</p>"
                }
            }
        }

.. note::

    如果页面中设置了 document.domain='xx.com', 那么这时上传图片服务器要返回一段设置 domain 的 html, 例如

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