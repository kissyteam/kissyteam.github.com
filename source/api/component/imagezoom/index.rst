.. module:: imagezoom

ImageZoom
===============================================

|  图片放大镜效果

Class
-----------------------------------------------

    * :class:`ImageZoom`

Configs
-----------------------------------------------

    * :data:`~ImageZoom.config.imageNode`
    * :data:`~ImageZoom.config.type`
    * :data:`~ImageZoom.config.bigImageSrc`
    * :data:`~ImageZoom.config.bigImageWidth`
    * :data:`~ImageZoom.config.bigImageHeight`
    * :data:`~ImageZoom.config.align`
    * :data:`~ImageZoom.config.preload`
    * :data:`~ImageZoom.config.hasZoom`
    * :data:`~ImageZoom.config.width`
    * :data:`~ImageZoom.config.height`
    * :data:`~ImageZoom.config.showIcon`
    * :data:`~ImageZoom.config.iconClass`
    * :data:`~ImageZoom.config.lensClass`
    * :data:`~ImageZoom.config.wrapClass`

Attributes
-----------------------------------------------

    * :attr:`~ImageZoom.prototype.image`
    * :attr:`~ImageZoom.prototype.viewer`
    * :attr:`~ImageZoom.prototype.lens`
    * :attr:`~ImageZoom.prototype.lensIcon`
    * :attr:`~ImageZoom.prototype.bigImage`

Methods
-----------------------------------------------

    * :meth:`~ImageZoom.prototype.show`
    * :meth:`~ImageZoom.prototype.hide`
    * :meth:`~ImageZoom.prototype.set`
    * :meth:`~ImageZoom.prototype.changeImageSrc`

Events
-----------------------------------------------

    * :func:`~ImageZoom.Event.show`
    * :func:`~ImageZoom.Event.hide`


Class Detail
-----------------------------------------------

.. class:: ImageZoom
    
    | **ImageZoom** (trigger,config)
    
    :param String|KISSY.Node|HTMLElement: 小图元素或选择器 .
    :param Object config: 配置项, 详细见下方 **Configs Detail** .
    
    | **ImageZoom** (config)

    :param Object config: 配置项, 详细见下方 **Configs Detail** . 原本的 trigger 在 1.2 中由配置项中的 :data:`~ImageZoom.config.imageNode` 代替

    

Configs Detail
-----------------------------------------------

.. data:: ImageZoom.config.imageNode



    {String|HTMLElement} - 小图元素选择器或小图元素.

.. data:: ImageZoom.config.type

    {String} - 可选, 缩放显示类型, 默认是标准模式 'standard', 或者内嵌模式 'inner'.

.. data:: ImageZoom.config.bigImageSrc

    {String} - 可选, 大图路径, 为 '' 时, 取触点上的 data-ks-imagezoom 属性值. 默认为 ''.

.. data:: ImageZoom.config.bigImageWidth


    {Number} - 可选, 大图宽度, 默认为 800; 

.. data:: ImageZoom.config.bigImageHeight

    {Number} - 可选, 大图高度, 默认为 800;

.. data:: ImageZoom.config.align

    {Object} - 同 :data:`~component.UIBase.Align.config.align` .

.. data:: ImageZoom.config.preload

    {Boolean} - 可选, 是否预加载大图. 默认为 true.


.. data:: ImageZoom.config.hasZoom

    {Boolean} - 可选, 初始时是否显示放大效果. 默认为 true, 显示放大. 在多图切换时, 可重设该值来开启或关闭显示放大功能. 如果多个图都不需要放大显示, ImageZoom 不会生成任何东西.

.. data:: ImageZoom.config.width

    {Number|String} - 可选, 放大区域宽度. 默认为 'auto', 当取 'auto' 时, 宽度取小图的宽度.

.. data:: ImageZoom.config.height

    {Number|String} - 可选, 放大区域高度. 默认为 'auto', 当取 'auto' 时, 高度取小图的高度.

.. data:: ImageZoom.config.iconClass

    {String} - 可选, 放大镜图标的类, 默认为 'ks-imagezoom-icon'


.. data:: ImageZoom.config.showIcon

    {Boolean} - 可选, 是否显示放大镜小 icon, 默认为 true.

.. data:: ImageZoom.config.lensClass

    {String} - 可选, 镜片类, 默认为 'ks-imagezoom-lens

.. data:: ImageZoom.config.wrapClass

    {String|HTMLElement} - 显示区域容器的类.
    
Attributes Detail
-----------------------------------------------

.. attribute:: ImageZoom.prototype.image

    {HTMLElement} - 需要缩放的小图元素.

.. attribute:: ImageZoom.prototype.viewer

    {HTMLElement} - 显示区域的容器元素.

.. attribute:: ImageZoom.prototype.lens

    {HTMLElement} - 镜片元素.

.. attribute:: ImageZoom.prototype.lensIcon

    {HTMLElement} - 放大镜图标元素.

.. attribute:: ImageZoom.prototype.bigImage

    {HTMLElement} - 大图元素.


Methods Detail
-----------------------------------------------

.. method:: ImageZoom.prototype.show

    | **show** ()
    | 显示放大区域.

.. method:: ImageZoom.prototype.hide

    | **hide** ()
    | 隐藏放大区域.

.. method:: ImageZoom.prototype.set

    | **set** (name,val)
    | 设置bigImage、hasZoom属性

    :param String name: 属性名, igImage或hasZoom
    :param String|Boolean val: 属性值, bigImage属性为String类型, hasZoom为Boolean类型
    
    .. bigImageSrc - String: 大图路径, 为 '' 时, 取触点上的 data-ks-imagezoom 属性值. 默认为 ''. 
    .. 如果有多张图片切换时, 需要修改 大图src, 如:

    .. code-block:: javascript

        KISSY.use("imagezoom",function(S,ImageZoom) {
            var m = new ImageZoom("#multi");
            S.Event.on("#imgList img", 'click', function() {
                var data = S.DOM.attr(this, 'data-ks-imagezoom');
                S.DOM.attr('#multi', 'src', data+'_310x310.jpg');
                m.set('bigImageSrc', data);
            });
        });

    .. hasZoom - Boolean: 初始时是否显示放大效果. 默认为 true, 显示放大. 在多图切换时, 可重设该值来开启或关闭显示放大功能. 如果多个图都不需要放大显示, ImageZoom 不会生成任何东西.

.. method:: ImageZoom.prototype.changeImageSrc

    | **changeImageSrc** (src)
    | 设置小图 src.

Events Detail
-----------------------------------------------

.. function:: ImageZoom.Event.show
    
    | **show** ()
    | 放大区域显示之后.

.. function:: ImageZoom.Event.hide

    | **hide** ()
    | 放大区域隐藏之后.

