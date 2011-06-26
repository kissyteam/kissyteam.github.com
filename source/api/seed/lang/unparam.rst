.. currentmodule:: Lang

unparam
===============================

Module
-----------------------------------------------

  :mod:`Lang`


Methods
-----------------------------------------------

.. function:: KISSY.unparam

    | Object **KISSY.unparam** (str[ ,sep='&',eq='=' ])
    | 将参数字符串 str 还原为对象。
    
    :param object o: 参数字符串
    :param string seq: 参数间分隔符，默认 ``&``
    :param string eq: 参数与参数值间的分割符，默认 ``=``
    :returns: 参数的对象表示
    :rtype: Object
    
.. versionchanged:: 1.2
    key 可以不加 ``[]`` 如 ``v=1&v=2 => {v:[1,2]}`` 
    
.. note::

    参数值如果是 gbk 编码的，则不会解码出对应的真实值。（用的原生 decodeURIComponent，请修改参数值为 utf-8 编码）。

    
例如

.. code-block:: javascript

    var S = KISSY;

    S.unparam('foo=1&bar=2'); // => { foo: 1, bar: 2 }
    S.unparam('foo=%81%47'); // gbk 编码 => { foo: "%81%47" } 而不是 {foo: "丢"}
    S.unparam('foo=1&bar=2&bar=3'); // => { foo: 1, bar: [2, 3] }  
    S.unparam('foo=1&bar%5B%5D=2&bar%5B%5D=3'); // => { foo: 1, bar: [2, 3] }  