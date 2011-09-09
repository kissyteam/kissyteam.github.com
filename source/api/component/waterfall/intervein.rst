.. module:: waterfall

Waterfall
======================================

|  `源码 <https://github.com/kissyteam/kissy/blob/master/src/waterfall/base.js>`_  | `Demo <../../../demo/component/waterfall/demo1.html>`_

Class
-----------------------------------------------

  * :class:`Waterfall`
 
Config Attributes
-----------------------------------------------

  * :data:`container`
  * :data:`minColCount`
  * :data:`effect`
  * :data:`colWidth`

Methods
-----------------------------------------------

  * :meth:`adjust`
  * :meth:`addItems`
  * :meth:`destroy`

Class Detail
-----------------------------------------------

.. class:: Waterfall

    | **Waterfall** (config)
    | 将容器内的每个数据块进行瀑布排列.

    :param Object config: 配置项, 详细见下方 **Config Attributes Detail** .


Config Attributes Detail
-----------------------------------------------

.. data:: container

    {String|HTMLElement|KISSY.Node} - 容器对象.

    .. note::

        该容器的孩子节点中, 具有 ``ks-waterfall`` class 会被自动识别为要排列的数据块元素.

.. data:: minColCount

    {Number} - 最小列数, 默认为 1. 当窗口变小时, 计算得到的列数不能小于该值.

.. data:: effect

    {String} - 各数据块展示时的动画效果, 默认为 "fadeIn", 可取: "fadeIn", "slideDown", "show"

.. data:: colWidth

    {Number} - 每列的总宽度. 如果要设每列的间距, 请自行设置 margin, 而该值是指包含了 padding, width, margin 后的总宽度.

Methods Detail
-----------------------------------------------

.. method:: adjust

    | **adjust** ()
    | 调整各个数据块的位置.


.. method:: addItems

    | **addItems** (items, callback)
    | 在当前容器中, 添加新数据块.

    :param Array<HTMLElement|KISSY.Node> items: 待添加的数据块数组
    :param Function callback: 添加完数据后的回调函数

.. method:: destroy

    | **destroy** ()
    | 销毁当前对象

