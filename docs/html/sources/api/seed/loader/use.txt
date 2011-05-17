.. currentmodule:: Loader

KISSY.use
======================================

by `承玉 <yiminghe@gmail.com>`_ , `fool2fish <fool2fish@gmail.com>`_

使用模块,和KISSY.add一起使用，形成KISSY的模块加载体系

.. function:: KISSY.use(modNames[,callback])

    :param string modNames: 以 ``,`` 分割的模块名称集合字符串,例如 ``KISSY.use("custommod,custommod2");``
    :param function callback: 当 ``modNames`` 中所有模块加载完毕后执行

范例: 使用模块
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    
.. code-block:: javascript

    //function中的后两个参数DepMod1和DepMod2即为两个依赖模块的返回值
    KISSY.use("depMod1,depMod2",function(S,DepMod1,DepMod2){
    });    
    
如果使用经过配置的包内的模块，则这些包内模块不需要事先注册，直接 ``use`` 即可，如果模块名以 ``/`` 结尾，则自动加后缀 index ，例如
``use("mods/m1/")`` 相当于 ``use("mods/m1/index")`` ，即自动加载 ``m1`` 目录下的 ``index.js``

.. note::
    注意 kissy < 1.2 时使用模块前必须注册
    
    
    