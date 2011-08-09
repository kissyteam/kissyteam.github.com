.. currentmodule:: uibase

UIBase.StdMod
===============================

|  标准模块组织。组件扩充类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/uibase/>`_



Class
---------------------------------

    * :class:`StdMod`
  

Config Attributes
-----------------------------------------------

    * :data:`~StdMod.config.headerStyle`
    * :data:`~StdMod.config.bodyStyle`
    * :data:`~StdMod.config.footerStyle`
    * :data:`~StdMod.config.headerContent`
    * :data:`~StdMod.config.bodyContent`
    * :data:`~StdMod.config.footerContent`
    
Properties
-----------------------------------------------

    * :attr:`~StdMod.prototype.header`
    * :attr:`~StdMod.prototype.body`
    * :attr:`~StdMod.prototype.footer`
    

Class Detail
--------------------------

.. class:: StdMod

    | **StdMod** (config)
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
    
Config Attributes Detail
-----------------------------------------------
    
.. data:: StdMod.config.headerContent

    {String} - 组件的标题 html.

.. data:: StdMod.config.bodyContent

    {String} - 组件的体 html.

.. data:: StdMod.config.footerContent

    {String} - 组件的底部 html.
    
.. data:: StdMod.config.headerStyle

    {Object} - 组件的标题内联样式.

.. data:: StdMod.config.bodyStyle

    {Object} - 组件体的内联样式.

.. data:: StdMod.config.footerStyle

    {Object} - 组件的底部内联样式.
    
    
Properties Detail
-----------------------------------------------

.. attribute:: StdMod.prototype.header

    {KISSY.Node} - 只读, 组件的头部节点.

.. attribute:: StdMod.prototype.body

    {KISSY.Node} - 只读, 组件的体部节点.

.. attribute:: StdMod.prototype.footer

    {KISSY.Node} - 只读, 组件的底部节点.  