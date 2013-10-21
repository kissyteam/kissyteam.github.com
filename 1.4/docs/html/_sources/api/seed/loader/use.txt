.. currentmodule:: seed

use
======================================


Methods
-----------------------------------------------

.. function:: KISSY.use

    | void **KISSY.use** (modNames[,callback])
    | 使用模块,和KISSY.add一起使用, 形成KISSY的模块加载体系

    :param String|String[] modNames: 以 ``,`` 分割的模块名称集合字符串,例如 ``KISSY.use("custommod,custommod2");``
    :param function|Object callback: 当 ``modNames`` 中所有模块加载完毕后执行的函数或者对象描述
    :param function callback.success: 当 ``modNames`` 中所有模块加载完毕后执行的函数
    :param function callback.error: 当前 use 失败时调用的函数，参数为失败的模块对象




范例: 使用模块

.. code-block:: javascript

    KISSY.use("depMod1,depMod2",function(S,DepMod1,DepMod2){
    });

    KISSY.use("depMod1,depMod2",{
        success:function(S,DepMod1,DepMod2){
        },
        error:function(){
            var errorMods = KISSY.makeArray(arguments);
        }
    });


.. note::

    如果使用经过配置的包内的模块, 则这些包内模块不需要事先注册, 直接 ``use`` 即可,
    如果模块名以 ``/`` 结尾, 则自动加后缀 index , 例如
    ``use("mods/m1/")`` 相当于 ``use("mods/m1/index")`` ,
    即自动加载 ``m1`` 目录下的 ``index.js``