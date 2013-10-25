.. currentmodule:: editor

justify-left
===============================

|  居左对齐插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/justify-left',function(S,plugin){
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

* :func:`~Editor.Commands.justifyLeft`


Commands Details
------------------------------------------------------

.. function:: Editor.Commands.justifyLeft

    | **justifyCenter()**
    | 对选区文字居左
    | 支持 queryCommandValue，返回选区是否居左
