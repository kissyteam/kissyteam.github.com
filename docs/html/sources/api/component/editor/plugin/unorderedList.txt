.. currentmodule:: editor

unorderedList
===============================

|  无序列表插件


Configs
-------------------------------

无


Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

* :func:`~Editor.commands.insertUnorderedList`
* :func:`~Editor.commands.queryInsertUnorderedListActive`

Commands Details
------------------------------------------------------

.. function:: Editor.commands.insertUnorderedList

    | **insertUnorderedList**
    | 对选区设置为无序列表


.. function:: Editor.commands.queryInsertUnorderedListActive

    | **queryOutdentActive(elementPath)**
    | 返回当前路径是否是无序列表

    :param Editor.ElementPath elementPath: 元素路径
    :rtype: boolean