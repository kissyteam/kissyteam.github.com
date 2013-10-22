Filter-menu
=================================

| 可过滤菜单

.. code-block:: javascript

    KISSY.use('filter-menu', function(S, FilterMenu) {
        //use filter-menu
    });

Class
---------------------------------

    * :class:`FilterMenu`

Configs
---------------------------------

    * :data:`~component.extension.Box.config.render`
    * :data:`~component.extension.Box.config.width`
    * :data:`allowMultiple`
    * :data:`placeholder`
    * :data:`filterStr`

Methods
---------------------------------

    * :func:`~component.Control.prototype.render`
    * :meth:`~component.Control.prototype.addChild`
    * :meth:`~FilterMenu.prototype.filterItems`
    * :meth:`~FilterMenu.prototype.reset`

Class Details
---------------------------------

.. class:: FilterMenu

    | **FilterMenu** (config)
    | 可过滤菜单，扩充自 :class:`~Menu`, 包含其全部配置,属性,方法,事件.

    :param Object config: 实例化 FilterMenu 对象的配置项, 详细见下节.

Configs Details
----------------------------------

.. data:: allowMultiple

    {Boolean} - 是否允许输入多个， 默认为false

.. data:: placeholder

    {String} - placeholder 内容

.. data:: filterStr

    {String} - 过滤的字符串

Methods Details
----------------------------------

.. method:: FilterMenu.prototype.filterItems

    | **filterItems** (str)
    | 根据所给字符串，过滤出响应的项
    | 可以重写此方法，进行自定义，不自定义则是简单的内容 indexOf 查找

    :param String str: 需要过滤的字符串

    .. code-block:: javascript

        filterMenu.filterItems = function(str) {};

.. method:: FilterMenu.prototype.reset

    | **reset** ()
    | 重置用户的输入以及过滤结果