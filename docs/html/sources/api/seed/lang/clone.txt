.. currentmodule:: seed

clone
===============================

Module
-----------------------------------------------

  :mod:`seed`


Methods
-----------------------------------------------

.. function:: KISSY.clone

    | Object **KISSY.clone** (o[,filter])
    | 创建一个 :func:`普通对象 <KISSY.isPlainObject>` 或数组的深拷贝, 并且返回.
    
    :param object|Array o: 待深拷贝的对象或数组.
    :param filter: 过滤函数, 返回 false 不拷贝该元素. 传入参数为
                   * 待克隆值为数组, 参数同 :func:`KISSY.filter` , 上下文对象为全局 window
                   * 待克隆值为普通对象, 参数为对象的每个键, 每个键对应的值, 当前对象, 上下文对象为当前对象.
    :returns: 拷贝后的新对象
    :type: object
    
    例如

    .. code-block:: javascript

        var S = KISSY;
        var a={x:{y:{z:1}}}
        var b=S.clone(a); // => b={x:y:{z:1}} , b!==a
        var c=S.clone(a,function(v,k){if(k=="z") return false;}) // => c={x:{y:{}}}