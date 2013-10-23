.. currentmodule:: component

Component.Manager
===============================================

| 管理组件元数据

Class
-----------------------------------------------

    * :class:`Manager`

Class Details
-----------------------------------------------

.. class:: Manager

    | **Manager** ()
    | 提供组件元数据管理功能

Methods
------------------------------------------------

    * :meth:`Manager.prototype.addComponent`
    * :meth:`Manager.prototype.getComponent`
    * :meth:`Manager.prototype.getConstructorByXClass`
    * :meth:`Manager.prototype.removeComponent`
    * :meth:`Manager.prototype.setConstructorByXClass`

Methods Details
------------------------------------------------

.. method:: Manager.prototype.addComponent

    | **addComponent** ( id, component )
    | 把 id 和组件对象关联起来

    :param String id: 组件 ID
    :param KISSY.Component.Control component: 组件对象

.. method:: Manager.prototype.getComponent

    | **getComponent** ( id )
    | 根据 id 获取对应的组件对象

    :param String id: 要获取的 ID

    :return KISSY.Component.Control: 要获取的组件对象

.. method:: Manager.prototype.getConstructorByXClass

    | **getConstructorByXClass** ( classNames )
    | 通过传入的 css classNames 获取对应的组件的构造函数

    :param String classNames: css class name, 多个用空格隔开

    :return Function: 要获取的构造函数

.. method:: Manager.prototype.removeComponent

    | **removeComponent** ( id )
    | 移除对应 id 与组件之间的联系

    :param String id: 要移除联系的组件的 ID

.. method:: Manager.prototype.setConstructorByXClass

    | **setConstructorByXClass** ( className, ComponentConstructor )
    | 将 css class 和组件的构造函数对应

    :param String className: 组件的的css class name
    :param Functoin ComponentConstructor: 组件的构造函数


