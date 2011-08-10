.. module:: ImageZoom

ImageZoom
===============================================

|  图片放大镜效果
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/imagezoom>`_  | `Demo <http://docs.kissyui.com/kissy/src/imagezoom/demo.html>`_

Class
-----------------------------------------------

  * :class:`~ImageZoom.ImageZoom`

Config Attributes
-----------------------------------------------

  * :data:`type`
  * :data:`bigImageSrc`
  * :data:`bigImageSize`
  * :data:`position`
  * :data:`alignTo`
  * :data:`offset`
  * :data:`preload`
  * :data:`timeout`
  * :data:`timeoutMsg`
  * :data:`hasZoom`
  * :data:`zoomSize`
  * :data:`lensIcon`
  * :data:`zoomCls`
  
Properties
-----------------------------------------------

  * :attr:`image`
  * :attr:`config`
  * :attr:`lens`
  * :attr:`lens`
  * :attr:`lensIcon`
  * :attr:`bigImage`

Methods
-----------------------------------------------

  * :meth:`show`
  * :meth:`hide`
  * :meth:`set`
  * :meth:`changeImageSrc`
  * :meth:`refreshRegion`

Events
-----------------------------------------------

  * :func:`show`
  * :func:`hide`


Class Detail
-----------------------------------------------

.. class:: ImageZoom
    
    | **ImageZoom** (trigger,config)
    
    :param String|KISSY.Node|HTMLDOMNode trigger: 配置项, 小图元素或小图id .
    :param Object config: 配置项, 详细见下方 **Config Attributes Detail** .

Config Attributes Detail
-----------------------------------------------
    
.. data:: type

    {String} - 可选, 缩放显示类型, 默认是标准模式 'standard', 目前仅支持此模式.

.. data:: bigImageSrc

    {String} - 可选, 大图路径, 为 '' 时, 取触点上的 data-ks-imagezoom 属性值. 默认为 ''.

.. data:: bigImageSize

    {Array} - 可选, 大图高宽, 如 [800, 800]; 是指在没有加载完大图前, 使用这个值来替代计算, 等加载完后会重新更新镜片大小, 具体场景下, 请设置个更合适的值.

.. data:: position

    {String} - 可选, 大图显示在小图的哪个位置. 可取 'top', 'right', 'bottom', 'left', 'inner', 当为 'inner' 时, 会覆盖显示在小图上. 默认为 'right'.

.. data:: alignTo

    {Boolean} - 可选, 大图显示位置相对于哪个元素. 默认不设置, 相对于小图位置, 如果取 PARENT, 为小图的 offsetParent 元素.

.. data:: offset

    {Number | Array} - 可选, 大图相对于小图位置的偏移量. 单一值或 [x, y]. 默认为 10. x 值对应于水平方向上的偏移, y值对应于垂直方向上的偏移. 当 offset 为一个 Number 或 [Number] 时, 仅指水平方向上的偏移, 垂直方向上偏移为 0; 如果 position 设置 'top'/'bottom', 则需要通过 offset 为 [0, 10]来设置.

.. data:: preload

    {Boolean} - 可选, 是否预加载大图. 默认为 true.

.. data:: timeout

    {Number} - 可选, 等待大图加载的最大时间, 单位: s. 默认 2 min.
    .. 新版已经删除该选项.

.. data:: timeoutMsg

    {String} - 可选, 大图无法加载超时时, 显示的提示文字. 默认为 "图片暂不可用".
    .. 新版已经删除该选项.

.. data:: hasZoom

    {Boolean} - 可选, 初始时是否显示放大效果. 默认为 true, 显示放大. 在多图切换时, 可重设该值来开启或关闭显示放大功能. 如果多个图都不需要放大显示, ImageZoom 不会生成任何东西.

.. data:: zoomSize

    {Array} - 可选, 放大区域宽高. 默认为 ['auto', 'auto'], 当取 'auto' 时, 宽/高 取小图的高/宽.

.. data:: lensIcon

    {Boolean} - 可选, 是否显示放大镜提示图标, 默认为 true.

.. data:: zoomCls

    {String} - 可选, 放大区域额外样式, 默认为 ''. 原有放大区域样式为 'ks-imagezoom-viewer', 设置该值会追加元素 class.

    
Properties Detail
-----------------------------------------------

.. attribute:: image

    {HTMLElement} - 需要缩放的小图元素.

.. attribute:: config

    {Object} - 配置选项, 具体参见上述 Config.

.. attribute:: lens

    {HTMLElement} - 镜片元素.

.. attribute:: lensIcon

    {HTMLElement} - 放大镜图标元素.

.. attribute:: bigImage

    {HTMLElement} - 大图元素.


Methods Detail
-----------------------------------------------

.. method:: show

    | **show** ()
    | 显示放大区域.

.. method:: hide

    | **hide** ()
    | 隐藏放大区域.

.. method:: set 

    | **set** (name,val)
    | 设置bigImage、hasZoom属性

    :param String name: 属性名, igImage或hasZoom
    :param String|Boolean val: 属性值, bigImage属性为String类型, hasZoom为Boolean类型
    
    .. bigImageSrc - String: 大图路径, 为 '' 时, 取触点上的 data-ks-imagezoom 属性值. 默认为 ''. 
    .. 如果有多张图片切换时, 需要修改 大图src, 如:

    .. code-block:: javascript

        KISSY.ready(function(S) {
            var m = new S.ImageZoom("#multi");
            S.Event.on("#imgList img", 'click', function() {
                var data = S.DOM.attr(this, 'data-ks-imagezoom');
                S.DOM.attr('#multi', 'src', data+'_310x310.jpg');
                m.set('bigImageSrc', data);
            });
        });

    .. hasZoom - Boolean: 初始时是否显示放大效果. 默认为 true, 显示放大. 在多图切换时, 可重设该值来开启或关闭显示放大功能. 如果多个图都不需要放大显示, ImageZoom 不会生成任何东西.

.. method:: changeImageSrc

    | **changeImageSrc** (src)
    | 设置小图 src.

.. method:: refreshRegion

    | **refreshRegion** ()
    | 调整放大区域位置.

Events Detail
-----------------------------------------------

.. function:: show
    
    | **show** ()
    | 放大区域显示之后.

.. function:: hide

    | **hide** ()
    | 放大区域隐藏之后.

