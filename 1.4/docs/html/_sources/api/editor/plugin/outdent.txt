.. currentmodule:: editor

outdent
===============================

|  缩出插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/outdent',function(S,plugin){
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

* :func:`~Editor.Commands.outdent`

Commands Details
------------------------------------------------------

.. function:: Editor.Commands.outdent

    | **outdent**
    | 对选区缩出
    | 支持 queryCommandValue，返回当前路径是否可以缩出