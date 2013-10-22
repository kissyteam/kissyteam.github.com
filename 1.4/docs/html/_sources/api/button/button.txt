.. module:: button

Button
===============================

|  模拟按钮

.. code-block:: javascript

    KISSY.use('button',function(S,Button){
        // use Button
    });

Class
---------------------------------

    * :class:`Button`

Configs
-----------------------------------------------    

    * :data:`~Button.config.content`
    * :data:`~Button.config.value`
    * :data:`~Button.config.describedby`
    * :data:`~Button.config.tooltip`
    * :data:`~Button.config.checkable`
    
    
Attributes
----------------------------------------------------
    
    * :attr:`~Button.prototype.content`
    * :attr:`~Button.prototype.value`
    * :attr:`~Button.prototype.describedby`
    * :attr:`~Button.prototype.tooltip`
    * :attr:`~Button.prototype.checked`


Events
-----------------------------------------------

  * :func:`~Button.Events.click`

Class Detail
--------------------------

.. class:: Button

    | **Button** (config)
    | xclass: 'button'
    
    * 继承自 :class:`~component.Control` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项，详细见下方 **Configs Detail** .
    
    
Configs Detail
-----------------------------------------------
    
.. data:: Button.config.content

    {String} - 按钮的显示内容

.. data:: Button.config.checkable

    {String} - 按钮是 toggle button.

.. data:: Button.config.value

    {String} - 可选，按钮值
                    
.. data:: Button.config.describedby

    {String} - 可选，按钮节点的 ``aria-describedby`` 属性值
                
.. data:: Button.config.tooltip

    {String} - 可选，按钮节点的 ``title`` 属性值
    
    
Attributes Detail
-----------------------------------------------------

.. attribute:: Button.prototype.content

    {String} - 按钮的显示内容

.. attribute:: Button.prototype.checked

    {String} - 按钮是否是 checked 状态

.. attribute:: Button.prototype.value

    {String} - 按钮值
                    
.. attribute:: Button.prototype.describedby

    {String} - 按钮节点的 ``aria-describedby`` 属性值
                
.. attribute:: Button.prototype.tooltip

    {String} - 按钮节点的 ``title`` 属性值
    

Events Detail
-----------------------------------------------

.. function:: Button.Events.click
    
    | **click** (e)
    | 当按钮被点击或被获得焦点后按键 enter|space 触发
    
    :param EventObject e: 触发事件对象，类型 :class:`Event.Object`
    :param Button e.target: 触发事件的按钮实例
