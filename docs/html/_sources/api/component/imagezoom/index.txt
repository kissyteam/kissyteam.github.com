.. module:: imagezoom

ImageZoom
===============================================

|  图片放大镜效果


.. code-block:: javascript

    KISSY.use('imagezoom',function(S,ImageZoom){
        // use ImageZoom
    });

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
    * :data:`~ImageZoom.config.hasZoom`
    * :data:`~ImageZoom.config.width`
    * :data:`~ImageZoom.config.height`

Attributes
-----------------------------------------------

    * :attr:`~ImageZoom.prototype.bigImageWidth`
    * :attr:`~ImageZoom.prototype.bigImageHeight`
    * :attr:`~ImageZoom.prototype.imageSrc`
    * :attr:`~ImageZoom.prototype.bigImageSrc`
    * :attr:`~ImageZoom.prototype.hasZoom`

Events
-----------------------------------------------

    * :func:`~ImageZoom.Event.show`
    * :func:`~ImageZoom.Event.hide`


Class Detail
-----------------------------------------------

.. class:: ImageZoom
    
    | **ImageZoom** (config)
    | 继承自 :class:`~overlay.Overlay`

    :param Object config: 配置项, 详细见下方 **Configs Detail** .

    

Configs Detail
-----------------------------------------------

.. data:: ImageZoom.config.imageNode

    {String|HTMLElement} - 小图元素选择器或小图元素.

.. data:: ImageZoom.config.type

    {String} - 可选, 缩放显示类型, 默认是标准模式 'standard', 或者内嵌模式 'inner'.

.. data:: ImageZoom.config.bigImageSrc

    {String} - 可选, 大图路径, 为 '' 时, 取触点上的 data-ks-imagezoom 属性值. 默认为 ''.

.. data:: ImageZoom.config.bigImageWidth

    {Number} - 必填！ 大图宽度

.. data:: ImageZoom.config.bigImageHeight

    {Number} - 必填！ 大图高度

.. data:: ImageZoom.config.hasZoom

    {Boolean} - 可选, 初始时是否显示放大效果. 默认为 true, 显示放大. 在多图切换时, 可重设该值来开启或关闭显示放大功能. 如果多个图都不需要放大显示, ImageZoom 不会生成任何东西.

.. data:: ImageZoom.config.width

    {Number|String} - 可选, 放大区域宽度. 默认为 'auto', 当取 'auto' 时, 宽度取小图的宽度.

.. data:: ImageZoom.config.height

    {Number|String} - 可选, 放大区域高度. 默认为 'auto', 当取 'auto' 时, 高度取小图的高度.

    
Attributes Detail
-----------------------------------------------

.. attribute:: ImageZoom.prototype.bigImageHeight

    {Number} - 修改此属性改变大图大小

.. attribute:: ImageZoom.prototype.bigImageWidth

    {Number} - 修改此属性改变大图大小

.. attribute:: ImageZoom.prototype.hasZoom

    {Boolean} - 修改此属性禁用或启用放大功能

.. attribute:: ImageZoom.prototype.bigImageSrc

    {String} - 修改此属性改变大图地址

.. attribute:: ImageZoom.prototype.imageSrc

    {String} - 修改此属性改变小图地址


Events Detail
-----------------------------------------------

.. function:: ImageZoom.Event.show
    
    | **show** ()
    | 放大区域显示之后.

.. function:: ImageZoom.Event.hide

    | **hide** ()
    | 放大区域隐藏之后.

