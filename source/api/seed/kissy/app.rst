.. currentmodule:: seed


app
===============================

.. deprecated:: 1.2

Module
-----------------------------------------------

  :mod:`seed`


Methods
-----------------------------------------------

.. function:: KISSY.app

    | Object **KISSY.app** (name[,sx])
    | 创建应用对象, 为全局 window 中名字为 `name` 的变量.
    
    :param string name: 应用对象名称
    :param object sx: mix 到应用对象的属性以及值.
    :returns: 创建的应用对象
    :rtype: object
    
    例如：

    .. code-block:: javascript

        KISSY.app('FrontPage');
        FrontPage.namespace('app'); // 创建 FrontPage.app 对象
        FrontPage.add('slide', function(FP) {
            // module code
            // 注：FP 指向 FrontPage
        });
    
    app 方法为基于 KISSY 的应用提供了最基本的代码组织方式. 通过 app 创建的应用对象, 自动具有了 add 和 :func:`namespace` 方法.

    .. deprecated:: 1.2
        简化架构, 两层构建应用：应用 = KISSY 环境 + 业务模块. 模块通过 :mod:`kissy 1.2 loader <Loader>` 进行命名空间隔离,
        模块统统通过 ``KISSY.add`` 加入 KISSY 环境中.