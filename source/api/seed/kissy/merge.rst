.. currentmodule:: Seed

merge
===============================

Module
-----------------------------------------------

  :mod:`Seed`


Methods
-----------------------------------------------

.. function:: KISSY.merge

    | Object **KISSY.merge** (s1,s2[,...])
    | 将多个对象的成员合并到一个新对象上。参数中，后面的对象成员会覆盖前面的。
    
    :param object s1: 属性源
    :param object s2: 属性源
    :returns: 合并属性后的新对象。
    :rtype: object
    
    例如：

    .. code-block:: javascript

        var S = KISSY,
        a = { a: 'a' },
        b = { b: 'b' },
        c = { b: 'b2', c: 'c' };

        var o = S.merge(a, b, c);
        S.log(o.a); // => 'a'
        S.log(o.b); // => 'b2'
        S.log(o.c); // => 'c'
    
简单情况下 merge 方法常用来合并配置信息。推荐使用 ``Base`` 处理属性配置。