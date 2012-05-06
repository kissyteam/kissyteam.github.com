.. currentmodule:: uibase

UIBase.Drag
===============================

|  拖曳。组件扩充类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review



Class
---------------------------------

    * :class:`Drag`
  

Config Attributes
-----------------------------------------------

    * :data:`~Drag.config.handlers`
    * :data:`~Drag.config.draggable`
    

Class Detail
--------------------------

.. class:: Drag

    | **Drag** (config)
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
    
Config Attributes Detail
-----------------------------------------------
    
.. data:: Drag.config.draggable

    {Boolean} - 该组件是否可拖放
    

.. data:: Drag.config.handlers

    {Array<HtmlElement>} - 拖放的触发节点.