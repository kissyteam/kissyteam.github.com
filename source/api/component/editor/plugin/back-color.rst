.. currentmodule:: editor

back-color
===============================

|  背景色插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/back-color',function(S,BackColor){
            // use BackColor
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

* :func:`~Editor.Commands.backColor`


Commands Details
------------------------------------------------------

.. function:: Editor.Commands.backColor

    | **backColor(color)**
    | 对选区设置背景色.该命令不支持 queryCommandValue.

    :param String color: 颜色的 16 进制字符串。例如 '#ffffff'


.. note::

    调用命令方式

    .. code-block:: javascript

        editor.execCommand("backColor",'#ffffffff'); // 设置选区背景为白色
