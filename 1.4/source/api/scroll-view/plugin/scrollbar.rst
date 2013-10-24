.. currentmodule:: scroll-view

ScrollView.Plugin.ScrollBar
==============================

| ScrollView的滚动条插件
| 用来自定义滚动条

Class
-------------------------------

    * :data:`ScrollBar`

Configs
-------------------------------

    * :data:`minLength`
    * :data:`autoHideX`
    * :data:`autoHideY`

Class Details
-------------------------------

.. class:: ScrollBar

    | **ScrollBar()**
    | 扩展自 :class:`~base.Base` ，包含其全部配置,属性,方法,事件.
    | 插件 id ：scroll-view/plugin/scrollbar

Configs Details
--------------------------------

.. data:: minLength

    {Number} - 滚动条的最小长度
.. data:: autoHideX

    {Boolean} - 是否自动隐藏横向滚动条

.. data:: autoHideY

    {Boolean} - 是否自动隐藏纵向滚动条

使用示例
-------------------------------

.. code-block:: javascript

    KISSY.use('scroll-view,scroll-view/plugin/scrollbar', function (S, ScrollView, ScrollbarPlugin) {
        var scrollView = new ScrollView({
            width: 320,
            height: 219,
            plugins: [new ScrollbarPlugin({
                autoHideX: true,
                autoHideY: false
            })],
            content: content
        }).render();
    }