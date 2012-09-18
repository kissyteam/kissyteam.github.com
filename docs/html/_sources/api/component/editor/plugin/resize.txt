.. currentmodule:: editor

resize
===============================

|  调整大小插件


Configs
-------------------------------

.. data:: Editor.Plugin.resize.config.direction


Events
--------------------------------------------------------

* :func:`~Editor.events.resizeStart`
* :func:`~Editor.events.resize`


Commands
----------------------------------------------------------

无


Config Details
------------------------------------------------------

.. data:: Editor.Plugin.image.config.direction

    {String[]} - 右下角调整大小的配置.


Events Details
-------------------------------------------

.. function:: Editor.Events.resizeStart

    | **resizeStart()**
    | 调整开始时触发

.. function:: Editor.Events.resize

    | **resize()**
    | 调整过程中周期触发


实例
--------------------------------------------------

.. code-block:: javascript

    {
        "resize": {
            //只能在y轴拖放, [“x”,”y”]表示任意拖放
            direction: ["y"]
        }
    }