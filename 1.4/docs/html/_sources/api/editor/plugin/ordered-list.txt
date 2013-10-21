.. currentmodule:: editor

ordered-list
===============================

|  有序列表插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/ordered-list',function(S,plugin){
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

* :func:`~Editor.Commands.insertOrderedList`

Commands Details
------------------------------------------------------

.. function:: Editor.Commands.insertOrderedList

    | **insertOrderedList**
    | 对选区设置或取消为有序列表
    | 支持 queryCommandValue，返回选区是否是有序列表