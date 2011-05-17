.. currentmodule:: Loader

KISSY.add (v1.2)
======================================

by `承玉 <yiminghe@gmail.com>`_ , `fool2fish <fool2fish@gmail.com>`_

添加模块
--------------------------------------

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

            
范例: 添加模块
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^            

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




包配置
--------------------------------------

为了摆脱模块必须使用前注册的繁琐


.. function:: KISSY.config(config)

    :param object config: 包含 key 为 ``packages`` 的配置项，包括

        .. attribute:: config.packages
        
            类型数组，每个数组项为一个包的配置，一个包配置包括 4 项：
            
                .. attribute:: packages.name
                
                    类型字符串，表示包名    
                    
                .. attribute:: packages.tag
                
                    类型字符串，最好为时间戳，用于刷新客户端本包的模块文件缓存  
                    
                .. attribute:: packages.path
                
                    类型字符串，表示包所在的 ``url`` 路径，相对路径表示相对于当前页面路径
                    
                .. attribute:: packages.charset
                
                    类型字符串，表示宝贝所有模块定义文件的编码格式，默认 utf-8             

范例: 包配置
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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



压缩模块
--------------------------------------

若线上环境使用 ``kissy-min.js`` ，则请使用 closure compiler 对所有模块文件进行压缩，
例如 ``mod.js`` 压缩为 ``mod-min.js`` ，放在模块文件的同级目录下。