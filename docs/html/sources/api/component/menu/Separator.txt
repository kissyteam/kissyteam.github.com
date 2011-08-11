.. currentmodule:: menu

Menu.Separator
===============================

.. versionadded:: 1.2

|  菜单项分隔线.
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/menu/>`_

Class
---------------------------------

    * :class:`Separator`

Class Detail
--------------------------

.. class:: Separator

    | **Separator** (config)
    
    * 继承自 :class:`~menu.Item` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
    .. note::

        从已有元素实例 Separator 对象时 , 元素节点标明类名 ``{prefixCls}menuseparator`` .
        ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` . 