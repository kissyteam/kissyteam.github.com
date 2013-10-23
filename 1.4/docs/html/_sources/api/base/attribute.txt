.. module:: base

Attribute
===============================

Class
-----------------------------------------------

  :class:`Attribute`

Methods
-----------------------------------------------

  * :meth:`~Attribute.prototype.addAttr`
  * :meth:`~Attribute.prototype.addAttrs`
  * :meth:`~Attribute.prototype.hasAttr`
  * :meth:`~Attribute.prototype.get`
  * :meth:`~Attribute.prototype.getAttrVals`
  * :meth:`~Attribute.prototype.set`
  * :meth:`~Attribute.prototype.reset`


Events
-----------------------------------------------

  * :func:`~Attribute.Events.beforeAttrNameChange`
  * :func:`~Attribute.Events.afterAttrNameChange`
  * :js:func:`~Attribute.Events.*Change`

Class Detail
--------------------------

.. class:: Attribute

    | **Attribute** ()
    | 包含一些属性操作的方法，仅用于 :func:`~seed.KISSY.augment`

Methods Detail
-----------------------------------------------

.. method:: Attribute.prototype.addAttr

    | void **addAttr** ( name, attrConfig )
    | 给宿主对象增加一个属性.

    :param String name: 属性名
    :param Object attrConfig: 属性配置信息, 支持下面的配置项:
    :param String|Number attrConfig.value: 属性默认值。注意默认值请不要设置为复杂对象（通过自定义构造器 new 出来的），复杂对象可设置 valueFn 返回。
    :param Function attrConfig.valueFn: 提供属性默认值的函数，传入对象内部对应的属性值和属性名，取该函数的返回值作为最终值给用户。
    :param Function attrConfig.setter: 写属性时的处理函数，传入从 :meth:`~Attribute.prototype.set` 参数得到的属性值和属性名，如果返回非 undefined 则作为新的属性设置值。
    :param Function attrConfig.getter: 读属性时的处理函数
    :param Function attrConfig.validator: 写属性时的验证函数，传入从 :meth:`~Attribute.prototype.set` 参数得到的属性值和属性名，返回 false 则不改变该属性值.

    .. note::

        如果配置项中没有设置 value, 会调用 valueFn 函数获取默认值并赋给 value.

.. method:: Attribute.prototype.addAttrs

    | void **addAttrs** ( attrConfigs, values )
    | 批量添加属性.

    :param Object attrConfigs: 属性名/配置信息对.
    :param Object values:  属性名/值对, 批量设置当前对象的属性值.

.. method:: Attribute.prototype.hasAttr

    |   boolean **hasAttr** ( name )
    |   判断是否有名为 name 的属性.

    :param String name: 属性名

.. method:: Attribute.prototype.removeAttr

    |   void **removeAttr** ( name )
    |   删除名为 name 的属性.

    :param String name: 属性名

.. method:: Attribute.prototype.set

    |   boolean **set** ( name, value, opts )
    |   设置属性 name 的值为 value.

    :param String name: 属性名。


            也可以为 "x.y" 形式，此时要求 x 属性为包含 y 属性的普通 Object，这时会设置 x 属性值的 y 属性.但只会触发 x 的相关 change 事件.

    :param String value:  属性的值
    :param Object opts: 控制对象，包括以下控制选项

        .. attribute:: opts.silent

            {boolean} - 默认 false , 是否触发 change 系列事件.

        .. attribute:: opts.error

            {Function} - 验证失败的回调，包括失败原因

        .. attribute:: opts.force

            {Function} - 是否强制触发 change 事件，默认值为 false，当值发生变化时才触发。

    :returns: 该次属性设置是否生效（是否通过了 validator 验证）


    |   boolean **set** ( json, opts )
    |   批量设置属性值.

    :param String json: 属性名与属性值的键值对
    :param Object opts: 控制对象，包括以下控制选项

        .. attribute:: opts.silent

            {boolean} - 默认 false , 是否触发 change 系列事件.

        .. attribute:: opts.error

            {Function} - 验证失败的回调，包括失败原因

        .. attribute:: opts.force

            {Function} - 是否强制触发 change 事件，默认值为 false，当值发生变化时才触发。

    :returns: 该批属性设置是否全部生效（是否通过了 validator 验证）


.. method:: Attribute.prototype.get

    |   * **get** ( name )
    |   获取属性 name 的值.

    :param String name: 属性名


        也可以为 "x.y" 形式. 此时要求 x 属性为包含 y 属性的普通 Object。

    .. note::

        当没有设置属性值时, 会取该属性的默认值.

.. method:: Attribute.prototype.getAttrVals

    |   Object **getAttrVals** ()
    |   获取目前实例的所有属性键值对集合.

    :returns: {Object} 属性键值对集合

.. method:: Attribute.prototype.reset

    |   void **reset** ( name,opts )
    |   重置属性 name 为初始值. (调用一次 :func:`~Attrbute.prototype.set` )

    :param String name: 属性
    :param Object opts: 控制对象，包括以下控制选项

        .. attribute:: Attribute.prototype.reset.opts.silent

            {boolean} - 默认 false , 是否触发 change 系列事件.

    |   void **reset** ( opts )
    |   将所有属性全部重置为初始值. (调用一次 :func:`~Attrbute.prototype.set` )

    :param Object opts: 控制对象，包括以下控制选项

        .. attribute:: Attribute.prototype.reset.opts.silent

            {boolean} - 默认 false , 是否触发 change 系列事件.

Events Detail
-----------------------------------------------

.. note::

    beforeXxChange 的事件处理器可以调用 e.preventDefault 来防止 set 生效

.. function:: Attribute.Events.beforeAttrNameChange

    | **beforeAttrNameChange** (e)
    | 名为 "attrName" 的属性, 在改变它的值之前触发该事件.

    :param * e.newVal: 将要改变到的属性值
    :param * e.prevVal: 当前的属性值
    :param String e.attrName: 当前的属性名，例如 "x"
    :param String e.subAttrName:  当前的完整属性名，例如 "x.y"


.. function:: Attribute.Events.afterAttrNameChange

    | **afterAttrNameChange** (e)
    | 名为 "attrName" 的属性, 在改变它的值之后触发该事件.

    :param * e.newVal: 当前的属性值
    :param * e.prevVal: 当前改变前的属性值
    :param String e.attrName: 当前的属性名，例如 "x"
    :param String e.subAttrName:  当前的完整属性名，例如 "x.y"


.. js:function:: Attribute.Events.*Change

    | ***Change** (e)
    | 每调用 :func:`~Attribute.prototype.set` 一次后就触发一次该事件.

    :param Array e.attrName: 本次 set 导致改变的属性名集合
    :param Array e.subAttrName: 本次 set 导致的属性全名集合
    :param Array e.newVal: 本次 set 导致的属性当前值集合
    :param Array e.prevVal: 本次 set 导致的属性在 set 前的值集合

    .. note::

        #. 自定义类不建议直接 argument Attribute ，请继承 :class:`~base.Base`
        #. \*Change 和 afterAttrNameChange 监视一个即可，不要同时监视