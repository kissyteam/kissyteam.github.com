.. currentmodule:: grid

PagingBar
===============================

| 分页栏

Class
---------------------------------

    * :class:`PagingBar`

Configs
------------------------------------------------

    * :data:`~PagingBar.config.firstText`
    * :data:`~PagingBar.config.fistCls`
    * :data:`~PagingBar.config.prevText`
    * :data:`~PagingBar.config.prevCls`
    * :data:`~PagingBar.config.nextText`
    * :data:`~PagingBar.config.nextCls`
    * :data:`~PagingBar.config.lastText`
    * :data:`~PagingBar.config.lastCls`
    * :data:`~PagingBar.config.skipText`
    * :data:`~PagingBar.config.skipCls`
    * :data:`~PagingBar.config.totalPageTpl`
    * :data:`~PagingBar.config.curPageTpl`
    * :data:`~PagingBar.config.totalCountTpl`
    * :data:`~PagingBar.config.curPage`
    * :data:`~PagingBar.config.totalCount`
    * :data:`~PagingBar.config.pageSize`
    * :data:`~PagingBar.config.store`


Methods
-----------------------------------------------

    * :meth:`~PagingBar.prototype.jumpToPage`

Class Detail
--------------------------

.. class:: PagingBar

    | **PagingBar** (config)
    | xclass: 'PagingBar'

     * 继承自 :class:`Grid.Bar <grid.Bar>` , 包含其全部配置,属性,方法,事件.

    :param Object config: 配置项.

Configs Detail
------------------------------------------------

.. data:: PagingBar.config.firstText

    {String} - 默认：'首 页'

.. data:: PagingBar.config.fistCls

    {String} - 默认：'ks-pb-first',首页按钮样式

.. data:: PagingBar.config.prevText

    {String} - 默认：'上一页'

.. data:: PagingBar.config.prevCls

    {String} - 默认：'ks-pb-prev',上一页按钮样式

.. data:: PagingBar.config.nextText

    {String} - 默认：'下一页'

.. data:: PagingBar.config.nextCls

    {String} - 默认：'ks-pb-next',下一页按钮样式

.. data:: PagingBar.config.lastText

    {String} - 默认：'末 页'

.. data:: PagingBar.config.lastCls

    {String} - 默认：'ks-pb-last',末页按钮样式

.. data:: PagingBar.config.skipText

    {String} - 默认：'跳 转'

.. data:: PagingBar.config.skipCls

    {String} - 默认：'ks-pb-skip',跳转按钮样式

.. data:: PagingBar.config.totalPageTpl

    {String} - 默认：'共 {totalPage} 页'，总页数模板。可以使用以下参数 curPage，totalCount，pageSize

.. data:: PagingBar.config.curPageTpl

    {String} - 默认：'第 <input type="text" autocomplete="off" class="ks-pb-page" size="20" name="inputItem"> 页'，当前页模板。可以使用以下参数 curPage，totalCount，pageSize,totalPage

.. data:: PagingBar.config.totalCountTpl

    {String} - 默认： '共{totalCount}条记录'，总记录数模板。可以使用以下参数 curPage，totalCount，pageSize,totalPage

.. data:: PagingBar.config.curPage

    {Number} - 当前页

.. data:: PagingBar.config.totalCount

    {Number} - 总记录数

.. data:: PagingBar.config.pageSize

    {Number} - 单页显示记录数

.. data:: PagingBar.config.store

    {Grid.Store} - 分页使用的数据源

Methods Detail
--------------------------

.. method:: PagingBar.prototype.jumpToPage

    **jumpToPage(page)**
    | 跳转到指定页

    :param Number page: 跳转到页面

