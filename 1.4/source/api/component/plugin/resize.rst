.. currentmodule:: component

Component.Plugin.Resize
===============================

|  调整大小插件

Class
---------------------------------

    * :class:`~component.plugin.Resize`
    

Class Detail
--------------------------

.. class:: plugin.Resize

    | **Resize** (config)
    | 继承自 :class:`~resizable.Resizable` 包括 resizable 的所有配置.
    | 插件 id ： ``component/plugin/resize``


使用示例
--------------------------------------

.. code-block:: javascript

    KISSY.use('overlay,component/plugin/resize',function(S,Overlay,Resize){
        new Overlay({
            plugins:[
                new Resize({
                    minWidth:100,
                    maxWidth:200,
                    handlers:['l','r']
                })
            ]
        });
    });