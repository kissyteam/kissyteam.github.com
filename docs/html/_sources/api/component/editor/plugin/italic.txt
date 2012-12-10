.. currentmodule:: editor

italic
===============================

|  斜体插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/italic',function(S,plugin){
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

* :func:`~Editor.commands.italic`


Commands Details
------------------------------------------------------

.. function:: Editor.commands.italic

    | **italic()**
    | 对选区文字设置斜体或取消斜体
    | 支持 queryCommandValue，返回当前路径是否是斜体覆盖
