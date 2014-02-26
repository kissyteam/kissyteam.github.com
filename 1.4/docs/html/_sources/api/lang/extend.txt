.. currentmodule:: seed

extend
===============================




Methods
-----------------------------------------------

.. function:: KISSY.extend

    | Function **KISSY.extend** (SubClass,ParentClass[,prototypeMembers,staticMembers])
    | 让子类 SubClass 继承父类 ParentClass
    
    :param function SubClass: 将要继承的子类函数
    :param function|object ParentClass: 继承自的父类函数
    :param object prototypeMembers: 需要添加/覆盖的原型成员
    :param object staticMembers: 需要添加/覆盖的静态成员.
    :returns: SubClass
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
                Chicken.superclass.fly.call(this)
                alert("it's my turn");
            }
        });

        new Chicken('kissy').fly();


    .. note::

        子类方法中可通过 superclass 来访问父类函数的原型, 进而调用父类方法.