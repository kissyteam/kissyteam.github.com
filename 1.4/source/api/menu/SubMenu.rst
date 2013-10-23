.. currentmodule:: menu

Menu.SubMenu
===============================



|  包含子菜单的菜单项.

.. code-block:: javascript

    KISSY.use('menu',function(S,Menu){
        // use Menu.SubMenu
    });

Class
---------------------------------

    * :class:`SubMenu`


Configs
-----------------------------------------------

    * :data:`~SubMenu.config.menuDelay`
    * :data:`~SubMenu.config.menu`
    * :data:`~SubMenu.config.externalSubMenu`

Attributes
----------------------------------------------------

    * :attr:`~SubMenu.prototype.menuDelay`
    * :attr:`~SubMenu.prototype.menu`
    * :attr:`~SubMenu.prototype.externalSubMenu`


Class Detail
--------------------------

.. class:: SubMenu

    | **SubMenu** (config)
    | xclass: 'submenu'

    * 继承自 :class:`~menu.Item` , 包含其全部配置,属性,方法,事件.

    :param Object config: 配置项，详细见下方 **Configs Detail** .

    .. note::

        从已有元素实例 Menu 对象时 , 元素节点标明类名 ``{prefixCls}submenu`` .
        ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .

Configs Detail
-----------------------------------------------

.. data:: SubMenu.config.menuDelay

    {Number} - 可选，默认 0.15，单位秒。鼠标掠过后多长时间显示子菜单.

.. data:: SubMenu.config.menu

    {Menu} - 子菜单实例.

.. data:: SubMenu.config.externalSubMenu

    {Boolean} - 可选，默认 false . 销毁该菜单项是否顺带销毁子菜单.

Attributes Detail
-----------------------------------------------------

.. attribute:: SubMenu.prototype.menuDelay

    {Number} - 鼠标掠过后多长时间显示子菜单.

.. attribute:: SubMenu.prototype.menu

    {Menu} - 子菜单实例.

.. attribute:: SubMenu.prototype.externalSubMenu

    {Boolean} - 销毁该菜单项是否顺带销毁子菜单.