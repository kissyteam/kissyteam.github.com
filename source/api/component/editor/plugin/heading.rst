.. currentmodule:: editor

heading
===============================

|  标题插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/heading',function(S,plugin){
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

* :func:`~Editor.commands.heading`


Commands Details
------------------------------------------------------

.. function:: Editor.commands.heading

    | **heading(tag)**
    | 对选区设置或取消标题的插件
    | 支持 queryCommandValue，返回选区设置标题

    :param String tag: 标题的标签名称。例如 'h1','p'


.. note::

    调用命令方式

    .. code-block:: javascript

        editor.execCommand("heading",'h1');
