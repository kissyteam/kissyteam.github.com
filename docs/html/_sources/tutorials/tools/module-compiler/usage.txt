.. currentmodule:: module-compiler

使用说明
=========================================================

该工具为一个 jar 包, 推荐嵌入到 ant 中, 作为项目构建的一个阶段.

.. note::

    ant 以及相关压缩工具可直接使用 `kissy-tools <https://github.com/kissyteam/kissy-tools>`_ 中的文件,
    建议直接下载整个 kissy-tools 作为项目工具一部分.


举例
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

`下载 kissy module compiler demo <../../../_static/module-compiler/tb_kissy_1.3.zip>`_

源文件结构:

.. code-block:: javascript

   src/
       biz/
            x.js
            y.js
            page/
                 run.js

其中 x.js 内容为：

.. literalinclude:: /_static/module-compiler/tb_kissy_1.3/src/biz/x.js
           :language: javascript

其中 y.js 内容为：

.. literalinclude:: /_static/module-compiler/tb_kissy_1.3/src/biz/y.js
           :language: javascript

其中 run.js 内容为：

.. literalinclude:: /_static/module-compiler/tb_kissy_1.3/src/biz/page/run.js
           :language: javascript


下面介绍 KISSY Module Compiler 的两个用法：模块依赖自动合并与模块依赖自动抽取
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. 模块依赖自动合并
`````````````````````````````````````````

配置一下 build.xml

.. literalinclude:: /_static/module-compiler/tb_kissy_1.3/build.xml
           :language: xml

1.1 参数说明
-------------------------------------

require
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
需要打包的入口模块 .

baseUrls
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
模块文件查找目录集合, 一般是业务模块的源码目录, 多个目录间以 , 分隔. 如 x:/code/ .

encodings
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
指明模块目录中文件的编码, 顺序对应于 baseUrls , 多个编码以 , 分隔. 如以上示例： gbk , 表示业务模块为 gbk 编码.

outputEncoding
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
指明最后合并打包文件的编码格式. 如以上示例 utf-8 .

output
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
指明最终合并打包后的文件路径以及名称. 如示例： x:/code/package/y.combine.js , 表示该工具产生的合并后文件为 x:/code/package/y.combine.js .
一般建议压缩后的文件名要和 “入口模块文件名” + “-min” 一致.


outputDependency
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
可选。入口模块的依赖配置文件。 使用 1.3 自动 combo 时需要.

1.2 最终效果
--------------------------------

目录结构

.. code-block:: javascript

    build/
         biz/
            page/
                run.combo.js
                run.deps.js

其中 run.combo.js 内容为:

.. literalinclude:: /_static/module-compiler/tb_kissy_1.3/build/biz/page/run.combo.js
           :language: javascript

其中 run.deps.js 内容为:

.. literalinclude:: /_static/module-compiler/tb_kissy_1.3/build/biz/page/run.dep.js
           :language: javascript


1.3 连接状况
---------------------------------------

#. 若服务器不支持自动 combo ，则不用引入 run.deps.js，最终三个链接 run.js 和 overlay.js 以及 switchable.js

#. 若服务器支持自动 combo ，则可引入 run.deps.js，配置 ``KISSY.config("combine",true)`` 后即可将switchable 和 overlay 的请求合为一个连接.最终两个连接 run.js 以及 ??overlay.js,switchable.js


2. 模块依赖自动抽取
``````````````````````````````````````````

配置一下 build.xml

.. literalinclude:: /_static/module-compiler/tb_kissy_1.3/build-combo.xml
           :language: xml

2.1 参数说明
-------------------------------------

baseUrls
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
模块文件查找目录集合, 一般是业务模块的源码目录, 多个目录间以 , 分隔. 如 x:/code/ .

encodings
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
指明模块目录中文件的编码, 顺序对应于 baseUrls , 多个编码以 , 分隔. 如以上示例： gbk , 表示业务模块为 gbk 编码.

outputEncoding
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
指明最后合并打包文件的编码格式. 如以上示例 utf-8 .

output
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
最终依赖配置文件的路径

fixModuleName
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
默认 false. 是否自动补全模块名.


2.2 最终效果
--------------------------------

目录结构

.. code-block:: javascript

   build-combo/
               deps.js
               biz/
                    x.js
                    y.js
                    page/
                         run.js

其中 deps.js 内容为：

.. literalinclude:: /_static/module-compiler/tb_kissy_1.3/build-combo/deps.js
           :language: javascript

其中 x.js 内容为：

.. literalinclude:: /_static/module-compiler/tb_kissy_1.3/build-combo/biz/x.js
           :language: javascript

其中 y.js 内容为：

.. literalinclude:: /_static/module-compiler/tb_kissy_1.3/build-combo/biz/y.js
           :language: javascript

其中 run.js 内容为：

.. literalinclude:: /_static/module-compiler/tb_kissy_1.3/build-combo/biz/page/run.js
           :language: javascript

.. note::

    注意自动 combo 需要配置 ``fixModuleName`` 以补全模块名。


2.3 连接情况
------------------------

通过引入 deps.js 以及配置 ``KISSY.config("combine",true)`` 最终应用会产生两个连接 ：

#. biz/??x.js,y.js,page/run.js

#. ??overlay.js,switchable.js

