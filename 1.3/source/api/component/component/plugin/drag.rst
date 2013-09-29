.. currentmodule:: component

Component.Plugin.Drag
===============================

|  组件拖拽插件。

Class
--------------------------------------------

    * :class:`~component.plugin.Drag`

Class Detail
-------------------------------------------

.. class:: plugin.Drag

    | **Component.Plugin.Drag** (config)
    | 继承自 :class:`dd.Draggable` . 包括 draggable 的所有配置.
    | 插件 id ： ``component/plugin/drag``


使用示例
-------------------------------------------

.. code-block:: javascript

    KISSY.use('overlay,component/plugin/drag',function(S,Overlay,Drag){

        new Overlay({
            plugins:[ new Drag({
                handlers: ['.ks-stdmod-header']
            }) ]
        });

    });