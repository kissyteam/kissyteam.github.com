.. module:: datalazyload


DataLazyload
===============================

|  数据延迟加载组件.
|  很多时候, 用户在第一屏就发生了跳转, 大量"未曾露面"的图片下载对用户来说是无意义的.
|  DataLazyload 可以 "揣测" 用户的行为, 当用户想看某个区域时, 才开始下载这个区域的图片.
|  除了延迟图片下载, DataLazyload 还可以延迟某个区域的所有 html 的渲染, 这对 Tabs 等 UI 组件很有裨益, 能提高整个页面的性能.


.. code-block:: javascript

    KISSY.use('datalazyload',function(S,DataLazyload){
        // use DataLazyload
    });


Class
-----------------------------------------------

  * :class:`DataLazyload`

  
Configs
-----------------------------------------------
  
  * :data:`mod`
  * :data:`diff`
  * :data:`placeholder`
  * :data:`execScript`
  
 
Attributes
-----------------------------------------------

  * :attr:`containers`
  * :attr:`config`
  * :attr:`images`
  * :attr:`areaes`
  * :attr:`callbacks`
  * :attr:`threshold`

  
Methods
-----------------------------------------------

  * :meth:`addCallback`
  * :meth:`removeCallback`
  * :meth:`addElements`
  * :meth:`removeElements`
  * :meth:`getElements`
  * :meth:`refresh`
  * :meth:`pause`
  * :meth:`resume`
  * :meth:`destroy`

Static Methods
-----------------------------------------------

  * :meth:`loadCustomLazyData`



Class Detail
-----------------------------------------------

.. class:: DataLazyload
    
    | **DataLazyload** (containers[, config])
    
    :param String|HTMLElement|Array<HTMLElement> containers: 默认为 document.body ,
     图片所在容器(可以多个)
    :param Object config: 配置项, 详细见下方 **Configs Detail** .
    
.. note::

    容器内需要懒加载的图片的真实地址需要放在 ``data-ks-lazyload`` 中。
    需要懒加载的 textarea 需具备样式类 ``ks-datalazyload``

Configs Detail
-----------------------------------------------


.. data:: mod

    {String} - 默认是 'manual',懒处理模式.
    
        * 'auto' : 自动化. html 输出时, 不对 img.src 做任何处理
        * 'manual' : 输出 html 时, 已经将需要延迟加载的图片的 src 属性替换为 'data-ks-lazyload'
        
    .. note::

        - 对于 textarea 数据, 只有手动模式;
        - 当使用 'manual' 模式时, 对 img 元素使用 ``data-ks-lazyload`` 后, 如果这个 img 元素或其父级元素为隐藏状态, 此时, datalazyload 无法起作用, 因为隐藏状态下的 img 的 ``offset.top`` 计算永远为 0, 永远处于 datalazyload 阈值之内, 这种情况下, 直接使用 textarea 更靠谱.

.. data:: diff

    {Number|Object} -

        * Number 类型时当前视窗往下, diff px 外的 img/textarea 延迟加载, 适当设置此值,
          可以让用户在拖动时感觉数据已经加载好, 默认为当前视窗高度(两屏以外的才延迟加载).

        * Object 类型可以指定 left/top/right/bottom 数值，表示预加载当前视窗以外上下左右的距离的元素.


.. data:: placeholder

    {String} - 默认为 null , 图像的占位图.

.. data:: execScript

    {Boolean} - 默认为 true , 是否执行 textarea 里面的脚本.


Attributes Detail
-----------------------------------------------

.. attribute:: containers

    {Array} - 可读写, 图片所在容器(可以多个), 默认为 document.body
    
.. attribute:: config

    {Object} - 可读写 ,配置参数
    

.. attribute:: images

    {Array<String>} - 可读写 ,需要延迟下载的图片列表


.. attribute:: areaes

    {Array<String>} - 可读写 ,需要延迟处理的 textarea列表

.. attribute:: callbacks

    {Object} - 可读写 ,和延迟项绑定的回调函数, 元素列表和函数列表一一对应

.. attribute:: threshold

    {Number} - 可读写 , 需要开始延迟的 Y 坐标值

    
Methods Detail
-----------------------------------------------

.. method:: addCallback

    | **addCallback** (el, fn)
    | 添加回调函数. 当 el 即将出现在视图中时, 触发 fn


.. method:: removeCallback

    | **removeCallback** (el, fn)
    | 删除回调函数. 参数同 ``addCallback``


.. method:: addElements

    | **addElements** (els)
    | 添加元素到懒加载列表.

    :param HTMLElement[] els: 新的懒加载元素列表

.. method:: removeElements

    | **removeElements** (els)
    | 从懒加载列表中删除元素.

    :param HTMLElement[] els: 已有的懒加载元素列表

.. method:: getElements

    | **getElements** ()
    | 得到懒加载元素列表

    ::returns: {Object} eg: {images:[],textareas:[]}

.. method:: refresh

    | **refresh** ()
    | 强制立刻检测懒加载元素

.. method:: pause

    | **pause** ()
    | 暂停监控懒加载元素


.. method:: resume

    | **resume** ()
    | 继续监控懒加载元素

.. method:: destroy

    | **destroy** ()
    | 停止监控并销毁组件

Static Methods Detail
-----------------------------------------------

.. method:: loadCustomLazyData

    | static **loadCustomLazyData** (containers, type)
    | 加载自定义延迟数据

    :param HTMLElement|Array<HTMLElement> containers: 包含自定义延迟加载项的容器元素
    :param String type: 延迟加载方式, 可取:

    1. ``textarea`` 或 ``area-data`` , 即表示延迟加载使用的是 ``textarea`` 方式;
        此时 textarea 需要有样式类 ``ks-datalazyload-custom``
    2. ``img`` 或 ``img-src``, 即表示延迟加载使用的是 ``img`` 方式.
        此时 img 的真实地址须放在属性 ``data-ks-lazyload-custom`` 中



