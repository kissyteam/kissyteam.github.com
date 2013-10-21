.. currentmodule:: seed

mix
===============================



Methods
-----------------------------------------------

.. function:: KISSY.mix

    | Object **KISSY.mix** (receiver , supplier [ , overwrite = true , whitelist , deep ])
    | 将 supplier 对象的成员复制到 receiver 对象上.
    
    :param object receiver: 属性接受者对象.
    :param object supplier: 属性来源对象.
    :param boolean overwrite: 是否覆盖接受者同名属性.
    :param Array<string> whitelist: 属性来源对象的属性白名单, 仅在名单中的属性进行复制.
    
    :param boolean deep:  是否进行深度 mix (deep copy)
    :returns: receiver 属性接受者对象.
    :rtype: object
    
    
    .. note::

        ``receiver`` 会被改变，如果想要保留原始的 ``receiver`` ，可以使用 :func:`KISSY.merge`

        .. code-block:: javascript

            var object=S.merge(object1,object2);


    ``S.mix`` 默认不是递归进行的. 如果其中一个属性为对象或者数组，那么他将会被接下来对象的同名属性对应的值所代替，即值不会被合并。
    如果设置了参数 ``deep = true`` ，那么会对数组和简单对象( :func:`KISSY.isPlainObject` )递归合并.

    ``supplier undefined`` 的属性值不会被复制，不过对象从原型继承下来下的值则会被复制.
    
    

    .. note::

        该方法仅适用于 javascript 对象，不要再浏览器对象上调用，例如 node.style



    **简单 mix**

        .. code-block:: javascript

            var S = KISSY,
            r = { a: 'a', b: 'b' };

            S.mix(r, { c: 'c' });
            S.log(r.c); // => 'c'

            S.mix(r, { a: 'a2' }, false);
            S.log(r.a); // => 'a'

            S.mix(r, { e: 'e', f: 'f' }, true, ['f']);
            S.log(r.e); // => undefined
            S.log(r.f); // => 'f'


    **深度 mix**

        .. code-block:: javascript

            var object1 = {
              apple: 0,
              banana: {weight: 52, price: 100},
              cherry: 97
            };
            var object2 = {
              banana: {price: 200},
              durian: 100
            };

            /* merge object2 into object1, recursively */
            S.mix(object1,object2,undefined,undefined,true);

            S.log(object1); // => { apple: 0, banana: { weight: 52, price: 200 }, cherry: 97, durian: 100 }


    **默认选项机制**


    常用于组件配置，不过推荐用 :mod:`base` 替代

        .. code-block:: javascript

            var defaults = { validate: false, limit: 5, name: "foo" };
            var options = { validate: true, name: "bar" };

            /* merge defaults and options, without modifying defaults */
            var settings = S.merge(defaults, options);

            S.log(settings); // => { validate: true, limit: 5, name: bar }




    该方法在 KISSY 里具有非常重要的地位.
    JavaScript 是一门动态语言, 利用 mixin 特性, 可以很方便的实现特性的静态复制和动态修改.