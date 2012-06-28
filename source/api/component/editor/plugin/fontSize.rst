.. currentmodule:: editor

fontSize
===============================

|  字体大小插件


Configs
-------------------------------

.. data:: Editor.Plugin.fontSize.config.items
.. data:: Editor.Plugin.fontSize.config.width

Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

* :func:`~Editor.commands.fontSize`


Config Details
------------------------------------------------------

.. data:: Editor.Plugin.fontSize.config.items

    {Object[]} - 可选。字体大小下拉菜单的名称和值集合，默认包括 "8px","10px" 等。例如：

    .. code-block:: javascript

        [
            //ie 不认识中文？？？
            {
                name:"较大",
                value:"20px"
            },
            {
                name:"较小",
                value:"10px"
            }
        ]


.. data:: Editor.Plugin.fontSize.config.width

    {String} - 可选。下拉菜单的宽度，默认 "55px".


Commands Details
------------------------------------------------------

.. function:: Editor.commands.fontSize

    | **fontSize(fontSize)**
    | 对选区文字设置或取消指定的字体大小
    | 支持 queryCommandValue，返回当前元素是否被设置了对应大小

    :param String fontSize: 指定字体大小值.

实例：

.. code-block:: javascript

    editor.execCommand("fontSize","10px"); //=> 设置选区文字大小为10px.
    editor.execCommand("fontSize","10px"); //=> 取消设置选区文字大小为10px.
    editor.queryCommandValue("fontSize"); //=> 返回 10px