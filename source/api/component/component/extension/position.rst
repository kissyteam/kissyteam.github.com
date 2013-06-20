.. currentmodule:: component

Component.Extension.Position
===============================

|  对齐。组件扩充类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review


Class
---------------------------------

    * :class:`~component.extension.Position`
  

Configs
-----------------------------------------------

    * :data:`~component.extension.Position.config.x`
    * :data:`~component.extension.Position.config.y`
    * :data:`~component.extension.Position.config.zIndex`
    
Attributes
-----------------------------------------------

  * :attr:`~component.extension.Position.prototype.x`
  * :attr:`~component.extension.Position.prototype.y`
  * :attr:`~component.extension.Position.prototype.zIndex`
      
    
Methods
-----------------------------------------------

    * :meth:`~component.extension.Position.prototype.move`
    

Class Detail
--------------------------

.. class:: extension.Position

    | **Component.Extension.Position** (config)
    
    :param Object config: 配置项，详细见下方 **Configs Detail** .
    
    
Configs Detail
-----------------------------------------------
    
.. data:: extension.Position.config.zIndex

    {Number} - 可选, 默认为 9999, 设置组件根节点的 z-index 值.

.. data:: extension.Position.config.x

    {Number} - 可选, 组件根节点相对于文档根节点的 x 坐标.

.. data:: extension.Position.config.y

    {Number} - 可选, 组件根节点相对于文档根节点的 y 坐标.
    
Attributes Detail
---------------------------------------------------------------

.. attribute:: extension.Position.prototype.zIndex

    {Number} - 组件根节点的 z-index 值
    
.. attribute:: extension.Position.prototype.x

    {Number} - 组件根节点相对于文档根节点的 x 坐标.

.. attribute:: extension.Position.prototype.y

    {Number} - 组件根节点相对于文档根节点的 y 坐标.
    
Methods Detail
-----------------------------------------------    

.. method:: extension.Position.prototype.move()

    | **move** (x,y)
    | 设置组件根节点相对于文档左上角的坐标偏移
    
    :param number x: 横坐标偏移量
    :param number y: 纵坐标偏移量