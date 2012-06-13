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

* :func:`~Editor.Command.outdent`
* :func:`~Editor.Command.queryOutdentActive`

Command Details
------------------------------------------------------

.. function:: Editor.Command.outdent

    | **outdent**
    | 对选区缩出


.. function:: Editor.Command.queryOutdentActive

    | **queryOutdentActive(elementPath)**
    | 返回当前路径是否可以缩出

    :param Editor.ElementPath elementPath: 元素路径
    :rtype: boolean