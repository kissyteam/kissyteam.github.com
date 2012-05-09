.. currentmodule:: loader

Loader 使用示例
===============================

Module
-----------------------------------------------

  :mod:`seed`


1.1.x 的 Loader 使用示例
------------------------------------

    .. raw:: html
    
        <script src="http://docs.kissyui.com/assets/import-kissy.js"></script>

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

    **注册模块**

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
    

    **定义模块**

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

    
    **使用模块**

    .. code-block:: javascript

        KISSY.use("1.1x-mod");



    
.. _seed-loader-demo2:

1.2 的 Loader 使用示例
------------------------------------

    .. raw:: html

        <button id='k12'>1.2 启动主模块</button>
        <script>
            KISSY.config({
                packages:[
                    {
                        name:"1.2", //包名
                        tag:"20110323",//时间戳, 添加在动态脚本路径后面, 用于更新包内模块代码
                        path:"http://lite-ext.googlecode.com/svn/trunk/lite-ext/playground/module_package/", //包对应路径, 相对路径指相对于当前页面路径
                        charset:"gbk" //包里模块文件编码格式
                    }
                ]
            });
            KISSY.one("#k12").on("click",function(){
                KISSY.use("1.2/mod");
            });
        </script>

    **包配置**

    .. code-block:: javascript

        KISSY.config({
            packages:[
                {
                    name:"1.2", //包名
                    tag:"20110323",//时间戳, 添加在动态脚本路径后面, 用于更新包内模块代码
                    path:"http://lite-ext.googlecode.com/svn/trunk/lite-ext/playground/module_package/", //包对应路径, 相对路径指相对于当前页面路径
                    charset:"gbk" //包里模块文件编码格式
                }
            ]
        });
    

    **定义模块**

    `被依赖模块 1.2 dep <http://lite-ext.googlecode.com/svn/trunk/lite-ext/playground/module_package/1.2/dep.js>`_

    .. code-block:: javascript

        KISSY.add(function(){
            alert("1.2/dep loaded");
        });


    `主模块 1.2 mod <http://lite-ext.googlecode.com/svn/trunk/lite-ext/playground/module_package/1.2/mod.js>`_

    .. code-block:: javascript

        KISSY.add(function(){
            alert("1.2/mod loaded");
        },{
            requires:["./dep","./mod.css"] //相对于当前模块js 定位
        });

    
    **使用模块**


    .. code-block:: javascript

        KISSY.use("1.2/mod");
    
    
