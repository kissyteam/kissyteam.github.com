.. currentmodule:: component

Component.UIBase.Drag
===============================

|  拖曳。组件扩充类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review



Class
---------------------------------

    * :class:`UIBase.Drag`
  

Configs
-----------------------------------------------

    * :data:`~UIBase.Drag.config.handlers`
    * :data:`~UIBase.Drag.config.draggable`
    

Class Detail
--------------------------

.. class:: UIBase.Drag

    | **UIBase.Drag** (config)
    
    :param Object config: 配置项，详细见下方 **Configs Detail** .
    
    
Configs Detail
-----------------------------------------------
    
.. data:: UIBase.Drag.config.draggable

    {Boolean|Object} - 是否允许拖动头部移动及其控制, 注意启用时需同时 ``use("dd")`` , 例如：

    .. code-block:: javascript

        KISSY.use("dd,overlay",function(S,DD,Overlay){
            new Overlay.Dialog({
                draggable : true
            });
        });

    .. versionadded:: 1.3

    可以设置 :class:`proxy <dd.Proxy>` 或 :class:`scroll <dd.Scroll>` 的控制选项， 例如：

    .. code-block:: javascript

            KISSY.use("dd,overlay",function(S,DD,Overlay){
                new Overlay.Dialog({
                    draggable : {
                        proxy:{
                            node:function(){
                                // 生成代理节点
                            },
                            destroyOnEnd:true // 每次拖放都生成新的代理节点
                        },

                        scroll:{
                            node:window // 随窗口自动滚动
                        }
                    }
                });
            });
    

.. data:: UIBase.Drag.config.handlers

    {Array<HtmlElement>} - 拖放的触发节点.