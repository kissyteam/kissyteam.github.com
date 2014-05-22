.. currentmodule:: seed

config
==============================================

.. note::

    Package配置参数增加group，支持根据group，combo多个Package。

        不同charset分别combo
        容错：如果发现某Package无法combo，则对其单独combo

Methods
-----------------------------------------------

.. function:: KISSY.config

    | void **KISSY.config** (config)
    | 设置或获取 KISSY 配置参数

    :param Object config: KISSY 配置参数, 包括

    :param Boolean debug: 是否开启调试模式

    :param Object alias: 模块别名配置. 详见 :ref:`别名介绍 <loader_alias_tutorial>`

    :param Object group: 默认 false. 所有包的默认组配置. 详见 :ref:`组介绍 <loader_group_tutorial>`

    :param String base: KISSY 框架所在的基地址.

    :param Number comboMaxUrlLength: Combo url 的最长长度，默认 2000

    :param Number comboMaxFileNum: combo file 的最大个数，默认 40

    :param String comboPrefix: Combo 前缀，默认 "??"

    :param String comboSep: Combo 分隔符，默认 ","

    :param String tag: KISSY 内置模块请求的时间戳.
        也可以通过引入 seed 的 url 后加 **?t=** 设置，例如
        **http://g.tbcdn.cn/kissy/k/1.4.3/seed.js**


    :param Boolean combine: 是否开启自动 combo 模式，默认 false 不开启.
        自动 combo 模式要求 use 前配置好依赖关系，详见
        :ref:`教程 <loader_tutorial>`

    :param Object config.packages: 以包名为键，包配置对象为值的键值对对象。包配置对象包括：

                .. attribute:: package.group

                    类型字符串, 表示包所属的组名。详见 :ref:`组介绍 <loader_group_tutorial>`

                .. attribute:: package.debug

                    类型 Boolean, 包内的脚本请求是是否加 -min 后缀，默认和 KISSY.config("debug") 相同.

                .. attribute:: package.tag

                    类型字符串, 最好为时间戳, 用于刷新客户端本包的模块文件缓存

                .. attribute:: package.combine

                    类型Boolean, 如果总和 combine 设置为 true，但是单个包 combine 设置为 false，则该包内文件不进行自动 combo

                .. attribute:: package.ignorePackageNameInUri

                    类型Boolean, 默认 false.
                    是否在请求的模块路径中省去 package name.
                    例如 ``use('xx/a')`` 配置 xx package 的 base 为 ``http://test.com/`` 则设置 ignorePackageNameInUri 后请求地址为：
                    ``http://test.com/a.js``

                .. attribute:: package.base

                    类型字符串, 表示包所在的 ``url`` 路径, 相对路径表示相对于当前页面路径.

                .. attribute:: package.path

                    .. deprecated:: 1.4

                        作用同 base 配置.

                .. attribute:: package.charset

                    类型字符串, 表示宝贝所有模块定义文件的编码格式, 默认 utf-8

        .. note::

            KISSY 内置 gallery 包

    :param Object config.modules: 以单个模块为键，单个模块配置对象为值的键值对对象。单个模块配置对象包括：

        .. attribute:: module.requires

            类型 String[] ， 该模块的依赖模块名数组。当设置 combine 为 true 时需要配置，否则不建议配置.

        .. attribute:: module.tag

            类型 String，单个模块的时间戳。仅在 combine 为 false 时生效。 combine:true 时取对应包的 tag.


.. function:: KISSY.config

    | void **KISSY.config** (name,[value])
    | 设置或获取 KISSY 配置参数.

    :param String name: 参数名称. 取值范围参见上面函数。
    :param value: 参数值. 如果不设置则返回参数名称对应的参数值.
    :returns: 如果设置了参数值无返回。否则返回参数名称对应的参数值.



配置也可以通过配置到引用 seed.js 的脚本标签上. 例如

.. code-block:: html

    <script src='seed.js' data-config='{combine:true}'></script>


配置范例
---------------------------------------------------------------------------------

.. _loader_config_all:

总配置范例概览
``````````````````````````````````````````````

    .. code-block:: javascript

        KISSY.config({
            // 开启自动 combo 模式
            combine:true,
            // kissy 库内置模块的时间戳
            tag:'2012',
            // kissy 的基准路径
            base:'http://x.com/a',
            packages:{
                x:{
                    // x 包的基准路径
                    base:'http://x.com/biz/',
                    // x 包的时间戳
                    tag:'x',
                    // 开启 x 包 debug 模式
                    debug:true
                },
                y:{
                   // y 包的基准路径
                   base:'http://x.com/biz/',
                   // y 包不开启自动 combo
                   combine:false
                   // 不配置 tag，则取 kissy 内置模块的时间戳
                }
            },
            modules:{
                "x/b1":{
                    // "x/b1" 模块的依赖信息
                    requires:["x/b2","x/b3"]
                },
                "y/b2":{
                    // y/b2 模块单独的时间戳
                    tag:'234'
                }
            }
        });


packages 范例: 包配置
``````````````````````````````````````````
    .. code-block:: javascript

        KISSY.config({
            packages:{
                // 包名
                "tc": {
                    tag:"20110323", // 动态加载包内的模块js文件时,
                                    // 自动加上 ?t=20110323, 用于文件更新
                    base:"../", // 包对应路径, 相对路径指相对于当前页面路径
                    charset:"gbk" // 包里模块文件编码格式
                }
            }
        });

    当要在包内添加模块时, 必须遵守一些约定：

    #. 一个模块的文件必须放在以包名命名的目录中

    #. 一个包下的所有目录的代码都应属于这个包，即包之间不能有重合目录。例如

        * tc 的 path 为 http://x.com/y/

        * tm 的 path 为 http://x.com/

        这样就不行，在 ie 下会有包名不确定问题.


    #. 模块的名字必须取名从包目录开始到当前模块文件的文件路径名称, 例如 ``mod1.js`` 位于 ``tc/mods`` 下, 则 ``mod1.js`` 的模块取名：

    .. code-block:: javascript

        KISSY.add("tc/mods/mod1",function(){});

    .. note::

        模块名也可以省略, 不过部署阶段需要使用 `KISSY Module Compiler <https://github.com/daxingplay/grunt-kmc>`_ .