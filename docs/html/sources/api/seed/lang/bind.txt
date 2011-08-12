.. currentmodule:: Lang

bind
===============================

.. versionadded:: 1.2

Module
-----------------------------------------------

  :mod:`Lang`


Methods
-----------------------------------------------

.. function:: KISSY.bind

    | Array **KISSY.bind** (fn , context[, arg1[, arg2[, ...]]])
    | 创建一个新函数，该函数可以在固定的上下文以及传递部分固定参数放在用户参数前面给原函数并执行
    
    :param function fn: 需要固定上下文以及固定部分参数的函数
    :param object context: 执行 ``fn`` 时的 ``this`` 值. 如果新函数用于构造器则该参数无用.
    :returns: 符合需求的新函数
    :rtype: function
    

示例
--------------------------------------------

改变运行上下文
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

bind 最简单的用法是生成一个新的函数，无论它如何调用，都运行在一个固定的 this 值中.入门者常犯的错误时从一个对象获得一个方法引用，
然后在后面的调用中期望这个方法的this就是原来的对象(eg.g 把这个方法用在某个回调中). 如果没有特例，那么这个原始对象就丢失了. 
但是如果从原方法中得到一个绑定原始对象的函数，这个问题就解决了！

.. code-block:: html

    var x = 9; 
    var module = {
      x: 81,
      getX: function() { return this.x; }
    };
    
    module.getX(); // 81
    
    var getX = module.getX;
    getX(); // 9, because in this case, "this" refers to the global object
    
    // create a new function with 'this' bound to module
    var boundGetX = KISSY.bind(getX,module);
    boundGetX(); // 81    
    
    
Currying
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

``bind`` 的下一个简单用法是产生一个具备默认参数的函数. 这些参数跟在 context 后面，无论何时调用绑定函数，
当绑定函数调用目标函数时会把它们放在参数列表开头，然后才是传递给绑定函数的用户参数.


.. code-block:: html

    function list() {
      return Array.prototype.slice.call(arguments);
    }
    
    var list1 = list(1, 2, 3); // [1, 2, 3]
    
    //  Create a function with a preset leading argument
    var leadingZeroList = KISSY.bind(list,undefined, 37);
    
    var list2 = leadingZeroList(); // [37]
    var list3 = leadingZeroList(1, 2, 3); // [37, 1, 2, 3]