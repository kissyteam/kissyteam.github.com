.. currentmodule:: menubutton

Select
===============================

|  菜单.
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/menubutton/>`_

.. versionadded:: 1.2

Class
---------------------------------

    * :class:`Select`
    
Config Attributes
-----------------------------------------------

    * :data:`~Select.config.defaultCaption`

Properties
----------------------------------------------------
    
    * :attr:`~Select.prototype.value`
    * :attr:`~Select.prototype.selectedItem`
    * :attr:`~Select.prototype.selectedIndex`
    * :attr:`~Select.prototype.defaultCaption`
    
Methods
-----------------------------------------------

    * :meth:`Select.decorate`    

Class Detail
--------------------------

.. class:: Select

    | **Select** (config)
    
    * 继承自 :class:`MenuButton` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
.. note::

    从已有元素实例 MenuButton 对象时 , 元素节点标明类名 ``{prefixCls}select`` . 
    ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .    
    
Config Attributes Detail
-----------------------------------------------

.. data:: Select.config.defaultCaption

    {String} - 可选，下拉框没有可选项时的默认显示内容.
  
Properties Detail
-----------------------------------------------------

.. attribute:: Select.prototype.value

    {*} - 下拉框的当前值
    
.. attribute:: Select.prototype.selectedItem

    {Menu.Item} - 下拉框当前选中的下拉菜单项

.. attribute:: Select.prototype.selectedIndex

    {Number} - 下拉框当前选中的下拉菜单项的下标
    
.. attribute:: Select.prototype.defaultCaption

    {Number} - 下拉框没有可选项时的默认显示内容
    

Methods Detail
----------------------------------------------- 

.. method:: Select.decorate

    | **decorate ( element [ , cfg ] )**
    | 直接把原生 ``select`` 元素替换成 :class:`Select`
    
    :param HTMLElement|KISSY.Node element: ``<select>`` 元素
    :param Object cfg: 配置对象，作用于 :class:`Select`
    :param Object cfg.menuCfg: 下拉菜单配置对象，参照 :class:`~menu.Menu`
    :returns: KISSY Select 对象
    :rtype: Select