.. currentmodule:: seed

namespace
===============================



Methods
-----------------------------------------------

.. function:: KISSY.namespace

    | Object **KISSY.namespace** (n1[,....,global=false])
    | 根据参数创建命名空间对象

    :param string n1: 命名空间字符串, 如 ``"fp.search"`` 或 ``"KISSY.fp.ad"``
    :param boolean global: 是否第一个点之前的字符串作为全局变量, 默认 false 添加到 KISSY
    :returns: 最后创建的命名空间对象
    :rtype: object
    
    例如：

    .. code-block:: javascript

        var S = KISSY;

        S.namespace('app', 'test'); // 创建 KISSY.app 和 KISSY.test 对象
        S.namespace('app.Shop'); // 创建 KISSY.app.Shop 对象
        S.namespace("TC.mods",true); //创建 window.TC.mods 对象

    namespace 方法提供了最基本的命名空间管理. 但对于模块的命名空间推荐采用 :mod:`kissy 1.2 loader <Loader>` 机制.
