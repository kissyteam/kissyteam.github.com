.. currentmodule:: component

Component.UIBase
===============================

|  组件基类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review

Class
---------------------------------

    * :class:`~component.UIBase`


Configs
------------------------------------

    * :data:`~base.Base.config.listeners`
    * :data:`~base.Base.config.plugins`
    * :data:`~UIBase.config.srcNode`


Methods
-----------------------------------------------

    * :meth:`~base.Base.prototype.plug`
    * :meth:`~base.Base.prototype.unplug`
    * :meth:`~UIBase.prototype.render`
    * :meth:`~base.Base.prototype.destroy`


Events
-----------------------------------------------

  * :func:`~UIBase.Events.afterRenderUI`

Class Detail
--------------------------

.. class:: UIBase

    | **UIBase** (config)
    | 继承自 :class:`~base.Base` ， 包含其所有配置，属性，方法

    :param Object config: 配置项


Configs Detail
------------------------------------------------

    .. data:: UIBase.config.srcNode

        {KISSY.Node} - 当前组件在 dom 树中已经存在的节点.


Methods Detail
-----------------------------------------------

.. method:: UIBase.prototype.render()

    | **render ( )**

    渲染该组件到 dom 树中.

Events Detail
-----------------------------------------------

.. function:: UIBase.Events.afterRenderUI

    | **afterRenderUI** ()
    | 当组件被渲染 dom 时触发


