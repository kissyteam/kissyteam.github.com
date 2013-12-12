使用 KISSY Loader 进行条件加载
======================================

author: `承玉 <yiminghe@gmail.com>`_

Refer
````````````````````````````````

| :ref:`api <Loader>`
| :ref:`demo <loader_demo>`


概述
`````````````````````````````````

通过 kissy loader 结合自动 combo 可以进行条件加载，对于不同的设备可以在运行时动态加载不同的模块，
对于高级浏览器可以大大减小载入模块大小.


举例
```````````````````````````````````

比如常见的本地存储模块，其实对于 ie>7 以上完全不需要该模块，而 ie67 则需要使用一些复杂的代码来模拟本地存储能力，
那么我们可以将这个功能分成适合两类浏览器的两个模块。


高级浏览器就比较简单，模块内容为：

.. code-block:: javascript

    KISSY.add('biz/native-local-storage',function(){
        return window.localStorage;
    });

而 ie67 就比较复杂了，你可以使用 useData 或者 flash 来模拟这个功能：

.. code-block:: javascript

    KISSY.add('biz/simulated-local-storage',function(){
        // more code

        return {
            setItem:function(){

            },
            getItem:function(){

            }
        };
    });


使用
----------------------------------

其他模块在使用时就可以通过条件依赖加载来透明得使用：

比如模块 a

.. code-block:: javascript

    KISSY.add('biz/a',function(S,store){
        // i can use store!
    },{
        requires:[window.localStorage?'biz/native-local-storage':'biz/simulated-local-storage']
    });

.. note::

    window.localStorage 可以是任何事先计算好的简单判断条件

combo
----------------------------------

通过使用 `KISSY Module Compiler <https://github.com/daxingplay/grunt-kmc>`_ 可以抽取出依赖关系：

.. code-block:: javascript

    KISSY.config('modules',{
        'biz/a':{
            requires:[window.localStorage?'common/native-local-storage':'common/simulated-local-storage']
        }
    })

线上
------------------

那么当载入依赖关系并配置 combine:true，调用

.. code-block:: javascript

    KISSY.use('biz/a');


在 ie67 下发出链接：

.. code-block:: javascript

    biz/??a.js,simulated-local-storage.js

在标准浏览器下发出链接：

.. code-block:: javascript

    biz/??a.js,native-local-storage.js
