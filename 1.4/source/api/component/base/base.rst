.. module:: base

Base
===============================

| 整合了原来的rich-base

Class
-----------------------------------------------

  * :class:`Base`

Methods
-----------------------------------------------

    * :meth:`~Base.prototype.callSuper`
    * :meth:`~Base.prototype.plug`
    * :meth:`~Base.prototype.unplug`
    * :meth:`~Base.prototype.getPlugin`
    * :meth:`~Base.prototype.destroy`

Configs
-----------------------------------------------

    * :data:`~Base.config.plugins`
    * :data:`~Base.config.listeners`
    * :data:`~Base.config.force`

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

Config Details
---------------------------------------------------

    .. data:: Base.config.listeners

        {Object} - 配置组件的事件绑定. 例如

        .. code-block:: javascript

            {
                listeners:{
                    customEvent:function(e){
                        alert(e.type); // => "customEvent"
                    }
                }
            }

            or

            {
                listeners:{
                    customEvent:{
                        fn:function(e){
                            // e.type // => customEvent
                            // this.xx => 1
                        },
                        context:{xx:1}
                    }
                }
            }

    .. data:: Base.config.plugins

        {Function[]|Object[]} - 插件构造器数组或插件对象数组. 例如

        .. code-block:: javascript

            {
                plugins: [ Plugin1,Plugin2 ]
            }

            // or

            {
                plugins: [new Plugin1(cfg),new Plugin2(cfg)]
            }

        例如以下两个插件： :class:`component.plugin.Resize` 和 :class:`component.plugin.Drag` .

    .. data:: Base.config.force

        {Boolean} - 是否强制触发 change 事件

Methods Details
---------------------------------------------------

.. method:: Base.prototype.callSuper

    | **callSuper()**
    | 调用父类的对应方法，如果没有，则返回undefined

    .. code-block:: javascript

        KISSY.use('base', function(S, Base) {
            var A = Base.extend({
                m: function (value) {
                    return 'am:' + value;
                },
                m2: function (value) {
                    return 'am2:' + value;
                }
            });

            var B = A.extend({
                m: function(value) {
                    return 'bm:(' + this.callSuper(value) + ')';
                },
                m2: function(value) {
                    return 'bm2(' + this.callSuper.apply(this, arguments) + ')';
                }
            });

            var b = new B();
            console.log(b.m(1));
            console.log(b.m2(2));
        });

.. method:: Base.prototype.plug

    | **plug( plugin )**
    | 安装指定插件

    :param Function|Object plugin: 指定的插件构造器或者插件对象.
    :return: 自身

    例如：

    .. code-block:: javascript

        KISSY.use('overlay,component/plugin/resize',function(S,Overlay,Resize){
            new Overlay({
                content:'test'
            }).plug(new Resize({
                handlers:['t','t']
            }));
        });

.. method:: Base.prototype.unplug

    | **unplug ( plugin )**
    | 卸载指定插件

    :param String|Object plugin: 指定的插件 id 字符串或者插件对象.
    :return: 自身

    例如：

    .. code-block:: javascript

        KISSY.use('overlay,component/plugin/resize',function(S,Overlay,Resize){
            var o= new Overlay({
                content:'test'
            }).plug(new Resize({
                handlers:['t','t']
            }));

            o.unplug('component/plugin/resize'); // 卸载 resize 插件
        });

.. method:: Base.prototype.getPlugin

    | **getPlugin( id )**
    | 根据指定的 id 获取对应的plugin实例

    :param String id: plugin实例的id
    :return Object: 对应的plugin实例

    .. code-block:: javascript

        dialog.getPlugin('component/plugin/drag')
           .getPlugin('dd/plugin/constrain')
           .set('constrain', false);

.. method:: Base.prototype.destroy

    | **destroy()**
    | 销毁实例

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


