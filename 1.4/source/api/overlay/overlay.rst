.. currentmodule:: overlay

Overlay
===============================================

|  悬浮的对话框

.. code-block:: javascript

    KISSY.use('overlay',function(S,Overlay){
        // use Overlay
    });

Class
-----------------------------------------------

  * :class:`Overlay`

Configs
-----------------------------------------------

  * :data:`~component.Control.config.prefixCls`
  * :data:`~component.Control.config.srcNode`
  * :data:`~base.Base.config.plugins`
  * :data:`~component.Control.config.width`
  * :data:`~component.Control.config.height`
  * :data:`~component.Control.config.elCls`
  * :data:`~component.Control.config.content`
  * :data:`~component.Control.config.zIndex`
  * :data:`~component.Control.config.x`
  * :data:`~component.Control.config.y`
  * :data:`~component.Control.config.xy`
  * :data:`~component.extension.Align.config.align`
  * :data:`~overlay.Overlay.config.effect`
  * :data:`~overlay.Overlay.config.closable`
  * :data:`~overlay.Overlay.config.closeAction`
  * :data:`~component.Control.config.elBefore`
  * :data:`~component.Control.config.render`
  * :data:`~overlay.Overlay.config.mask`


Attributes
-----------------------------------------------

  * :attr:`~component.Control.prototype.x`
  * :attr:`~component.Control.prototype.y`
  * :attr:`~component.Control.prototype.xy`
  * :attr:`~component.extension.Align.prototype.align`
  * :attr:`~Overlay.prototype.closable`
  * :attr:`~component.Control.prototype.visible`
  * :attr:`~component.Control.prototype.el`
  * :attr:`~component.extension.ContentRender.prototype.contentEl`
  * :attr:`~Overlay.prototype.maskNode`

Methods
-----------------------------------------------

  * :meth:`~base.Base.prototype.plug`
  * :meth:`~base.Base.prototype.unplug`
  * :meth:`~component.Control.prototype.render`
  * :meth:`~base.Base.prototype.destroy`
  * :meth:`~component.Control.prototype.show`
  * :meth:`~component.Control.prototype.hide`
  * :meth:`~component.extension.Align.prototype.center`
  * :meth:`~component.Control.prototype.move`
  * :meth:`~Overlay.prototype.loading`
  * :meth:`~Overlay.prototype.unloading`

Events
-----------------------------------------------

  * :func:`~component.Control.Events.hide`
  * :func:`~component.Control.Events.show`
  * :func:`~component.Control.Events.beforeVisibleChange`
  * :func:`~component.Control.Events.afterRenderUI`

Class Detail
-----------------------------------------------

.. class:: Overlay

    | **Overlay** (config)
    | xclass: 'overlay'

    | 继承自

    :class:`~component.Control`

    :class:`~component.extension.Align` ,

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
            .ks-overlay-hidden {
                visibility: hidden;
            }

            .ks-overlay-mask-hidden {
                display: none;
            }

            .ks-overlay-shown {
                visibility: visible;
            }

            .ks-overlay-mask-shown{
                display: block;
            }
        </style>


Configs Detail
-----------------------------------------------

.. data:: Overlay.config.effect

    {Object} - 可选, 显示或隐藏时的特效支持, 对象包含以下配置：

    .. data:: Overlay.config.effect.target

        {String|KISSY.Node} - 可选,动画的参考元素.

    .. data:: Overlay.config.effect.effect

        {String} - 可选. 可取值 'fade'(渐隐显示), 'slide'(滑动显示).

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


.. data:: Overlay.config.closable

    {Boolean} - 对话框右上角是否包括关闭按钮


.. data:: Overlay.config.closeAction

    {String} - 点击关闭按钮的动作。默认 "hide" 隐藏，也可设置 "destroy" 销毁该组件.


.. data:: Overlay.config.mask

    {Boolean|Object} - 组件显示时是否使用遮罩层盖住页面其他元素

    .. data:: Overlay.config.mask.closeOnClick

        {Boolean} - 可选. 点击遮罩层是否关闭 overlay. (具体隐藏或销毁依赖 :data:`~overlay.Overlay.config.closeAction`)

    .. data:: Overlay.config.mask.effect

        {String} - 可选. 遮罩层显示隐藏效果. (取值 'fade','slide')

    .. data:: Overlay.config.mask.duration

        {Number} - 可选. 效果持续时间. 单位秒


Attributes Detail
-----------------------------------------------

.. attribute:: Overlay.prototype.closable

    {Boolean} - 设置后显示或隐藏关闭按钮.

.. attribute:: Overlay.prototype.maskNode

    {KISSY.Node} - 遮罩层节点.

Methods Detail
-----------------------------------------------

.. method:: Overlay.prototype.loading()

    | **loading** ()
    | 生成一个加载盖住当前组件内容


.. method:: Overlay.prototype.unloading

    | **unloading** ()
    | 隐藏生成的加载层


.. note::

    KISSY 1.4 srcNode 初始化组件时必须要求内容节点必须包含类名 ks-overlay-content (这里 ks- 为 prefixCls)，例如

    .. code-block:: html

        <div class="ks-overlay" id='t'>
            <div class="ks-overlay-content">

            </div>
        </div>

        <script>
            new Overlay({
                srcNode:'#t'
            });
        </script>
