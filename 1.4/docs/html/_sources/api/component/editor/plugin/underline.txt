.. currentmodule:: editor

underline
===============================

|  字体下划线插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/underline',function(S,plugin){
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

* :func:`~Editor.Commands.underline`


Commands Details
------------------------------------------------------

.. function:: Editor.Commands.underline

    | **underline()**
    | 对选区文字下划线或取消
    | 支持 queryCommandValue，返回当前路径是否被下划线覆盖
