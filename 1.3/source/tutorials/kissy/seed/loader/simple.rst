简单使用 KISSY Loader
=============================

author: `承玉 <yiminghe@gmail.com>`_

Refer
```````````````````````````````````````````````````

| :ref:`api <Loader>`

| :ref:`demo <loader_demo>`


简单配置包使用
````````````````````````````````````````

可以通过配置包来制定业务应用的 js 代码所在的路径，然后用目录结构来组织代码文件，最后 use 即可。例如：

:ref:`简单配置包使用 <loader_demo_simple>`


简单使用内置模块
````````````````````````````````````````````````````

可以通过 KISSY.use 简单使用内置模块，例如：

:ref:`简单使用内置模块 <loader_demo_simple_native>`


combo 使用内置模块
```````````````````````````````````````````````````````````

可以通过设置 combine 来 combo 使用内置模块，例如：

:ref:`combo 使用内置模块 <loader_demo_combo>`


.. note::

    配置的两种方式 :

    #. KISSY.config()
    #. <script src='seed.js' data-config={}></script>


combo 使用应用模块
`````````````````````````````````````````````````````````

以 gallery 举例，如果事先不配置依赖，那么例如：

:ref:`不配置依赖 combo 使用 gallery <loader_demo_combo_common>`

gallery 模块的依赖模块是分开请求的，如果配置了依赖，例如

:ref:`配置依赖 combo 使用 gallery <loader_demo_combo_require>`

那么 gallery 的模块和其依赖模块就是一个 combo 链接请求过来的.


