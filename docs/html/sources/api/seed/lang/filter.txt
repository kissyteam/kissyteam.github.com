.. currentmodule:: Lang

filter
===============================

.. versionadded:: 1.2

Module
-----------------------------------------------

  :mod:`Lang`


Methods
-----------------------------------------------

.. function:: KISSY.filter

    | Boolean **KISSY.filter** (arr,fn[,context])
    | 遍历数组, 过滤出符和条件的数组项.
    
    :param Array arr: 需要遍历的数组.
    :param function fn: 过滤函数. 执行时, 接收 3 个参数：当前项、当前 index, 数组.
    :param object context: fn 执行的上下文对象
    :returns: 返回符合过滤函数的新数组
    :rtype: Array
    
    例如

    .. code-block:: javascript

        var S = KISSY,
        arr = [1, 2, 3, 4, 5];

        var ret = S.filter(arr, function(item) {
            return item % 2 === 0;
        });
        S.log(ret); // => [2, 4]