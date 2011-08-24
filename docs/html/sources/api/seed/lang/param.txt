.. currentmodule:: seed

param
===============================

Module
-----------------------------------------------

  :mod:`seed`


Methods
-----------------------------------------------

.. function:: KISSY.param

    | String **KISSY.param** (o[ ,sep='&',eq='=',arr=true ])
    | 将对象 o 转换为参数字符串, 用于发送 http 请求.
    
    :param object o: 参数键值对对象
    :param string seq: 参数间分隔符, 默认 ``&``
    :param string eq: 参数与参数值间的分隔符, 默认 ``=``
    :param boolean arr: 参数值为数组时, 参数键是否加 ``[]`` 即 ``%5B%5D`` , 默认 ``true``
    :returns: 可用于发送请求的参数字符串
    :rtype: string


    
    例如

    .. code-block:: javascript

        var S = KISSY;

        S.param({ foo: 1, bar: 2 }); // => foo=1&bar=2
        S.param({ foo: 1, bar: [2, 3] }); // => foo=1&bar%5B%5D=2&bar%5B%5D=3
        S.param({ foo: 1, bar: [2, 3] },'&','=',false); // => foo=1&bar=2&bar=3
        S.param({ foo: '', bar: 2 }); // => foo=&bar=2
        S.param({ foo: undefined, bar: 2 }); // => foo=undefined&bar=2

.. seealso::

    `Jquery.param <http://api.jquery.com/jQuery.param>`_

           