.. currentmodule:: editor

strikeThrough
===============================

|  字体删除线插件


Configs
-------------------------------

无


Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

* :func:`~Editor.commands.strikeThrough`
* :func:`~Editor.commands.queryStrikeThroughActive`


Commands Details
------------------------------------------------------

.. function:: Editor.commands.strikeThrough

    | **strikeThrough([effect])**
    | 对选区文字删除线

    :param Boolean effect: 删除线或取消删除线


.. function:: Editor.commands.queryStrikeThroughActive

    | **strikeThrough(elementPath)**
    | 当前路径是否被删除线覆盖

    :param Editor.ElementPath elementPath: 元素路径
    :rtype: boolean

.. note::

    调用命令方式

    .. code-block:: javascript

        editor.execCommand("strikeThrough"); // 设置选区文字删除线

        editor.execCommand("strikeThrough",false); // 取消选区文字删除线
