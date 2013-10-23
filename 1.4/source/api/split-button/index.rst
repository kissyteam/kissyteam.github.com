.. module:: split-button

Split Button
===============================

| 按钮和菜单按钮的组合
| 构建支持下拉菜单的按钮组

Class
-------------------------------

    * :class:`SplitButton`

    .. code-block:: javascript

        KISSY.use('split-button', function (S, SplitButton) {
            // use split-button
        });

Configs
------------------------------

    * :data:`~SplitButton.config.alignWithEl`
    * :data:`~SplitButton.config.menuButton`
    * :data:`~SplitButton.config.button`

Attributes
------------------------------

    * :attr:`~SplitButton.prototype.menuButton`
    * :attr:`~SplitButton.prototype.button`

Class Details
------------------------------

.. class:: SplitButton

    | **SplitButton** ( config )

    * 扩展自 :class:`~component.Control`，包含起全部配置，方法，属性和事件

    :param Object config: 配置信息

Configs Details
------------------------------

.. data:: SplitButton.config.alignWithEl

    {Boolean} - 是否将菜单按钮和按钮对齐，默认 true


.. data:: SplitButton.config.menuButton

    {KISSY.MenuButton} - 菜单按钮组件


.. data:: SplitButton.config.button

    {KISSY.Button} - 按钮组件

Attributes Details
-------------------------------

.. attribute:: SplitButton.prototype.menuButton

    {KISSY.MenuButton} - 菜单按钮组件


.. attribute:: SplitButton.prototype.button

    {KISSY.Button} - 按钮组件
