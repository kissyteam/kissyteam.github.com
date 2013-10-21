.. currentmodule:: editor

undo
===============================

|  编辑历史管理插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/undo',function(S,plugin){
            // use
        });
    });

Configs
-------------------------------

无

Events
--------------------------------------------------------

* :func:`~Editor.Events.beforeUndo`
* :func:`~Editor.Events.beforeRedo`
* :func:`~Editor.Events.afterUndo`
* :func:`~Editor.Events.afterRedo`
* :func:`~Editor.Events.beforeSave`
* :func:`~Editor.Events.afterSave`


Commands
----------------------------------------------------------

* :func:`~Editor.Commands.save`
* :func:`~Editor.Commands.undo`
* :func:`~Editor.Commands.redo`

Events Details
-------------------------------------------

.. function:: Editor.Events.beforeUndo

    | **beforeUndo()**
    | 历史撤销前触发.返回 false 取消操作

.. function:: Editor.Events.beforeRedo

    | **beforeRedo()**
    | 历史重做前触发.返回 false 取消操作

.. function:: Editor.Events.beforeSave

    | **beforeSave()**
    | 记录历史前触发.返回 false 取消操作

.. function:: Editor.Events.afterUndo

    | **afterUndo()**
    | 历史撤销后触发.

.. function:: Editor.Events.afterRedo

    | **afterRedo()**
    | 历史重做后触发.

.. function:: Editor.Events.afterSave

    | **afterSave()**
    | 记录历史后触发.


Commands Details
------------------------------------------------------

.. function:: Editor.Commands.save

    | **save()**
    | 将当前内容存入历史

.. function:: Editor.Commands.undo

    | **undo()**
    | 回退到上一个编辑历史

.. function:: Editor.Commands.redo

    | **redo()**
    | 前进到下一个编辑历史