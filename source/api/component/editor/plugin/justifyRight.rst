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

* :func:`~Editor.Command.justifyLeft`
* :func:`~Editor.Command.queryJustifyRightActive`


Command Details
------------------------------------------------------

.. function:: Editor.Command.justifyLeft

    | **justifyCenter()**
    | 对选区文字居右


.. function:: Editor.Command.queryJustifyRightActive

    | **queryJustifyRightActive(elementPath)**
    | 当前路径是否是居右对齐

    :param Editor.ElementPath elementPath: 元素路径
    :rtype: boolean
