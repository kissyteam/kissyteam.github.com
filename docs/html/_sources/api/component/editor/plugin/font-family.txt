.. currentmodule:: editor

font-family
===============================

|  字体选择插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/font-family',function(S,plugin){
            // use
        });
    });

Configs
-------------------------------

.. data:: Editor.Plugin.fontFamily.config.items
.. data:: Editor.Plugin.fontFamily.config.width

Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

* :func:`~Editor.commands.fontFamily`

Config Details
------------------------------------------------------

.. data:: Editor.Plugin.fontFamily.config.items

    {Object[]} - 可选。字体下拉菜单的名称和值集合。默认：

    .. code-block:: javascript

        [
            //ie 不认识中文？？？
            {
                name:"宋体",
                value:"SimSun"
            },
            {
                name:"黑体",
                value:"SimHei"
            },
            {
                name:"隶书",
                value:"LiSu"
            },
            {
                name:"楷体",
                value:"KaiTi_GB2312"
            },
            {
                name:"微软雅黑",
                value:"Microsoft YaHei"
            },
            {
                name:"Georgia",
                value:"Georgia"
            },
            {
                name:"Times New Roman",
                value:"Times New Roman"
            },
            {
                name:"Impact",
                value:"Impact"
            },
            {
                name:"Courier New",
                value:"Courier New"
            },
            {
                name:"Arial",
                value:"Arial"
            },
            {
                name:"Verdana",
                value:"Verdana"
            },
            {
                name:"Tahoma",
                value:"Tahoma"
            }
        ]


.. data:: Editor.Plugin.fontFamily.config.width

    {String} - 可选。下拉菜单的宽度，默认 "130px".



Commands Details
------------------------------------------------------

.. function:: Editor.commands.fontFamily

    | **fontFamily(fontFamily)**
    | 对选区文字设置或取消指定的字体.
    | 支持 queryCommandValue，返回当前元素是否被设置了对应字体

    :param String fontFamily: 指定字体值.

实例：

.. code-block:: javascript

    editor.execCommand("fontFamily","SimSun"); //=> 设置选区文字为宋体.
    editor.execCommand("fontFamily","SimSun"); //=> 取消设置选区文字为宋体.
    editor.queryCommandValue("fontFamily"); //=> 返回 "SimSun";
