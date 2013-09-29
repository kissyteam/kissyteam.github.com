.. currentmodule:: grid

Column
===============================


|  表格列.

Class
---------------------------------

    * :class:`Column`

Configs
------------------------------------------------
    * :data:`~Column.config.dataIndex`
    * :data:`~Column.config.hide`
    * :data:`~Column.config.id`
    * :data:`~Column.config.renderer`
    * :data:`~Column.config.resizable`
    * :data:`~Column.config.sortable`
    * :data:`~Column.config.sortState`
    * :data:`~Column.config.title`

Methods
-----------------------------------------------    

    * :meth:`~Column.prototype.show`
    * :meth:`~Column.prototype.hide`

Events
--------------------------------------------------------

    * :func:`~Column.click`   

Class Detail
--------------------------

.. class:: Column

    | **Column** (config)
    | xclass: 'grid-hd'

    * 继承自 :class:`Component.Controller <component.Controller>` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项.

    .. note::

        此类用于表格中，不能单独使用，所有的配置项可以当做属性使用

        .. code-block:: javascript

            column.set('hide',true);
        
        
Configs Detail
------------------------------------------------------
.. data:: Column.config.dataIndex
    
    {String} - 列对应的数据里的字段名，如： {a : '124'}中的‘a'

.. data:: Column.config.hide
    
    {Boolean} - 默认：false，隐藏列      

.. data:: Column.config.id

    {String} - 默认自动生成，列id ，用于唯一标示列。

.. data:: Column.config.renderer

    {Function} - 用于格式化单元格上的数据,函数原型 function(value,record),
                1. value 渲染单元格时的值
                2. record 单元格所在行显示的记录

    .. code-block:: javascript

        {
          title : '列一',
          dataIndex : a ,
          renderer : function(value,record){
                if(record.allChange){
                    return value * 2;
                }
                return value;
            }
        }

.. data:: Column.config.resizable

    {Boolean} - 默认：true，列是否可以改变宽度，主要使用允许拖拽列宽，或者列自适应时列自动压缩或者放大

.. data:: Column.config.sortable

    {Boolean} - 默认：true ，列是否允许排序

.. data:: Column.config.sortState

    {String} - 默认： null,列的排序方向，包含2个值 'ASC','DESC'

.. data:: Column.config.title

    {String} - 默认：&#160，列标题，可以使用html 
    

Methods Detail
-----------------------------------------------  

.. method:: Column.prototype.show

    | **show()**
    | 显示列

.. method:: Column.prototype.hide

    | **hide()**
    | 隐藏列

Events Detail
------------------------------------------------------

.. function:: Column.click

    | **click(e)**
    | 当点击列头时发生
    
    :param Grid.Column e.target: 触发的列

