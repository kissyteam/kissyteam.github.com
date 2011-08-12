.. currentmodule:: menu

Menu.Item
===============================

.. versionadded:: 1.2

|  菜单项.
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/menu/>`_ | `Demo <../../../demo/component/menu/demo1.html>`_

Class
---------------------------------

    * :class:`Item`
    

Config Attributes
-----------------------------------------------

    * :data:`~Item.config.selectable`    
    * :data:`~Item.config.checkable`
    * :data:`~Item.config.value`
    * :data:`~Item.config.content`

Properties
----------------------------------------------------
    
    * :attr:`~Item.prototype.checked`
    * :attr:`~Item.prototype.selected`
    * :attr:`~Item.prototype.value`
    * :attr:`~Item.prototype.content`
    

Class Detail
--------------------------

.. class:: Item

    | **Item** (config)
    
    * 继承自 :class:`~component.ModelControl` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
    .. note::

        从已有元素实例 Menu 对象时 , 元素节点标明类名 ``{prefixCls}menuitem`` .
        ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .
    
Config Attributes Detail
-----------------------------------------------

.. data:: Item.config.selectable

    {Boolean} - 是否可以被选择，可以的话，单击会添加指定 ``class`` 到根节点.     
    
.. data:: Item.config.checkable

    {Boolean} - 是否可以被多选，可以的话，单击会添加或删除根节点的指定 ``class`` .
    
.. data:: Item.config.value

    {*} - 可选，该菜单项的值.
    
.. data:: Item.config.content

    {String} - 该菜单项的显示内容.            
    
  
Properties Detail
-----------------------------------------------------

.. attribute:: Item.prototype.selected

    {Boolean} - 当前菜单项是否被选中
    
.. attribute:: Item.prototype.checked

    {Boolean} - 当前菜单选是否被多选了
    
.. attribute:: Item.prototype.value

    {*} - 当前菜单项的值.
    
.. attribute:: Item.prototype.content

    {String} - 当前菜单项的显示内容.