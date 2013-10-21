.. currentmodule:: component

Component.Container
===============================================

| 容器基类。用来管理父子组件。

Class
-----------------------------------------------

    * :class:`Container`

Configs
-----------------------------------------------

    * :data:`~Container.config.children`

Methods
-----------------------------------------------

    * :meth:`~Container.prototype.addChild`
    * :meth:`~Container.prototype.getChildAt`
    * :meth:`~Container.prototype.removeChild`
    * :meth:`~Container.prototype.removeChildren`

Class Details
-----------------------------------------------

.. class:: Container

    | **Container** (config)

    * 扩展自 :class:`~component.Control` , 包含其全部配置,属性,方法,事件.

    :param Object config: 配置项

Configs Details
-----------------------------------------------

.. data:: Container.config.children

    {KISSY.Component.Control[]} - 可选，当前组件的子组件

Methods Details
------------------------------------------------

.. method:: Container.prototype.addChild

    | **addChild(c, [index])**
    | 添加一个指定的组件作为当前组件的子组件
    | 子组件的索引，可选，从 0 开始

    :param KISSY.Component.Control|Object c: 要添加的子组件实例或者子组件的对象描述

    .. note::

        xclass : String (optional)
        | 当 c 是一个对象时，指定它的子类

    :param Number index: 从 0 开始，新子组件被插入时的索引。如果未指定，新组件将会被插入在最后。

.. method:: Container.prototype.getChildAt

    | **getChildAt( index )**
    | 返回所给索引对应的子组件，如果索引超出返回，则返回 null

    :param Number index: 从 0 开始的索引

    :return KISSY.Component.Control: 所给索引对应的子组件对象。如果不存在则返回 null

.. method:: Container.prototype.removeChild

    | **removeChild( c, [destroy] )**
    | 从当前组件中移除所给子组件，并返回这个子组件对象。
    | 如果 destroy 是 true，调用要移除的组件的 destroy() 方法，随后从 DOM 文档中移除子组件的 DOM。否则，清除子组件 DOM 的工作就要由调用者做。

    :param KISSY.Component.Control c: 要移除的子组件实例
    :param Boolean destroy: 默认为 true, 在移除的子组件上调用 destroy()方法

.. method:: Container.prototype.removeChildren

    | **removeChildren( [destroy] )**
    | 移除所有包含的子组件

    :param Boolean destroy: 默认为 true, 在移除的子组件上调用 destroy()方法。详见 :meth:`Container.prototype.removeChild`
