.. currentmodule:: editor

unordered-list
===============================

|  无序列表插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/unordered-list',function(S,plugin){
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

* :func:`~Editor.Commands.insertUnorderedList`

Commands Details
------------------------------------------------------

.. function:: Editor.Commands.insertUnorderedList

    | **insertUnorderedList**
    | 对选区设置为无序列表或取消
    | 支持 queryCommandValue，返回当前路径是否是无序列表