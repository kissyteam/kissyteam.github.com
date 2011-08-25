.. currentmodule:: seed

map
===============================

.. versionadded:: 1.2

Module
-----------------------------------------------

  :mod:`seed`


Methods
-----------------------------------------------

.. function:: KISSY.map

    | Array **KISSY.map** (arr,fn[,context])
    | 创建一个新数组, 数组结果是在对每个原数组元素调用指定函数的返回值.
    
    :param Array arr: 需要遍历的数组.
    :param function fn: 能够根据原数组当前元素返回新数组元素的函数.
    :param object context: 执行 ``fn`` 时的 ``this`` 值.
    :returns: 返回符合根据指定函数调用得到新数组
    :rtype: Array
    
    .. note::

        原数组保持不变


    例如:

    .. code-block:: javascript

        function makePseudoPlural(single) {
            return single.replace(/o/g, "e");
        }

        var singles = ["foot", "goose", "moose"];
        var plurals = S.map(singles, makePseudoPlural);  // => ["feet", "geese", "meese"]

        var a = S.map("Hello World",function(x) {
            return x.charCodeAt(0);
        }); // => [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]