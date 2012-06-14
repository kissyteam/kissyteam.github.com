.. currentmodule:: editor

heading
===============================

|  标题插件


Configs
-------------------------------

无

Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

* :func:`~Editor.commands.heading`


Commands Details
------------------------------------------------------

.. function:: Editor.commands.heading

    | **heading(tag)**
    | 对选区设置标题的插件

    :param String tag: 标题的标签名称。例如 'h1'


.. note::

    调用命令方式

    .. code-block:: javascript

        editor.execCommand("heading",'h1');


.. function:: Editor.commands.queryHeadingActive

    | **queryHeadingActive(elementPath, tag)**
    | 对选区设置标题的插件

    :param Editor.ElementPath elementPath: 元素路径
    :param String tag: 标题的标签名称。例如 'h1'


.. note::

    调用命令方式

    .. code-block:: javascript

        editor.execCommand("queryHeadingActive",elementPath,'h1');
