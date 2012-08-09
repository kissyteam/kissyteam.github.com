.. currentmodule:: module-compiler.

原理介绍
======================================


简介
---------------------------------

* 是一个自动模块依赖合并工具.
* 是一个自动模块依赖抽取工具.
* 是一个模块代码规范辅助工具, 可以辅助规范模块编写, 不仅仅只适用动态加载场景, 也可以用来提高开发阶段效率.
* 是一个模块代码部署工具. 结合 :ref:`KISSY Loader <Loader>` , 用于模块代码部署阶段, 多个模块根据其依赖合并为一个文件, 减少 HTTP 链接数.

下载
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

| 下载: `KISSY Module Compiler <https://github.com/kissyteam/kissy-tools/raw/master/module-compiler/module-compiler.jar>`_
| 推荐使用 Ant 整合调用： `Ant <http://ant.apache.org/>`_


直观解释
------------------------------------------------

开发阶段
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

例如：现在有两个模块代码文件 ``code/package/x.js`` 与 ``code/package/y.js``

``x.js`` 中内容如下

.. code-block:: javascript

    KISSY.add(function(){
        return "x";
    },{ requires:['overlay','dd'] });


``y.js`` 中内容如下

.. code-block:: javascript

    KISSY.add(function(){
        return "y";
    },{requires:["./x"]});


``x.js`` 路径为 ``http://x.cn/code/package/x.js`` 开发阶段在页面中通过包配置 :func:`KISSY.config <seed.KISSY.config>` 可以这样使用：

引入 KISSY

.. code-block:: html

    <script src='kissy.js'></script>


.. _module-compiler-dev:

使用模块

.. code-block:: javascript

    KISSY.config({
        packages: [{
            name:"package", // 包名
            tag:"20110323", // 动态加载包内的模块js文件时,
                            // 自动加上 ?t=20110323, 用于文件更新
            path:"http://x.cn/code/", // 包对应路径, 相对路径指相对于当前页面路径
            charset:"gbk" // 包里模块文件编码格式
        }]
    });

    KISSY.use("package/y",function(S,Y){
        // Y == "y"
    });

那么 KISSY Loader 就会


#. 加载 ``y.js`` .
#. 加载 ``x.js`` .
#. 加载 ``overlay.js`` .
#. 加载 ``dd.js`` .
#. 初始化 ``overlay`` 模块.
#. 初始化 ``dd`` 模块.
#. 初始化 ``package/x`` 模块.
#. 初始化 ``package/y`` 模块.
#. 回调中可以得到 ``package/y`` 的模块值了.



这个过程如果模块多的话对于线上环境来说 HTTP 链接数不可承受,
使用 KISSY module compiler 则可以达到减少 http 链接数的作用.


下面介绍 KISSY Module Compiler 的两个用法：模块依赖自动合并与模块依赖自动抽取
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. 自动模块依赖合并
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. note::

    该功能需要配合 KISSY >= 1.2 使用.



1.1 使用 Module Compiler
!!!!!!!!!!!!!!!!!!!!!!!!!!!!

简要如下:

#. 配置 module compiler 指定需要的模块, 这里即 ``package/y``
#. 配置 module compiler 指定模块查找目录, 这里即 ``code/``
#. 配置 module compiler 指定合并后文件名称, 假设为 ``package/y.combine.js``
#. 运行 module compiler 合并 ``package/y`` 及其递归依赖的其他模块到 ``package/y.combine.js``
#. 运行 closure compiler 压缩 ``package/y.combine.js`` 为 ``package/y-min.js``




1.2 线上部署阶段
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



载入 ``kissy`` 的压缩版本

.. code-block:: html

    <script src='kissy-min.js'></script>    

使用模块部分同 :ref:`开发阶段 <module-compiler-dev>` .

线上过程：

#. 加载 ``package/y-min.js``
#. 加载 ``overlay.js``
#. 加载 ``dd.js``
#. 初始化 ``overlay`` 模块
#. 初始化 ``dd`` 模块
#. 检查 ``package/x`` 模块, 发现已经载入
#. 初始化 ``package/x`` 模块
#. 初始化 ``package/y`` 模块
#. 执行回调的得到模块 ``package/y`` 的值


于是线上应用 HTTP 链接数为 3 .
若需要使用源码调试则可以在页面 url 后加上 ``?ks-debug`` 即可开启开发阶段的加载过程.


2. 自动模块依赖抽取
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. note::

    该功能需要配合 KISSY 1.3 使用.



2.1 使用 Module Compiler
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



简要如下:

#. 复制源码目录 code/package 到 build/package
#. 配置 module compiler 指定复制后的目录, 这里即 ``build/package``
#. 配置 module compiler 指定进行模块名补全（如果源码模块中已经写了模块名则可以忽略该步）
#. 配置 module compiler 指定依赖抽取文件路径，比如 ``build/deps.js``
#. 运行 module compiler 进行依赖抽取
#. 对 build 目录中的所有文件进行压缩处理



2.2 线上部署阶段
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



载入 ``kissy`` 的压缩版本以及依赖文件

.. code-block:: html

    <script src='kissy-min.js'></script>
    <script src='build/deps.js'></script>

deps.js 的内容为

.. code-block:: javascript

    KISSY.config("modules",{
        "package/x":{
            requires:['overlay','dd']
        },
        "package/y":{
            requires:['./x']
        }
    })

使用模块部分同 :ref:`开发阶段 <module-compiler-dev>` .加上 combine 参数

.. code-block:: javascript

    KISSY.config("combine","true");

线上过程：

#. use("package/y")
#. 加载 combo 链接 build/package/??x-min.js,y-min.js
#. 加载 combo 链接 s/kissy/??overlay-min.js,dd-min.js
#. 执行 use 回调

于是线上应用 HTTP 链接数为 2 .
若需要使用源码调试则可以在页面 url 后加上 ``?ks-debug`` 即可载入源码调试.


3. 自动依赖合并与自动依赖抽取结合
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. note::

    该功能需要配合 KISSY 1.3 使用.


自动依赖抽取也可以配合自动依赖抽取合并使用，在依赖合并过程中，同时生成依赖入口文件的依赖信息.

例如我们可以在合并 package/x, package/y 的代码到 package/y 的同时生成 package y 的依赖信息 deps.js：

.. code-block:: javascript

    KISSY.config("modules",{
        "package/y":{
            requires:["overlay","dd"]
        }
    });

那么在线上运行时指定 combine

.. code-block:: javascript

    KISSY.config("combine", true);

那么使用：

.. code-block:: javascript

    KISSY.use("package/y",function(){});

过程如下：

#. 载入 package/y-min.js（包含 x-min.js）
#. 载入 combo 链接 s/kissy/??overlay.js,dd.js
#. 执行回调

于是线上应用 HTTP 链接数为 2 .若需要使用源码调试则可以在页面 url 后加上 ``?ks-debug`` 即可载入源码调试.