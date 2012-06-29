.. currentmodule:: dd

Constrain
===============================================

|  限制拖放对象在某个区域


Class
-----------------------------------------------

  * :class:`~Constrain`

Configs
-----------------------------------------------

  * :attr:`~Constrain.config.constrain`
  
Methods
-----------------------------------------------

  * :meth:`~Constrain.attachDrag`
  * :meth:`~Constrain.detachDrag`
  * :meth:`~Constrain.destroy`


Class Detail
-----------------------------------------------

.. class:: Constrain
    
    | **Constrain** (config)

    :param Object config: 配置项, 详细见下方 **Configs Detail**
    

Configs Detail
-----------------------------------------------
    
.. attribute:: Constrain.config.constrain

     { Boolean | String | KISSY.Node } - 详见 :data:`~component.UIBase.Constrain.config.constrain`


Methods Detail
-----------------------------------------------

.. method:: Constrain.attachDrag

    | **attachDrag** (drag)
    | 注册可拖放对象到当前容器.

    :param Draggable drag: 需要使容器自动滚动的 Draggable 对象

.. method:: Constrain.detachDrag

    | **detachDrag** (drag)
    | 解除当前容器关联的可拖放对象.

    :param Draggable drag: 使容器自动滚动的 Draggable 对象

.. method:: Constrain.destroy

    | **destroy** (drag)
    | 解除当前容器关联的所有可拖放对象.

