.. currentmodule:: Loader

add (v1.2)
======================================

.. versionadded:: 1.2


Module
-----------------------------------------------

  :mod:`Seed`

Methods
-----------------------------------------------

.. function:: KISSY.add

    | void **KISSY.add** (name,fn[,config])
    | 添加模块

    :param string name: 模块名
    :param function fn: 模块定义函数
    :param object config: 模块的一些格外属性，包括
        
    :param Boolean config.attach: 默认 true,表示模块定义时是否执行定义函数 fn，只有在 use 时才执行，懒加载原则
            
    :param Array<String> config.requires: 模块的一些依赖项，如果需要载入 css 则，数组项为 .css 结尾名字

    .. note::

        模块名 ``name`` 也可以省略，不过部署阶段需要使用 :mod:`KISSY Module Compiler <module-compiler>` .


    范例: 添加模块

    .. code-block:: javascript

        KISSY.add("yourmod",function(S){},
            {
                attach:false,// 模块定义时不会执行定义函数 fn，只有在 use 时才执行，懒加载原则
                requires:['depMod1','depMod2','./mod.css'] // 该模块的一些依赖项，
                                                           // 注意 css 为和模块 js 同目录下的 mod.css
            }
        );


    如果依赖的模块 ``depMod1`` 以及 ``depMod2`` 的定义函数有返回值，例如


    .. code-block:: javascript

        KISSY.add("depMod1",function(){
            function Mod(){}
            return Mod;
        });

        KISSY.add("depMod2",function(){
            function Mod(){}
            return Mod;
        });


    那么该返回值会作为参数传入依赖 depMod1 以及 depMod2 的模块的定义函数，例如

    .. code-block:: javascript

        KISSY.add("custommode",function(S,DepMod1,DepMod2){
            //use DepMod1 to refer depmod1's return value
        },{requires:["depmod1","depmod2"]});


    当模块名称 name 为包内模块< 参见 :func:`下文包配置<KISSY.config>` >时，则requires的模块名称可使用相对路径 refer 包内其他模块


    .. code-block:: javascript

        // tc/mods/mod1 依赖于 tc/mods/mod2
        KISSY.add("tc/mods/mod1",function(){},requires:['./mod2']);




.. function:: KISSY.config

    | void **KISSY.config** (config)
    | 包配置, 为了摆脱模块必须使用前注册的繁琐

    :param object config: 包含 key 为 ``packages`` 的配置项，包括

    :param Array config.packages: 每个数组项为一个包的配置，一个包配置包括 4 项：
            
                .. attribute:: packages.name
                
                    类型字符串，表示包名    
                    
                .. attribute:: packages.tag
                
                    类型字符串，最好为时间戳，用于刷新客户端本包的模块文件缓存  
                    
                .. attribute:: packages.path
                
                    类型字符串，表示包所在的 ``url`` 路径，相对路径表示相对于当前页面路径，如果需要相对于当前执行脚本路径，则需要自己处理：
                        .. code-block:: javascript
                        
                            var scripts=document.getElementsByTagName("script");
                            alert(scripts[scripts.length-1].src);
                    
                .. attribute:: packages.charset
                
                    类型字符串，表示宝贝所有模块定义文件的编码格式，默认 utf-8             

    范例: 包配置

    .. code-block:: javascript

        KISSY.config({
            packages:[
                {
                    name:"tc", // 包名
                    tag:"20110323", // 动态加载包内的模块js文件时，
                                    // 自动加上 ?t=20110323，用于文件更新
                    path:"../", // 包对应路径，相对路径指相对于当前页面路径
                    charset:"gbk" // 包里模块文件编码格式
                }
            ]
        });
   
    当要在包内添加模块时，必须遵守一些约定：

    #. 一个模块的文件必须放在以包名命名的目录中

    #. 模块的名字必须取名从包目录开始到当前模块文件的文件路径名称，例如 ``mod1.js`` 位于 ``tc/mods`` 下，则 ``mod1.js`` 的模块取名：

        .. code-block:: javascript

            KISSY.add("tc/mods/mod1",function(){});

    .. note::

        模块名也可以省略，不过部署阶段需要使用 :mod:`KISSY Module Compiler <module-compiler>` .


压缩模块
--------------------------------------

若线上环境使用 ``kissy-min.js`` ，则请使用 closure compiler 对所有模块文件进行压缩，
例如 ``mod.js`` 压缩为 ``mod-min.js`` ，放在模块文件的同级目录下。


代码更新机制
------------------------------------

由于动态加载的 js 文件不是写在页面中，所以不能从页面添加时间戳，并且1.2 loader新增的约定加载也不能配置具体模块文件路径，因此
1.2 loader 提供了在包级别添加时间戳的机制


.. code-block:: javascript

    KISSY.config({
        packages:[
            {
                name:"1.2", //包名
                path:"http://xx.com/"
            }
        ]
    });
    
    
当更改包内模块后，只需修改tag属性。


.. code-block:: javascript

    KISSY.config({
        packages:[
            {
                name:"1.2", //包名
                tag:"20110323",
                path:"http://xx.com/"
            }
        ]
    });
    
那么下载动态加载的 js 文件路径后面会自动加上： ``?t=20110323``

.. note::

    也可以不修改时间戳 ``tag`` 而是直接修改 ``path`` , 这样的话每次更新都需要新建一个目录包括更新后的全部代码.

    
静态部署
----------------------------------------------------


部署时也可以不采用动态加载，仅仅将 kissy loader 作为代码组织的一种方式，将所有的模块打包到一个文件静态引入放在页面中，
当使用 ``KISSY.use`` 时如果模块已经过静态引入在页面中，则不会发送请求，这时建议所有模块的属性都设置为


.. code-block:: javascript

    KISSY.add("custommod",function(){},{attach:false});
    

``attach`` 设置为  false，表示只有在 ``use`` 时才会运行模块定义函数，消除模块过多而导致的页面初始化时的停滞问题。若定义模块时不写模块名则默认 ``attach`` 为 ``false`` .