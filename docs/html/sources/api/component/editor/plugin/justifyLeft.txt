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

* :func:`~Editor.Command.justifyLeft`
* :func:`~Editor.Command.queryJustifyLeftActive`


Command Details
------------------------------------------------------

.. function:: Editor.Command.justifyLeft

    | **justifyCenter()**
    | 对选区文字居左


.. function:: Editor.Command.queryJustifyLeftActive

    | **queryJustifyLeftActive(elementPath)**
    | 当前路径是否是居左对齐

    :param Editor.ElementPath elementPath: 元素路径
    :rtype: boolean
