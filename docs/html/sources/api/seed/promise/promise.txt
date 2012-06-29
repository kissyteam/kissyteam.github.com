.. module:: seed

Promise
===============================

Class
-----------------------------------------------

  :class:`Promise`

Methods
-----------------------------------------------

  * :meth:`~Promise.prototype.then`
  * :meth:`~Promise.prototype.fail`
  * :meth:`~Promise.prototype.fin`
  * :meth:`~Promise.prototype.isResolved`
  * :meth:`~Promise.prototype.isRejected`
  * :func:`~Promise.when` <static>
  * :func:`~Promise.isPromise` <static>
  * :func:`~Promise.isRejected` <static>
  * :func:`~Promise.all` <static>

Class Detail
--------------------------

.. class:: Promise

    | **Promise** ()
    | promise 实例，外部不允许初始化.

Methods Detail
-----------------------------------------------

.. method:: Promise.prototype.then

    | void **then** ( fulfilled [, rejected] )
    | 监听当前实例的成功和失败并返回新的 promise 实例

    :param Function fulfilled: 该 promise 成功时的回调，参数为 defer resolve 时的 value.
    :param Function rejected: 该 promise 失败时的回调，参数为 defer reject 时的 reason.
    :returns: 一个新的 promise. 当前 promise 成功时新的 promise 也成功.
            当前 promise 失败时新的 promise 也失败.
    :rtype: Promise

    .. note::

        详细使用见： :ref:`Demo  <promise-demo>`


.. method:: Promise.prototype.fail

    | void **fail** ( rejected )
    | 监听当前实例的失败并返回新的 promise 实例.相当于调用 this.then(null,rejected);

    :param Function rejected: 该 promise 失败时的回调，参数为 defer reject 时的 reason.
    :returns: 一个新的 promise. 当前 promise 成功时新的 promise 也成功.
                当前 promise 失败时新的 promise 也失败.
    :rtype: Promise

.. method:: Promise.prototype.fin

    | void **fin** ( callback )
    | 监听当前实例的成功和失败并返回新的 promise 实例

    :param Function callback: 该 promise 成功或失败时的回调，
        成功时参数为 defer resolve 时的 value 和 true.
        失败时参数为 defer reject 时的 reason 和 false.
    :returns: 一个新的 promise. 当前 promise 成功时新的 promise 也成功.
                当前 promise 失败时新的 promise 也失败.
    :rtype: Promise

.. method:: Promise.prototype.isResolved

    | void **isResolved** ()
    | 返回当前 promise 是否成功了

    :rtype: Boolean

.. method:: Promise.prototype.isRejected

    | void **isRejected** ()
    | 返回当前 promise 是否失败了

    :rtype: Boolean

.. function:: Promise.isResolved

    | void **isResolved <static>** ( promise )
    | 返回参数 promise 是否成功了

    :rtype: Boolean

.. function:: Promise.isRejected

    | void **isRejected <static>** ( promise )
    | 返回参数 promise 是否失败了

    :rtype: Boolean

.. function:: Promise.isPromise

    | void **isPromise <static>** ( promise )
    | 返回参数 promise 是否是 promise

    :rtype: Boolean

.. function:: Promise.when

    | void **when  <static>** ( obj, fulfilled, rejected )
    | 返回一个新的 promise.
    | 如果 obj 为 promise 类型，相当于 obj.then(fulfilled, rejected)
    | 否则直接调用 fulfilled(obj)，并返回一个成功的 promise

    :param obj: 监听的对象.
    :rtype: Promise

.. function:: Promise.all

    | void **all <static>** ( objects )
    | 返回一个新的 promise.当 objects 全部成功后新的 promise 成功，否以第一个 promise 的失败值为失败

    :param objects: promise或普通对象数组
    :rtype: Promise