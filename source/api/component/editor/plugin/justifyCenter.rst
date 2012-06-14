.. currentmodule:: editor

justifyCenter
===============================

|  居中对齐插件


Configs
-------------------------------

无

Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

* :func:`~Editor.commands.justifyCenter`
* :func:`~Editor.commands.queryJustifyCenterActive`


Commands Details
------------------------------------------------------

.. function:: Editor.commands.justifyCenter

    | **justifyCenter()**
    | 对选区文字居中


.. function:: Editor.commands.queryJustifyCenterActive

    | **queryJustifyCenterActive(elementPath)**
    | 当前路径是否是居中对齐

    :param Editor.ElementPath elementPath: 元素路径
    :rtype: boolean
