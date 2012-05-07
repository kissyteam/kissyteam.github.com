.. currentmodule:: uibase

UIBase.Resize
===============================

|  调整大小功能。组件扩充类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review



Class
---------------------------------

    * :class:`Resize`
  

Config Attributes
-----------------------------------------------

    * :data:`~Resize.config.resize`
    

Class Detail
--------------------------

.. class:: Resize

    | **Resize** (config)
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
    
Config Attributes Detail
-----------------------------------------------
    
.. data:: Resize.config.resize

    {Object} - 可选, 拖动调整大小的配置, 例如：
    
    .. code-block:: javascript
    
        {
            minWidth:100, //类型整数, 表示拖动调整大小的最小宽度
            maxWidth:1000, //类型整数, 表示拖动调整大小的最大宽度
            minHeight:100, //类型整数, 表示拖动调整大小的最小高度
            maxHeight:1000, //类型整数, 表示拖动调整大小的最大高度
            handlers:["b","t","r","l","tr","tl","br","bl"] //类型字符串数组, 取自上述 8 个值的集合.
        }    
          
    ``handlers`` 配置表示的数组元素可取上述八种值之一, t,b,l,r 分别表示 top,bottom,left,right, 加上组合共八种取值,
    可在上, 下, 左, 右以及左上, 左下, 右上, 右下进行拖动.


.. note::

    resize 插件本质上是调用的 :mod:`resizable` 的接口, 更多的文档和示例可进一步查看.