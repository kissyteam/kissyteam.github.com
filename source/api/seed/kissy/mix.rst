.. currentmodule:: seed

mix
===============================

Module
-----------------------------------------------

  :mod:`seed`


Methods
-----------------------------------------------

.. function:: KISSY.mix

    | Object **KISSY.mix** (receiver,supplier[,overwrite = true,whitelist])
    | 将 supplier 对象的成员复制到 receiver 对象上.
    
    :param object receiver: 属性接受者对象.
    :param object supplier: 属性来源对象.
    :param boolean overwrite: 是否覆盖接受者同名属性.
    :param Array<string> whitelist: 属性来源对象的属性白名单, 仅在名单中的属性进行复制.
    :returns: receiver 属性接受者对象.
    :rtype: object
    
    例如：

    .. code-block:: javascript

        var S = KISSY,
        r = { a: 'a', b: 'b' };

        S.mix(r, { c: 'c' });
        S.log(r.c); // => 'c'

        S.mix(r, { a: 'a2' }, false);
        S.log(r.a); // => 'a'

        S.mix(r, { e: 'e', f: 'f' }, true, ['f']);
        S.log(r.e); // => undefined
        S.log(r.f); // => 'f'

    该方法在 KISSY 里具有非常重要的地位.
    JavaScript 是一门动态语言, 利用 mixin 特性, 可以很方便的实现特性的静态复制和动态修改.