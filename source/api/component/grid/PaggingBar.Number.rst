.. currentmodule:: Grid

PaggingBar.Number
===============================

| 数字分页栏

Class
---------------------------------

	* :class:`Number`

Configs
------------------------------------------------
* :data:`~Number.config.skipText`
* :data:`~Number.config.maxLimitCount`
* :data:`~Number.config.showRangeCount`
* :data:`~Number.config.numberButtonCls`
* :data:`~Number.config.ellipsisTemplate`



Class Detail
--------------------------

.. class:: Number

	| **Number** (config)
	| xclass: 'number-paggingbar'

	 * 继承自 :class:`Grid.PaggingBar <Grid.PaggingBar>` , 包含其全部配置,属性,方法,事件.

	:param Object config: 配置项.


Configs Detail
------------------------------------------------

.. data:: Number.config.skipText

	{String} - 默认：'确定'，跳转按钮的文本

.. data:: Number.config.maxLimitCount
	
	{Number} - 默认 ： 4 ，作用于页码靠近首页时，当页码比当前页小于此值时显示，否则显示省略号如：当前页数为4时 1 2 3 4 5 ... 10 

.. data:: Number.config.showRangeCount

	{Number} - 默认 ：1 ，显示当前页码，前后几个按钮，如：当前页数10 1 ... 9 10 11 ...

.. data:: Number.config.numberButtonCls

	{String} - 默认：'ks-number-button' 按钮的样式

.. data:: Number.config.ellipsisTemplate

	{String} - 默认：'...'，省略号的文本

