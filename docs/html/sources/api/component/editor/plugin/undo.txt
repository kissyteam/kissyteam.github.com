.. currentmodule:: editor

undo
===============================

|  编辑历史管理插件


Configs
-------------------------------

无

Events
--------------------------------------------------------

* :func:`~Editor.events.beforeUndo`
* :func:`~Editor.events.beforeRedo`
* :func:`~Editor.events.afterUndo`
* :func:`~Editor.events.afterRedo`
* :func:`~Editor.events.beforeSave`
* :func:`~Editor.events.afterSave`


Commands
----------------------------------------------------------

* :func:`~Editor.commands.save`
* :func:`~Editor.commands.undo`
* :func:`~Editor.commands.redo`

Events Details
-------------------------------------------

.. function:: Editor.events.beforeUndo

    | **beforeUndo()**
    | 历史撤销前触发.返回 false 取消操作

.. function:: Editor.events.beforeRedo

    | **beforeRedo()**
    | 历史重做前触发.返回 false 取消操作

.. function:: Editor.events.beforeSave

    | **beforeSave()**
    | 记录历史前触发.返回 false 取消操作

.. function:: Editor.events.afterUndo

    | **afterUndo()**
    | 历史撤销后触发.

.. function:: Editor.events.afterRedo

    | **afterRedo()**
    | 历史重做后触发.

.. function:: Editor.events.afterSave

    | **afterSave()**
    | 记录历史后触发.


Commands Details
------------------------------------------------------

.. function:: Editor.commands.save

    | **save()**
    | 将当前内容存入历史

.. function:: Editor.commands.undo

    | **undo()**
    | 回退到上一个编辑历史

.. function:: Editor.commands.redo

    | **redo()**
    | 前进到下一个编辑历史