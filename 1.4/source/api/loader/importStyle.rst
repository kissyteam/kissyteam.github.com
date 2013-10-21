.. currentmodule:: seed

importStyle
======================================


Methods
-----------------------------------------------

.. function:: KISSY.importStyle

    | void **KISSY.importStyle** (modNames)
    | 阻塞加载 css 模块或 js 模块依赖的 css 模块, 和 KISSY.add 中的 require 配置一起使用.

    :param String|String[] modNames: 以 ``,`` 分割的 js 模块或 css 模块名称集合字符串,例如 ``KISSY.use("mod1,mod2/xx.css");``


.. note::

    该函数的使用前提是实现载入自动生成的依赖描述文件，详见 :ref:`importStyle 使用 <loader_import_style_tutorial>`

