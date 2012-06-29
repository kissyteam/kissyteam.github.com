.. currentmodule:: seed

keys
===============================

Module
-----------------------------------------------

  :mod:`seed`


Methods
-----------------------------------------------

.. function:: KISSY.keys

    | Object **KISSY.keys** ( o )
    | 将对象的所有属性名作为数组返回
    
    :param {object} o: 需要遍历的对象
    :return {String[]}: 属性名数组
    
    例如

    .. code-block:: javascript

        var S = KISSY,
        var o= { x:1, y:2 };
        S.keys(o) => ["x","y"]
