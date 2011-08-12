.. currentmodule:: menu

Menu
===============================

.. versionadded:: 1.2

|  菜单.
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/component/>`_ | `Demo <../../../demo/component/menu/demo1.html>`_


Class
---------------------------------

    * :class:`Menu`

Properties
----------------------------------------------------
    
    * :attr:`~Menu.prototype.highlightedItem`
    
    
Events
--------------------------------------------------------

    * :func:`~Menu.click`    
    * :func:`~Menu.beforeDelete`    
    * :func:`~Menu.delete` 

Class Detail
--------------------------

.. class:: Menu

    | **Menu** (config)
    
    * 继承自 :class:`~component.ModelControl` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项.
    
    .. note::

        从已有元素实例 Menu 对象时 , 元素节点标明类名 ``{prefixCls}menu`` .
        ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .
    
  
Properties Detail
-----------------------------------------------------

.. attribute:: Menu.prototype.highlightedItem

    {Menu.Item} - 当前高亮的儿子菜单项.
    
    
Events Detail
------------------------------------------------------

.. function:: Menu.click

    | **click(e)**
    | 当子菜单项被点击后触发
    
    :param Menu.Item e.target: 当前被点击的菜单项  
    
    
.. function:: Menu.beforeDelete

    | **beforeDelete(e)**
    | 当子组件中存在 :class:`DelMenuItem` 类型的菜单项时触发.
    | 当子菜单项被删除前触发，返回 false ，则阻止删除行为发生
    
    :param Menu.Item e.target: 当前将要被删除的菜单项
    
    
.. function:: Menu.delete

    | **delete(e)**
    | 当子组件中存在 :class:`DelMenuItem` 类型的菜单项时触发.
    | 当子菜单项被删除后触发
    
    :param Menu.Item e.target: 被删除的菜单项                 