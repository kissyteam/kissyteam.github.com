.. currentmodule:: component

Component.Process
===============================================

| 供 Controller 类扩展，内部使用，欢迎 review

Class
-----------------------------------------------

    * :class:`ComponentProcess`

Attributes
-----------------------------------------------

    * :attr:`~ComponentProcess.prototype.created`
    * :attr:`~ComponentProcess.prototype.rendered`

Methods
-----------------------------------------------

    * :meth:`~ComponentProcess.prototype.create`
    * :meth:`~ComponentProcess.prototype.render`
    * :meth:`~ComponentProcess.prototype.sync`

Events
-----------------------------------------------

    * :func:`~ComponentProcess.Events.afterBindUI`
    * :func:`~ComponentProcess.Events.afterCreateDom`
    * :func:`~ComponentProcess.Events.afterRenderUI`
    * :func:`~ComponentProcess.Events.afterSyncUI`
    * :func:`~ComponentProcess.Events.beforeBindUI`
    * :func:`~ComponentProcess.Events.beforeCreateDom`
    * :func:`~ComponentProcess.Events.beforeRenderUI`
    * :func:`~ComponentProcess.Events.beforeSyncUI`

Class Details
-----------------------------------------------

.. class:: ComponentProcess

    | **ComponentProcess** (config)

    * 继承自 :class:`~base.Base` , 包含其全部配置,属性,方法,事件.

    :param Object config: 配置项

Attributes Details
-----------------------------------------------

.. attribute:: ComponentProcess.prototype.created

    {Boolean} - 只读属性，组件结构是否已经创建

.. attribute:: ComponentProcess.prototype.rendered

    {Boolean} - 只读属性，组件是否已经渲染

Methods Details
------------------------------------------------

.. method:: ComponentProcess.prototype.create

    | **create()**
    | 创建当前组件的DOM结构，control将会代理给render.

    :return Object: 自身

.. method:: ComponentProcess.prototype.render

    | **render()**
    | 把当前组件的DOM结构放入 DOM 文档中，并绑定事件，同步属性。

    :return Object: 自身

.. method:: ComponentProcess.prototype.sync

    | **sync()**
    | 同步属性值

.. note::

    组件基类增加 sync 函数，调用后可调用父类、扩展类、插件对应的 syncUI 方法。

Events Details
------------------------------------------------

.. function:: ComponentProcess.Events.afterBindUI

    | **afterBindUI(e)**
    | 当组件内部事件绑定完之后触发

    :params Object: KISSY CustomEvent 对象

.. function:: ComponentProcess.Events.afterCreateDom

    | **afterCreateDom(e)**
    | 当组件根节点创建的时候触发

    :params Object: KISSY CustomEvent 对象

.. function:: ComponentProcess.Events.afterRenderUI

    | **afterRenderUI(e)**
    | 当组件根节点渲染到 DOM 文档后触发

    :params Object: KISSY CustomEvent 对象

.. function:: ComponentProcess.Events.afterSyncUI

    | **afterSyncUI(e)**
    | 当组件内部的状态同步完之后触发

    :params Object: KISSY CustomEvent 对象

.. function:: ComponentProcess.Events.beforeBindUI

    | **beforeBindUI(e)**
    | 在组件内部事件绑定前触发

    :params Object: KISSY CustomEvent 对象

.. function:: ComponentProcess.Events.beforeCreateDom

    | **beforeCreateDom(e)**
    | 在组件根节点创建前触发

    :params Object: KISSY CustomEvent 对象

.. function:: ComponentProcess.Events.beforeRenderUI

    | **beforeRenderUI(e)**
    | 在组件根节点渲染之前触发

    :params Object: KISSY CustomEvent 对象

.. function:: ComponentProcess.Events.beforeSyncUI

    | **beforeSyncUI(e)**
    | 在同步组件内部状态前触发

    :params Object: KISSY CustomEvent 对象

