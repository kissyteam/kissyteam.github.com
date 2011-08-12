.. currentmodule:: menu

Menu.PopupMenu
===============================

.. versionadded:: 1.2

|  悬浮菜单.
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/menu/>`_ | `Demo <../../../demo/component/menu/demo1.html>`_

Class
---------------------------------

    * :class:`PopupMenu`

Class Detail
--------------------------

.. class:: PopupMenu

    | **PopupMenu** (config)
    
    * 继承自 :class:`~menu.Menu` , 包含其全部配置,属性,方法,事件.
    * 扩充自 :class:`~uibase.Position`, 包含其全部配置,属性,方法,事件.
    * 扩充自 :class:`~uibase.Align`, 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
    .. note::

        从已有元素实例 Separator 对象时 , 元素节点标明类名 ``{prefixCls}popupmenu`` .
        ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .