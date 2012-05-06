.. currentmodule:: uibase

UIBase
===============================

|  组件基类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review



Class
---------------------------------

    * :class:`~uibase.UIBase`   
    
    
Methods
-----------------------------------------------

    * :meth:`~UIBase.prototype.render`    
    * :meth:`~UIBase.prototype.destroy`    

Class Detail
--------------------------

.. class:: UIBase

    | **UIBase** (config)
    
    扩充自 :class:`Event.Target` ，
    具备 :meth:`~event.Target.fire` , :meth:`~event.Target.on` , :meth:`~event.Target.detach` 等方法.
    
    :param Object config: 配置项
    
    
Methods Detail
-----------------------------------------------    

.. method:: UIBase.prototype.render()

    | **render ( )**

    渲染该组件到配置的容器 ( :data:`~Box.config.render` ) 或指定节点 ( :data:`~Box.config.elBefore` ) 前.
    
.. method:: UIBase.prototype.destroy()

    | **destroy ( )**

    销毁该组件（删除节点以及去除事件绑定）.

    
