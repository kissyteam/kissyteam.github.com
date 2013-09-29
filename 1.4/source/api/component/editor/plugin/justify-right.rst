.. currentmodule:: editor

justify-right
===============================

|  居右对齐插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/justify-right',function(S,plugin){
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

* :func:`~Editor.Commands.justifyRight`


Commands Details
------------------------------------------------------

.. function:: Editor.Commands.justifyRight

    | **justifyCenter()**
    | 对选区文字居右
    | 支持 queryCommandValue，返回选区是否居右
