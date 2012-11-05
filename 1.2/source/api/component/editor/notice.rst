.. _editorusage-notice:

注意
=======================

应用样式
-------------------------


展示页面同样需要引入编辑器外部样式 :

.. code-block:: html

    <!--[if lt IE 8]>
    <link href="http://a.tbcdn.cn/s/kissy/1.2.0/editor/theme/cool/editor-pkg-sprite-min.css" rel="stylesheet"/>
    <![endif]-->
    <!--[if gte IE 8]><!-->
    <link href="http://a.tbcdn.cn/s/kissy/1.2.0/editor/theme/cool/editor-pkg-min-datauri.css" rel="stylesheet"/>
    <!--<![endif]-->

并且将从数据库中得到的编辑器生成内容用

``<div class="ke-post"></div>``

包裹起来.

如果使用了 :ref:`一般配置中的自定义样式 <editorusage-common-cfg>` ,
则需要在展示页面编辑器外部样式后重新定义你的自定义样式：

.. code-block:: html
    
    <style type="text/css">
        .ke-post p {
            color:red;
        }
    </style>

后端开发人员必看
-------------------------

http://dev.taobao.net/?p=4033 