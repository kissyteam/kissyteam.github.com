.. module:: base

Base
===============================




Class
-----------------------------------------------

  * :class:`Base`


Class Detail
---------------------------------------------------

.. class:: Base

    | **Base** (config)
    | :func:`~seed.KISSY.augment` 自 :class:`~base.Attribute`
    | 如果你想让类默认就支持 attribute 功能, 请直接继承 :class:`~base.Base` ,

    :param Object config: 属性名/配置信息对.

    .. note::

        使用 Base 时, 虽然你还是可以通过 :func:`~base.Attribute.prototype.addAttr` 添加支持需要支持 setter/getter 的属性, 但最好还是把这些属性和它们的配置定义在类的 ATTRS 成员中.
        即通过设置自定义类的 ATTRS 静态属性来给类实例对象添加属性管理机制.  

         

Demo
-------------------------------------------------

    .. code-block:: javascript

        KISSY.ready(function(S) {
            // 自定义类
            function myClass(config) {
                myClass.superclass.constructor.call(this, config);
            }

            // 继承 Base
            S.extend(myClass, S.Base);

            // 增加属性
            myClass.ATTRS = {
                size: {
                    value: 0,
                    setter: function(v) {
                        if (S.isString(v) && v.indexOf('inch')!== -1) {
                            return parseFloat(v)*10/3;
                        }
                        return parseFloat(v);
                    },
                    getter: function(v) {
                        return v;
                    }
                }
            };

            var cls = new myClass();

            // 绑定事件
            cls.on('afterSizeChange', function(ev){
                console.log('change '+ ev.attrName + ': '+ev.prevVal+' --> '+ev.newVal);
            });

            // 设置属性
            cls.set('size', 20);

            // 获取属性
            alert(cls.get('size'));

            // 重置
            cls.reset();
            alert(cls.get('size'));
        });