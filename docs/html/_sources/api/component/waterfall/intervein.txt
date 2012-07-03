.. module:: waterfall

Waterfall
======================================

Class
-----------------------------------------------

  * :class:`Waterfall`
 
Configs
-----------------------------------------------

  * :data:`container`
  * :data:`minColCount`
  * :data:`effect`
  * :data:`colWidth`
  * :data:`align`
  * :data:`adjustEffect`
  * :data:`align`

Methods
-----------------------------------------------

  * :meth:`adjust`
  * :meth:`addItems`
  * :meth:`destroy`
  * :meth:`isAdjusting`
  * :meth:`isAdding`
  * :meth:`adjustItem`
  * :meth:`removeItem`

Events
-----------------------------------------------

  * :func:`adjustComplete`
  * :func:`addComplete`


Class Detail
-----------------------------------------------

.. class:: Waterfall

    | **Waterfall** (config)
    | 将容器内的每个数据块进行瀑布排列.

    :param Object config: 配置项, 详细见下方 **Configs Detail** .


Configs Detail
-----------------------------------------------

.. data:: container

    {String|HTMLElement|KISSY.Node} - 容器对象.

    .. note::

        该容器的孩子节点中, 具有 ``ks-waterfall`` class 会被自动识别为要排列的数据块元素.

.. data:: align

    {String} - 容器内元素和容器对齐方向。可取值 "left", "center", "right". 默认 "center"

.. data:: minColCount

    {Number} - 最小列数, 默认为 1. 当窗口变小时, 计算得到的列数不能小于该值.

.. data:: effect

    {Object} - 各数据块展示时的动画效果, 默认为 { effect:"fadeIn", duration:1 }, 可取: "fadeIn", "slideDown", "show", 参数含义同 :class:`~anim.Anim` .

.. versionadded:: 1.3

.. data:: adjustEffect

    {Object} - 当窗口改变大小时，元素调整的动画特效，
    属性包括 ``easing`` 和 ``duration`` 默认没有特效，参数含义同 :class:`~anim.Anim` 。
    例如：

    .. code-block:: javascript

        {
            easing:'none', // easing type
            duration:0.5 // 调整动画时间
        }


.. data:: colWidth

    {Number} - 每列的总宽度. 如果要设每列的间距, 请自行设置 margin, 而该值是指包含了 padding, width, margin 后的总宽度.

Methods Detail
-----------------------------------------------

.. method:: adjust

    | **adjust** ()
    | 重新调整各个数据块的位置.

.. versionadded:: 1.3

.. method:: isAdjusting

    | **isAdjusting** ()
    | 当前是否正在进行元素位置调整

    :rtype: Boolean

.. versionadded:: 1.3

.. method:: isAdding

    | **isAdding** ()
    | 当前是否正在进行元素添加

    :rtype: Boolean

.. versionadded:: 1.3

.. method:: adjustItem

    | **adjustItem** (item,cfg)
    | 对单个元素调整大小

    :param {KISSY.Node} item 要调整的元素节点
    :param {Object} cfg 具体的调整配置
    :param {Function} cfg.callback 元素调整完毕后的回调函数
    :param {Function} cfg.process 元素的具体调整逻辑，
    如果返回数字则采用该数字做为高度重排同列所有元素，否则取调用 process后元素的实际高度做为重排依据。
    :param {Object} cfg.effect 同 :data:`waterfall.adjustEffect`
    :param {String} cfg.effect.easing
    :param {Number} cfg.effect.duration

.. versionadded:: 1.3

.. method:: removeItem

    | **removeItem** (item,cfg)
    | 删除单个元素

    :param {KISSY.Node} item 将要删除的元素节点
    :param {Object} cfg 具体的删除配置
    :param {Function} cfg.callback 元素调整完毕后的回调函数
    :param {Object} cfg.effect 同 :data:`waterfall.adjustEffect`
    :param {String} cfg.effect.easing
    :param {Number} cfg.effect.duration

.. method:: addItems

    | **addItems** (items, callback)
    | 在当前容器中, 添加新数据块.

    :param Array<HTMLElement|KISSY.Node> items: 待添加的数据块数组
    :param Function callback: 添加完数据后的回调函数

    .. versionadded:: 1.3

    .. note::

        可通过在元素节点添加 ``ks-waterfall-fixed-left`` 或 ``ks-waterfall-fixed-right`` 来使得该元素永远固定在左边或右边.

.. method:: destroy

    | **destroy** ()
    | 销毁当前对象


Events Detail
-----------------------------------------------

.. function:: adjustComplete

    | **adjustComplete** (ev)
    | 调整布局之后触发, 当页面初始时有数据块, 或改变窗口大小, 都会在调用 adjust 之后触发, 相当于 adjust 的 callback;

    :param Array<KISSY.Node> ev.items: 被调整的数据块集合

.. function:: addComplete

    | **addComplete** (ev)
    | 添加完数据块到容器之后触发, 针对于动态加载;

    :param Array<HTMLElement|KISSY.Node> ev.items: 被加载的新数据块