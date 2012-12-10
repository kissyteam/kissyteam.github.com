.. module:: seed

Defer
===============================

.. code-block:: javascript

    KISSY.use('promise',function(S,Promise){
        // use Promise.Defer
    });

Class
-----------------------------------------------

  :class:`Defer`

Properties
-----------------------------------------------

    :attr:`~Defer.prototype.promise`

Methods
-----------------------------------------------

  * :meth:`~Defer.prototype.resolve`
  * :meth:`~Defer.prototype.reject`

Class Detail
--------------------------

.. class:: Defer

    | **Defer** ()
    | Defer 实例，用于逻辑内部控制成功或失败，返回 promise 供外部监听.


Properties Detail
-----------------------------------------------

    .. attribute:: Defer.prototype.promise

       {KISSY.Promise} - 用于外部监听成功失败的 promise 对象


Methods Detail
-----------------------------------------------

.. method:: Defer.prototype.resolve

    | void **resolve** ( value )
    | 使得内部的 promise 成功，并设置成功值为 value，
    | 如果 value 也是 promise，只有等 value 成功后改 defer 内部的 promise 才算成功

    :param value: 任意值（ 包括 promise ）.


.. method:: Defer.prototype.reject

    | void **reject** ( reason )
    | 设置内部 promise 为失败状态，失败回调参数为 reason

    :param reason: 设置给失败回调函数的参数