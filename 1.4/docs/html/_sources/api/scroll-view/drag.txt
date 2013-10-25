.. currentmodule:: scroll-view

ScrollView.Drag
==============================

| ScrollView Drag
| 让body可以拖动, 主要用于移动端

.. code-block:: javascript

    KISSY.use('scroll-view/drag', function (S, ScrollView) {
        // use scroll-view/drag
    }

Class
------------------------------

    * :class:`Drag`

Configs
------------------------------

    * :data:`lockX`
    * :data:`lockY`
    * :data:`snapThreshold`
    * :data:`bounce`
    * :data:`bounceDuration`
    * :data:`bounceEasing`

Methods
------------------------------

    * :meth:`~scroll-view.Base.prototype.stopAnimation`

Class Details
------------------------------

.. class:: Drag

    | **Drag** (config)
    | 让body可以拖动，主要用于移动端
    | 扩展自ScrollView的 :class:`~scroll-view.Base` ，包含其全部配置,属性,方法,事件.

    :param Object config: 配置信息，详见Configs Deatils

Config Details
------------------------------

.. data:: lockX

    | 当内容大小小于容器大小时，是否允许横向拖动
    | 默认为 true，不允许

.. data:: lockY

    | 当内容大小小于容器大小时，是否允许纵向拖动
    | 默认为 false，允许

.. data:: snapThreshold

    | “折断”临界值
    | “折断”手势在x或y方向上开始的像素值
    | 默认是 5

.. data:: bounce

    | 是否允许弹跳效果
    | 默认是 true，允许

.. data:: bounceDuration

    | 弹跳效果持续时间
    | 默认是 0.4

.. data:: bounceEasing

    | 弹跳效果时间函数
    | 默认是 easeOut


