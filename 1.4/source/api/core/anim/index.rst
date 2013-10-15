.. module:: anim

anim
===============================================

.. raw:: html

    <a class='source-button' href='https://github.com/kissyteam/kissy/tree/1.4.x/src/anim' target='_blank'>view anim source</a>

.. code-block:: javascript

    KISSY.use('anim',function(S,Anim){
        // use Anim
    });

Class
-----------------------------------------------

  * :class:`Anim`


Methods
-----------------------------------------------

  * :meth:`~Anim.prototype.isRunning`
  * :meth:`~Anim.prototype.isPaused`
  * :meth:`~Anim.prototype.run`
  * :meth:`~Anim.prototype.stop`
  * :meth:`~Anim.prototype.pause`
  * :meth:`~Anim.prototype.resume`

Static Methods
----------------------------------------------

  * :meth:`Anim.isRunning`
  * :meth:`Anim.isPaused`
  * :meth:`Anim.stop`

Events
-----------------------------------------------

  * :func:`~Anim.Events.complete`

Class Detail
-----------------------------------------------

.. class:: Anim

    | **Anim** (elem, props[, duration, easing, completeFn])
    | 得到绑定于某个 dom 节点的动画实例

    :param String|HTMLElement|KISSY.Node|window|普通的Object elem: 作用动画的元素节点或窗口（窗口时仅支持 scrollTop/Left）.
    :param Object props: 动画结束的 dom 样式值, 例如

        .. code-block:: javascript

            {
                width:"100px",
                height:"100px"
            }

        表示节点将从当前宽高经过动画平滑变化到宽 100px 与高 100px.


            也可以设置 scrollLeft 或者 scrollTop, 这时会直接对元素的滚动属性产生动画.

    :param Number duration: 默认为 1 , 动画持续时间, 以秒为单元.
    :param String easing: 默认为 'easeNone' , 动画平滑函数, 可取值 "swing", "easeNone", "linear", "easeIn", "easeOut", "easeBoth","easeInStrong", "easeOutStrong","easeBothStrong","elasticIn","elasticOut", "elasticBoth","backIn","backOut","backBoth", "bounceIn","bounceOut","bounceBoth", "cubic-bezier(p1x, p1y, p2x, p2y)".
                        效果预览, 可以参考 :ref:`easing 可视化 <easing_visual>` .
    :param function completeFn: 动画到最后一帧后的回调函数.


    | **Anim** (elem, props[, config])
    | 得到绑定于某个 dom 节点的动画实例

    :param String|HTMLElement|KISSY.Node|window|普通的Object elem: 作用动画的元素节点.
    :param Object props: 动画结束的 dom 样式值
    :param Number config: 动画配置项，包含:

            .. attribute:: config.duration

                单位秒。默认 1 秒.动画持续时间

            .. attribute:: config.easing

               string|function。默认 'easeNone'. 动画平滑函数

            .. attribute:: config.queue

                String|false|undefined。所属队列名称. 默认undefined. 属于系统内置队列, 设置 false 则表示该动画不排队立即执行.

            .. attribute:: config.complete

                function。 动画到最后一帧后的回调函数.

            .. attribute:: config.useTransition

                boolean。 是否使用css3 transiton提升性能

    .. code-block:: javascript

        //对普通的Object使用Anim
        KISSY.use('anim',function(S,Anim) {
            new Anim({a:1},{a:2},{frame:function(anim,fx){console.log(fx)}}).run();
        });

Methods Detail
-----------------------------------------------

.. method:: Anim.prototype.isRunning

    | **isRunning** ()
    | 判断当前动画对象是否在执行动画过程.

    :rtype: Boolean



.. method:: Anim.prototype.isPaused

    | **isPaused** ()
    | 判断当前动画对象是否被暂停.

    :rtype: Boolean


.. method:: Anim.prototype.run

    | **run** ()
    | 在动画实例上调用, 开始当前动画实例的动画.

.. method:: Anim.prototype.stop

    | **stop** ([finish=false])
    | 在动画实例上调用, 结束当前动画实例的动画.

    :param Boolean finish: false 时, 动画会在当前帧直接停止（不触发 complete 回调）.
     为 true 时, 动画停止时会立刻跳到最后一帧（触发 complete 回调）



.. method:: Anim.prototype.pause

    | **pause** ()
    | 在动画实例上调用, 暂停当前动画实例的动画.



.. method:: Anim.prototype.resume

    | **resume** ()
    | 在动画实例上调用, 继续当前动画实例的动画.

.. method:: Anim.isRunning

    | static **Anim.isRunning** (elem)
    | :class:`Anim` 的静态方法, 用于判断 elem 上是否有动画对象在执行.

    :param HTMLElement|window elem: 作用动画的元素节点.
    :rtype: Boolean



.. method:: Anim.isPaused



    | static **Anim.isPaused** (elem)
    | :class:`Anim` 的静态方法, 用于判断 elem 上是否有动画对象在暂停.

    :param HTMLElement|window elem: 作用动画的元素节点.
    :rtype: Boolean

.. method:: Anim.stop



    | static **Anim.stop** (elem, end, clearQueue, queueName)
    | :class:`Anim` 的静态方法, 停止某元素上的动画（集合）.

    :param HTMLElement|window elem: 作用动画的元素节点.
    :param Boolean end: 此参数同实例方法 :meth:`stop` 中的 finish 参数.
    :param Boolean clearQueue: 默认为 false, 是否清除动画队列中余下的动画.
    :param String queueName: 队列名字.

                            设置 queueName 后, 表示停止元素上指定队列中的所有动画:

                                * null 表示默认队列的动画
                                * false 表示不排队的动画
                                * string 类型表示指定名称的队列的动画

                             不设置时, 表示停止所有队列中的所有动画;



.. method:: Anim.pause

    | static **Anim.pause** (elem, queueName)
    | :class:`Anim` 的静态方法, 暂停某元素上的动画（集合）.

    :param HTMLElement|window elem: 作用动画的元素节点.
    :param String queueName: 队列名字.

                            设置 queueName 后, 表示停止元素上指定队列中的所有动画:

                                * null 表示默认队列的动画
                                * false 表示不排队的动画
                                * string 类型表示指定名称的队列的动画

                             不设置时, 表示暂停所有队列中的所有动画;



.. method:: Anim.resume

    | static **Anim.resume** (elem, queueName)
    | :class:`Anim` 的静态方法, 继续某元素上的动画（集合）.

    :param HTMLElement|window elem: 作用动画的元素节点.
    :param String queueName: 队列名字.

                            设置 queueName 后, 表示停止元素上指定队列中的所有动画:

                                * null 表示默认队列的动画
                                * false 表示不排队的动画
                                * string 类型表示指定名称的队列的动画

                             不设置时, 表示继续所有队列中的所有动画;


Events Detail
-----------------------------------------------

.. function:: Anim.Events.complete

    | **complete** ()
    | 动画结束后, 触发该事件.

.. note::

    **支持跨浏览器的css transform**

    .. code-block:: javascript

        new Anim(t,{'transform':'rotate(39deg) skew(40deg)'}).run();

.. note::

    队列的使用, 可以参考 `动画实例 <../../../demo/core/anim/demo6.html>`_