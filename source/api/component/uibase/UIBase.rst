.. currentmodule:: Overlay

UIBase
===============================

|  组件基类，仅用于 KISSY 内部组件继承，不建议外部使用
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/uibase/>`_



Class
---------------------------------

    * :class:`~UIBase.UIBase`
    
    
Methods
-----------------------------------------------

    * :meth:`~UIBase.prototype.render`    
    * :meth:`~UIBase.prototype.destroy`    

Class Detail
--------------------------

.. class:: UIBase

    | **UIBase** (config)
    
    :param Object config: 配置项
    
    
Methods Detail
-----------------------------------------------    

.. method:: UIBase.prototype.render()

    渲染该组件到配置的容器，详见 :attr:`Box.prototype.render <UIBase.Box.protoype.render>`
    
.. method:: UIBase.prototype.destroy()

    销毁该组件（删除节点以及去除事件绑定）.

    
