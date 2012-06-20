.. currentmodule:: editor

justifyLeft
===============================

|  居左对齐插件


Configs
-------------------------------

无

Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

* :func:`~Editor.commands.justifyLeft`
* :func:`~Editor.commands.queryJustifyLeftActive`


Commands Details
------------------------------------------------------

.. function:: Editor.commands.justifyLeft

    | **justifyCenter()**
    | 对选区文字居左


.. function:: Editor.commands.queryJustifyLeftActive

    | **queryJustifyLeftActive(elementPath)**
    | 当前路径是否是居左对齐

    :param Editor.ElementPath elementPath: 元素路径
    :rtype: boolean
