.. currentmodule:: Grid

PaggingBar
===============================

| 分页栏

Class
---------------------------------

	* :class:`PaggingBar`

Configs
------------------------------------------------

* :data:`~PaggingBar.config.firstText`
* :data:`~PaggingBar.config.fistCls`
* :data:`~PaggingBar.config.prevText`
* :data:`~PaggingBar.config.prevCls`
* :data:`~PaggingBar.config.nextText`
* :data:`~PaggingBar.config.nextCls`
* :data:`~PaggingBar.config.lastText`
* :data:`~PaggingBar.config.lastCls`
* :data:`~PaggingBar.config.skipText`
* :data:`~PaggingBar.config.skipCls`
* :data:`~PaggingBar.config.totalPageTemplate`
* :data:`~PaggingBar.config.curPageTemplate`
* :data:`~PaggingBar.config.totalCountTemplate`
* :data:`~PaggingBar.config.curPage`
* :data:`~PaggingBar.config.totalCount`
* :data:`~PaggingBar.config.pageSize`
* :data:`~PaggingBar.config.store`


Methods
-----------------------------------------------	

	* :meth:`~PaggingBar.prototype.skipToPage`

Class Detail
--------------------------

.. class:: PaggingBar

	| **PaggingBar** (config)
	| xclass: 'paggingbar'

	 * 继承自 :class:`Grid.Bar <Grid.Bar>` , 包含其全部配置,属性,方法,事件.

	:param Object config: 配置项.

Configs Detail
------------------------------------------------

.. data:: PaggingBar.config.firstText
	
	{String} - 默认：'首 页'

.. data:: PaggingBar.config.fistCls

	{String} - 默认：'ks-pb-first',首页按钮样式

.. data:: PaggingBar.config.prevText

	{String} - 默认：'上一页'

.. data:: PaggingBar.config.prevCls

	{String} - 默认：'ks-pb-prev',上一页按钮样式

.. data:: PaggingBar.config.nextText

	{String} - 默认：'下一页'

.. data:: PaggingBar.config.nextCls

	{String} - 默认：'ks-pb-next',下一页按钮样式

.. data:: PaggingBar.config.lastText

	{String} - 默认：'末 页'

.. data:: PaggingBar.config.lastCls

	{String} - 默认：'ks-pb-last',末页按钮样式

.. data:: PaggingBar.config.skipText

	{String} - 默认：'跳 转'

.. data:: PaggingBar.config.skipCls

	{String} - 默认：'ks-pb-skip',跳转按钮样式

.. data:: PaggingBar.config.totalPageTemplate

	{String} - 默认：'共 {totalPage} 页'，总页数模板。可以使用以下参数 curPage，totalCount，pageSize

.. data:: PaggingBar.config.curPageTemplate

	{String} - 默认：'第 <input type="text" autocomplete="off" class="ks-pb-page" size="20" name="inputItem"> 页'，当前页模板。可以使用以下参数 curPage，totalCount，pageSize,totalPage

.. data:: PaggingBar.config.totalCountTemplate

	{String} - 默认： '共{totalCount}条记录'，总记录数模板。可以使用以下参数 curPage，totalCount，pageSize,totalPage

.. data:: PaggingBar.config.curPage
	
	{Number} - 当前页

.. data:: PaggingBar.config.totalCount

	{Number} - 总记录数

.. data:: PaggingBar.config.pageSize

	{Number} - 单页显示记录数

.. data:: PaggingBar.config.store

	{Grid.Store} - 分页使用的数据源

Methods Detail
--------------------------

.. method:: Bar.prototype.skipToPage

	**skipToPage(page)**
	| 跳转到指定页
	
	:param Number page: 跳转到页面

