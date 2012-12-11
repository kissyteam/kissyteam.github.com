.. currentmodule:: component

Component.Controller
===============================

|  组件基类.仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review


Class
---------------------------------

    * :class:`Controller`

Configs
-----------------------------------------------    

    * :data:`~Controller.config.children`
    * :data:`~Controller.config.prefixCls`
    * :data:`~Controller.config.parent`
    * :data:`~Controller.config.disabled`
    * :data:`~Controller.config.focused`
    
    
Attributes
----------------------------------------------------
    
    * :attr:`~Controller.prototype.highlighted`
    * :attr:`~Controller.prototype.children`
    * :attr:`~Controller.prototype.parent`
    * :attr:`~Controller.prototype.disabled`
    * :attr:`~Controller.prototype.focused`

    
    
Methods
-----------------------------------------------

    * :meth:`~Controller.prototype.addChild`
    * :meth:`~Controller.prototype.removeChild`
    * :meth:`~Controller.prototype.removeChildren`
    * :meth:`~Controller.prototype.getChildAt`
    * :meth:`~Controller.extend` <static>
    

Class Detail
--------------------------

.. class:: Controller

    | **Controller** (config)
    
    * 继承自 :class:`~component.UIBase` , 包含其全部配置,属性,方法,事件.
    * 扩充自 :class:`~component.UIBase.Box` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项，详细见下方 **Configs Detail** .
    
    
Configs Detail
-----------------------------------------------
    
.. data:: Controller.config.children

    {Array<Controller>} - 可选，Controller 类型组件的数组，作为当前组件的儿子组件.

.. data:: Controller.config.prefixCls

    {String} - 可选，默认 "ks-" . 组件的 css 样式类前缀 . 例如假设组件为 menu ，则该组件内的样式类名为 {prefixCls}menu，默认为 "ks-menu".
               可用于实现自定义皮肤.
                
.. data:: Controller.config.parent

    {Controller} - 可选，该组件的父组件.
                
.. data:: Controller.config.disabled

    {Boolean} - 可选，该组件是否初始禁用.
    
.. data:: Controller.config.focused

    {Boolean} - 可选，该组件是否初始获得焦点.

Attributes Detail
-----------------------------------------------------

.. attribute:: Controller.prototype.highlighted

    {Boolean} - 该组件是否处于高亮状态        
    
.. attribute:: Controller.prototype.children

    {Array<Controller>} - 只读。该组件的子组件数组。请使用对应方法写.
    
.. attribute:: Controller.prototype.parent

    {Boolean} - 该组件的父组件
    
.. attribute:: Controller.prototype.disabled

    {Boolean} - 该组件是否禁用状态.
    
.. attribute:: Controller.prototype.focused

    {Boolean} - 该组件是否获得焦点.


Methods Detail
-----------------------------------------------

.. method:: Controller.extend

    | **extend( [ extensions , ] methodDesc , staticAttributes , componentDesc )** <static>

    从当前组件类上扩展出一个子类组件

    :param Function[] extensions: 扩展类数组
    :param Object methodDesc: 方法集合键值对
    :param Object staticAttributes: 放到新产生组件类上的静态属性集合键值对，其中 ``ATTRS`` 属性特殊对待.
    :param Object componentDesc: 组件元信息.
    :param String componentDesc.xclass: 组件 xclass 信息
    :param Number componentDesc.priority: 组件 priority 信息


.. method:: Controller.prototype.addChild

    | **addChild( child [ , index ] )**
    
    给当前组件添加子组件到对应位置.    
    
    :param {Controller} child: 子组件实例
    :param {Number} index: 插入到当前子组件列表 index 位置后
    
    
.. method:: Controller.prototype.removeChild

    | **removeChild( child [ , destroy ] )**
    
    从当前组件中删除改子组件
    
    :param {Controller} child: 子组件实例
    :param {Boolean} destroy: 是否同时调用 child 的 :meth:`component.UIBase.destroy` 销毁该子组件实例.
    
    
.. method:: Controller.prototype.removeChildren

    | **removeChildren( [ destroy ] )**
    
    删除该组件的所有子组件
    
    :param {Boolean} destroy: 是否同时调用:meth:`component.UIBase.destroy` 销毁所有的子组件实例.
     

.. method:: Controller.prototype.getChildAt

    | **getChildAt( index )**
    
    获得对应位置的子组件.
    
    :param {Number} index: 位置下标
    :returns: 对应子组件
    :rtype: Controller