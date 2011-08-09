.. currentmodule:: uibase

UIBase.Position
===============================

|  对齐。组件扩充类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/uibase/>`_



Class
---------------------------------

    * :class:`Position`
  

Config Attributes
-----------------------------------------------

    * :data:`~Position.config.x`
    * :data:`~Position.config.y`
    * :data:`~Position.config.xy`
    * :data:`~Position.config.zIndex`
    
Properties
-----------------------------------------------

  * :attr:`~Position.prototype.x`
  * :attr:`~Position.prototype.y`
  * :attr:`~Position.prototype.xy`
  * :attr:`~Position.prototype.zIndex`
      
    
Methods
-----------------------------------------------

    * :meth:`~Position.prototype.move`
    

Class Detail
--------------------------

.. class:: Position

    | **Position** (config)
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
    
Config Attributes Detail
-----------------------------------------------
    
.. data:: Position.config.zIndex

    {Number} - 可选, 默认为 9999, 设置组件根节点的 z-index 值.

.. data:: Position.config.x

    {Number} - 可选, 组件根节点相对于文档根节点的 x 坐标.

.. data:: Position.config.y

    {Number} - 可选, 组件根节点相对于文档根节点的 y 坐标.

.. data:: Position.config.xy

    {Array<Number>} - 可选, 相当于将数组第一个元素设置为 :attr:`x` 的值, 将数组的第二个元素设置为 :attr:`y` 的值.
    
    
Properties Detail
---------------------------------------------------------------

.. attribute:: Position.prototype.zIndex

    {Number} - 组件根节点的 z-index 值
    
.. attribute:: Position.prototype.x

    {Number} - 组件根节点相对于文档根节点的 x 坐标.

.. attribute:: Position.prototype.y

    {Number} - 组件根节点相对于文档根节点的 y 坐标.

.. attribute:: Position.prototype.xy

    {Array<Number>} - 相当于将数组第一个元素设置为 :attr:`x` 的值, 将数组的第二个元素设置为 :attr:`y` 的值.    
    
Methods Detail
-----------------------------------------------    

.. method:: Position.prototype.move()

    | **move** (x,y)
    | 设置组件根节点相对于文档左上角的坐标偏移
    
    :param number x: 横坐标偏移量
    :param number y: 纵坐标偏移量