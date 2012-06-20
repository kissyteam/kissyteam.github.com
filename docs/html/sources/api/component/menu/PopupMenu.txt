.. currentmodule:: menu

Menu.PopupMenu
===============================



|  悬浮菜单.

Class
---------------------------------

    * :class:`PopupMenu`

Configs
----------------------------

    * :data:`PopupMenu.config.autoHideOnMouseLeave`

Class Detail
--------------------------

.. class:: PopupMenu

    | **PopupMenu** (config)
    | xclass: 'popupmenu'
    
    * 继承自 :class:`~menu.Menu` , 包含其全部配置,属性,方法,事件.
    * 扩充自 :class:`~component.UIBase.Position`, 包含其全部配置,属性,方法,事件.
    * 扩充自 :class:`~component.UIBase.Align`, 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项，详细见下方 **Configs Detail** .
    
    .. note::

        从已有元素实例 Separator 对象时 , 元素节点标明类名 ``{prefixCls}popupmenu`` .
        ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .
        
        
Configs Detail
-----------------------------------------------

.. data:: PopupMenu.config.autoHideOnMouseLeave

    {boolean} - 默认 false。鼠标移出子菜单时子菜单是否自动隐藏