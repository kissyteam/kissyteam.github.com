.. currentmodule:: menubutton

MenuButton
===============================

|  菜单.


Class
---------------------------------

    * :class:`MenuButton`
    
Config Attributes
-----------------------------------------------

    * :data:`~MenuButton.config.menuAlign`
    * :data:`~MenuButton.config.menu`
    * :data:`~MenuButton.config.menuCfg`        

Properties
----------------------------------------------------
    
    * :attr:`~MenuButton.prototype.menu`
    * :attr:`~MenuButton.prototype.collapsed`
    
Methods
-----------------------------------------------

    * :meth:`~MenuButton.prototype.addItem`
    * :meth:`~MenuButton.prototype.removeItem`
    * :meth:`~MenuButton.prototype.removeItems`
    * :meth:`~MenuButton.prototype.getItemAt`

    
Events
--------------------------------------------------------

    * :func:`~MenuButton.click`

Class Detail
--------------------------

.. class:: MenuButton

    | **MenuButton** (config)
    
    * 继承自 :class:`~button.Button` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
.. note::

    从已有元素实例 MenuButton 对象时 , 元素节点标明类名 ``{prefixCls}menu-button`` . 
    ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .    
    
Config Attributes Detail
-----------------------------------------------

.. data:: MenuButton.config.menuAlign

    {Object} - 可选，下拉框菜单相对于下拉按钮的对齐方式，具体参考 :data:`~uibase.Box.config.align` ，默认值
        
        .. code-block:: javascript
        
            {
                points:["bl","tl"],
                overflow:{
                    failX:1,
                    failY:1,
                    adjustX:1,
                    adjustY:1
                }
            }
            
.. data:: MenuButton.config.menuCfg

    {Object} - 可选，下拉框菜单配置，具体参考 :class:`~menu.Menu` ，默认值
    
    
.. data:: MenuButton.config.menu

    {Menu} - 可选，将已存在的 :class:`~menu.Menu` 实例和下拉按钮关联起来. 如不指定，则调用 :meth:`~MenuButton.prototype.addItem` 时自动生成.
        
  
Properties Detail
-----------------------------------------------------

.. attribute:: MenuButton.prototype.menu

    {Menu} - 关联的下拉菜单实例
    
.. attribute:: MenuButton.prototype.collapsed

    {Boolean} - 下拉菜单是否弹出，设置值可控制下拉菜单弹出与否.


Methods Detail
----------------------------------------------- 

.. method:: MenuButton.prototype.addItem

    | **addItem** ( item [ , index ] )
    | 添加下拉菜单项
    
    :param Menu.Item item: 下拉菜单项 
    :param Number index: 添加的位置，默认最后一个位置
    
.. method:: MenuButton.prototype.removeItem

    | **removeItem** ( item [ , destroy ] )
    | 删除指定下拉菜单项
    
    :param Menu.Item item: 下拉菜单项 
    :param Number index: 删除的同时是否销毁该子菜单项。默认 false
    
.. method:: MenuButton.prototype.removeItems

    | **removeItems** ( [ destroy ] )
    | 删除所有下拉菜单项
    
    :param Number index: 删除的同时是否销毁子菜单项。默认 false
    
.. method:: MenuButton.prototype.getItemAt

    | **getItemAt** ( index )
    | 取得指定位置下拉菜单项
    
    :param Number index: 取得的位置            
    
    
Events Detail
------------------------------------------------------

.. function:: MenuButton.click

    | **click(e)**
    | 当子菜单项被点击后触发
    
    :param Menu.Item e.target: 当前被点击的菜单项    