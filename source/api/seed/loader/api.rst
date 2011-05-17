.. py:currentmodule:: Loader

API
===============================================================

引入
------------------------------------------
页面引入 kissy.js :

.. code-block:: html

    <script src='kissy.js'></script>


添加模块
--------------------------------------

.. function:: KISSY.add(name,fn)
    
    添加模块定义    

    :param string name: 模块名称
    :param function fn: 模块定义函数，若该模块的所有依赖项都已经载入完毕，则 ``fn`` 立即执行


.. _kissy-add-config:

.. function:: KISSY.add(config)
    
    注册模块方式1
    
    :param object config: 模块描述信息
    
例如

.. code-block:: javascript

    {
        "custommod":{
            fullpath:"http://xx.com/custommod.js",
            cssfullpath:"http://xx.com/custommod.css",
            requires:["depmod1","depmod2"]
        },
        "custommod2":{
            fullpath:"http://xx.com/custommod2.js",
            requires:["depmod1","depmod2"]
        }
    }        
    

指明了模块 ``custommod`` 与 ``custommod2`` 的模块文件路径以及其依赖的模块名称，
那么当 ``use`` 该模块时就会从 ``fullpath`` 中载入模块定义和其依赖模块的定义，
以及从 ``cssfullpath`` 中载入模块的样式表

.. note::

    * ``fullpath`` 也可以直接是 css 文件，这时该模块为 css 模块，如果某个 js 模块依赖项配置了 css 模块，则 js 模块的初始化会等待 css 模块对应的 css 文件完毕，具体方法可见： `lifesinger 的探索 <http://lifesinger.wordpress.com/2011/05/02/seajs-css-support/>`_ 。
        
    * 依赖的模块也要进行注册。该函数用在模块注册文件中,kissy 1.2 使用包机制取代模块注册，仍然兼容1.2以前模块注册方式。


.. function:: KISSY.add(name,config)

    注册模块方式2, 注册单个模块，相当于 :ref:`KISSY.add({name:config}) <kissy-add-config>`


1.2 新增接口
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. versionadded:: 1.2

.. function:: KISSY.add(name,fn[,config])

    :param string name: 模块名
    :param function fn: 模块定义函数
    :param object config: 模块的一些格外属性，包括
        
        .. attribute:: config.attach
        
            类型 bool,默认 true,表示模块定义时是否执行定义函数 fn，只有在 use 时才执行，懒加载原则            
            
        .. attribute:: config.requires
        
            类型 Array<string>,模块的一些依赖项，如果需要载入 css 则，数组项为 .css 结尾名字
            

.. note::
    
    模块名 ``name`` 也可以省略，不过部署阶段需要使用 :mod:`KISSY Module Compiler <module-compiler>` .

            
            
示例:

.. code-block:: javascript

    {
    	attach:false,// 模块定义时不会执行定义函数 fn，只有在 use 时才执行，懒加载原则
    	requires:['depMod1','depMod2','./mod.css'] // 该模块的一些依赖项，
    	                      // 注意 css 为和模块 js 同目录下的 mod.css
    }



如果模块 ``depMod1`` 以及 ``depMod2`` 的定义函数有返回值，例如


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


使用模块
--------------------------------------


.. function:: KISSY.use(modNames[,callback])

    :param string modNames: 以 ``,`` 分割的模块名称集合字符串,例如 ``KISSY.use("custommod,custommod2");``
    :param function callback: 当 ``modNames`` 中所有模块加载完毕后执行

.. note::

    注意 kissy < 1.2 时使用模块前必须注册



1.2 新增接口
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. versionadded:: 1.2

包配置
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

目的是为了摆脱模块必须使用前注册的繁琐


.. function:: KISSY.config(config)

    :param object config: 包含 key 为 ``packages`` 的配置项，包括

        .. attribute:: config.packages
        
            类型数组，每个数组项为一个包的配置，一个包配置包括 4 项：
            
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

例如：

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
  

使用模块
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


如果模块定义函数有返回值，则该模块返回值作为参数直接传入回调函数，例如


.. code-block:: javascript

    KISSY.use("depMod1,depMod2",function(S,DepMod1,DepMod2){
    });
   
    
    
如果使用经过配置的包内的模块，则这些包内模块不需要事先注册，直接 ``use`` 即可，如果模块名以 ``/`` 结尾，则自动加后缀 index ，例如
``use("mods/m1/")`` 相当于 ``use("mods/m1/index")`` ，即自动加载 ``m1`` 目录下的 ``index.js``


压缩模块
--------------------------------

若线上环境使用 ``kissy-min.js`` ，则请使用 closure compiler 对所有模块文件进行压缩，
例如 ``mod.js`` 压缩为 ``mod-min.js`` ，放在模块文件的同级目录下。


1.2 代码更新机制
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

    
静态部署
----------------------------------------------------


部署时也可以不采用动态加载，仅仅将 kissy loader 作为代码组织的一种方式，将所有的模块打包到一个文件静态引入放在页面中，
当使用 ``KISSY.use`` 时如果模块已经过静态引入在页面中，则不会发送请求，这时建议所有模块的属性都设置为


.. code-block:: javascript

    KISSY.add("custommod",function(){},{attach:false});
    

``attach`` 设置为  false，表示只有在 ``use`` 时才会运行模块定义函数，消除模块过多而导致的页面初始化时的停滞问题。若定义模块时不写模块名则默认 ``attach`` 为 ``false`` .