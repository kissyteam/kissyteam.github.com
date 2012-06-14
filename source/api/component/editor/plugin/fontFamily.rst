.. currentmodule:: editor

fontFamily
===============================

|  字体选择插件


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
* :func:`~Editor.commands.queryFontFamilyActive`

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

    | **fontFamily(fontFamily, [apply=true])**
    | 对选区文字设置指定的字体

    :param String fontFamily: 指定字体值.
    :param Boolean apply: 应用或取消指定的字体.

实例：

.. code-block:: javascript

    editor.execCommand("fontFamily","SimSun"); //=> 设置选区文字为宋体.


.. function:: Editor.commands.queryFontFamilyActive

    | **queryFontFamilyActive(value, element)**
    | 查看指定元素是否被设置了对应字体

    :param String value: 指定的字体值，例如 "SimSun"
    :param KISSY.Node element: 编辑器中的某个元素

示例：

.. code-block:: javascript

    editor.execCommand("queryFontFamilyActive","SimSun",
    editor.get("document").one("span")); //=> 判断第一行第一个元素是否被设置了宋体

