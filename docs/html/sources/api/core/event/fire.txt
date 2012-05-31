.. currentmodule:: event

fire
=================================



Module
-----------------------------------------------

  :mod:`event`

Methods
-----------------------------------------------

.. function:: fire

    | Boolean **fire** ( selector , eventType [ , domEvent ] )
    | 执行符合匹配的 dom 节点的相应事件的事件处理器和默认行为.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string eventType: 包含一个或多个事件名称的字符串, 多个事件名以空格分开
    :param object domEvent: 模拟原生事件的一些属性值信息
    :returns: 如果其中一个事件处理器返回 false , 则返回 false, 否则返回最后一个事件处理器的返回值

    
    用 :func:`Event.on <event.on>` 绑定的事件处理器可以被用户触发的原生事件调用. 但是这些事件处理器也可以使用 ``fire`` 手动调用.
    调用 fire() 和用户触发导致的处理器调用调用是一样的顺序.

    .. code-block:: javascript

        Event.on('#foo','click',function(){
            alert(DOM.text(this));
        });

        Event.fire('#foo','click');

    .. note:

        fire() 触发的事件也会沿 DOM 树冒泡. 事件处理区可以通过 :meth:`~event.Object.stopPropagation` 来阻止冒泡.
        fire() 触发的事件对象如果不提供参数 domEvent 则只会包含 type target currentTarget 属性.


Demo
-------------------------------------------------

    点击第二个按钮手动触发第一个按钮的点击, 简便起见使用 :mod:`node` 接口.

    .. raw:: html

        <iframe width="100%" height="135" class="iframe-demo" src="../../../static/api/core/event/fire.html"></iframe>

    .. literalinclude:: /_static/api/core/event/fire.html
       :language: html



        