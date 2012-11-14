.. currentmodule:: overlay

Overlay
===============================================

|  悬浮的对话框

Class
-----------------------------------------------

  * :class:`Overlay`

Configs
-----------------------------------------------

  * :data:`~component.Controller.config.prefixCls`
  * :data:`~component.UIBase.config.srcNode`
  * :data:`~component.UIBase.Box.config.width`
  * :data:`~component.UIBase.Box.config.height`
  * :data:`~component.UIBase.Box.config.elCls`
  * :data:`~component.UIBase.ContentBox.config.content`
  * :data:`~component.UIBase.Position.config.zIndex`
  * :data:`~component.UIBase.Position.config.x`
  * :data:`~component.UIBase.Position.config.y`
  * :data:`~component.UIBase.Position.config.xy`
  * :data:`~component.UIBase.Align.config.align`
  * :data:`~Overlay.config.effect`
  * :data:`~component.UIBase.Resize.config.resize`
  * :data:`~component.UIBase.Close.config.closable`
  * :data:`~component.UIBase.Close.config.closeAction`
  * :data:`~component.UIBase.Box.config.elBefore`
  * :data:`~component.UIBase.Box.config.render`
  * :data:`~component.UIBase.Mask.config.mask`
  
  
Attributes
-----------------------------------------------

  * :attr:`~component.UIBase.Position.prototype.x`
  * :attr:`~component.UIBase.Position.prototype.y`
  * :attr:`~component.UIBase.Position.prototype.xy`
  * :attr:`~component.UIBase.Align.prototype.align`
  * :attr:`~component.UIBase.Close.prototype.closable`
  * :attr:`~component.UIBase.Box.prototype.visible`
  * :attr:`~component.UIBase.Box.prototype.el`
  * :attr:`~component.UIBase.ContentBox.prototype.contentEl`
  * :attr:`~component.UIBase.Mask.prototype.maskNode`
  
Methods
-----------------------------------------------

  * :meth:`~component.UIBase.prototype.render`
  * :meth:`~component.UIBase.prototype.destroy`
  * :meth:`~component.UIBase.Box.prototype.show`
  * :meth:`~component.UIBase.Box.prototype.hide`
  * :meth:`~component.UIBase.Align.prototype.center`
  * :meth:`~component.UIBase.Position.prototype.move`

Events
-----------------------------------------------

  * :func:`~component.UIBase.Box.Events.hide`
  * :func:`~component.UIBase.Box.Events.show`
  * :func:`~component.UIBase.Box.Events.beforeVisibleChange`
  * :func:`~component.UIBase.Events.afterRenderUI`

Class Detail
-----------------------------------------------

.. class:: Overlay

    | **Overlay** (config)
    | xclass: 'overlay'

    * 继承自
    :class:`~component.Controller`
    :class:`~component.UIBase.Box`
    :class:`~component.UIBase.ContentBox` ,
    :class:`~component.UIBase.Align` ,
    :class:`~component.UIBase.Position` ,
    :class:`~component.UIBase.Resize` ,
    :class:`~component.UIBase.Mask` ,
    包含其全部配置,属性,方法,事件.

    :param Object config: 配置项, 详细见下方 **Configs Detail** .


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


Configs Detail
-----------------------------------------------

.. data:: Overlay.config.effect

    {Object} - 可选, 显示或隐藏时的特效支持, 对象包含以下配置：

    .. data:: Overlay.config.effect.target

        {String|KISSY.Node} - 可选,动画的参考元素.

    .. data:: Overlay.config.effect.effect

        {String} - 可选, 默认为'none', 'none'(无特效), 'fade'(渐隐显示), 'slide'(滑动显示).

    .. data:: Overlay.config.effect.easing

        {String} - 可选, 同 KISSY.Anim 的 easing 参数配置.

    .. data:: Overlay.config.effect.duration

        {Number} - 可选, 动画持续时间, 以秒为单位.

    例如：

     .. code-block:: javascript

            {
                target:'',        // {String|KISSY.Node} - 可选，动画的参考元素
                effect:'none',    // {String} - 可选, 默认为'none', 'none'(无特效), 'fade'(渐隐显示), 'slide'(滑动显示).
                easing:'',        // {String} - 可选, 同 KISSY.Anim 的 easing 参数配置.
                duration:3        // {Number} - 可选, 动画持续时间, 以秒为单位.
            }

