.. currentmodule:: seed

error
===============================




Methods
-----------------------------------------------

.. function:: KISSY.error

    | void **KISSY.error** (msg)
    | 抛出错误异常
    
    :param string msg: 异常信息
    
    .. note::

        只有在 debug 模式下并且载入 seed.js, 才会抛出异常. debug 模式的说明请参考 :attr:`~KISSY.Config`