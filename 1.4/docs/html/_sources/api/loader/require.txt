.. currentmodule:: seed

require
======================================


Methods
-----------------------------------------------

.. function:: KISSY.require

    | void **KISSY.require** (name)
    | 添加模块

    :param string name: 模块名


    范例: require 是一个语法糖，提供了快捷引用已经注册的模块。

    .. code-block:: javascript

        KISSY.add("yourmod",function(S){
                var Mod1 = S.require('depMod1');
                var Mod2 = S.require('depMod2');
            },{
                requires:['depMod1','depMod2'] 
            }
        );
    
    这种代码亦可以作改造：

    .. code-block:: javascript

        // use 的模块太多，一不小心就和 function() 里的回调不对应了
        KISSY.use('a,b,c,d,e,f,g',function(S,A,B,C,D,E,F,G){
            // Your code...
        });

    这种方法让你不用去肉眼找模块和变量的对应关系

    .. code-block:: javascript

        KISSY.use('a,b,c,d,e,f,g',function(S){
            var A = S.require('a');
            var B = S.require('b');
            var C = S.require('c');
            // Your code...
        });

