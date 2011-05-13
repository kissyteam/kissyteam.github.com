.. currentmodule:: Seed

KISSY.extend
===============================

.. function:: KISSY.extend(r,s[,px,sx])

    让函数对象 r 继承函数对象 s
    
    :param function r: receiver,将要继承的子类函数
    :param function|object s: supplier,继承自的父类函数
    :param object px: prototype members, 需要添加/覆盖的原型成员
    :param object sx: static members, 需要添加/覆盖的静态成员。
    :returns: r
    :rtype: function
    
例如：

.. code-block:: javascript

    var S = KISSY;

    function Bird(name) { this.name = name; }
    Bird.prototype.fly = function() { alert(this.name + ' is flying now!'); };
    
    function Chicken(name) {
        Chicken.superclass.constructor.call(this, name);
    }
    S.extend(Chicken, Bird,{
        fly:function(){
            Chicken.superclass.fly();
            alert("it's my turn");
        }
    });
    
    new Chicken('Frank').fly();
    
extend 方法是 KISSY 里类继承的实现方式。书写 JavaScript 代码时，请忘记传统 OO 里的继承体系。
还 JavaScript 本色，给代码一身轻松。

.. note::

    子类方法中可通过 superclass 来访问父类函数的原型，进而调用父类方法.