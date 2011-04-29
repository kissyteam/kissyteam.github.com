.. currentmodule:: Lang

KISSY.unparam
===============================

.. function:: KISSY.unparam(str)

    将参数字符串 str 还原为对象。
    
    :param object o: 参数字符串
    :returns: 参数的对象表示
    :rtype: object
    
例如

    var S = KISSY;

    S.unparam('foo=1&bar=2'); // => { foo: 1, bar: 2 }
    S.unparam('foo=1&bar[]=2&bar[]=3'); // => { foo: 1, bar: [2, 3] }  