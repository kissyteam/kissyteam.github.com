.. module:: attribute

Attribute
===============================

|  作者: `承玉 <yiminghe@gmail.com>`_
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/base>`_


Module
-----------------------------------------------

  :mod:`attribute`

Methods
-----------------------------------------------

  * :meth:`addAttr`
  * :meth:`addAttrs`
  * :meth:`hasAttr`
  * :meth:`get`
  * :meth:`set`
  * :meth:`reset`


Events
-----------------------------------------------

  * :func:`beforeAttrNameChange`
  * :func:`afterAttrNameChange`


Methods Detail
-----------------------------------------------

.. method:: addAttr

    | void **addAttr** ( name, attrConfig )
    | 给宿主对象增加一个属性.

    :param String name: 属性名
    :param Object attrConfig: 属性配置信息, 支持下面的配置项:
    :param String|Number attrConfig.value: 属性默认值
    :param Function attrConfig.valueFn: 提供属性默认值的函数
    :param Function attrConfig.setter: 写属性时的处理函数
    :param Function attrConfig.getter: 读属性时的处理函数

    .. note::

        如果配置项中没有设置 value, 会调用 valueFn 函数获取默认值并赋给 value.

.. method:: addAttrs

    | void **addAttrs** ( attrConfigs, values )
    | 批量添加属性.

    :param Object attrConfigs: 属性名/配置信息对.
    :param Object values:  属性名/值对, 该值为属性的默认值, 会覆盖配置信息中的默认值.

.. method:: hasAttr

    |   void **hasAttr** ( name )
    |   判断是否有名为 name 的属性.

    :param String name: 属性名

.. method:: removeAttr

    |   void **removeAttr** ( name )
    |   删除名为 name 的属性.

    :param String name: 属性名

.. method:: set

    |   void **set** ( name, value )
    |   设置属性 name 的值为 value.

    :param String name: 属性名
    :param String value:  属性的值

.. method:: get

    |   void **get** ( name )
    |   获取属性 name 的值.

    :param String name: 属性名

    .. note::

        当没有设置属性值时, 会取该属性的默认值.

.. method:: reset

    |   void **reset** ( name )
    |   重置属性 name 为初始值. 如果不给出属性名, 默认将所有属性名全部重置为初始值.

    :param String name: 属性名

    .. note::

        重置属性值, 同样会触发 :func:`beforeAttrNameChange` 和 :func:`afterAttrNameChange` 事件.


Events Detail
-----------------------------------------------

.. function:: beforeAttrNameChange

    | **beforeAttrNameChange** ()
    | 名为 "attrName" 的属性, 在改变它的值之前触发该事件.


.. function:: afterAttrNameChange

    | **afterAttrNameChange** ()
    | 名为 "attrName" 的属性, 在改变它的值之后触发该事件.




Demo
-------------------------------------------------

    .. code-block:: javascript

        KISSY.ready(function(S) {
            // 自定义类
            function myClass() {
            }

            // 让你的类支持属性描述符
            S.augment(myClass, S.Attribute);

            var cls = new myClass();

            // 增加属性
            cls.addAttr('size', {
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
            });
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