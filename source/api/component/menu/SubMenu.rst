.. currentmodule:: menu

Menu.SubMenu
===============================

|  包含子菜单的菜单项.
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/menu/>`_

.. versionadded:: 1.2

Class
---------------------------------

    * :class:`SubMenu`
    

Config Attributes
-----------------------------------------------

    * :data:`~SubMenu.config.menuDelay`  
    * :data:`~SubMenu.config.menu`  
    * :data:`~SubMenu.config.externalSubMenu`  

Properties
----------------------------------------------------
    
    * :attr:`~SubMenu.prototype.menuDelay`
    * :attr:`~SubMenu.prototype.menu`
    * :attr:`~SubMenu.prototype.externalSubMenu`
    

Class Detail
--------------------------

.. class:: SubMenu

    | **SubMenu** (config)
    
    * 继承自 :class:`~menu.Item` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
.. note::

    从已有元素实例 Menu 对象时 , 元素节点标明类名 ``{prefixCls}submenu`` . 
    ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .    
    
Config Attributes Detail
-----------------------------------------------

.. data:: SubMenu.config.menuDelay

    {Number} - 可选，默认 300，单位毫秒。鼠标掠过后多长时间显示子菜单.     
    
.. data:: SubMenu.config.menu

    {Menu} - 子菜单实例.
    
.. data:: SubMenu.config.externalSubMenu

    {Boolean} - 可选，默认 false . 销毁该菜单项是否顺带销毁子菜单.    
  
Properties Detail
-----------------------------------------------------

.. attribute:: SubMenu.prototype.menuDelay

    {Number} - 鼠标掠过后多长时间显示子菜单.     
    
.. attribute:: SubMenu.prototype.menu

    {Menu} - 子菜单实例.
    
.. attribute:: SubMenu.prototype.externalSubMenu

    {Boolean} - 销毁该菜单项是否顺带销毁子菜单.