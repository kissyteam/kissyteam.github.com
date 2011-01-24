.. _editorinstall:

引入
===========


引入 css
--------------

1) 在页头加入 reset css (淘宝页面一般都已引入)

.. code-block:: html

    <link href="http://a.tbcdn.cn/s/kissy/1.1.7/cssreset/reset-min.css" rel="stylesheet"/>


2) 在页头加入编辑器淘宝主题 css

.. code-block:: html

    <!--[if lt IE 8]>
    <link href="http://a.tbcdn.cn/s/kissy/1.1.7/editor/theme/cool/editor-pkg-min-mhtml.css" rel="stylesheet"/>
    <![endif]-->
    <!--[if gte IE 8]><!-->
    <link href="http://a.tbcdn.cn/s/kissy/1.1.7/editor/theme/cool/editor-pkg-min-datauri.css" rel="stylesheet"/>
    <!--<![endif]-->


引入 javascript
--------------------------

只要引入外部脚本

.. code-block:: html

    <script src="http://a.tbcdn.cn/s/kissy/1.1.7/??kissy-min.js,uibase/uibase-pkg-min.js,dd/dd-pkg-min.js,overlay/overlay-pkg-min.js,editor/editor-all-pkg-min.js"></script>


加入 textarea
--------------------------

.. code-block:: html

    <textarea id="textareaId" style="width:90%;height:200px"></textarea>

该 textarea 将被编辑器组件替换, 宽高请用行内样式定义.


:ref:`下一节, 如何使用? <editorusage>` 
