.. currentmodule:: Grid

Grid
===============================



|  表格.

Class
---------------------------------

    * :class:`Grid`

Configs
------------------------------------------------

    * :data:`~Grid.config.columns`
	* :data:`~Grid.config.forceFit`
	* :data:`~Grid.config.tableCls`
	* :data:`~Grid.config.multiSelect`
	* :data:`~Grid.config.store`
	* :data:`~Grid.config.loadMask`
	
Methods
-----------------------------------------------	
	* :meth:`~Grid.prototype.addColumn`
    * :meth:`~Grid.prototype.removeColumn`    
    * :meth:`~Grid.prototype.setSelection`
	* :meth:`~Grid.prototype.setAllSelection`
	* :meth:`~Grid.prototype.clearSelection`
	* :meth:`~Grid.prototype.showData`
    
Events
--------------------------------------------------------

    * :func:`~Grid.aftershow`    
    * :func:`~Grid.cellclick`    
    * :func:`~Grid.rowclick` 
	* :func:`~Grid.rowcreated`    
    * :func:`~Grid.rowremoved`    
    * :func:`~Grid.rowselected`   
	* :func:`~Grid.rowunselected`    
    * :func:`~Grid.scroll`    
    
Class Detail
--------------------------

.. class:: Grid

    | **Grid** (config)
    | xclass: 'grid'
    
    * 继承自 :class:`Component.Container <Component.Container>` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项.
    
Configs Detail
------------------------------------------------------

.. data:: Grid.config.columns

    {Array} - 表格的列配置,具体列的配置信息请查看 :class:`Grid.Column <Grid.Column>`
	.. code-block:: javascript
    
        new Grid({columns:[
			{title : '列一',dataIndex : 'a'},
			{title : '列一',dataIndex : 'b',width : 150}
		]});

.. data:: Grid.config.forceFit

    {Boolean} - 默认：false，强迫列自适应表格的宽度，当表格指定宽度'width'时，列的宽度与列配置项中指定的宽度'width'相等。如果指定了此配置项，那么各列会等比例放大或缩小，以适应表格的宽度。

.. data:: Grid.config.tableCls

    {String} - 表格内部table 元素上应用的样式。由于表格支持设置宽高，会出现内部滚动条，则整个表格由2个table元素构成。

.. data:: Grid.config.multiSelect

    {Boolean} - 默认：false，表格是否支持多选

.. data:: Grid.config.store

    {Grid.Store} - 表格的数据源，表格显示的数据缓冲在此对象中，所有对数据的访问都通过此对象，参看:class:`Grid.Store <Grid.Store>`

Methods Detail
-----------------------------------------------  

.. method:: Grid.prototype.addColumn

    | **addColumn(column)**
	| 添加列

	:param Grid.Column|Object column: 添加的列或者列的配置项，参看:class:`Grid.Column <Grid.Column>`

	.. code-block:: javascript
		grid.addColumn({title : '列一',dataIndex : 'a'});

.. method:: Grid.prototype.removeColumn

    | **removeColumn(column)**
	| 删除列

	:param Grid.Column|Number column: 删除的列，或者是列的索引

	.. code-block:: javascript
		var columns = grid.get('columns'),
			delCol = columns[2];
		
		grid.removeColumn(delCol);

	.. code-block:: javascript
		grid.removeColumn(2);

.. method:: Grid.prototype.setSelection

	| **setSelection(records)**
	| 选中行

	:param Object|Array records 选中行的记录信息，可以是一条记录，可以是多条记录。数据通过store获取，参看:class:`Grid.Store <Grid.Store>`

	.. code-block:: javascript
		var store = grid.get('store'),
			records = store.findAll('a',123);// 查找所有 obj.a == 123 的记录
		grid.setSelection(records);

	.. code-block:: javascript
		var store = grid.get('store'),
			record = store.find('a',123);// 查找第一条 obj.a == 123 的记录
		grid.setSelection(record);

.. method:: Grid.prototype.setAllSelection
	
	| **setAllSelection()**
	| 选中所有行

.. method:: Grid.prototype.clearSelection
	
	| **clearSelection()**
	| 取消所有行的选中状态
		

.. method:: Grid.prototype.showData
	
	| **showData(records)**
	| 显示数据
	
	:param Array records 要显示的数据，此方法不推荐使用。显示数据最好通过store来实现。

	.. code-block:: javascript
		/**显示本地数据*/
		var store = new Store(),
			data = [{a : '1',b : 1},{a : '2',b : 2}],
			grid = new Grid(
			{
				columns:[...],
				store : store	
			});
		grid.render();
		store.setResult(data);

	.. code-block:: javascript
		/**显示本地数据*/
		var store = new Store({url : 'data.json',autoLoad : true}),//store 会自动在指定的url下加载数据，在表格渲染时显示数据。
			grid = new Grid(
			{
				columns:[...],
				store : store	
			});
		grid.render();

Events Detail
------------------------------------------------------

.. function:: Grid.aftershow

    | **aftershow()**
    | 当表格显示数据完成后触发，可以在此时给表格元素绑定事件、设置某些数据选中，等等。。
      
    
.. function:: Grid.cellclick

    | **cellclick(e)**
    | 当点击表格单元格时触发
    
    :param Object e.record: 此单元格所在行展示的数据
	:param String e.field: 此单元格所在列的字段参看 :class:`Grid.Column <Grid.Column>`中的dataIndex字段
    :param HTMLElement e.row: 此单元格所在行的DOM
	:param HTMLElement e.cell: 此单元格的DOM
	:param HTMLElement e.domTarget: 点击事件的target
    
.. function:: Grid.rowclick

    | **rowclick(e)**
    | 点击行后触发
    
    :param Object e.record: 点击行所展示的数据
    :param HTMLElement e.row: 点击行的DOM
	
.. function:: Grid.rowcreated

    | **rowcreated(e)**
    | 行渲染后触发
    
    :param Object e.record: 此行所展示的数据
    :param HTMLElement e.row: 行的DOM   

.. function:: Grid.rowremoved

    | **rowremoved(e)**
    | 行删除时触发
    
    :param Object e.record: 此行所展示的数据
    :param HTMLElement e.row: 行的DOM   

.. function:: Grid.rowselected

    | **rowcreated(e)**
    | 行选中后触发
    
    :param Object e.record: 此行所展示的数据
    :param HTMLElement e.row: 行的DOM 

.. function:: Grid.rowunselected

    | **rowcreated(e)**
    | 行取消选中后触发
    
    :param Object e.record: 此行所展示的数据
    :param HTMLElement e.row: 行的DOM 

.. function:: Grid.scroll

    | **scroll(e)**
    | 当表格内部出现滚动条时触发
    
    :param Object e.scrollLeft: 内部滚动条的 left
    :param HTMLElement e.scrollTop: 内部滚动条的 top
      
    