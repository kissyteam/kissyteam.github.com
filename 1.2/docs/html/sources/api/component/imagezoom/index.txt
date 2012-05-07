.. module:: imagezoom

ImageZoom
===============================================

|  图片放大镜效果


Class
-----------------------------------------------

    * :class:`ImageZoom`

Config Attributes
-----------------------------------------------

    * :data:`~ImageZoom.config.imageNode`
    * :data:`~ImageZoom.config.type`
    * :data:`~ImageZoom.config.bigImageSrc`
    * :data:`~ImageZoom.config.bigImageSize` 
    * :data:`~ImageZoom.config.bigImageWidth`
    * :data:`~ImageZoom.config.bigImageHeight` 
    * :data:`~ImageZoom.config.position`
    * :data:`~ImageZoom.config.align`
    * :data:`~ImageZoom.config.alignTo` 
    * :data:`~ImageZoom.config.offset` 
    * :data:`~ImageZoom.config.preload`
    * :data:`~ImageZoom.config.timeout`
    * :data:`~ImageZoom.config.timeoutMsg`
    * :data:`~ImageZoom.config.hasZoom`
    * :data:`~ImageZoom.config.zoomSize`
    * :data:`~ImageZoom.config.width`
    * :data:`~ImageZoom.config.height`
    * :data:`~ImageZoom.config.showIcon`
    * :data:`~ImageZoom.config.iconClass`
    * :data:`~ImageZoom.config.lensIcon`
    * :data:`~ImageZoom.config.zoomCls`
    * :data:`~ImageZoom.config.lensClass`
    * :data:`~ImageZoom.config.wrapClass`

Properties
-----------------------------------------------

    * :attr:`~ImageZoom.prototype.image`
    * :attr:`~ImageZoom.prototype.config`
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
    * :meth:`~ImageZoom.prototype.refreshRegion`

Events
-----------------------------------------------

    * :func:`~ImageZoom.show`
    * :func:`~ImageZoom.hide`


Class Detail
-----------------------------------------------

.. class:: ImageZoom
    
    | **ImageZoom** (trigger,config)
    
    :param String|KISSY.Node|HTMLElement: 小图元素或选择器 .
    :param Object config: 配置项, 详细见下方 **Config Attributes Detail** .
    
    | **ImageZoom** (config)

    :param Object config: 配置项, 详细见下方 **Config Attributes Detail** . 原本的 trigger 在 1.2 中由配置项中的 :data:`~ImageZoom.config.imageNode` 代替

    

Config Attributes Detail
-----------------------------------------------

.. data:: ImageZoom.config.imageNode



    {String|HTMLElement} - 小图元素选择器或小图元素.

.. data:: ImageZoom.config.type

    {String} - 可选, 缩放显示类型, 默认是标准模式 'standard', 或者内嵌模式 'inner'.

.. data:: ImageZoom.config.bigImageSrc

    {String} - 可选, 大图路径, 为 '' 时, 取触点上的 data-ks-imagezoom 属性值. 默认为 ''.

.. data:: ImageZoom.config.bigImageSize

    .. deprecated:: 1.2

    {Array} - 可选, 大图高宽, 如 [800, 800]; 是指在没有加载完大图前, 使用这个值来替代计算, 等加载完后会重新更新镜片大小, 具体场景下, 请设置个更合适的值.
    **1.2 中使用下面两个大图高宽配置.**


.. data:: ImageZoom.config.bigImageWidth



    {Number} - 可选, 大图宽度, 默认为 800; 

.. data:: ImageZoom.config.bigImageHeight



    {Number} - 可选, 大图高度, 默认为 800; 

.. data:: ImageZoom.config.position

    .. deprecated:: 1.2

    {String} - 可选, 大图显示在小图的哪个位置. 可取 'top', 'right', 'bottom', 'left', 'inner', 当为 'inner' 时, 会覆盖显示在小图上. 默认为 'right'.
    **1.2中, 设置 type 不同模式, 设置 align 不同的对齐方式.**

