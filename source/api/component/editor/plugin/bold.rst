.. currentmodule:: editor

bold
===============================

|  字体加粗插件


Configs
-------------------------------

无

Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

* :func:`~Editor.Command.bold`



Command Details
------------------------------------------------------

.. function:: Editor.Command.bold

    | **bold(color, [effect])**
    | 对选区文字加粗

    :param Boolean effect: 加粗或取消加粗


.. note::

    调用命令方式

    .. code-block:: javascript

        editor.execCommand("bold"); // 设置选区文字加粗

        editor.execCommand("bold",false); // 取消选区文字加粗
