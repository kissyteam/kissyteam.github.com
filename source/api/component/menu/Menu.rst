.. currentmodule:: menu

Menu
===============================



|  菜单.


Class
---------------------------------

    * :class:`Menu`

Properties
----------------------------------------------------
    
    * :attr:`~Menu.prototype.highlightedItem`
    
    
Events
--------------------------------------------------------

    * :func:`~Menu.click`

Class Detail
--------------------------

.. class:: Menu

    | **Menu** (config)
    
    * 继承自 :class:`~component.Controller` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项.
    
    .. note::

        从已有元素实例 Menu 对象时 , 元素节点标明类名 ``{prefixCls}menu`` .
        ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .
    
  
Properties Detail
-----------------------------------------------------

.. attribute:: Menu.prototype.highlightedItem

    {Menu.Item} - 当前高亮的儿子菜单项.
    
.. hint::

    隐藏当前菜单的子菜单只需要将该属性置 null 即可
        
    .. code-block:: javascript
    
        menu.set("highlightedItem",null);
        
    
    
Events Detail
------------------------------------------------------

.. function:: Menu.click

    | **click(e)**
    | 当子菜单项被点击后触发
    
    :param Menu.Item e.target: 当前被点击的菜单项