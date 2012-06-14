.. currentmodule:: editor

orderedList
===============================

|  有序列表插件


Configs
-------------------------------

无


Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

* :func:`~Editor.commands.insertOrderedList`
* :func:`~Editor.commands.queryInsertOrderedListActive`

Commands Details
------------------------------------------------------

.. function:: Editor.commands.insertOrderedList

    | **insertOrderedList**
    | 对选区设置为有序列表


.. function:: Editor.commands.queryInsertOrderedListActive

    | **queryOutdentActive(elementPath)**
    | 返回当前路径是否是有序列表

    :param Editor.ElementPath elementPath: 元素路径
    :rtype: boolean