.. currentmodule:: uibase

UIBase.Close
===============================

|  关闭。组件扩充类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review



Class
---------------------------------

    * :class:`Close`
  

Config Attributes
-----------------------------------------------

    * :data:`~Close.config.closable`
    * :data:`~Close.config.closeAction`
    

    

Class Detail
--------------------------

.. class:: Close

    | **Close** (config)
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
    
Config Attributes Detail
-----------------------------------------------
    
.. data:: Close.config.closable

    {Boolean} - 对话框右上角是否包括关闭按钮
    

.. data:: Close.config.closeAction

    {String} - 点击关闭按钮的动作。默认 "hide" 隐藏，也可设置 "destroy" 销毁该组件.
    
Properties Detail
-----------------------------------------------

.. attribute:: Close.prototype.closable    

    {Boolean} - 组件是否有关闭按钮.