.. currentmodule:: Lang

reduce
===============================

.. versionadded:: 1.2

Module
-----------------------------------------------

  :mod:`Lang`


Methods
-----------------------------------------------

.. function:: KISSY.reduce

    | Array **KISSY.reduce** (arr,fn[,initialValue])
    | 从左向右对每个数组元素调用给定函数，并把返回值累积起来
    
    :param Array arr: 需要遍历的数组.
    :param function fn: 在每个数组元素上执行的函数.
    :param object initialValue: 初次执行 fn 时的第一个参数值.
    :returns: 累计值