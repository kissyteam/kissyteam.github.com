.. currentmodule:: seed

available
===============================

Module
-----------------------------------------------

  :mod:`seed`


Methods
-----------------------------------------------

.. function:: KISSY.available

    | void **KISSY.available** (id,fn)

    :param string id: 页面元素 id
    :param function fn: 回调函数, 在 id 元素可用时立刻执行.
    

    .. note::

        当需要比 :func:`KISSY.ready` 反应更快的探测到某个元素可用时使用.
    