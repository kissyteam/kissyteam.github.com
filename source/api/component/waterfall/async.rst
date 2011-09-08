.. currentmodule:: waterfall

Waterfall.Async
======================================

|  `源码 <https://github.com/kissyteam/kissy/blob/master/src/waterfall/async.js>`_  | `Demo <../../../demo/component/waterfall/demo2.html>`_

Class
-----------------------------------------------

  * :class:`Waterfall.Async`

Config Attributes
-----------------------------------------------

  * :data:`container`
  * :data:`minColCount`
  * :data:`effect`
  * :data:`colWidth`

  以上配置项都是继承自  :class:`Waterfall` , 另外, 自身还有:

  * :data:`remote`
  * :data:`diff`
  * :data:`itemTpl`

Methods
-----------------------------------------------

  * :meth:`adjust`
  * :meth:`addItems`
  * :meth:`destroy`

  以上配置项都是继承自  :class:`Waterfall` .


Events
-----------------------------------------------

  * :meth:`loadStart`
  * :meth:`loadEnd`


Class Detail
-----------------------------------------------

.. class:: Waterfall.Async

    | **Waterfall.Async** (config)
    | 继承自 :class:`Waterfall` , 异步获取数据后, 再进行排列.

    :param Object config: 配置项, 详细见下方 **Config Attributes Detail** .

    .. note::

        如果你使用时, 想要自行写接口获取数据块, 可以直接使用  :class:`Waterfall` ;

Config Attributes Detail
-----------------------------------------------

.. data:: remote

    {Object|Function} - 远程数据接口. 同 :mod:`io` 的配置对象 .

    .. note::

        - 如果是 Function, 则会先执行函数, 返回值会作为 io 配置项.
        - **注意** 配置项中的 success 和 complete 不能设置.

.. data:: diff

    {Number} - 滚动时, 当最小高度的列超过在屏幕高度+已滚动高度+diff时, 会去加载更多数据.

.. data:: itemTpl

    {String} - 每个数据块的模板字符串, 同 :mod:`template`


Events Detail
-----------------------------------------------

.. method:: loadStart

    | **loadStart** ( )
    | 当开始加载数据, 发出请求前触发该事件.


.. method:: loadEnd

    | **loadEnd** ( )
    | 当请求完成后, 触发该事件.





