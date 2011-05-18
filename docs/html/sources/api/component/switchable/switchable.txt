.. py:currentmodule:: Switchable

父类 Switchable
===================================================================

.. hint::

  Switchable 是核心类, S.Tabs/S.Slide/S.Accordion/S.Carousel 都是扩展自它.


获取构造器
--------------------------------------------------------------------
页面引入 kissy.js :

.. code-block:: html

    <script src='kissy.js'></script>

通过 use 加载 Switchable 模块：

.. code-block:: javascript

    KISSY.use("switchable",function(){
        var Switchable = S.Switchable;
        //使用 Switchable 构造器
    });

.. versionadded:: 1.2
    KISSY 1.2 可直接通过依赖注入，从函数参数中取得
    
    .. code-block:: javascript
    
        KISSY.use("switchable",function(S,Switchable){
            //使用 Switchable 构造器
        });


构造器接口
---------------------------------------------------------------------

.. py:class:: Switchable(container, config)

    :param object container: 所在容器, 可以是 选择器字符串, HTMLElement

    :param object config: Switchable 的配置信息, 具体见下详解
    
    例如一个简单的接口示例：
    
    .. code-block:: javascript
    
        var a = new S.Tabs('#J_TSearch', {
            markupType: 0,
            navCls: 'tsearch-tab',
            contentCls: 'tsearch-panel',
            triggerType: 'mouse',
            activeTriggerCls: 'current'
        });


config 配置项详解
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. py:attribute:: markupType

    (optional): {Number} 默认为0. 指明 DOM 结构标记的类型, 可取 0, 1, 2:

当取 0 时, 表示 DOM 是默认结构: 通过 nav 和 content 来获取 triggers 和 panels, 即通过配置以下两个参数获取.

.. py:attribute:: navCls

    (optional): {String}, triggers 所在容器的 class, 默认为 'ks-switchable-nav',

.. py:attribute:: contentCls

    (optional): {String}, panels 所在容器的 class, 默认为 'ks-switchable-content',


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

.. py:attribute:: triggerCls

    (optional): {String}, 默认为 'ks-switchable-trigger', 会在 container 下寻找指定 class 的元素作为触发器


.. py:attribute:: panelCls

    (optional):  {String}, 默认为 'ks-switchable-panel', 会在 container 下寻找指定 class 的元素作为面板

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

当取 2 时,  表示 DOM 结构 完全自由: 直接传入 triggers 和 panels, 即通过配置以下两个参数获取.

.. py:attribute:: triggers

    (optional): {Array}, 默认为 [], 触发器数组

.. py:attribute:: panels

    (optional): {Array}, 默认为 [], 面板数组

这种方式下, DOM 结构就非常自由了, 传入什么内容有你自己定, 只需要 triggers 和 panels 的数量保持一致就好.

.. py:attribute:: hasTriggers

    (optional): {Boolean}, 默认为 true, 是否有触点

.. py:attribute:: triggerType

    (optional): {String} 'mouse' 或 'click' , 默认为 'mouse' 触发类型

.. py:attribute:: delay

    (optional): {Number} 触发延迟时间, 单位为s,  默认为 .1 , 即 100ms

.. py:attribute:: activeIndex

    (optional): {Number} markup 的默认激活项, 应该与此 index 一致, 默认为 0

    .. note::

       使用此项时, 需要让激活项对应的 trigger 和 panel 的 HTMLElement, 在 DOM 结构上设置为 激活状态, 不然无法正确切换


.. py:attribute:: activeTriggerCls

    (optional): {String} 激活某个 trigger 时设置的 class , 默认是 'ks-active'

.. py:attribute:: switchTo

    (optional): : {Number} 初始话时, 自动切换到指定面板, 默认为 0 , 即第一个

    .. note::

       switchTo 和 activeIndex 的区别是:

       * activeIndex 需要 DOM 上设置激活状态, 初始化后不会去切换状态;

       * switchTo 则不需要修改 DOM, 但 switchTo 设置后, 会去切换到指定状态, 这在用了一些动画效果时, 切换动作更为明显;

.. py:attribute:: steps

    (optional): {Number} 步长, 表示每次切换要间隔多少个 panels, 默认为 1

.. py:attribute:: viewSize

    (optional): {Array} 可见视图区域的大小. 一般不需要设定此值, 仅当获取值不正确时, 用于手工指定大小, 默认为 []

.. py:attribute:: aria

    (optional): {Boolean} 无障碍访问支持, 默认为 false, 即不开启


实例属性
-----------------------------------------------------------------------------

.. py:attribute:: container

    (只读): {HTMLElement} 容器元素

.. py:attribute:: config

    (只读): {Object} 配置信息

.. py:attribute:: triggers

    (只读): {Array} 触发器集合, 可以为空值 []

.. py:attribute:: panels

    (只读): {Array} 切换面板集合,  可以为空值 []

.. py:attribute:: content

    (只读): {HTMLElement} 存放面板的容器元素

.. py:attribute:: length

    (只读): {Number} 触发器或面板的个数

.. py:attribute:: activeIndex

    (只读): {Number} 当前被激活的触发器序号, 从0 开始

.. py:attribute:: switchTimer

    (只读): {Object} 切换定时器, 一般作为内部使用


实例方法
----------------------------------------------------------------------------------------------------------

.. py:method:: Switchable.switchTo(index, direction, ev, callback)

    :param {Number} index: 要切换的项
    :param {String} direction: (可选) 方向, 用于 effect, 可取 'forward', 'backward', 或者不设置
    :param {EventObject} ev: (可选) 引起该操作的事件
    :param {Function} callback: (可选) 运行完回调, 和绑定 switch 事件作用一样


    切换到某个视图


.. py:method:: Switchable.prev(ev)

    :param {EventObject} ev: (可选) 引起该操作的事件

    切换到上一视图

.. py:method:: Switchable.next(ev)

    :param {EventObject} ev: (可选) 引起该操作的事件

    切换到下一视图



触发事件
------------------------------------------------------------------------------------------

.. attribute:: beforeSwitch
    
    切换前事件

    .. hint::

        当该事件的函数处理器返回 false,  则会阻止切换动作.

.. attribute:: switch

    切换事件

    .. code-block:: javascript
    
        var tabs = new S.Tabs('#demo1');

        tabs.on('switch', function(ev) {
            if (ev.toIndex === 0) {
                alert('下一张是第一张');
            }
        });


