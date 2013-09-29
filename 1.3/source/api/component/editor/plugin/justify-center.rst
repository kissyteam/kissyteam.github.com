.. currentmodule:: editor

justify-center
===============================

|  居中对齐插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/justify-center',function(S,plugin){
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

* :func:`~Editor.Commands.justifyCenter`


Commands Details
------------------------------------------------------

.. function:: Editor.Commands.justifyCenter

    | **justifyCenter()**
    | 对选区文字居中或取消
    | 支持 queryCommandValue，返回选区是否居中