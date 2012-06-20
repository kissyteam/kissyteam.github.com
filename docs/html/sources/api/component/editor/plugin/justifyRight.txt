.. currentmodule:: editor

justifyRight
===============================

|  居右对齐插件


Configs
-------------------------------

无

Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

* :func:`~Editor.commands.justifyLeft`
* :func:`~Editor.commands.queryJustifyRightActive`


Commands Details
------------------------------------------------------

.. function:: Editor.commands.justifyLeft

    | **justifyCenter()**
    | 对选区文字居右


.. function:: Editor.commands.queryJustifyRightActive

    | **queryJustifyRightActive(elementPath)**
    | 当前路径是否是居右对齐

    :param Editor.ElementPath elementPath: 元素路径
    :rtype: boolean
