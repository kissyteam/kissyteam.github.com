.. currentmodule:: seed

use
======================================


Methods
-----------------------------------------------

.. function:: KISSY.use

    | void **KISSY.use** (modNames[,callback])
    | 使用模块,和KISSY.add一起使用, 形成KISSY的模块加载体系

    :param string modNames: 以 ``,`` 分割的模块名称集合字符串,例如 ``KISSY.use("custommod,custommod2");``
    :param function callback: 当 ``modNames`` 中所有模块加载完毕后执行

    范例: 使用模块

    .. code-block:: javascript

        KISSY.use("depMod1,depMod2",function(S,DepMod1,DepMod2){
        });
    
    如果使用经过配置的包内的模块, 则这些包内模块不需要事先注册, 直接 ``use`` 即可,
    如果模块名以 ``/`` 结尾, 则自动加后缀 index , 例如
    ``use("mods/m1/")`` 相当于 ``use("mods/m1/index")`` , 即自动加载 ``m1`` 目录下的 ``index.js``