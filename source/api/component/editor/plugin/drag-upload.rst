.. currentmodule:: editor

drag-upload
===============================

|  拖放上传插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/drag-upload',function(S,plugin){
            // use
        });
    });

Configs
-------------------------------

.. data:: Editor.Plugin.dragUpload.config.fileInput
.. data:: Editor.Plugin.dragUpload.config.sizeLimit
.. data:: Editor.Plugin.dragUpload.config.serverParams
.. data:: Editor.Plugin.dragUpload.config.serverUrl
.. data:: Editor.Plugin.dragUpload.config.suffix

Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

无



Configs Details
------------------------------------------------------

.. data:: Editor.Plugin.dragUpload.config.fileInput

    {String} - 可选，默认 "Filedata"。上传文件域的名字.

.. data:: Editor.Plugin.dragUpload.config.sizeLimit

    {Number} - 可选，单位 kb，默认无限制。上传文件大小限制.

.. data:: Editor.Plugin.dragUpload.config.serverParams

    {Object} - 可选。附带传给 server 的参数 json 对象。

.. data:: Editor.Plugin.dragUpload.config.serverUrl

    {String} - 比选。上传服务器地址。

.. data:: Editor.Plugin.dragUpload.config.suffix

    {String} - 可选，默认 "png,jpg,jpeg,gif"。允许上传的文件后缀名列表，逗号分割.
