使用示例
===================================


KISSY 1.2 前
------------------------------------

注册模块
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


.. code-block:: javascript

    KISSY.add({
       "1.1x-dep":{
            fullpath:"http://lite-ext.googlecode.com/svn/trunk/lite-ext/playground/module_package/1.1x/dep.js"
       },
       "1.1x-mod":{
            fullpath:"http://lite-ext.googlecode.com/svn/trunk/lite-ext/playground/module_package/1.1x/mod.js",            
            cssfullpath:"http://lite-ext.googlecode.com/svn/trunk/lite-ext/playground/module_package/1.1x/mod.css",
            requires:["1.1x-dep"]
       } 
    });    
    

定义模块
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

`被依赖模块 1.1x dep <http://lite-ext.googlecode.com/svn/trunk/lite-ext/playground/module_package/1.1x/dep.js>`_

.. code-block:: javascript

    KISSY.add("1.1x-dep",function(){
        alert("1.1x-dep loaded");
    });


`主模块 1.1x mod <http://lite-ext.googlecode.com/svn/trunk/lite-ext/playground/module_package/1.1x/mod.js>`_

.. code-block:: javascript
    
    KISSY.add("1.1x-mod",function(){
        alert("1.1x-mod loaded");
    });
        
    
使用模块
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


.. code-block:: javascript

    KISSY.use("1.1x-mod");   
    
    
demo
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    <button id='k11x'>1.1x 启动主模块</button>
    <script>
        KISSY.add({
           "1.1x-dep":{
                fullpath:"http://lite-ext.googlecode.com/svn/trunk/lite-ext/playground/module_package/1.1x/dep.js"
           },
           "1.1x-mod":{
                fullpath:"http://lite-ext.googlecode.com/svn/trunk/lite-ext/playground/module_package/1.1x/mod.js",
                cssfullpath:"http://lite-ext.googlecode.com/svn/trunk/lite-ext/playground/module_package/1.1x/mod.css",
                requires:["1.1x-dep"]
           } 
        });  
        KISSY.one("#k11x").on("click",function(){
            KISSY.use("1.1x-mod");
        });  
    </script>
    
    
KISSY 1.2
------------------------------------

包配置
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


.. code-block:: javascript

    KISSY.config({
        packages:[
            {
                name:"1.2", //包名
                tag:"20110323",//时间戳，添加在动态脚本路径后面，用于更新包内模块代码
                path:"http://lite-ext.googlecode.com/svn/trunk/lite-ext/playground/module_package/", //包对应路径，相对路径指相对于当前页面路径
                charset:"gbk" //包里模块文件编码格式
            }
        ]
    });
    

定义模块
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

`被依赖模块 1.2 dep <http://lite-ext.googlecode.com/svn/trunk/lite-ext/playground/module_package/1.2/dep.js>`_

.. code-block:: javascript

    KISSY.add("1.2/dep",function(){
        alert("1.2/dep loaded");
    });


`主模块 1.2 mod <http://lite-ext.googlecode.com/svn/trunk/lite-ext/playground/module_package/1.2/mod.js>`_

.. code-block:: javascript
    
    KISSY.add("1.2/mod",function(){
        alert("1.2/mod loaded");
    },{
        csspath:"./mod.css", //相对于模块js 定位
        requires:["./dep"]
    });
        
    
使用模块
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


.. code-block:: javascript

    KISSY.use("1.2/mod");  
    
    
demo
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    <button id='k12'>1.2 启动主模块</button>
    <script>
        KISSY.config({
            packages:[
                {
                    name:"1.2", //包名
                    tag:"20110323",//时间戳，添加在动态脚本路径后面，用于更新包内模块代码
                    path:"http://lite-ext.googlecode.com/svn/trunk/lite-ext/playground/module_package/", //包对应路径，相对路径指相对于当前页面路径
                    charset:"gbk" //包里模块文件编码格式
                }
            ]
        });
        KISSY.one("#k12").on("click",function(){
            KISSY.use("1.2/mod");
        });  
    </script>     
    
    
KISSY loader 1.2 如何进行代码更新
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
    

``attach`` 设置为  false，表示只有在 ``use`` 时才会运行模块定义函数，消除模块过多而导致的页面初始化时的停滞问题。                