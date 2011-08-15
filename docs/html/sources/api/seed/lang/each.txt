.. currentmodule:: seed

each
===============================

Module
-----------------------------------------------

  :mod:`seed`


Methods
-----------------------------------------------

.. function:: KISSY.each

    | Object **KISSY.each** ( o, fn[, context] )
    | 遍历数组中的每一项, 执行指定方法.
    
    :param Array|object o: 需要遍历的数组或对象
    :param function fn: 执行时, 接收 3 个参数：
                       
                        * 当 o 为数组时, 参数为当前数组单项值, 当前 index, 数组 o
                        * 当 o 为对象时, 参数为当前值 (value), 当前键 (key), 对象 o
    :param object context: fn 的上下文对象, 不指定为全局 window
    
    例如

    .. code-block:: javascript

        var S = KISSY,
        arr = [1, 2, 3, 4, 5],
        sum = 0;

        S.each(arr, function(item) {
            sum += item;
        });
        S.log(sum); // => 15