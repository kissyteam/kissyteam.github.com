.. currentmodule:: seed

getLogger
===============================

Methods
-----------------------------------------------

.. function:: KISSY.getLogger

    | KISSY.logger **KISSY.getLogger** (str)
    | 将 str 作为输出的 log 的前缀

    :param string str: log 的前缀
    :returns: KISSY.logger对象

    例如

    .. code-block:: javascript

        var logger = KISSY.getLogger('KISSY');
        logger.debug("test"); // => "KISSY: test";

.. note::

    可以在配置中设置logger的级别，以及是否显示。

    .. code-block:: javascript

        S.config('logger', {
            includes: [
                {
                    logger: /^xx\//
                }
            ],
            excludes: [
                {
                    logger: /^xx\//， //以xx/开头的不显示
                    maxLevel: 'info' //不显示 info 及 info 以下的 log
                }
            ]
        });

