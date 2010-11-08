.. _styleguide-js:

JavaScript 语言规范
====================================

* 声明变量时, 必须加上 ``var`` 关键字;
* 尽量减少全局变量的使用;
* 永远不要使用 ``const`` 关键字;
* 语句总是以分号结尾;
* 不要在块内声明一个函数;
* 复杂应用时, 进行适当的异常处理;
* 适时使用自定义异常;
* 标准特性优于非标准特性(如果类库有提供, 则尽量使用类库中的函数);
* 不要封装基本类型;
* 小心使用多级原型结构(推荐使用 `S.extend <http://kissyteam.github.com/kissy/docs/kissy/kissy.html#method_extend>`_ 实现继承);
* 添加方法和成员, 使用 ``Foo.prototype.bar = function() {...}`` 形式(推荐使用 `S.augment <http://kissyteam.github.com/kissy/docs/kissy/kissy.html#method_augment>`_);
* 小心使用闭包, 特别是牵涉到 DOM 时;
* 只在解析序列化串时使用 ``eval()``;
* 不要使用 ``with``;
* 减少使用 ``continue`` 和 ``break``;
* 仅在构造器, 方法及闭包中使用 ``this``;
* ``for-in`` 循环只用于 ``object/map/hash`` 的变量;
* 永远不要使用 ``Array`` 作为 ``map/hash/associative`` 数组;
* 使用 ``Array/Object`` 直接量, 而不是用 ``Array/Object`` 构造器;
* 不要修改内置对象的原型;
* 不是使用 ``IE`` 下的条件注释;
* 尽量使用严格的等价判断符 ``===`` , 尽量不用 ``==`` .



补充:
--------------------------

* 





