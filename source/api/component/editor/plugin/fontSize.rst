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

* :func:`~Editor.Command.fontSize`
* :func:`~Editor.Command.queryFontSizeActive`


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


Command Details
------------------------------------------------------

.. function:: Editor.Command.fontSize

    | **fontSize(fontSize, [apply=true])**
    | 对选区文字设置指定的字体大小

    :param String fontSize: 指定字体大小值.
    :param Boolean apply: 应用或取消指定的大小.

实例：

.. code-block:: javascript

    editor.execCommand("fontSize","10px"); //=> 设置选区文字大小为10px.


.. function:: Editor.Command.queryFontSizeActive

    | **queryFontSizeActive(value, element)**
    | 查看指定元素是否被设置了对应大小

    :param String value: 指定的大小值，例如 "10px"
    :param KISSY.Node element: 编辑器中的某个元素
