.. currentmodule:: editor

resize
===============================

|  调整大小插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/resize',function(S,plugin){
            // use
        });
    });

Configs
-------------------------------

.. data:: Editor.Plugin.resize.config.direction


Events
--------------------------------------------------------

* :func:`~Editor.Events.resizeStart`
* :func:`~Editor.Events.resize`


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