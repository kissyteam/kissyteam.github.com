.. currentmodule:: menubutton

Select
===============================

|  菜单.


Class
---------------------------------

    * :class:`Select`
    
Configs
-----------------------------------------------

    * :data:`~Select.config.defaultCaption`

Attributes
----------------------------------------------------
    
    * :attr:`~Select.prototype.value`
    * :attr:`~Select.prototype.defaultCaption`
    
Methods
-----------------------------------------------

    * :meth:`Select.decorate`    

Class Detail
--------------------------

.. class:: Select

    | **Select** (config)
    | xclass: 'select'

    * 继承自 :class:`MenuButton` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项，详细见下方 **Configs Detail** .
    
.. note::

    从已有元素实例 MenuButton 对象时 , 元素节点标明类名 ``{prefixCls}select`` . 
    ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .    
    
Configs Detail
-----------------------------------------------

.. data:: Select.config.defaultCaption

    {String} - 可选，下拉框没有可选项时的默认显示内容.
  
Attributes Detail
-----------------------------------------------------

.. attribute:: Select.prototype.value

    {*} - 下拉框的当前值
    
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