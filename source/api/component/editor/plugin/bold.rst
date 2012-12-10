.. currentmodule:: editor

bold
===============================

|  字体加粗插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/bold',function(S,bold){
            // use bold
        });
    });

Configs
-------------------------------

无

Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

* :func:`~Editor.commands.bold`


Commands Details
------------------------------------------------------

.. function:: Editor.commands.bold

    | **bold()**
    | toggle 选区文字加粗.
    | 支持 queryCommandValue 返回当前路径是否被加粗覆盖.


.. note::

    调用命令方式

    .. code-block:: javascript

        editor.execCommand("bold"); // 设置选区文字加粗

        editor.execCommand("bold"); // 取消选区文字加粗

        editor.queryCommandValue("bold") //=>false
