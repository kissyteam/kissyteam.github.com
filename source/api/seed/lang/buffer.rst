.. currentmodule:: seed

buffer
===============================



Module
-----------------------------------------------

  :mod:`seed`


Methods
-----------------------------------------------

.. function:: KISSY.buffer

    | Function **KISSY.buffer** (fn, ms, context)
    | 将 fn 缓存一段时间后, 再被调用执行
    
    :param Function fn: 要缓存的函数;
    :param Number ms: 要缓存多长时间后执行, 默认是 150 ms;
    :param Object context: 函数 fn 要执行时的上下文环境, 默认是 ``this``;
    :returns: 返回缓存后的函数对象;
    :rtype: Function

    .. note::

        - 此方法为了避免在 ms 段时间内, 执行 fn 多次. 常用于 ``resize`` , ``scroll`` , ``mousemove`` 等连续性事件中;
        - 当 ms 设置为 -1, 表示立即执行 fn, 即和直接调用 fn 一样;

    例如

    .. code-block:: javascript

        self.__onResize = S.buffer(doResize, 100, this);
        $(window).on("resize", self.__onResize);
