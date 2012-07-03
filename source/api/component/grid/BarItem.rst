.. currentmodule:: Grid

Bar.BarItem
===============================

| 工具栏的子项

Class
---------------------------------

	* :class:`Bar.BarItem`

Configs
------------------------------------------------

 * :data:`~Bar.BarItem.config.xtype`
 * :data:`~Bar.BarItem.config.text`
 


Class Detail
--------------------------

.. class:: Bar.BarItem

    | **BarItem** (config)
    | xclass: 'bar-item'

	 * 继承自 :class:`Component.Controller <Component.Controller>` , 包含其全部配置,属性,方法,事件.

	 :param Object config: 配置项.

	 .. note::
		此类用于工具栏中，不单独使用，一般作为配置项传入

		.. code-block:: javascript
			var bar = new Bar({
				render : '#bar',
				children : [
					new Button({
						content:"测试1"
					}),
					new Bar.BarItem({
						content : '<span class="label">Default</span>'
					}),{
						id : 'btn3',
						xtype : 'button',
						text : '测试3',
						listeners : {
							'click':function(event){
								log('button3');
							}
						}
					},
					{xtype : 'separator'}
				]
			});

Configs Detail
------------------------------------------------------

.. data:: Bar.BarItem.config.xtype

	{String} - 默认为'button' 子项的类型,取值： 'button','text','separator','spacer'

.. data:: Bar.BarItem.config.text

	{String} - 显示的文本，一般用在'button'和'text'中