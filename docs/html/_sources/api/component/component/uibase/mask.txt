.. currentmodule:: component

Component.UIBase.Mask
===============================

|  遮罩功能。组件扩充类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review

Class
---------------------------------

    * :class:`UIBase.Mask`
  

Configs
-----------------------------------------------

    * :data:`~UIBase.Mask.config.mask`
    

Attributes
-----------------------------------------------

  * :attr:`~UIBase.Mask.prototype.maskNode`

Class Detail
--------------------------

.. class:: UIBase.Mask

    | **UIBase.Mask** (config)
    
    :param Object config: 配置项，详细见下方 **Configs Detail** .
    
    
Configs Detail
-----------------------------------------------
    
.. data:: UIBase.Mask.config.mask

    {Boolean} - 组件显示时是否使用遮罩层盖住页面其他元素

Attributes Detail
---------------------------------------------------------------

.. attribute:: UIBase.Mask.prototype.maskNode

    {KISSY.Node} - 该组件的 mask 节点