.. currentmodule:: editor

remove-format
===============================

|  清除格式插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/remove-format',function(S,plugin){
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

* :func:`~Editor.commands.removeFormat`


Commands Details
------------------------------------------------------

.. function:: Editor.commands.removeFormat

    | **indent()**
    | 对选区清除格式.