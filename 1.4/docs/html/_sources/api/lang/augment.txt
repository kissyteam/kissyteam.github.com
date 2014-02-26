.. currentmodule:: seed

augment
===============================



Methods
-----------------------------------------------

.. function:: KISSY.augment

    | Function **KISSY.augment** ( Class, object1 [, object1 , ...], overwrite = true, whitelist )
    | 将 object1,object2.... 自身或其 prototype 属性的成员复制到 Class.prototype 上.
    
    :param function Class: 将要扩充的类
    :param function|object ...object1: 扩充来源函数或对象. 非函数对象时复制的就是 object1 自身.
    :param boolean overwrite: 是否覆盖 Class.prototype 同名属性.
    :param Array<string> whitelist: 属性来源对象的属性白名单, 仅在名单中的属性进行复制.
    :return: Class
    :rtype: function
    
    例如：

    .. code-block:: javascript

        var S = KISSY,
        Shoutable = {
            shout: function() { alert('I am ' + this.name + '.'); }
        };

        function Dog(name) { this.name = 'Dog ' + name; }
        function Pig(name) { this.name = 'Pig ' + name; }

        S.augment(Dog, Shoutable);
        S.augment(Pig, Shoutable);

        new Dog('Jack').shout(); // => I am Dog Jack.
        new Pig('Mary').shout(); // => I am Pig Mary.


    augment 是动态语言 mixin 特性的体现, 灵活运用, 能让代码非常优雅简洁.