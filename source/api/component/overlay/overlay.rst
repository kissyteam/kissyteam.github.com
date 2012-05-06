.. currentmodule:: overlay

Overlay
===============================================

|  悬浮的对话框

Class
-----------------------------------------------

  * :class:`Overlay`

Config Attributes
-----------------------------------------------

  * :data:`~Overlay.config.prefixCls`
  * :data:`~Overlay.config.srcNode`
  * :data:`~Overlay.config.width`
  * :data:`~Overlay.config.height`
  * :data:`~Overlay.config.elCls`
  * :data:`~Overlay.config.content`
  * :data:`~Overlay.config.zIndex`
  * :data:`~Overlay.config.x`
  * :data:`~Overlay.config.y`
  * :data:`~Overlay.config.xy`
  * :data:`~Overlay.config.align`
  * :data:`~Overlay.config.effect`
  * :data:`~Overlay.config.resize`
  * :data:`~Overlay.config.closable`
  * :data:`~Overlay.config.closeAction`
  * :data:`~Overlay.config.elBefore`
  * :data:`~Overlay.config.render`
  
  
Properties
-----------------------------------------------

  * :attr:`~Overlay.prototype.x`
  * :attr:`~Overlay.prototype.y`
  * :attr:`~Overlay.prototype.xy`
  * :attr:`~Overlay.prototype.align`
  * :attr:`~Overlay.prototype.closable`
  * :attr:`~Overlay.prototype.closeBtn`
  * :attr:`~Overlay.prototype.visible`
  * :attr:`~Overlay.prototype.el`
  * :attr:`~Overlay.prototype.contentEl`
  
Methods
-----------------------------------------------

  * :meth:`~Overlay.prototype.render`
  * :meth:`~Overlay.prototype.show`
  * :meth:`~Overlay.prototype.hide`
  * :meth:`~Overlay.prototype.align`
  * :meth:`~Overlay.prototype.center`
  * :meth:`~Overlay.prototype.move`

Events
-----------------------------------------------

  * :func:`~Overlay.hide`
  * :func:`~Overlay.show`
  * :func:`~Overlay.beforeVisibleChange`
  * :func:`~Overlay.afterRenderUI`

Class Detail
-----------------------------------------------

.. class:: Overlay
    
    | **Overlay** (config)
    
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
    
.. data:: Overlay.config.prefixCls



    {String} - 可选, 默认为"ks-", 样式类名前缀, 如悬浮层根元素会加上样式类："ks-overlay". kissy 1.2 版本以前设置无效, 都为 "ks-".
    
.. data:: Overlay.config.render

    {KISSY.Node} - 浮层需要渲染的容器节点。默认 body.
    
.. data:: Overlay.config.elBefore



    {KISSY.Node} - 浮层根节点需要渲染的参照元素，渲染在该元素之前。和 render 同时配置的话，该配置优先。    

.. data:: Overlay.config.srcNode

    {String} - 可选, 用于取悬浮层根节点, 可为"#id"或".class". 当不设置时表示新建一个 HTMLElement 插入到页面中.
    
    .. note::
    
        初始 srcNode 不能设置为 display:none ，需要设置为 position:absolute;left:-9999px;top:-9999px;

.. data:: Overlay.config.width

    {Number | String} - 可选, 悬浮层宽度. 整数表示单元为 px.

.. data:: Overlay.config.height

    {Number | String} - 可选, 悬浮层高度. 整数表示单元为 px.

.. data:: Overlay.config.elCls

    {String} - 可选, 添加到悬浮层根元素的样式.

.. data:: Overlay.config.content

    {String} - 可选, 设置悬浮层的内容 html.

.. data:: Overlay.config.zIndex

    {Number} - 可选, 默认为 9999, 设置悬浮层的 z-index 值.

.. data:: Overlay.config.x

    {Number} - 可选, 悬浮层相对于文档根节点的 x 坐标.

.. data:: Overlay.config.y

    {Number} - 可选, 浮层相对于文档根节点的 y 坐标.

.. data:: Overlay.config.xy

    {Array<Number>} - 可选, 相当于将数组第一个元素设置为 :attr:`~Overlay.config.x` 的值, 将数组的第二个元素设置为 :attr:`~Overlay.config.y` 的值.

.. data:: Overlay.config.align

    {Object} - 可选, 悬浮层对齐的相关配置, 例如：
    
    .. code-block:: javascript
    
        {
            node: null,         // 类型选择器字符串, 对齐参考元素, falsy 值为可视区域
            points: ['tr','tl'], // 类型字符串数组, 表示 overlay 的 tl 与参考节点的 tr 对齐
            offset: [0, 0]      // 类型整数数组, 表示 overlay 最终位置与经 node 和 points 计算后位置的偏移,
                                // 数组第一个元素表示 x 轴偏移, 第二个元素表示 y 轴偏移.
        }
        
    ``points`` 字符串数组元素的取值范围为  t,b,c 与 l,r,c 的两两组合,分别表示 top,bottom,center 与 left,right,center 的两两组合,
    可以表示 9 种取值范围.
    
    .. note::

        第一个字符取值 t,b,c , 第二个字符取值 l,r,c. 如下图所示

        .. raw:: html

            <img  src='../../../_static/api/component/overlay/align.png' />
                
.. data:: Overlay.config.effect



    {Object} - 可选, 显示或隐藏时的特效支持, 例如：
    
    .. code-block:: javascript
    
        {
            effect:'none',    // {String} - 可选, 默认为'none', 'none'(无特效), 'fade'(渐隐显示), 'slide'(滑动显示).
            easing:'',        // {String} - 可选, 同 KISSY.Anim 的 easing 参数配置.
            duratiion:3       // {Number} - 可选, 动画持续时间, 以秒为单位.
        }
        
