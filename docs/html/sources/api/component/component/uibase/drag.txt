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

    {Boolean} - 该组件是否可拖放
    

.. data:: UIBase.Drag.config.handlers

    {Array<HtmlElement>} - 拖放的触发节点.