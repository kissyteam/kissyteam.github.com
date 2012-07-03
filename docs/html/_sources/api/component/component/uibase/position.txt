.. currentmodule:: component

Component.UIBase.Position
===============================

|  对齐。组件扩充类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review



Class
---------------------------------

    * :class:`UIBase.Position`
  

Configs
-----------------------------------------------

    * :data:`~UIBase.Position.config.x`
    * :data:`~UIBase.Position.config.y`
    * :data:`~UIBase.Position.config.xy`
    * :data:`~UIBase.Position.config.zIndex`
    
Attributes
-----------------------------------------------

  * :attr:`~UIBase.Position.prototype.x`
  * :attr:`~UIBase.Position.prototype.y`
  * :attr:`~UIBase.Position.prototype.xy`
  * :attr:`~UIBase.Position.prototype.zIndex`
      
    
Methods
-----------------------------------------------

    * :meth:`~UIBase.Position.prototype.move`
    

Class Detail
--------------------------

.. class:: UIBase.Position

    | **UIBase.Position** (config)
    
    :param Object config: 配置项，详细见下方 **Configs Detail** .
    
    
Configs Detail
-----------------------------------------------
    
.. data:: UIBase.Position.config.zIndex

    {Number} - 可选, 默认为 9999, 设置组件根节点的 z-index 值.

.. data:: UIBase.Position.config.x

    {Number} - 可选, 组件根节点相对于文档根节点的 x 坐标.

.. data:: UIBase.Position.config.y

    {Number} - 可选, 组件根节点相对于文档根节点的 y 坐标.

.. data:: UIBase.Position.config.xy

    {Array<Number>} - 可选, 相当于将数组第一个元素设置为 :attr:`x` 的值, 将数组的第二个元素设置为 :attr:`y` 的值.
    
    
Attributes Detail
---------------------------------------------------------------

.. attribute:: UIBase.Position.prototype.zIndex

    {Number} - 组件根节点的 z-index 值
    
.. attribute:: UIBase.Position.prototype.x

    {Number} - 组件根节点相对于文档根节点的 x 坐标.

.. attribute:: UIBase.Position.prototype.y

    {Number} - 组件根节点相对于文档根节点的 y 坐标.

.. attribute:: UIBase.Position.prototype.xy

    {Array<Number>} - 相当于将数组第一个元素设置为 :attr:`x` 的值, 将数组的第二个元素设置为 :attr:`y` 的值.    
    
Methods Detail
-----------------------------------------------    

.. method:: UIBase.Position.prototype.move()

    | **move** (x,y)
    | 设置组件根节点相对于文档左上角的坐标偏移
    
    :param number x: 横坐标偏移量
    :param number y: 纵坐标偏移量