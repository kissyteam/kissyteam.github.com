.. currentmodule:: switchable

Switchable
===================================================================

|  Switchable 的核心类, Switchable.Tabs/Switchable.Slide/Switchable.Accordion/Switchable.Carousel 都是扩展自它.

Class
-----------------------------------------------

  * :class:`Switchable`

  
Configs
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
  * :data:`~Switchable.config.pauseOnScroll`
  * :data:`~Switchable.config.circular`
  * :data:`~Switchable.config.effect`
  * :data:`~Switchable.config.duration`
  * :data:`~Switchable.config.easing`
  * :data:`~Switchable.config.lazyDataType`
  * :data:`~Switchable.config.lazyImgAttribute`
  * :data:`~Switchable.config.lazyTextareaClass`
 
Attributes
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
  * :meth:`~Switchable.prototype.add`
  * :meth:`~Switchable.prototype.remove`
  * :meth:`~Switchable.prototype.destroy`

  
Events
-----------------------------------------------

  * :func:`~Switchable.beforeSwitch`
  * :func:`~Switchable.switch`
  * :func:`~Switchable.add`
  * :func:`~Switchable.remove`
  * :func:`~Switchable.beforeRemove`


Class Detail
---------------------------------------------------------------------

.. class:: Switchable

    | **Switchable** (container[, config])

    :param String|HTMLElement container: 容器
    :param object config: 可选, 配置项, 详细见下方 **Configs Detail** .


Configs Detail
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

    {Array} - 可见视图区域的大小. 如果 css 中不设置 panel 的高宽或初始没有 panel , 则需要这里手工指定大小, 默认为 [].
    
    .. note::
    
        当 panel 的高宽 css 中不指定时，需要设置 viewSize 为单个 panel 的高宽.


.. data:: Switchable.config.autoplay

    {Boolean} - 是否自动切换, 默认为 false, 开启后, 不需要触发触发器, 即可自动播放.


.. data:: Switchable.config.interval

    {Number} - 自动播放间隔时间, 以 s 为单位, 默认为 5.

.. data:: Switchable.config.pauseOnHover

    {Boolean} - triggerType 为 mouse 时, 鼠标悬停在 slide 上是否暂停自动播放, 默认为 true.

.. data:: Switchable.config.pauseOnScroll

    {Boolean} - 轮播不在视窗时是否停止自动轮播。默认 false

.. data:: Switchable.config.circular

    {Boolean} - 是否循环切换, 默认为 true, 是否循环播放, 当切换到最初/最后一个时, 是否切换到最后/最初一个.

.. data:: Switchable.config.effect

    {String} - 动画效果函数, 默认没有特效, 可取 ``scrollx``, ``scrolly``, ``fade`` 或者直接传入自定义效果函数.

.. data:: Switchable.config.duration

    {Number} - 默认为 .5, 动画的时长.

.. data:: Switchable.config.easing

    {String|Function} - 动画效果, 详见 :class:`~anim.Anim`, 默认为 ``easeNone`` .

.. data:: Switchable.config.lazyDataType

    {String} - 默认为 'area-data', 设置延迟加载时使用的数据类型, 可取:

    1. ``textarea`` 或 ``area-data`` , 即表示延迟加载使用的是 ``textarea`` 方式, 可以给非当前 panel 内嵌一个 ``<textarea class="ks-datalazyload-custom" style="visibility: hidden;">panel的内容</textarea>``;
    2. ``img`` 或 ``img-src``, 即表示延迟加载使用的是 ``img`` 方式, 可以给非当前 panel 中的 img 元素设置属性 ``data-ks-lazyload-custom`` 为 src 的地址, 这种方式常用于 旋转木马, 见 `Demo <../../../demo/component/switchable/index.html>`_

    .. note::

        - 支持懒加载, 需要载入 S.Datalazyload, 详见 :class:`~datalazyload.DataLazyload`

.. data:: Switchable.config.lazyImgAttribute

    {String} - 懒加载图片的属性名。默认 "data-ks-lazyload-custom".

.. data:: Switchable.config.lazyTextareaClass

    {String} - 懒加载 textarea 的类名。默认 "ks-datalazyload-custom".


