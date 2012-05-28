.. currentmodule:: component

Component.UIBase.StdMod
===============================

|  标准模块组织。组件扩充类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review



Class
---------------------------------

    * :class:`UIBase.StdMod`
  

Config Attributes
-----------------------------------------------

    * :data:`~UIBase.StdMod.config.headerStyle`
    * :data:`~UIBase.StdMod.config.bodyStyle`
    * :data:`~UIBase.StdMod.config.footerStyle`
    * :data:`~UIBase.StdMod.config.headerContent`
    * :data:`~UIBase.StdMod.config.bodyContent`
    * :data:`~UIBase.StdMod.config.footerContent`
    
Properties
-----------------------------------------------

    * :attr:`~UIBase.StdMod.prototype.header`
    * :attr:`~UIBase.StdMod.prototype.body`
    * :attr:`~UIBase.StdMod.prototype.footer`
    

Class Detail
--------------------------

.. class:: UIBase.StdMod

    | **StdMod** (config)
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
    
Config Attributes Detail
-----------------------------------------------
    
.. data:: UIBase.StdMod.config.headerContent

    {String} - 组件的标题 html.

.. data:: UIBase.StdMod.config.bodyContent

    {String} - 组件的体 html.

.. data:: UIBase.StdMod.config.footerContent

    {String} - 组件的底部 html.
    
.. data:: UIBase.StdMod.config.headerStyle

    {Object} - 组件的标题内联样式.

.. data:: UIBase.StdMod.config.bodyStyle

    {Object} - 组件体的内联样式.

.. data:: UIBase.StdMod.config.footerStyle

    {Object} - 组件的底部内联样式.
    
    
Properties Detail
-----------------------------------------------

.. attribute:: UIBase.StdMod.prototype.header

    {KISSY.Node} - 只读, 组件的头部节点.

.. attribute:: UIBase.StdMod.prototype.body

    {KISSY.Node} - 只读, 组件的体部节点.

.. attribute:: UIBase.StdMod.prototype.footer

    {KISSY.Node} - 只读, 组件的底部节点.  