.. currentmodule:: editor

fore-color
===============================

|  字体颜色插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/fore-color',function(S,plugin){
            // use
        });
    });

Configs
-------------------------------

无

Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

* :func:`~Editor.Commands.foreColor`



Commands Details
------------------------------------------------------

.. function:: Editor.Commands.foreColor

    | **foreColor(color)**
    | 对选区设置字体颜色插件

    :param String color: 颜色的 16 进制字符串。例如 '#ffffff'


.. note::

    调用命令方式

    .. code-block:: javascript

        editor.execCommand("foreColor",'#ffffffff'); // 设置选区字体颜色为白色