Attributes Detail
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

.. note::

    content 元素不可以为 overflow:hidden，否则从最后一屏切换到第一屏时会出白屏现象.请在整个容器根元素上设置 overflow:hidden

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

.. versionadded:: 1.3

.. method:: Switchable.prototype.add

    | **add** (cfg)
    | 添加一项

    :param Object cfg: 添加的具体配置
    :param HTMLElement cfg.trigger: 导航的 trigger 节点
    :param HTMLELement cfg.panel: 内容节点
    :param Number cfg.index: 插入位置
    :param Boolean cfg.active: 是否将新插入的内容节点激活显示
    :param Function cfg.callback: 添加成功后的回调

.. note::

    添加操作详解：

    #. 假设当前 activeIndex 为 x

    #. 如果 steps == 1

        #. 插入新的 trigger 和 panel 到指定位置

        #. 如果 x 大于等于参数的 index，那么当前的 activeIndex++

        #. 强制 switch 到新的 activeIndex 的位置，保持当前panel内容不变（防止新元素排挤）

        #. 如果指定了 active,那么 switch 到新的插入位置 index

    #. 如果 steps > 1

        #. 插入新的panel

        #. 如果 panel 插入后导致 length 增大,那么插入新的 trigger 到尾部

        #. 强制 switch 到 activeIndex 的位置，保持当前页位置不变（防止新元素排挤）

        #. 如果指定了 active,那么 switch 到新的插入位置 index 所应该在的页数（一页有多个panel）


.. versionadded:: 1.3

.. method:: Switchable.prototype.remove

    | **remove** (cfg)
    | 删除一个内容节点

    :param Function cfg: 删除配置
    :param Function cfg.callback: 删除成功后的回调
    :param Number cfg.index: 将要删除的内容节点所在的位置

.. note::

    删除操作详解：

    #. 假设当前 activeIndex 为 x

    #. 如果 steps == 1

        #. 如果 x 位置的元素就是要删除的元素： x==index

            #. 如果 x ==0,switch 到 1位置后，删除0元素，在设置 activeIndex 为 0

            #. switch 到 x-1 位置，然后删除 x 位置元素

        #. 如果 x 的值大于 index,那么设置 activeIndex=x-1;

        #. 删除 trigger 和 x 元素

    #. 如果 steps > 1

        #. 如果删除 x 元素导致页数-1，那么设置 trigger 为最后一个trigger，否则trigger为null

        #. 如果删除 x 元素导致 activeIndex 页为空，那么先 switch 到  activeIndex-1 的页，然后删除 x 元素

        #. 否则直接删除 trigger 和 x 位置 panel 元素，并重新强制 switch 到 activeIndex 元素（懒加载替换上来的元素）


.. versionadded:: 1.3

.. method:: Switchable.prototype.destroy

    | **destroy** (keepNode)
    | 销毁该组件

    :param Boolean keepNode: 是否保留节点，默认 false.

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

.. function:: Switchable.add

    | **add** (ev)
    | 添加节点后触发

    :param Object ev: 事件对象
    :param Number ev.index: 新节点所在的位置
    :param HTMLElement trigger: 新 trigger 节点
    :param HTMLElement panel: 新内容节点

.. function:: Switchable.beforeRemove

    | **beforeRemove** (ev)
    | 删除节前触发. 当该事件的函数处理器返回 false, 则会阻止删除节动作.

    :param Object ev: 事件对象
    :param Number ev.index: 将要删除的节点所在的位置
    :param HTMLElement trigger: 将要被删除的 trigger 节点
    :param HTMLElement panel: 将要被删除的内容节点

.. function:: Switchable.remove

    | **remove** (ev)
    | 删除节点后触发

    :param Object ev: 事件对象
    :param Number ev.index: 删除的节点所在的位置
    :param HTMLElement trigger: 被删除的 trigger 节点
    :param HTMLElement panel: 被删除的内容节点


.. important::

    如果 panel css 指定了高宽，或内部图片指定了高宽，或设置了 :data:`~Switchable.config.viewSize` 都没问题，
    否则在网速慢时都会因为初始化取不到面板高度而出问题。

