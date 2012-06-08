使用 KISSY Loader 管理时间戳
=============================

Refer
```````````````````````````````````````````````````

| :ref:`api <Loader>`

| :ref:`demo <loader_demo>`


概述
`````````````````````````````````

通过 kissy loader 可以对 kissy 内置模块，特定包，以及特定模块设置不同的时间戳，其中优先级关系为：


特定模块时间戳 > 特定包时间戳 > 内置模块时间戳


当某个模块优先级高的时间戳找不到时，会取值优先级低的时间戳。


设置内置模块时间戳
```````````````````````````````````

通过 KISSY.config("tag",..); 设置 kissy 内置模块的时间戳

.. code-block:: javascript

    KISSY.config("tag","1234");


设置特定包时间戳
`````````````````````````````````

通过 KISSY.config("packages",...); 设置特定包的时间戳

.. code-block:: javascript

    KISSY.config("packages",{
        crm:{
            tag:"xzxc"
        }
    });

设置特定模块时间戳
``````````````````````````````````````

通过 KISSY.config("modules",...); 设置特定模块的时间戳

.. code-block:: javascript

    KISSY.config("modules",{
        "crm/x":{
            tag:"xzxc"
        }
    });


总示例
````````````````````````````````````

.. code-block:: javascript

    KISSY.config({
        // 默认为 kissy build 时间，例如 20120531
        // base:''
        packages:{
            "crm":{
                base:'xx/',
                tag:'a'
            },
            "tc":{
                base:'y/'
            }
        },

        modules:{
            "crm/x":{
                tag:'c'
            }
        }
    });


那么载入 seed 后的实际加载为：

.. code-block:: javascript

    use("dom")  =>  dom.js?t=20120531

    use("crm/x2") => crm/x2.js?t=a

    use("crm/x") => crm/x.js?t=c

    use("tc/r") => tc/r.js?t=20120531

