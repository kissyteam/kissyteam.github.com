.. currentmodule:: module-compiler

使用说明
=========================================================

该工具为一个 jar 包, 推荐嵌入到 ant 中, 作为项目构建的一个阶段.

.. note::

    ant 以及相关压缩工具可直接使用 `kissy-tools <https://github.com/kissyteam/kissy-tools>`_ 中的文件,
    建议直接下载整个 kissy-tools 作为项目工具一部分.
    
    
使用前请先下载 kissy-tools 源码到硬盘 ``x:/kissy-tools/`` , 假设项目源码在 ``x:/code/`` , 如上一节包括两个模块文件: ``x:/code/package/x.js`` 以及 ``x:/code/package/y.js`` , 模块文件编码为 ``gbk`` , 则 ant 的调用为：

.. code-block:: xml

    <java classname="com.taobao.f2e.Main">

        <arg value="-requires"/>
        <arg value="package/y"/>
        <arg value="-baseUrls"/>
        <arg value="x:/code/"/>
        <arg value="-encodings"/>
        <arg value="gbk"/>
        <arg value="-outputEncoding"/>
        <arg value="utf-8"/>
        <arg value="-excludes"/>
        <arg value="bizcore"/>
        <arg value="-output"/>
        <arg value="x:/code/package/y.combine.js"/>
        <classpath>
            <pathelement path="x:/kissy-tools/module-compiler/module-compiler.jar"/>
            <pathelement path="${java.class.path}"/>
        </classpath>
                
    </java>    
    
参数说明    
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    
    
如上所示该工具需要一些参数, 包括 ``requires``  , ``baseUrls`` , ``encodings`` , ``outputEncoding`` , ``excludes`` , ``output`` , 具体格式如下：

requires
----------------------------------------------------

需要打包的模块名集合, 该模块以及其递归依赖都会被一并打包. 多个模块名用 ``,`` 分隔. 如以上示例： ``package/y`` .


baseUrls
----------------------------------------------------------   

模块文件查找目录集合, 一般是业务模块的源码目录, 多个目录间以 ``,`` 分隔.
如以上示例 ``x:/code/`` .

cdnUrls
--------------------------------------------------------------

可选。模块文件查找目录对应的 cdn 路径集合，多个目录间以 ``,`` 分割。顺序对应于 ``baseUrls`` .
如 ``x:/code/`` 上线后对应 ``http://x.cdn/code/`` ，则配置该参数为 ``http://x.cdn/code/`` .
改参数主要用于生成 cdn combo 的完整地址。

minSuffix
-------------------------------------------------------------------------

可选。生成的 cdn combo 地址模块文件后是否加 -min 后缀，默认不加。例如：
``http://a.tbcdn.cn/s/??a.js,b.js`` ，设置 minSuffix 后，生成： 
``http://a.tbcdn.cn/s/??a-min.js,b-min.js``

outputCombo
---------------------------------------------------------------------

可选。是否生成对应的 combo 地址而不是合并后的文件。
例如指定需要的模块 a 后可以输出该模块与其递归依赖的所有模块组成的 combo 地址： 
``http://a.tbcdn.cn/s/??a.js,b.js,c.js``

encodings
-----------------------------------------------------------

指明模块目录中文件的编码, 顺序对应于 ``baseUrls`` , 多个编码以 ``,`` 分隔. 如以上示例： ``gbk`` ,
表示业务模块为 ``gbk`` 编码.


outputEncoding
---------------------------------------
指明最后合并打包文件的编码格式. 如以上示例 ``utf-8`` .


excludes
-------------------------------------

``optional`` , 指明 ``requires`` 递归依赖模块中不需要打包的模块名称集合, 该集合内的模块是单独动态加载或静态引入的, 多个模块以 ``,`` 分隔.
如以上示例 ``bizcore`` 表示 ``bizcore`` 模块不需要合并打包, 而是静态引入到页面中的.
最常见的是把用到的 kissy 的所有模块都加入到 excludes 中，防止打包时提示 kissy 模块找不到.

output
--------------------------------------------

可选。指明最终合并打包后的文件路径以及名称. 如以上示例： ``x:/code/package/y.combine.js`` ,
表示该工具产生的合并后文件为 ``x:/code/package/y.combine.js`` .

| 一般建议文件名要和 "入口模块文件名" + "-min" 一致.


cdn combo 构建文件例子
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

a 依赖 b ， b 依赖 c ，指定源码目录与对应的 cdn 目录后，运行以下构建文件可以得到 a 以及其所有依赖模块的 combo 地址

``http://x.cdn/??a.js,b.js,c.js`` ，之后在页面显式指定路径后使用:（对于使用 kissy 自带模块比较多的情景，可以将使用到的 kissy 自身模块集合静态 combo 到页面底部或定义 :ref:`map <loader_config_map>` 规则来减少使用 kissy 自身模块所导致的链接数过多问题。）

.. code-block:: html

    <script>
        KISSY.config({
                map:[
                    [/http:\/\/a.tbcdn.cn\/s\/kissy\/1.2.0\/(?:suggest|switchable)-min.js(.+)$/, 
                    "http://a.tbcdn.cn/s/kissy/1.2.0/??suggest-min.js,switchable-min.js$1"]
                ]
        });
        KISSY.add({
            a:{
                fullpath:"http://x.cdn/??a.js,b.js,c.js"
            }
        }); 
        
        KISSY.use("a");
    </script>
    
    
**请用 kissy-tools 项目下的 ant 运行此构建文件，文件编码为 utf-8**

.. literalinclude:: /_static/api/seed/loader/combo.xml
       :language: xml

运行机制举例
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  


模块 ``biz/x`` 依赖于模块 ``biz/y`` ， 模块 ``biz/y`` 依赖于模块 ``biz/z`` 。

#. 开发阶段可以载入 ``kissy.js`` ， 那么 ``KISSY.use("biz/x")`` 会递归动态下载 ``biz/x.js`` ， ``biz/y.js`` ， ``biz/z.js`` 。

#. 部署阶段使用 module compiler 指定  ``-requires biz/x , -output biz/x-combine.js`` 并将 ``biz/x-combine.js`` 压缩为 ``biz/x-min.js`` .

#. 生产环境载入 ``kissy-min.js`` ，那么同样的 ``KISSY.use("biz/x")`` 就只会动态下载 ``biz/x-min.js`` 了。 


合并构建文件例子
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

将入口模块目录下的所有模块的依赖模块都合并到自身

**请用 kissy-tools 项目下的 ant 运行此构建文件，文件编码为 utf-8**

.. literalinclude:: /_static/api/seed/loader/eg.xml
       :language: xml