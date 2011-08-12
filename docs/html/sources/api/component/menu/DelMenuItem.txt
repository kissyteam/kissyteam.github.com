.. currentmodule:: menu

Menu.DelMenuItem
===============================

.. versionadded:: 1.2

|  可删除的菜单项.
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/menu/>`_ | `Demo <../../../demo/component/menu/demo3.html>`_


Class
---------------------------------

    * :class:`DelMenuItem`
    

Config Attributes
-----------------------------------------------

    * :data:`~DelMenuItem.config.delTooltip`  

Properties
----------------------------------------------------
    
    * :attr:`~DelMenuItem.prototype.delTooltip`

Class Detail
--------------------------

.. class:: DelMenuItem

    | **DelMenuItem** (config)
    
    * 继承自 :class:`~menu.Item` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
    .. note::

        从已有元素实例 Menu 对象时 , 元素节点标明类名 ``{prefixCls}menuitem-deletable`` .
        ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .
    
Config Attributes Detail
-----------------------------------------------

.. data:: DelMenuItem.config.delTooltip

    {String} - 可选，删除按钮的提示字符串. 
  
Properties Detail
-----------------------------------------------------

.. attribute:: DelMenuItem.prototype.delTooltip

    {String} - 删除按钮的提示字符串. 