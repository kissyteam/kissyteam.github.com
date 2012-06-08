.. currentmodule:: overlay

Popup
===============================================


|  弹出层


Class
-----------------------------------------------

  * :class:`Popup`

  
Config Attributes
-----------------------------------------------

  与 :class:`Overlay` 的配置项完全相同, 其他新增配置项如下：
  
  * :data:`~Overlay.prototype.trigger`
  * :data:`~Overlay.prototype.triggerType`
  * :data:`~Overlay.prototype.mouseDelay`
  * :data:`~Overlay.prototype.toggle`
  
Properties
-----------------------------------------------

  * 同 :class:`Overlay` .

  
Methods
-----------------------------------------------

  * 同 :class:`Overlay` .

  
Events
-----------------------------------------------

  * 同 :class:`Overlay` , 包括 :func:`~Overlay.show` , :func:`~Overlay.hide` , :func:`~Overlay.beforeVisibleChange` .


Class Detail
-----------------------------------------------

.. class:: Popup
    
    | **Popup** ([container,] config)
    
    :param String|HTMLElement|KISSY.Node container: 可为'#id', '.class', DOM对象, KISSY.Node对象, 为空时表示新建
    :param Object config: 配置项, 详细见下方 **Config Attributes Detail** .
    
.. note::

    使用前请加上初始样式
    
    .. code-block:: html
    
        <style>
            .ks-overlay {
                position:absolute;
                left:-9999px;
                top:-9999px;
            }
        </style>    

    
Config Attributes Detail
-----------------------------------------------

    与 :class:`Overlay` 的配置项完全相同, 其他新增配置项如下：
    
.. data:: Overlay.prototype.trigger

    {String|HTMLElement|KISSY.Node} - 触点

.. data:: Overlay.prototype.triggerType

    {String} - 可选, 默认为'click', 触发类型, 可选'click', 'mouse'.

Properties Detail
-----------------------------------------------

    同 :class:`Overlay` .
    
    
Methods Detail
-----------------------------------------------

    同 :class:`Overlay` .
    
    
Events Detail
-----------------------------------------------

    同 :class:`Overlay` , 包括 :func:`~Overlay.show` , :func:`~Overlay.hide` , :func:`~Overlay.beforeVisibleChange` .

                              

