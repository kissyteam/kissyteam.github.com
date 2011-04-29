.. currentmodule:: Lang

KISSY.param
===============================

.. function:: KISSY.param(o)

    将对象 o 转换为参数字符串，用于发送 http 请求。
    
    :param object o: 参数键值对对象
    :returns: 可用于发送请求的参数字符串
    :rtype: string
    
例如

    var S = KISSY;

    S.param({ foo: 1, bar: 2 }); // => foo=1&bar=2
    S.param({ foo: 1, bar: [2, 3] }); // => foo=1&bar%5B%5D=2&bar%5B%5D=3
    S.param({ foo: '', bar: 2 }); // => foo=&bar=2
    S.param({ foo: undefined, bar: 2 }); // => foo=undefined&bar=2    