.. currentmodule:: seed

Loader 使用示例
===============================

Module
-----------------------------------------------

  :mod:`seed`

.. _seed-loader-demo2:

Loader 使用示例
------------------------------------

    .. raw:: html

        <iframe class="iframe-demo" width="100%" height="235" src="../../../_static/api/seed/loader/example/demo.html"></iframe>


    **包配置**

    .. literalinclude:: /_static/api/seed/loader/example/config.js
               :language: javascript
    

    **定义模块**

    被依赖模块 my dep

    .. literalinclude:: /_static/api/seed/loader/example/my/dep.js
                   :language: javascript

    主模块 my mod

    .. literalinclude:: /_static/api/seed/loader/example/my/mod.js
                   :language: javascript

    
    **使用模块**

    .. literalinclude:: /_static/api/seed/loader/example/run.js
                   :language: javascript

.. note::

    这里仅用于演示，生产环境下请用有意义的包名