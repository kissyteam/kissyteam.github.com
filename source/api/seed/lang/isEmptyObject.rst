.. currentmodule:: seed

isEmptyObject
===============================
Module
-----------------------------------------------

  :mod:`seed`


Methods
-----------------------------------------------

.. function:: KISSY.isEmptyObject

    | Boolean **KISSY.isEmptyObject** (o)
    | 判断是否空对象(没有任何可遍历的属性).
    
    :param o: 判断参数
    
    例如

    .. code-block:: javascript

        var S = KISSY;

        S.isEmptyObject({}); // => true
        S.isEmptyObject([]); // => true
        S.isEmptyObject({ a: 'a' }); // => false