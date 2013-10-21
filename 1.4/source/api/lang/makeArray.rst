.. currentmodule:: seed

makeArray
===============================



Methods
-----------------------------------------------

.. function:: KISSY.makeArray

    | Array **KISSY.makeArray** (o)
    | 将对象 o 转换为数组.
    
    :param o: arguments, NodeList 等 array-like 对象或单个对象
    :returns: 可以代表 o 的新数组
    :rtype: Array

    例如

    .. code-block:: javascript

        var S = KISSY;

        S.makeArray('str'); // => ['str']
        S.makeArray(S.query('.div')); // => 由所有 div 元素组成的数组
        S.makeArray(null); // => []