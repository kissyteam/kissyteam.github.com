.. currentmodule:: seed

reduce
===============================

.. versionadded:: 1.2

Module
-----------------------------------------------

  :mod:`seed`


Methods
-----------------------------------------------

.. function:: KISSY.reduce

    | Array **KISSY.reduce** (arr,fn[,initialValue])
    | 从左向右对每个数组元素调用给定函数，并把返回值累积起来
    
    :param Array arr: 需要遍历的数组.
    :param function fn: 在每个数组元素上执行的函数.
    :param object initialValue: 初次执行 fn 时的第一个参数值，如果不指定则为第一个元素值，后续从第二个元素开始遍历
    :returns: 累计值
    

    ``reduce`` 对数组中的每个元素执行 ``fn`` 函数，该 ``fn`` 接受四个参数：initialValue (或者上次调用 ``fn`` 的返回值)，
    数组的当前元素，数组的当前位置以及用于遍历的数组.

    调用 ``reduce`` 类似于：

    .. code-block:: javascript

        KISSY.reduce([],function(previousValue, currentValue, index, array){});

    当第一次调用 fn 时 :

    #. 如果调用 reduce 时没有设定 initialValue，previousValue 和 currentValue 是数组的前两个值.
    #. 如果调用 reduce 时设定了 initialValue，那么 previousValue  和 initialValue 相等 ，而 currentValue 则和数组的第一个元素相等.

    **例如**

    .. code-block:: javascript

        KISSY.reduce([0,1,2,3,4],function(previousValue, currentValue, index, array){
          return previousValue + currentValue;
        });

        // First call
        previousValue = 0, currentValue = 1, index = 1

        // Second call
        previousValue = 1, currentValue = 2, index = 2

        // Third call
        previousValue = 3, currentValue = 3, index = 3

        // Fourth call
        previousValue = 6, currentValue = 4, index = 4

        // array is always the object [0,1,2,3,4] upon which reduce was called

        // Return Value: 10

    提供了 initialValue

    .. code-block:: javascript

        KISSY.reduce([0,1,2,3,4],function(previousValue, currentValue, index, array){
          return previousValue + currentValue;
        }, 10);

        // First call
        previousValue = 10, currentValue = 0, index = 0

        // Second call
        previousValue = 10, currentValue = 1, index = 1

        // Third call
        previousValue = 11, currentValue = 2, index = 2

        // Fourth call
        previousValue = 13, currentValue = 3, index = 3

        // Fifth call
        previousValue = 16, currentValue = 4, index = 4

        // array is always the object [0,1,2,3,4] upon which reduce was called

        // Return Value: 20
    
    
    **得到数组的值总和**

    .. code-block:: javascript

        var total = KISSY.reduce([0, 1, 2, 3],function(a, b){ return a + b; });
        // total == 6

    **嵌套数组平坦化**

    .. code-block:: javascript

        var flattened = KISSY.reduce([[0,1], [2,3], [4,5]],function(a,b) {
          return a.concat(b);
        });
        // flattened is [0, 1, 2, 3, 4, 5]