.. data:: ImageZoom.config.alignTo

    .. deprecated:: 1.2

    {Boolean} - 可选, 大图显示位置相对于哪个元素. 默认不设置, 相对于小图位置, 如果取 PARENT, 为小图的 offsetParent 元素.
    **1.2中, 使用 align.**

.. data:: ImageZoom.config.align



    {Object} - 同 :data:`~uibase.Align.config.align` .

.. data:: ImageZoom.config.offset

    .. deprecated:: 1.2

    {Number | Array} - 可选, 大图相对于小图位置的偏移量. 单一值或 [x, y]. 默认为 10. x 值对应于水平方向上的偏移, y值对应于垂直方向上的偏移. 当 offset 为一个 Number 或 [Number] 时, 仅指水平方向上的偏移, 垂直方向上偏移为 0; 如果 position 设置 'top'/'bottom', 则需要通过 offset 为 [0, 10]来设置.
    **1.2 中 使用 align 中的 offset 作为偏移量.**

.. data:: ImageZoom.config.preload

    {Boolean} - 可选, 是否预加载大图. 默认为 true.

.. data:: ImageZoom.config.timeout

    .. deprecated:: 1.2

    {Number} - 可选, 等待大图加载的最大时间, 单位: s. 默认 2 min.
    **1.2中, 删除该选项.**

.. data:: ImageZoom.config.timeoutMsg

    .. deprecated:: 1.2

    {String} - 可选, 大图无法加载超时时, 显示的提示文字. 默认为 "图片暂不可用".
    **1.2中, 删除该选项.**

.. data:: ImageZoom.config.hasZoom

    {Boolean} - 可选, 初始时是否显示放大效果. 默认为 true, 显示放大. 在多图切换时, 可重设该值来开启或关闭显示放大功能. 如果多个图都不需要放大显示, ImageZoom 不会生成任何东西.

.. data:: ImageZoom.config.zoomSize

    .. deprecated:: 1.2

    {Array<Number|String>} - 可选, 放大区域宽高. 默认为 ['auto', 'auto'], 当取 'auto' 时, 宽/高 取小图的高/宽.
    **1.2中, 使用下面的 width/height 设置放大区域宽/高.**

.. data:: ImageZoom.config.width



    {Number|String} - 可选, 放大区域宽度. 默认为 'auto', 当取 'auto' 时, 宽度取小图的宽度.

.. data:: ImageZoom.config.height



    {Number|String} - 可选, 放大区域高度. 默认为 'auto', 当取 'auto' 时, 高度取小图的高度.

.. data:: ImageZoom.config.iconClass



    {String} - 可选, 放大镜图标的类, 默认为 'ks-imagezoom-icon'

.. data:: ImageZoom.config.lensIcon

    .. deprecated:: 1.2

    {Boolean} - 可选, 是否显示放大镜提示图标, 默认为 true.
    **1.2 中使用下面的 showIcon.**

.. data:: ImageZoom.config.showIcon



    {Boolean} - 可选, 是否显示放大镜小 icon, 默认为 true.

.. data:: ImageZoom.config.lensClass



    {String} - 可选, 镜片类, 默认为 'ks-imagezoom-lens

.. data:: ImageZoom.config.zoomCls

    .. deprecated:: 1.2

    {String} - 可选, 放大区域额外样式, 默认为 ''. 原有放大区域样式为 'ks-imagezoom-viewer', 设置该值会追加元素 class.
    **1.2 中使用下面的 wrapClass.**

.. data:: ImageZoom.config.wrapClass



    {String|HTMLElement} - 显示区域容器的类.
    
Properties Detail
-----------------------------------------------

.. attribute:: ImageZoom.prototype.image

    {HTMLElement} - 需要缩放的小图元素.

.. attribute:: ImageZoom.prototype.config

    {Object} - 配置选项, 具体参见上述 Config.

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

.. method:: ImageZoom.prototype.refreshRegion

    | **refreshRegion** ()
    | 调整放大区域位置.

Events Detail
-----------------------------------------------

.. function:: ImageZoom.show
    
    | **show** ()
    | 放大区域显示之后.

.. function:: ImageZoom.hide

    | **hide** ()
    | 放大区域隐藏之后.

