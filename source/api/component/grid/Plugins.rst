.. currentmodule:: Grid

Plugins
===============================

| 表格插件


Class
---------------------------------

	* :class:`Plugins.CheckSelection`
	* :class:`Plugins.RadioSelection`


Class Detail
--------------------------

.. class:: Plugins.CheckSelection
	
	| **CheckSelection** ()
	
	* 此类用于表格，给表格首列前添加一列，包含复选框，不单独使用

	.. code-block:: javascript 
		
		new Grid({
			...
			plugins : [Plugins.CheckSelection]
			...
		});

.. class:: Plugins.RadioSelection

	| **RadioSelection** ()
	
	* 此类用于表格，给表格首列前添加一列，包含复选框，不单独使用

	.. code-block:: javascript 
		
		new Grid({
			...
			plugins : [Plugins.RadioSelection]
			...
		});