.. data:: Overlay.config.closable



    {Boolean} - 对话框右上角是否包括关闭按钮
    
.. data:: Overlay.config.closeAction



    {String} - 点击关闭按钮的动作。默认 "hide" 隐藏，也可设置 "destroy" 销毁该组件.    
    
.. data:: mask

    {Boolean} - 浮层显示时是否使用遮罩层盖住页面其他元素    

.. data:: Overlay.config.resize



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
    
        使用该功能需要和 :class:`Resizable <resizable.Resizable>` 一起 use，例如： ``use("overlay,resizable")``
    

Properties Detail
-----------------------------------------------


    当根据配置实例化 overlay 得到当前实例后, 可调用实例上的 get 方法得到实例的特定属性以及 set 方法设置属性的值, 例如

    .. code-block:: javascript
    
        var o = new Overlay({ xy : [400,200] });
        o.set("xy",[100,200]);    //设置当前实例的绝对坐标
        o.get("xy");    //获取当前实例的绝对坐标
    
.. attribute:: Overlay.prototype.x

    {Number} - 悬浮层相对于文档根节点的 x 坐标.

.. attribute:: Overlay.prototype.y

    {Number} - 浮层相对于文档根节点的 y 坐标.

.. attribute:: Overlay.prototype.xy

    {Array<Number>} - 相当于将数组第一个元素设置为 :attr:`~Overlay.config.x` 的值, 将数组的第二个元素设置为 :attr:`~Overlay.config.y` 的值.

.. attribute:: Overlay.prototype.align

    {Object} - 悬浮层对齐的相关配置.

.. attribute:: Overlay.prototype.visible

    {Boolean} - 悬浮层的是否显示.
    
.. attribute:: Overlay.prototype.closable



    {Boolean} - 右上角关闭区域有无.

.. attribute:: Overlay.prototype.closeBtn



    {KISSY.Node} - 关闭按钮元素.

.. attribute:: Overlay.prototype.el

    {KISSY.Node} - 获取悬浮层的根节点 .
    
    .. note::
    
        必须在调用 :meth:`~Overlay.prototype.render` 方法之后才可以获取.

.. attribute:: Overlay.prototype.contentEl

    {KISSY.Node} - 获取悬浮层真正内容所在的节点.
    
    .. note::
    
        必须在调用  :meth:`~Overlay.prototype.render` 方法之后才可以获取.
        
    悬浮层的 html 结构如下

    .. code-block:: html
    
        <div><!-- 悬浮层根节点 -->
            <div><!-- 悬浮层内容节点 --->
                <!-- 悬浮层真正内容所在 -->
            </div>
        </div>
        
    一般调用悬浮层的 :meth:`~Overlay.prototype.render` 方法后, 可通过获取 :attr:`~Overlay.prototype.contentEl` 属性获取内容所在节点, 来动态修改悬浮层的内容.


Methods Detail
-----------------------------------------------

.. method:: Overlay.prototype.render

    | **render** ()
    | 渲染当前实例, 生成对应的 dom 节点并添加到页面文档树中.

.. method:: Overlay.prototype.show

    | **show** ()
    | 显示悬浮层, 位置根据 :attr:`~Overlay.config.align` 或者 :attr:`~Overlay.config.xy` 确定.

.. method:: Overlay.prototype.hide

    | **hide** ()
    | 隐藏悬浮层.

.. deprecated:: 1.2

.. method:: Overlay.prototype.align

    | **align** (node,points,offset)
    | 设置对齐
    
    :param string|KISSY.Node|HTMLDOMNode node: 类型对齐的参考元素
    :param Array<string> points: 对齐的参考位置
    :param Array<number> offset: 相对对齐元素的偏移
        
    .. note::
    
        1. 调用该方法前请先调用 :meth:`render`.  .
        2. 推荐使用 ``set("align",{ node:node, points:points, offset;offset});`` 来代替该方法.  
    
.. method:: Overlay.prototype.center

    | **center** ()
    | 将悬浮层放在当前视窗中央.
    
    .. note::
    
        调用该方法前请先调用 :meth:`render`.      

.. method:: Overlay.prototype.move

    | **move** (x,y)
    | 设置悬浮层相对于文档左上角的坐标偏移
    
    :param number x: 横坐标偏移量
    :param number y: 纵坐标偏移量

    
Events Detail
-----------------------------------------------

.. function:: Overlay.hide
    
    | **hide** ()
    | 当悬浮层隐藏时触发

.. function:: Overlay.show

    | **show** ()
    | 当悬浮层显示时触发
    
.. function:: Overlay.afterRenderUI

    | **afterRenderUI** ()
    | 当悬浮层 dom 节点生成后触发，可用于根节点事件的初始化，例如监控弹出层的 mouseenter（整个生命周期只注册一次）
    
    .. code-block:: javascript
    
        var o = new Overlay();
        o.on("afterRenderUI",function(){
            o.get("el").on("mouseenter",function(){
                alert("mouseenter overlay");
            });
        });
        button.on("click",function(){
            o.show();
        });
    

.. function:: Overlay.beforeVisibleChange

    | **beforeVisibleChange** (ev)
    | 当悬浮层隐藏或显示前触发

    :param Boolean ev.newVal: 将要隐藏时为 false, 将要显示时为 true
    :param Boolean ev.prevVal: 当前悬浮层显示与否
    :returns: {Boolean} - 返回 false 时, 则会阻止将要进行的显示或隐藏动作.
