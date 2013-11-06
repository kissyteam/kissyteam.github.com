.. currentmodule:: event

undelegate
=================================



Module
-----------------------------------------------

  :mod:`event`

Methods
-----------------------------------------------

.. function::  undelegate

    | void **undelegate** ( selector ,  eventType [ , filter , fn  , scope ] )
    | 为符合匹配的 dom 节点的相应事件去除事件处理器
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    :param string eventType: 包含一个或多个事件名称的字符串, 多个事件名以空格分开
    :param string filter: 可参见 :func:`dom.filter <dom.filter>` 的 filter 参数
    :param function(eventObject) fn: 当事件触发时的回调函数
    :param object scope: 回调函数的 this 值. 如果不指定默认为绑定事件的当前元素


    详细使用方法请参看 :ref:`delegate <event-delegate>`

    .. note::

        和 :func:`Event.detach <event.detach>` 一样, 如果移除特定的委托事件处理器必须保证参数和调用 delegate 时保持一致.