.. _loader_demo_simple:

.. currentmodule:: loader

简单配置包并使用
===============================

Module
-----------------------------------------------

  :mod:`seed`


简单配置包并使用
------------------------------------

    .. raw:: html

        <iframe width="100%" height="200" class="iframe-demo" src="../../../static/demo/loader/simple.html"></iframe>

    .. literalinclude:: /_static/demo/loader/assets/simple.js
           :language: javascript


    **定义模块**

    ``被依赖模块 1.2 dep``

    .. literalinclude:: /_static/demo/loader/assets/module_package/1.2/dep.js
               :language: javascript


    ``主模块 1.2 mod``

    .. literalinclude:: /_static/demo/loader/assets/module_package/1.2/mod.js
                   :language: javascript

    **使用模块**

    .. code-block:: javascript

        KISSY.use("1.2/mod");


