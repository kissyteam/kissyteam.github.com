API
===============================================================

引入
------------------------------------------
页面引入 kissy.js :

.. code-block:: html

    <script src='kissy.js'></script>


添加模块
--------------------------------------

函数接口
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

添加模块定义
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


.. code-block:: javascript

    KISSY.add = function(name,fn) {}
    

``name`` :类型字符串，表示模块名称

``fn`` :类型函数，表示模块定义函数，若该模块的所有依赖项都已经载入完毕，则 ``fn`` 立即执行

该函数用在模块定义文件中



注册模块
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

接口1
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


.. code-block:: javascript

    KISSY.add = function(config) {}

``config`` :类型对象，表示模块描述信息，例如如下格式

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
    

指明了模块 ``custommod`` 与 ``custommod2`` 的模块文件路径以及其依赖的模块名称，那么当 ``use`` 该模块时时就会从 ``fullpath`` 中载入模块定义和其依赖模块的定义，以及从 ``cssfullpath`` 中载入模块的样式表

注意依赖的模块也要进行注册。

该函数用在模块注册文件中,kissy 1.2 使用包机制取代模块注册，仍然兼容1.2以前模块注册方式。


接口2
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


.. code-block:: javascript

    KISSY.add = function(name,config) {}
    

相当于调用接口1的 ``KISSY.add({name:config})``;


KISSY 1.2 新增接口
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


.. code-block:: javascript

    KISSY.add = function(name,fn,config) {}
    

新增 config 参数

config (optional):类型对象，表示该模块的一些格外属性，包括 attach(bool),requires(Array<String>)，例如


.. code-block:: javascript

    {
    	attach:false,//模块定义时不会执行定义函数 fn，只有在 use 时才执行，懒加载原则
    	csspath:"./mod.css", //相对当前模块的js文件地址    	
    	requires:['depMod1','depMod2'] //该模块的一些依赖项
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


当模块名称 name 为包内模块<参见下文1.2包配置>时，则requires的模块名称可使用相对路径 refer 包内其他模块 


.. code-block:: javascript

    // tc/mods/mod1 依赖于 tc/mods/mod2
    KISSY.add("tc/mods/mod1",function(){},requires:['./mod2']);


使用模块
--------------------------------------


函数接口
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


.. code-block:: javascript

    KISSY.use=function(modNames,callback){}
    

``modNames`` :类型字符串，以 ``,`` 分割的模块名称集合字符串,例如 ``KISSY.use("custommod,custommod2");``

``callback`` (optional):类型函数，当 ``modNames`` 中所有模块加载完毕后执行。

注意 kissy 1.2 以前使用模块前必须注册



kissy 1.2 新增接口
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

包配置
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

目的是为了摆脱模块必须使用前注册的繁琐


.. code-block:: javascript

    KISSY.config=function(config){}
    
    
``config (optional)``:类型对象，当包含 key 为 ``packages`` 的配置项，例如


.. code-block:: javascript

    KISSY.config({
        packages:[
            {
                name:"tc", //包名
                path:"../", //包对应路径，相对路径指相对于当前页面路径
                charset:"gbk" //包里模块文件编码格式
            }
        ]
    });
    
    
``packages`` :类型数组，每个数组项为一个包的配置，一个包配置包括三项：

``name`` :类型字符串，表示包名。

``path`` :类型字符串，表示包所在的 ``url`` 路径，相对路径表示相对于当前页面路径

``charset`` :类型字符串，表示宝贝所有模块定义文件的编码格式          

当要在包内添加模块时，必须遵守一些约定：

1.一个模块的文件必须放在以包名命名的目录中

2.模块的名字必须取名从包目录开始到当前模块文件的文件路径名称，例如 ``mod1.js`` 位于 ``tc/mods`` 下，则 ``mod1.js`` 的模块取名：


.. code-block:: javascript

    KISSY.add("tc/mods/mod1",function(){});
  

使用模块
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


如果模块定义函数有返回值，则该模块返回值作为参数直接传入回调函数，例如


.. code-block:: javascript

    KISSY.use("depMod1,depMod2",function(S,DepMod1,DepMod2){
    });
   
    
    
如果使用经过配置的包内的模块，则这些包内模块不需要事先注册，直接 ``use`` 即可    