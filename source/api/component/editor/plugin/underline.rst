.. currentmodule:: editor

underline
===============================

|  字体下划线插件


Configs
-------------------------------

无


Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

* :func:`~Editor.commands.underline`
* :func:`~Editor.commands.queryUnderlineActive`


Commands Details
------------------------------------------------------

.. function:: Editor.commands.underline

    | **underline([effect])**
    | 对选区文字下划线

    :param Boolean effect: 下划线或取消下划线


.. function:: Editor.commands.queryUnderlineActive

    | **underline(elementPath)**
    | 当前路径是否被下划线覆盖

    :param Editor.ElementPath elementPath: 元素路径
    :rtype: boolean

.. note::

    调用命令方式

    .. code-block:: javascript

        editor.execCommand("underline"); // 设置选区文字下划线

        editor.execCommand("underline",false); // 取消选区文字下划线
