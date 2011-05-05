.. currentmodule:: module-compiler.

简介
---------------------------------

* 是一个模块代码依赖自动合并工具。
* 是一个模块代码规范辅助工具，可以辅助规范模块编写，不仅仅只适用动态加载场景，也可以用来提高开发阶段效率。
* 是一个模块代码部署工具。结合 :mod:`KISSY 1.2 Loader <Loader>` ，用于模块代码部署阶段，多个模块根据其依赖合并为一个文件，减少 HTTP 链接数。


举例
-------------------------------------

开发阶段
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

例如：现在有两个模块代码文件 ``code/package/x.js`` 与 ``code/package/y.js``

``x.js`` 中内容如下

.. code-block:: javascript

    KISSY.add(function(){
        return "x";
    });


``y.js`` 中内容如下

.. code-block:: javascript

    KISSY.add(function(){
        return "y";
    },{requires:["./x"]});
    
    
``x.js`` 路径为 ``http://x.cn/code/package/x.js`` 开发阶段在页面中通过包配置 :func:`KISSY.config <Loader.KISSY.config>` 可以这样使用：

引入 KISSY

.. code-block:: html

    <script src='kissy.js'></script>
    

.. _module-compiler-dev:

使用模块    

.. code-block:: javascript

    KISSY.config({
        name:"package", // 包名
        tag:"20110323", // 动态加载包内的模块js文件时，
                        // 自动加上 ?t=20110323，用于文件更新
        path:"http://x.cn/code/", // 包对应路径，相对路径指相对于当前页面路径
        charset:"gbk" // 包里模块文件编码格式
    });
    
    KISSY.use("package/y",function(S,Y){
        // Y == "y"
    });
    
那么 KISSY Loader 就会

#. 加载 ``y.js`` 。 
#. 加载 ``x.js`` 。
#. 初始化 ``package/x`` 模块。
#. 初始化 ``package/y`` 模块。         
#. 回调中可以得到 ``package/x`` 的模块值了。 


这个过程如果模块多的话对于线上环境来说 HTTP 链接数不可承受，使用 KISSY module compiler 则可以达到所有模块压缩为一个文件，达到 http 链接数为 1 的目标。


使用 module compiler
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

简要如下:

#. 配置 module compiler 指定需要的模块，这里即 ``package/y`` 
#. 配置 module compiler 指定模块查找目录，这里即 ``code/``
#. 配置 module compiler 指定合并后文件名称，假设为 ``package/y.combine.js``
#. 运行 module compiler 合并 ``package/y`` 及其递归依赖的其他模块到 ``package/y.combine.js``
#. 运行 closure compiler 压缩 ``package/y.combine.js`` 为 ``package/y-min.js``


线上部署阶段
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

载入 ``kissy`` 的压缩版本

.. code-block:: html

    <script src='kissy-min.js'></script>    

使用模块部分同 :ref:`开发阶段 <module-compiler-dev>` 。

线上过程：

#. 加载 ``package/y-min.js``
#. 检查 ``package/x`` 模块，发现已经载入
#. 初始化 ``package/x`` 模块
#. 初始化 ``package/y`` 模块
#. 执行回调


于是线上应用 HTTP 链接数为 1 。若需要使用源码调试则可以在页面 url 后加上 ``?ks-debug`` 即可开启开发阶段的加载过程.以上即为近期交易平台化项目所采用的模块化框架。
