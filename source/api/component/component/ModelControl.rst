.. currentmodule:: component

Component.ModelControl
===============================

|  组件基类.仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/uibase/>`_



Class
---------------------------------

    * :class:`ModelControl`
    
    
.. hint::
    
    * 继承自 :class:`~uibase.UIBase` , 包含其全部配置,属性,方法,事件.
    * 扩充自 :class:`~uibase.Box` , 包含其全部配置,属性,方法,事件.
  

Config Attributes
-----------------------------------------------    

    * :data:`~ModelControl.config.children`
    * :data:`~ModelControl.config.prefixCls`
    * :data:`~ModelControl.config.parent`
    * :data:`~ModelControl.config.disabled`
    
    
Properties
----------------------------------------------------
    
    * :attr:`~ModelControl.prototype.highlighted`
    * :attr:`~ModelControl.prototype.children`
    * :attr:`~ModelControl.prototype.parent`
    * :attr:`~ModelControl.prototype.disabled`   

    
    
Methods
-----------------------------------------------

    * :meth:`~ModelControl.prototype.addChild`    
    * :meth:`~ModelControl.prototype.removeChild`    
    * :meth:`~ModelControl.prototype.removeChildren`   
    * :meth:`~ModelControl.prototype.getChildAt`
    

Class Detail
--------------------------

.. class:: ModelControl

    | **ModelControl** (config)
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
    
Config Attributes Detail
-----------------------------------------------
    
.. data:: ModelControl.config.children

    {Array<ModelControl>} - 可选，ModelControl 类型组件的数组，作为当前组件的儿子组件.    

.. data:: ModelControl.config.prefixCls

    {String} - 可选，默认 "ks-" . 组件的 css 样式类前缀 . 例如假设组件为 menu ，则该组件内的样式类名为 {prefixCls}menu，默认为 "ks-menu".
               可用于实现自定义皮肤.
                
.. data:: ModelControl.config.parent

    {ModelControl} - 可选，该组件的父组件.
                
.. data:: ModelControl.config.disabled

    {ModelControl} - 可选，该组件是否初始禁用.
    
    
Properties Detail
-----------------------------------------------------

.. attribute:: ModelControl.prototype.highlighted

    {Boolean} - 该组件是否处于高亮状态        
    
.. attribute:: ModelControl.prototype.children

    {Array<ModelControl>} - 只读。该组件的子组件数组。请使用对应方法写.
    
.. attribute:: ModelControl.prototype.parent

    {Boolean} - 该组件的父组件
    
.. attribute:: ModelControl.prototype.disabled

    {Boolean} - 该组件是否禁用状态.
    
    
Methods Detail
-----------------------------------------------

.. method:: ModelControl.prototype.addChild

    | **addChild( child [ , index ] )**
    
    给当前组件添加子组件到对应位置.    
    
    :param {ModelControl} child: 子组件实例
    :param {Number} index: 插入到当前子组件列表 index 位置后
    
    
.. method:: ModelControl.prototype.removeChild

    | **removeChild( child [ , destroy ] )**
    
    从当前组件中删除改子组件
    
    :param {ModelControl} child: 子组件实例
    :param {Boolean} destroy: 是否同时调用 child 的 :meth:`UIBase.UIBase.destroy` 销毁该子组件实例.     
    
    
.. method:: ModelControl.prototype.removeChildren

    | **removeChildren( [ destroy ] )**
    
    删除该组件的所有子组件
    
    :param {Boolean} destroy: 是否同时调用:meth:`UIBase.UIBase.destroy` 销毁所有的子组件实例.  
     

.. method:: ModelControl.prototype.getChildAt

    | **getChildAt( index )**
    
    获得对应位置的子组件.
    
    :param {Number} index: 位置下标
    :returns: 对应子组件
    :rtype: ModelControl       