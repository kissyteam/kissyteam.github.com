.. currentmodule:: seed

throttle
===============================





Methods
-----------------------------------------------

.. function:: KISSY.throttle

    | Function **KISSY.throttle** (fn, ms, context)
    | ms 时间内只执行 fn 一次, 即使这段时间内 fn 被调用多次.
    
    :param Function fn: 要缓存的函数;
    :param Number ms: 要缓存多长时间后执行, 默认是 150 ms;
    :param Object context: 函数 fn 要执行时的上下文环境, 默认是 ``this``;
    :returns: 返回缓存后的函数对象;
    :rtype: Function

    .. note::

        - 当 ms 设置为 -1, 表示立即执行 fn, 即和直接调用 fn 一样;
        - :func:`throttle <KISSY.throttle>` 和 :func:`buffer <KISSY.buffer>` 的区别在于, 前者表示间隔内的函数触发被忽略, 后者表示间隔内的触发被放到下个间隔触发

    例如

    .. code-block:: javascript

         function sayHi() {
            alert('hi');
         }

        say = S.throttle(sayHi, 300, this);
        say();              // 忽略
        S.later(say, 200);  // 忽略
        S.later(say, 350);  // 超过300ms后, 终于执行

