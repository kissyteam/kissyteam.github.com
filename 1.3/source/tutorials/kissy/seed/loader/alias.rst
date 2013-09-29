.. _loader_alias_tutorial:

KISSY Loader 的别名机制
==============================================

author: `承玉 <yiminghe@gmail.com>`_

Refer
```````````````````````````````````````````````````

| :ref:`api <Loader>`

| :ref:`demo <loader_demo>`

概述
`````````````````````````````````

通过 KISSY Loader 的别名机制，项目负责人可以统一指定所使用公共模块的版本并且方便统一升级，
而具体开发者则可以不用关心使用模块的版本信息。



项目负责人职责
`````````````````````````````````````````````

项目负责人首先统计项目可能使用到的公共模块的信息（版本，依赖），将这些公共模块的依赖合并为一个文件（或combo）：

common-lib.deps.js 并引入到项目的公用头文件中。


公共依赖文件
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

假设项目使用到了 3 个 gallery 公共模块，那么 common-lib.deps.js（TODO：工具支持）
文件内容如下：

.. code-block:: javascript

    KISSY.config('modules',{
        'gallery/x/1.1/':{
            requires:['gallery/y/1.3/']
        },
        'gallery/y/1.3/':{
            requires:['gallery/z/1.4/']
        }
    });


版本配置
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

项目负责人可以统一指定所使用的公共组件的版本，写入到 common-lib.versions.js，
并引入到项目的公共头文件中。

例如对应上述依赖的 common-lib.versions.js:

.. code-block:: javascript

    KISSY.config('modules',{
        'gallery/x/':{
            alias:['gallery/x/1.1']
        },
        'gallery/y/':{
            alias:['gallery/y/1.3']
        },
        'gallery/z/':{
            alias:['gallery/z/1.4']
        }
    });


具体开发者职责
````````````````````````````````````````````````````````````

当开发者开发具体模块需要使用到公共模块时，可以不用关注版本信息，直接使用对应模块即可。

例如一个具体模块 x.js 内容如下：

.. code-block:: javascript

    KISSY.add(function(S,X){
        // TODO X
        return {

        };
    },{
        requires:['gallery/x/']
    });


End
`````````````````````````````````````````````````````````````````````

感谢你的耐心，有建议欢迎留言或联系我。