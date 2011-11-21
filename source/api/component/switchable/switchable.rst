.. currentmodule:: switchable

Switchable
===================================================================

|  Switchable 的核心类, S.Tabs/S.Slide/S.Accordion/S.Carousel 都是扩展自它.
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/switchable/>`_ | `Demo <../../../demo/component/switchable/index.html>`_


Class
-----------------------------------------------

  * :class:`Switchable`

  
Config Attributes
-----------------------------------------------
  
  * :data:`~Switchable.config.markupType`
  * :data:`~Switchable.config.navCls`
  * :data:`~Switchable.config.contentCls`
  * :data:`~Switchable.config.triggerCls`
  * :data:`~Switchable.config.panelCls`
  * :data:`~Switchable.config.triggers`
  * :data:`~Switchable.config.panels`
  * :data:`~Switchable.config.hasTriggers`
  * :data:`~Switchable.config.triggerType`
  * :data:`~Switchable.config.delay`
  * :data:`~Switchable.config.activeIndex`
  * :data:`~Switchable.config.activeTriggerCls`
  * :data:`~Switchable.config.switchTo`
  * :data:`~Switchable.config.steps`
  * :data:`~Switchable.config.viewSize`
  * :data:`~Switchable.config.autoplay`
  * :data:`~Switchable.config.interval`
  * :data:`~Switchable.config.pauseOnHover`
  * :data:`~Switchable.config.circular`
  * :data:`~Switchable.config.effect`
  * :data:`~Switchable.config.duration`
  * :data:`~Switchable.config.easing`
  * :data:`~Switchable.config.nativeAnim`
  * :data:`~Switchable.config.lazyDataType`
  * :data:`~Switchable.config.aria`
 
Properties
-----------------------------------------------

  * :attr:`~Switchable.prototype.container`
  * :attr:`~Switchable.prototype.config`
  * :attr:`~Switchable.prototype.triggers`
  * :attr:`~Switchable.prototype.panels`
  * :attr:`~Switchable.prototype.content`
  * :attr:`~Switchable.prototype.length`
  * :attr:`~Switchable.prototype.activeIndex`
  * :attr:`~Switchable.prototype.switchTimer`


Methods
-----------------------------------------------

  * :meth:`~Switchable.prototype.switchTo`
  * :meth:`~Switchable.prototype.prev`
  * :meth:`~Switchable.prototype.next`
  * :meth:`~Switchable.prototype.stop`
  * :meth:`~Switchable.prototype.start`

  
Events
-----------------------------------------------

  * :func:`~Switchable.beforeSwitch`
  * :func:`~Switchable.switch`


Class Detail
---------------------------------------------------------------------

.. class:: Switchable

    | **Switchable** (container[, config])

    :param String|HTMLElement container: 容器
    :param object config: 可选, 配置项, 详细见下方 **Config Attributes Detail** .


Config Attributes Detail
---------------------------------------------------------------------

.. data:: Switchable.config.markupType

    {Number} - 默认为0. 指明 DOM 结构标记的类型, 可取 0, 1, 2.
    
    **当取 0 时**, 表示 DOM 是默认结构: 通过 nav 和 content 来获取 triggers 和 panels, 即通过配置以下两个参数获取.

    .. data:: Switchable.config.navCls

        {String} - triggers 所在容器的 class, 默认为 'ks-switchable-nav'.

    .. data:: Switchable.config.contentCls

        {String} - panels 所在容器的 class, 默认为 'ks-switchable-content'.

        这种方式的 DOM 结构类似于:

        .. code-block:: html

            <div id="J_Slide">  <!-- 容器元素 -->
                <ul class="ks-switchable-nav">  <!-- 触发器列表 -->
                    <li class="ks-active">标题 A</li>
                    <li>标题 B</li>
                    <li>标题 C</li>
                    <li>标题 D</li>
                </ul>
                <div class="ks-switchable-content">  <!-- 面板列表 -->
                    <div>内容 A</div>
                    <div style="display: none">内容 B</div>
                    <div style="display: none">内容 C</div>
                    <div style="display: none">内容 D</div>
                </div>
            </div>

    **当取 1 时**,  表示 DOM 结构 可适度灵活：通过 cls 来获取 triggers 和 panels, 即通过配置以下两个参数获取.

    .. data:: Switchable.config.triggerCls

        {String} - 默认为 'ks-switchable-trigger', 会在 container 下寻找指定 class 的元素作为触发器.


    .. data:: Switchable.config.panelCls

        {String} - 默认为 'ks-switchable-panel', 会在 container 下寻找指定 class 的元素作为面板.

        这种方式的 DOM 结构类似于:

        .. code-block:: html

            <div id="J_Accordion">
                <div class="ks-switchable-trigger ks-active"><i class="ks-icon"></i><h3>标题A</h3></div>
                <div class="ks-switchable-panel">内容A<br/>内容A<br/>内容A</div>
                <div class="ks-switchable-trigger"><i class="ks-icon"></i><h3>标题B</h3></div>
                <div class="ks-switchable-panel" style="display:none;">内容B<br/>内容B<br/>内容B</div>
                <div class="ks-switchable-trigger"><i class="ks-icon"></i><h3>标题C</h3></div>
                <div class="ks-switchable-panel" style="display:none;">内容C<br/>内容C<br/>内容C<br/>内容C<br/>内容C</div>
                <div class="ks-switchable-trigger last-trigger"><i class="ks-icon"></i><h3>标题D</h3></div>
                <div class="ks-switchable-panel last-panel" style="display:none;">内容D<br/>内容D<br/>内容D</div>
            </div>

    **当取 2 时**,  表示 DOM 结构 完全自由: 直接传入 triggers 和 panels, 即通过配置以下两个参数获取. 这种方式下, DOM 结构就非常自由了, 传入什么内容有你自己定, 只需要 triggers 和 panels 的数量保持一致就好.

    .. data:: Switchable.config.triggers

        {Array<HTMLElement>} - 默认为 [], 触发器数组.

    .. data:: Switchable.config.panels

        {Array<HTMLElement>} - 默认为 [], 面板数组.

.. data:: Switchable.config.hasTriggers

    {Boolean} - 默认为 true, 是否有触发器.

.. data:: Switchable.config.triggerType

    {String} - 默认为 'mouse' , 触发类型,  可选为'mouse' 或 'click'.

.. data:: Switchable.config.delay

    {Number} - 默认为 .1 , 触发延迟时间, 单位为s.

.. data:: Switchable.config.activeIndex

    {Number} - 默认为 0,  markup 的默认激活项, 应该与此 index 一致.

    .. note::

       使用此项时, 需要让激活项对应的 trigger 和 panel 的 HTMLElement, 在 DOM 结构上设置为 激活状态, 不然无法正确切换


.. data:: Switchable.config.activeTriggerCls

    {String} - 激活某个 trigger 时设置的 class , 默认是 'ks-active'.

.. data:: Switchable.config.switchTo

    {Number} - 初始化时, 自动切换到指定面板, 默认为 0 , 即第一个.

    .. note::

       switchTo 和 activeIndex 的区别是:

       * activeIndex 需要 DOM 上设置激活状态, 初始化后不会去切换状态;
       * switchTo 则不需要修改 DOM, 但 switchTo 设置后, 会去切换到指定状态, 这在用了一些动画效果时, 切换动作更为明显;

.. data:: Switchable.config.steps

    {Number} - 步长, 表示每次切换要间隔多少个 panels, 默认为 1.

.. data:: Switchable.config.viewSize

    {Array} - 可见视图区域的大小. 一般不需要设定此值, 仅当获取值不正确时, 用于手工指定大小, 默认为 [].


.. data:: Switchable.config.autoplay

    {Boolean} - 是否自动切换, 默认为 false, 开启后, 不需要触发触发器, 即可自动播放.


.. data:: Switchable.config.interval

    {Number} - 自动播放间隔时间, 以 s 为单位, 默认为 5.

.. data:: Switchable.config.pauseOnHover

    {Boolean} - triggerType 为 mouse 时, 鼠标悬停在 slide 上是否暂停自动播放, 默认为 true.


.. data:: Switchable.config.circular

    {Boolean} - 是否循环切换, 默认为 true, 是否循环播放, 当切换到最初/最后一个时, 是否切换到最后/最初一个.

.. data:: Switchable.config.effect

    {String} - 动画效果函数, 默认没有特效, 可取 ``scrollx``, ``scrolly``, ``fade`` 或者直接传入自定义效果函数.

.. data:: Switchable.config.duration

    {Number} - 默认为 .5, 动画的时长.

.. data:: Switchable.config.easing

    {String|Function} - 动画效果, 详见 :class:`~anim.Anim`, 默认为 ``easeNone`` .

.. data:: Switchable.config.nativeAnim

    .. versionchanged:: 1.2
        1.2 中 :class:`Anim` 去掉了本地动画的支持, 这里的配置项也相应去除

    {Boolean} - 是否优先使用原生 css3 transition, 默认为 ``true``, 同 :class:`~anim.Anim` 中的  `nativeSupport` 参数  .

.. data:: Switchable.config.lazyDataType

    {String} - 默认为 'area-data', 设置延迟加载时使用的数据类型, 可取:

    1. ``textarea`` 或 ``area-data`` , 即表示延迟加载使用的是 ``textarea`` 方式, 可以给非当前 panel 内嵌一个 ``<textarea classs="ks-datalazyload-custom" style="visibility: hidden;">panel的内容</textarea>``;
    2. ``img`` 或 ``img-src``, 即表示延迟加载使用的是 ``img`` 方式, 可以给非当前 panel 中的 img 元素设置属性 ``data-ks-lazyload-custom`` 为 src 的地址, 这种方式常用于 旋转木马, 见 `Demo <../../../demo/component/switchable/index.html>`_

    .. note::

        - 支持懒加载, 需要载入 S.Datalazyload, 详见 :class:`~datalazyload.DataLazyload`

.. data:: Switchable.config.aria

    {Boolean} - 无障碍访问支持, 默认为 false, 即关闭.


Properties Detail
-----------------------------------------------------------------------------

.. attribute:: Switchable.prototype.container

    {HTMLElement} - 只读, 容器元素

.. attribute:: Switchable.prototype.config

    {Object} - - 只读, 配置信息

.. attribute:: Switchable.prototype.triggers

    {Array} - 只读, 触发器集合, 可以为空值 []

.. attribute:: Switchable.prototype.panels

    {Array} - 只读, 切换面板集合,  可以为空值 []

.. attribute:: Switchable.prototype.content

    {HTMLElement} - 只读, 存放面板的容器元素

.. attribute:: Switchable.prototype.length

    {Number} - 只读, 触发器或面板的个数

.. attribute:: Switchable.prototype.activeIndex

    {Number} - 只读, 当前被激活的触发器序号, 从0 开始

.. attribute:: Switchable.prototype.switchTimer

    {Object} - 只读, 切换定时器, 一般作为内部使用


Methods Detail
----------------------------------------------------------------------------------------------------------

.. method:: Switchable.prototype.switchTo

    | **switchTo** (index, direction, ev, callback)
    | 切换到某个视图
    
    :param Number index: 要切换的项
    :param String direction: (可选) 方向, 用于 effect, 可取 'forward', 'backward', 或者不设置
    :param EventObject ev: (可选) 引起该操作的事件
    :param Function callback: (可选) 运行完回调, 和绑定 switch 事件作用一样

.. method:: Switchable.prototype.prev

    | **prev** ([ev])
    | 切换到上一视图
    
    :param EventObject ev: 引起该操作的事件


.. method:: Switchable.prototype.next

    | **next** (ev)
    | 切换到下一视图
    
    :param EventObject ev: (可选) 引起该操作的事件
    
.. method:: Switchable.prototype.stop

    | **stop** ()
    | 停止自动切换
    
    .. note::
    
        只有设置了 :data:`~Switchable.config.autoplay` true 时有效
    
.. method:: Switchable.prototype.start

    | **start** ()
    | 开始自动切换
    
    .. note::
    
        只有设置了 :data:`~Switchable.config.autoplay` true 时有效


Events Detail
------------------------------------------------------------------------------------------

.. function:: Switchable.beforeSwitch
    
    | **beforeSwitch** (ev)
    | 切换前触发. 当该事件的函数处理器返回 false, 则会阻止切换动作.
    
    :param Object ev: 事件对象
    :param Number ev.toIndex: 即将切换到的tab的索引号

.. function:: Switchable.switch

    | **switch** (ev)
    | 切换后触发.
    
    :param Object ev: 事件对象
    :param Number ev.currentIndex: 当前切换到的tab的索引号


