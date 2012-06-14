.. currentmodule:: editor

outdent
===============================

|  缩出插件


Configs
-------------------------------

无

Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

* :func:`~Editor.commands.outdent`
* :func:`~Editor.commands.queryOutdentActive`

Commands Details
------------------------------------------------------

.. function:: Editor.commands.outdent

    | **outdent**
    | 对选区缩出


.. function:: Editor.commands.queryOutdentActive

    | **queryOutdentActive(elementPath)**
    | 返回当前路径是否可以缩出

    :param Editor.ElementPath elementPath: 元素路径
    :rtype: boolean