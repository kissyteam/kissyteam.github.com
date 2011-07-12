.. currentmodule:: Lang

later
===============================

Module
-----------------------------------------------

  :mod:`Lang`


Methods
-----------------------------------------------

.. function:: KISSY.later

    | Object **KISSY.later** ( fn[, when, periodic, o, data] )
    | 延迟执行指定函数 fn
    
    :param function fn: 延迟执行的函数。 
    :param number when: 延迟时间，单位是毫秒。 
    :param boolean periodic: 是不是周期性执行。默认为 false. 
    :param object o: fn 上下文对象
    :param Array data: 传递的参数。可以为单个对象，最后会转换成数组，依次传递给执行函数。 
    :returns: timer 对象。包含属性
              .. attribute:: timer.interval
              
                    是否周期执行
                    
              .. attribute:: timer.cancel
              
                    取消定时器
                              
    :rtype: object

    例如

    .. code-block:: javascript

        var S = KISSY;

        S.later(function(data) {
            S.log(data);
        }, 0, false, null, 'I am later data.');