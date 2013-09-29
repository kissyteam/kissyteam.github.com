.. currentmodule:: event

detach
=================================



Module
-----------------------------------------------

  :mod:`event`

Methods
-----------------------------------------------

.. function:: detach

    | void **detach** ( selector [ , eventType , fn , scope ] )
    | 从符合匹配的 dom 节点中移去相应事件的事件处理器
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string eventType: 包含一个或多个事件名称的字符串, 多个事件名以空格分开，
     也可以包含事件分组，例如 "click.one" , ".two" 等

    :param function(eventObject) fn: 绑定事件时的回调函数
    :param object scope: 绑定的事件处理器的对应 this 值

    用 ``on`` 绑定的事件处理器可以用 ``detach`` 解除绑定. 最简单的情况 ``detach(elem)`` 解除该元素上的所有绑定.

    .. code-block:: javascript

        Event.detach('#foo');

    上面的代码解除了 foo 元素上所有事件的事件处理器, 我们也可以解除某一个事件的全部事件处理器:

    .. code-block:: javascript

        Event.detach('#foo','click');

    当时如果程序对同一事件指定了不同的事件处理器, 这时就需要后面两个参数了

    .. code-block:: javascript

        var handler = function() {
          alert('The quick brown fox jumps over the lazy dog.');
        };
        Event.on('#foo','click', handler);
        Event.detach('#foo','click', handler);

    通过指定第三个参数, 我们可以保证该事件的其他事件处理器不受影响, 注意下面的代码则不会生效：

    .. code-block:: javascript

        var handler = function() {
          alert('The quick brown fox jumps over the lazy dog.');
        };
        var obj={x:1};
        Event.on('#foo','click', handler,obj);

        Event.detach('#foo','click', function() {
          alert('The quick brown fox jumps over the lazy dog.');
        },obj);

        Event.detach('#foo','click', handler,{x:1});

    虽然后面的两个 ``detach`` 参数从字面上来看完全一样, 但是由于是不同的对象, 所有仍然不会生效.
    如果需要解除特定的事件处理器, 我们需要同一个对象( 函数 )引用, 而不是恰好字面上相同的不同对象.

.. function:: remove

    | void **remove** ( selector , eventType , fn , scope )
    | 为 :func:`~event.detach` 的别名


    .. note::

        如果要解除特定的事件处理器 , ``detach`` 的参数必须和对应的 ``on`` 参数值相等( == )并且个数一致才能完成解除绑定的目标.


Demo
-------------------------------------------------
    .. raw:: html

        <iframe width="100%" height="135" class="iframe-demo" src="../../../../../source/raw/api/core/event/detach_1.html"></iframe>

    .. literalinclude:: /raw/api/core/event/detach_1.html
       :language: html

