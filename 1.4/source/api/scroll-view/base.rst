.. currentmodule:: scroll-view

ScrollView.Base
==============================

| ScrollView 基类
| 让容器可以滚动

.. code-block:: javascript

    KISSY.use('scroll-view/base', function (S, ScrollView) {
        // use scroll-view/base
    }

Class
------------------------------

    * :class:`~Base`

Configs
------------------------------

    * :data:`~component.Control.config.srcNode`
    * :data:`~component.Control.config.width`
    * :data:`~component.Control.config.height`
    * :data:`~component.Control.config.content`
    * :data:`~base.Base.config.plugins`
    * :data:`~component.Control.config.elCls`
    * :data:`snap`
    * :data:`snapDuration`

Attributes
----------------------------------------------------

    * :attr:`~component.extension.ContentRender.prototype.contentEl`

Methods
-------------------------------

    * :meth:`~Base.prototype.getScrollStep`
    * :meth:`~Base.prototype.stopAnimation`
    * :meth:`~Base.prototype.scrollToPage`
    * :meth:`~Base.prototype.scrollToWithBounds`
    * :meth:`~Base.prototype.scrollTo`
    * :meth:`~Base.prototype.isAxisEnabled`

Class Details
-------------------------------

.. class:: Base

    | **Base** (config)
    | 让container可以滚动
    | 扩展自 :class:`~component.Container` ，包含其全部配置,属性,方法,事件.

    :param Object config: 配置信息，详见Configs Deatils

Configs Details
-------------------------------

.. data:: Base.config.snap

    | 传入元素的选择器，{String}
    | 用来指定是否在滚动是将元素“折断”，就是在滚动停在元素上时如何处理。
    | 默认为 false ，不做操作，就停在那里
    | 为 true 时，滚动到下一个同类元素的起点，停止。

.. data:: Base.config.snapDuration

    | “折断”操作动画持续时间，当snap为true时有效。
    | {Number} - 默认 0.3

.. data:: Base.config.snapEasing

    | “折断”操作动画的时间函数，{String}
    | 默认 easeOut

Methods Details
--------------------------------

.. method:: Base.prototype.scrollTo

    | **scrollTo(cfg, animCfg)**
    | 滚动到指定位置

    :param {Object} cfg: {left: xx, top: xx} 位置
    :param {Object} animCfg: Anim的配置参数，详见 :class:`~anim.Anim`

.. method:: Base.prototype.scrollToPage

    | **scrollToPage(index, animCfg)**
    | 滚动到指定index的page

    :param {Number} index: page索引值
    :param {Object} animCfg: Anim的配置参数，详见 :class:`~anim.Anim`

.. method:: Base.prototype.scrollToWithBounds

    | **scrollToWithBounds(cfg, anim)**
    | 在元素最大滚动距离和最小滚动距离范围内滚动

    :param {Object} cfg: {left: xx, top: xx}, 在两个方向上的滚动距离
    :param {Object} anim: Anim的配置参数，详见 :class:`~anim.Anim`

.. method:: Base.prototype.stopAnimation

    | **stopAnimation()**
    | 停止动画
    | 停止动画队列里的函数，并清空动画队列，将滚动停在当前位置。

.. method:: Base.prototype.isAxisEnabled

    | **isAxisEnabled(axis)**
    | 判断对应方向上的滚动是否允许
    | 横向传入 x，纵向 y

    :returns: {Boolean} 对应方向上是否允许

.. method:: Base.prototype.getScrollStep

    | **getScrollStep()**
    | 获得要滚动的步进长度

    :returns: {Object} {top: xx, left: xx} 两个方向上的步进值
