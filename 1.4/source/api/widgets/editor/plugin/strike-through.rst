.. currentmodule:: editor

strike-through
===============================

|  字体删除线插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/strike-through',function(S,plugin){
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

* :func:`~Editor.Commands.strikeThrough`


Commands Details
------------------------------------------------------

.. function:: Editor.Commands.strikeThrough

    | **strikeThrough()**
    | 对选区文字删除线或取消
    | 支持 queryCommandValue，返回当前路径是否被删除线覆盖