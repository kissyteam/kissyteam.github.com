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

  * :data:`diff`
  * :data:`placeholder`
  * :data:`execScript`
  * :data:`autoDestroy`
  
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
    
    | **DataLazyload** (config)
    | 继承自 :class:`~base.Base`

    :param Object config: 配置项, 详细见下方 **Configs Detail** .
    
.. note::

    容器内需要懒加载的图片的真实地址需要放在 ``data-ks-lazyload`` 中。
    需要懒加载的 textarea 需具备样式类 ``ks-datalazyload``

Configs Detail
-----------------------------------------------

.. data:: autoDestroy

    {Boolean} - 默认为 true ,  当初始化时检测到的容器内懒加载元素都加载完毕后是否自动调用 ``destroy`` 方法

.. data:: container

    {String|HTMLElement} - 默认为 document ,  图片所在容器，当懒加载元素在容器中和视窗中同时出现时进行渲染。

.. data:: diff

    {Number|Object} -

        * Number 类型时当前视窗往下, diff px 外的 img/textarea 延迟加载, 适当设置此值,
          可以让用户在拖动时感觉数据已经加载好, 默认为当前视窗（容器视窗）高度(两屏以外的才延迟加载).

        * Object 类型可以指定 left/top/right/bottom 数值，表示预加载当前视窗（容器视窗）以外上下左右的距离的元素.

.. data:: placeholder

    {String} - 默认为 http://a.tbcdn.cn/kissy/1.0.0/build/imglazyload/spaceball.gif, 如果懒加载图像没有设置 src 则作为图像的占位图.

.. data:: execScript

    {Boolean} - 默认为 true , 是否执行 textarea 里面的脚本.

.. data:: autoDestroy

    {boolean} - 当检测到无懒加载元素时是否销毁该组件，默认 true

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

    :returns: {Object} 例如 { images: [], textareas: [] }

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

    :param HTMLElement[] containers: 包含自定义延迟加载项的容器元素
    :param String type: 延迟加载方式, 可取:

    1. ``textarea`` 或 ``area-data`` , 即表示延迟加载使用的是 ``textarea`` 方式;
        此时 textarea 需要有样式类 ``ks-datalazyload-custom``
    2. ``img`` 或 ``img-src``, 即表示延迟加载使用的是 ``img`` 方式.
        此时 img 的真实地址须放在属性 ``data-ks-lazyload-custom`` 中


.. note::

    当 第一个调用参数为数组时进入兼容模式( 1.2 )，此时懒加载元素是否渲染不判断是否在容器内，只判断是否出现在视窗中。例如

    .. code-block:: javascript

        new DataLazyLoad([document.getElementById('x1'),document.getElementById('x2')]);



    几点性能注意：

    0. ``autoDestroy`` 属性默认为 ``true`` ，那么当初始化时检测到的容器内懒加载元素都加载完毕后会自动调用 ``destroy`` 方法，若容器后面可能有动态添加的懒加载元素，请设置 ``autoDestroy`` 属性为false，并在后期手动调用 ``destroy`` 方法


    1. 请注意实例化多个容器互相嵌套的 datalazyload 时重复检测问题，例如

        实例1

        .. code-block:: javascript

            new DataLazyLoad({
                container: document
            });


        实例2

        .. code-block:: javascript

            new DataLazyLoad({
                container: '#xx'
            });


        若 #xx 的懒加载元素在实例1实例化前就存在，则会导致实例1与实例2重复检测同一元素问题.


    2. 请注意不显示元素的检测，例如实例

        .. code-block:: javascript

            var  = new DataLazyLoad({
                container: '#yy'
            });


        若某种情况下，例如 tab 切换导致 #yy.display='none'，之后的所有监控都是性能浪费.
        此时可以调用 ··pause·· 方法来暂停该实例的检测，

        .. code-block:: javascript

            d.pause();


        在再次 tab 切换后，#yy.display='' ，调用 ``resume`` 来重新监控.

        .. code-block:: javascript

            d.resume();