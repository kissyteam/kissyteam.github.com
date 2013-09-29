.. currentmodule:: grid

Bar
===============================


| 工具栏 - 分页栏的父类

Class
---------------------------------

    * :class:`Bar`

Methods
-----------------------------------------------

    * :meth:`~Bar.prototype.getItem`

Class Detail
--------------------------

.. class:: Bar

    | **Bar** (config)
    | xclass: 'bar'

    * 继承自 :class:`Component.Controller <component.Controller>` , 包含其全部配置,属性,方法,事件.
    * 工具栏，可以在工具栏上添加按钮、文本、分割线、空白区等等，工具栏的子项请参看 :class:`Grid.Bar.BarItem <grid.Bar.BarItem>`

    :param Object config: 配置项.

Methods Detail
--------------------------

.. method:: Bar.prototype.getItem

     **getItem(id)**
    | 获取工具栏的子项

    :param Array|Object id: bar item 的 id

    :returns: 工具栏的子项
    :rtype: Grid.Bar.BarItem