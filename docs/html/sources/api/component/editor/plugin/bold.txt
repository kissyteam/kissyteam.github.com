.. currentmodule:: editor

bold
===============================

|  字体加粗插件


Configs
-------------------------------

无

Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

* :func:`~Editor.commands.bold`
* :func:`~Editor.commands.queryBoldActive`


Commands Details
------------------------------------------------------

.. function:: Editor.commands.bold

    | **bold([effect])**
    | 对选区文字加粗

    :param Boolean effect: 加粗或取消加粗


.. function:: Editor.commands.queryBoldActive

    | **bold(elementPath)**
    | 当前路径是否被加粗覆盖

    :param Editor.ElementPath elementPath: 元素路径
    :rtype: boolean

.. note::

    调用命令方式

    .. code-block:: javascript

        editor.execCommand("bold"); // 设置选区文字加粗

        editor.execCommand("bold",false); // 取消选区文字加粗
