.. module:: button

Button
===============================

|  模拟按钮
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/button/>`_

.. versionadded:: 1.2

Class
---------------------------------

    * :class:`Button`

Config Attributes
-----------------------------------------------    

    * :data:`~Button.config.content`
    * :data:`~Button.config.value`
    * :data:`~Button.config.describedby`
    * :data:`~Button.config.tooltip`
    
    
Properties
----------------------------------------------------
    
    * :attr:`~Button.prototype.content`
    * :attr:`~Button.prototype.value`
    * :attr:`~Button.prototype.describedby`
    * :attr:`~Button.prototype.tooltip`   


Events
-----------------------------------------------

  * :func:`click`

Class Detail
--------------------------

.. class:: Button

    | **Button** (config)
    
    * 继承自 :class:`~component.ModelControl` , 包含其全部配置,属性,方法,事件.
    * 扩充自 :class:`~uibase.ContentBox` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
    
Config Attributes Detail
-----------------------------------------------
    
.. data:: Button.config.content

    {String} - 按钮的显示内容    

.. data:: Button.config.value

    {String} - 可选，按钮值
                    
.. data:: Button.config.describedby

    {String} - 可选，按钮节点的 ``aria-describedby`` 属性值
                
.. data:: Button.config.tooltip

    {String} - 可选，按钮节点的 ``title`` 属性值
    
    
Properties Detail
-----------------------------------------------------

.. attribute:: Button.prototype.content

    {String} - 按钮的显示内容    

.. attribute:: Button.prototype.value

    {String} - 按钮值
                    
.. attribute:: Button.prototype.describedby

    {String} - 按钮节点的 ``aria-describedby`` 属性值
                
.. attribute:: Button.prototype.tooltip

    {String} - 按钮节点的 ``title`` 属性值
    

Events Detail
-----------------------------------------------

.. function:: click
    
    | **click** (e)
    
    | 当按钮被点击或被获得焦点后按键 enter|space 触发
    
    :param {EventObject} e: 触发事件对象
    :param {Button} e.target: 触发事件的按钮实例
