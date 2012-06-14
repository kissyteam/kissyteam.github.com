.. currentmodule:: editor

italic
===============================

|  斜体插件


Configs
-------------------------------

无

Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

* :func:`~Editor.commands.italic`
* :func:`~Editor.commands.queryItalicActive`


Commands Details
------------------------------------------------------

.. function:: Editor.commands.italic

    | **italic([effect])**
    | 对选区文字斜体

    :param Boolean effect: 斜体或取消斜体


.. function:: Editor.commands.queryItalicActive

    | **queryItalicActive(elementPath)**
    | 当前路径是否是斜体覆盖

    :param Editor.ElementPath elementPath: 元素路径
    :rtype: boolean
    :returns: 当前路径是否是斜体覆盖


.. note::

    调用命令方式

    .. code-block:: javascript

        editor.execCommand("italic");

        editor.execCommand("italic",false);
