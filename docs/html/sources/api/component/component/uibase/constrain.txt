.. currentmodule:: component

Component.UIBase.Constrain
===============================

|  遮罩功能。组件扩充类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review



Class
---------------------------------

    * :class:`UIBase.Constrain`
  

Config Attributes
-----------------------------------------------

    * :data:`~UIBase.Constrain.config.constrain`
    
    
Properties
-----------------------------------------------

    * :attr:`~UIBase.Constrain.prototype.constrain`

Class Detail
--------------------------

.. class:: UIBase.Constrain

    | **UIBase.Constrain** (config)
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
    
Config Attributes Detail
-----------------------------------------------
    
.. data:: UIBase.Constrain.config.constrain

    { Boolean | String | KISSY.Node } - 和 :class:`~DD.Draggable` 配合, 限制拖动的范围.
    
        * 取值选择器字符串时, 则在限制拖动范围为根据该选择器字符串取到的第一个节点所在区域.
        * 取 KISSY.Node 时，则限制拖动范围为该节点所在区域.
        * 取值 true 时, 只能在当前视窗范围内拖动.
        * 取值 false 时, 可任意移动, 例如以扩充了该组件的 dialog 为例

    .. code-block:: javascript
    
        KISSY.use("dd,overlay",function(S,DD,Overlay){
            new Overlay.Dialog({
                draggable : true,
                contrain:true // 限制拖动区域为当前视窗范围
            });
        });
        
        KISSY.use("dd,overlay",function(S,DD,Overlay){
            new Overlay.Dialog({
                draggable : true,
                contrain:"#container" // 限制拖动区域为 container 节点所占据区域
            });
        });
        
Properties Detail
-----------------------------------------------

.. attribute:: UIBase.Constrain.prototype.constrain

    { Boolean | String | KISSY.Node } - 可初始化都重新设置该属性.             