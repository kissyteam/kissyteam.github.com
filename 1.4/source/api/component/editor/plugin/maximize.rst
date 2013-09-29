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

* :func:`~Editor.Events.afterMaximizeWindow`
* :func:`~Editor.Events.afterRestoreWindow`
* :func:`~Editor.Events.beforeMaximizeWindow`
* :func:`~Editor.Events.beforeRestoreWindow`


Commands
----------------------------------------------------------

* :func:`~Editor.Commands.maximizeWindow`
* :func:`~Editor.Commands.restoreWindow`



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

.. function:: Editor.Commands.maximizeWindow

    | **maximizeWindow()**
    | 窗口最大化

.. function:: Editor.Commands.restoreWindow

    | **restoreWindow()**
    | 窗口最恢复