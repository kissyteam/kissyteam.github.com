.. _editorusage-notice:

展示注意
-------------

应用样式
~~~~~~~~~~~~~~~~~~


展示页面同样需要引入 ``editor css``, 并且将从数据库中得到的编辑器生成内容用

``<div class="ke-post"></div>``

包裹起来.

如果使用了 :ref:`一般配置中的自定义样式 <editorusage-common-cfg>` ，
则需要在展示页面编辑器外部样式后重新定义你的自定义样式：

.. code-block:: html

    <link rel="stylesheet" type="text/css" href=".../editor.css" />
    <style type="text/css">
        .ke-post p {
            color:red;
        }
    </style>