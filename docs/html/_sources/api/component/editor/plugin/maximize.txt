.. currentmodule:: editor

maximize
===============================
|  全屏插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/maximize',function(S,plugin){
            // use
        });
    });

Configs
-------------------------------

无

Events
--------------------------------------------------------

* :func:`~Editor.events.afterMaximizeWindow`
* :func:`~Editor.events.afterRestoreWindow`
* :func:`~Editor.events.beforeMaximizeWindow`
* :func:`~Editor.events.beforeRestoreWindow`


Commands
----------------------------------------------------------

* :func:`~Editor.commands.maximizeWindow`
* :func:`~Editor.commands.restoreWindow`



Events Details
-------------------------------------------

.. function:: Editor.Events.afterMaximizeWindow

    | **maximizeWindow()**
    | 最大化窗口后触发

.. function:: Editor.Events.afterRestoreWindow

    | **maximizeWindow()**
    | 恢复窗口后触发

.. function:: Editor.Events.beforeRestoreWindow

    | **maximizeWindow()**
    | 恢复窗口前触发，返回 false 可阻止最大化

.. function:: Editor.Events.beforeMaximizeWindow

    | **maximizeWindow()**
    | 最大化窗口前触发，返回 false 可阻止最大化


Commands Details
------------------------------------------------------

.. function:: Editor.commands.maximizeWindow

    | **maximizeWindow()**
    | 窗口最大化

.. function:: Editor.commands.restoreWindow

    | **restoreWindow()**
    | 窗口最恢复