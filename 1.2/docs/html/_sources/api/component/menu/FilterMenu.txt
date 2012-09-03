.. currentmodule:: menu

Menu.FilterMenu
===============================



|  可过滤菜单.


Class
---------------------------------

    * :class:`FilterMenu`
    
Config Attributes
-----------------------------------------------

    * :data:`~FilterMenu.config.label`    
    * :data:`~FilterMenu.config.allowMultiple`    
    

Methods
-----------------------------------------------

    * :meth:`~FilterMenu.prototype.filterItems`
    * :meth:`~FilterMenu.prototype.reset`
    

Class Detail
--------------------------

.. class:: FilterMenu

    | **FilterMenu** (config)
    
    * 继承自 :class:`~menu.Menu` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
    .. note::

        从已有元素实例 FilterMenu 对象时 , 元素节点标明类名 ``{prefixCls}filtermenu`` .
        ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .
    
    
Config Attributes Detail
-----------------------------------------------

.. data:: FilterMenu.config.label

    {String} - 可选，过滤框提示文字
    
    
.. data:: FilterMenu.config.allowMultiple

    {String} - 可选，默认 false。是否允许 ``,`` 号分离的多个输入. 
    
    
Methods Detail
-----------------------------------------------  

.. method:: FilterMenu.prototype.filterItems

    | **filterItems ( str )**
    | 根据 ``str`` 来过滤菜单项集合，用户输入变化时也会调用该函数.
    | 需要自定义过滤条件时，可重写实例上的该函数
    
    :param String str: 过滤字符串  
    
    
.. method:: FilterMenu.prototype.reset

    | **reset ( )**
    | 还原实例到初始状态            
    
    
.. tip::

    创建一个 FilterMenu 开销还是不小的，当需要创建新的对象时，你可以尽量重用实例对象，通过 :meth:`~component.ModelControl.prototype.addChild` , :meth:`~component.ModelControl.prototype.removeChild` ,
     :meth:`~component.ModelControl.prototype.removeChildren` 适时修改其 children 即可.
     需要注意的是重用原有 FilterMenu 实例的状态需要用 :meth:`~FilterMenu.prototype.reset` 还原      