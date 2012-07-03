.. currentmodule:: Grid

Util
===============================

| 工具类

Class
---------------------------------

	* :class:`Util`

Methods
-----------------------------------------------	

	* :meth:`~Util.maskElement` <static>
	* :meth:`~Util.unmaskElement` <static>
	* :meth:`~Util.Format.dateRenderer` <static>
	* :meth:`~Util.Format.datetimeRenderer` <static>
	* :meth:`~Util.Format.enumRenderer` <static>
	* :meth:`~Util.Format.multipleItemsRenderer` <static>

Class Detail
--------------------------

.. class:: Util

	* 此类是个帮助类，不实例化对象，包含mask和 renderer

Methods Detail
-----------------------------------------------

.. method:: Util.maskElement

	| **maskElement(element, [msg], [msgCls])** <static>
	| 屏蔽指定元素

	:param String|DOM|Node element: 要屏蔽的元素，可以是选择器、DOM或者Node节点
	:param String msg: 显示在屏蔽层上的信息
	:param String msgCls: 信息应用的样式

.. method:: Util.unmaskElement
	
	| **unmaskElement(element)** <static>
	| 接触元素的屏蔽
	:param String|DOM|Node element: 要屏蔽的元素，可以是选择器、DOM或者Node节点
	
.. method:: Util.Format.dateRenderer
	
	| **dateRenderer(value)** <static>
	| 将毫秒数转换成日期文本

	:param Number value: 日期的毫秒数

	:returns: 日期文本
    :rtype: String
	
.. method:: Util.Format.datetimeRenderer

	| **datetimeRenderer(value)** <static>
	| 将毫秒数转换成日期时间文本

	:param Number value: 日期时间的毫秒数
	:returns: 日期时间文本
    :rtype: String

.. method:: Util.Format.enumRenderer

	| **enumRenderer(enum)** <static>
	| 返回格式化枚举的函数
	
	:param Object enum: 键值对
	:returns: 格式化枚举的函数
    :rtype: Function

	.. code-block:: javascript 
		
		var emum = {'1':'通过','2':'不通过'),
			grid = new Grid({
				...
				columns:[
					{dataIndex : 'c',title : '审核结果',renderer : Util.Format.enumRenderer(emum)}
				]
				...
			});



.. method:: Util.Format.multipleItemsRenderer

	| **multipleItemsRenderer(enum)** <static>
	| 返回格式化多选项的函数
	
	:param Object enum: 键值对
	:returns: 格式化多选项的函数
    :rtype: Function

	.. code-block:: javascript 
		
		var emum = {'1':'淘宝','2':'京东','3':'当当'),
			grid = new Grid({
				...
				columns:[
					{dataIndex : 'c',title : 'B2C 商城',renderer : Util.Format.enumRenderer(emum)} // {c:'1,3'}时，则显示 '淘宝,当当'
				]
				...
			});