.. currentmodule:: event

fireHandler
=================================



Module
-----------------------------------------------

  :mod:`event`

Methods
-----------------------------------------------

.. function:: fireHandler

    | Boolean **fireHandler** ( selector , eventType [ , domEvent ] )
    | 执行符合匹配的 dom 节点的相应事件的事件处理器.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string eventType: 包含一个或多个事件名称的字符串, 多个事件名以空格分开
        .. versionadded:: 1.3
                    事件可以通过加点来表示分组，例如 "click.one" , "click.two"

    :param object domEvent: 模拟原生事件的一些属性值信息
    :returns: 如果其中一个事件处理器返回 false , 则返回 false, 否则返回最后一个事件处理器的返回值

.. note::

    fireHandler 和 fire 的区别在于

    * fire 会冒泡以及执行对应事件的默认行为
    * fireHandler 只会执行当前节点的处理函数



        