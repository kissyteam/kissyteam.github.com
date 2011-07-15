.. module:: Switchable

Switchable
===================================================================

|  Switchable 的核心类, S.Tabs/S.Slide/S.Accordion/S.Carousel 都是扩展自它.
|  作者: `玉伯 <lifesinger@gmail.com>`_
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/switchable/>`_ | `Demo <../../../demo/switchable/index.html>`_


Class
-----------------------------------------------

  * :class:`~Switchable.Switchable`

  
Config Attributes
-----------------------------------------------
  
  * :data:`markupType`
  * :data:`navCls`
  * :data:`contentCls`
  * :data:`triggerCls`
  * :data:`panelCls`
  * :data:`triggers`
  * :data:`panels`
  * :data:`hasTriggers`
  * :data:`triggerType`
  * :data:`delay`
  * :data:`activeIndex`
  * :data:`activeTriggerCls`
  * :data:`switchTo`
  * :data:`steps`
  * :data:`viewSize`
  * :data:`autoplay`
  * :data:`interval`
  * :data:`pauseOnHover`
  * :data:`circular`
  * :data:`effect`
  * :data:`duration`
  * :data:`easing`
  * :data:`lazyDataType`
  * :data:`aria`  
 
Properties
-----------------------------------------------

  * :attr:`container`
  * :attr:`config`
  * :attr:`triggers`
  * :attr:`panels`
  * :attr:`content`
  * :attr:`length`
  * :attr:`activeIndex`
  * :attr:`switchTimer`


Methods
-----------------------------------------------

  * :meth:`switchTo`
  * :meth:`prev`
  * :meth:`next`

  
Events
-----------------------------------------------

  * :func:`beforeSwitch`
  * :func:`switch`


Class Detail
---------------------------------------------------------------------

.. class:: Switchable

    | **Switchable** (container[, config])

    :param String|HTMLElement container: 容器
    :param object config: 可选, 配置项, 详细见下方 **Config Attributes Detail** .


Config Attributes Detail
---------------------------------------------------------------------

.. data:: markupType

    {Number} - 默认为0. 指明 DOM 结构标记的类型, 可取 0, 1, 2. 当取 0 时, 表示 DOM 是默认结构: 通过 nav 和 content 来获取 triggers 和 panels, 即通过配置以下两个参数获取.

.. data:: navCls

    {String} - triggers 所在容器的 class, 默认为 'ks-switchable-nav'.

.. data:: contentCls

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

    当取 1 时,  表示 DOM 结构 可适度灵活：通过 cls 来获取 triggers 和 panels, 即通过配置以下两个参数获取.

.. data:: triggerCls

    {String} - 默认为 'ks-switchable-trigger', 会在 container 下寻找指定 class 的元素作为触发器.


.. data:: panelCls

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

    当取 2 时,  表示 DOM 结构 完全自由: 直接传入 triggers 和 panels, 即通过配置以下两个参数获取. 这种方式下, DOM 结构就非常自由了, 传入什么内容有你自己定, 只需要 triggers 和 panels 的数量保持一致就好.

.. data:: triggers

    {Array} - 默认为 [], 触发器数组.

.. data:: panels

    {Array} - 默认为 [], 面板数组.

.. data:: hasTriggers

    {Boolean} - 默认为 true, 是否有触点.

.. data:: triggerType

    {String} - 默认为 'mouse' , 触发类型,  可选为'mouse' 或 'click'.

.. data:: delay

    {Number} - 默认为 .1 , 触发延迟时间, 单位为s.

.. data:: activeIndex

    {Number} - 默认为 0,  markup 的默认激活项, 应该与此 index 一致.

    .. note::

       使用此项时, 需要让激活项对应的 trigger 和 panel 的 HTMLElement, 在 DOM 结构上设置为 激活状态, 不然无法正确切换


.. data:: activeTriggerCls

    {String} - 激活某个 trigger 时设置的 class , 默认是 'ks-active'.

.. data:: switchTo

    {Number} - 初始话时, 自动切换到指定面板, 默认为 0 , 即第一个.

    .. note::

       switchTo 和 activeIndex 的区别是:

       * activeIndex 需要 DOM 上设置激活状态, 初始化后不会去切换状态;
       * switchTo 则不需要修改 DOM, 但 switchTo 设置后, 会去切换到指定状态, 这在用了一些动画效果时, 切换动作更为明显;

.. data:: steps

    {Number} - 步长, 表示每次切换要间隔多少个 panels, 默认为 1.

.. data:: viewSize

    {Array} - 可见视图区域的大小. 一般不需要设定此值, 仅当获取值不正确时, 用于手工指定大小, 默认为 [].


.. data:: autoplay

    {Boolean} - 是否自动切换, 默认为 false, 开启后, 不需要触发触发器, 即可自动播放.


.. data:: interval

    {Number} - 自动播放间隔时间, 以 s 为单位, 默认为 5.

.. data:: pauseOnHover

    {Boolean} - triggerType 为 mouse 时, 鼠标悬停在 slide 上是否暂停自动播放, 默认为 true.


.. data:: circular

    {Boolean} - 是否循环切换, 默认为 false, 是否循环播放, 当切换到最初/最后一个时, 是否切换到最后/最初一个.

.. data:: effect

    {String} - 动画效果函数, 默认没有特效, 可取 ``scrollx``, ``scrolly``, ``fade`` 或者直接传入自定义效果函数.

.. data:: duration

    {Number} - 默认为 .5, 动画的时长.

.. data:: easing

    {String|Function} - 动画效果, 详见 :class:`Anim`, 默认为 ``easeNone`` .


.. data:: lazyDataType

    {String} - 默认为 'area-data', 设置延迟加载时使用的数据类型, 可取 ``area-data``, 即 ``textarea`` 标签 或 ``img-src``, 即 ``img`` 标签.

    .. note::

        支持懒加载, 需要载入 S.Datalazyload, 详见 :class:`~Datalazyload.Datalazyload`

.. data:: aria

    {Boolean} - 无障碍访问支持, 默认为 false, 即关闭.


Properties Detail
-----------------------------------------------------------------------------

.. attribute:: container

    {HTMLElement} - 只读, 容器元素

.. attribute:: config

    {Object} - - 只读, 配置信息

.. attribute:: triggers

    {Array} - 只读, 触发器集合, 可以为空值 []

.. attribute:: panels

    {Array} - 只读, 切换面板集合,  可以为空值 []

.. attribute:: content

    {HTMLElement} - 只读, 存放面板的容器元素

.. attribute:: length

    {Number} - 只读, 触发器或面板的个数

.. attribute:: activeIndex

    {Number} - 只读, 当前被激活的触发器序号, 从0 开始

.. attribute:: switchTimer

    {Object} - 只读, 切换定时器, 一般作为内部使用


Methods Detail
----------------------------------------------------------------------------------------------------------

.. method:: switchTo

    | **switchTo** (index, direction, ev, callback)
    | 切换到某个视图
    
    :param Number index: 要切换的项
    :param String direction: (可选) 方向, 用于 effect, 可取 'forward', 'backward', 或者不设置
    :param EventObject ev: (可选) 引起该操作的事件
    :param Function callback: (可选) 运行完回调, 和绑定 switch 事件作用一样

.. method:: prev

    | **prev** ([ev])
    | 切换到上一视图
    
    :param EventObject ev: 引起该操作的事件


.. method:: next

    | **next** (ev)
    | 切换到下一视图
    
    :param EventObject ev: (可选) 引起该操作的事件



Events Detail
------------------------------------------------------------------------------------------

.. function:: beforeSwitch
    
    | **beforeSwitch** ()
    | 切换前触发. 当该事件的函数处理器返回 false, 则会阻止切换动作.


.. function:: switch

    | **switch** (ev)
    | 切换时触发.
    
    :param Number toIndex: 即将切换到的tab的索引号

