.. _workflow-dev-spec:

KISSY 组件开发规范
========================================

|  开始之前请先阅读 :ref:`workflow-simple`.

0, 概述
-----------------------------------------

在组建开发的各个流程中, 需要注意的地方, 完整列举出来, 有以下:

.. raw:: html

    <img  src='/1.3/source/raw/workflow/workflow.png' width='600' />

上图中讲述了在开发一个组建中, 最详细的步骤, 但千万别吓着了, 因为, 在实际过程中, 有些东西并不需要这么多(具体要看你写的组件的复杂程度), 可以精简为以下几点.


1, 确定 API
-----------------------------------------

必须. 首先确定该组件需要公开的 API 接口包括属性名称, 函数名, 参数以及返回值, 可参考 YUI3 ,Jquery 等类库的同类组件, 尽量保持一致.
比如 Overlay, 那么其公开接口肯定包含方法 ``show`` , ``hide`` 以及弹层内容 ``content`` 属性配置.


2, 模块编写
-----------------------------------------

必须. 推荐的目录结构如下, 例如组件为 Overlay 弹层, 那么该组件的目录结构应为：

.. raw:: html

            <img  src='/1.3/source/raw/styleguide/component-guide.png' />

目录中必须包含版本号子目录以及 index 模块, 模块名为 ``gallery/overlay/1.0/index`` ,用来指明该组件依赖的子模块, 子模块的名约定为 ``gallery/overlay/1.0/xx`` ,如果组件比较简单也可只有这一个源码文件. 例如 index.js

.. code-block:: javascript


    KISSY.add("gallery/overlay/1.0/index",function(S,O){
        
        return O;
        
    },{
        // 其他模块如果被这里指定的模块所依赖则可以不指定，例如  position 依赖 base，则 base 这里可以不指定
        requires:['./position'] 
    });

子模块放在 ``src`` 模块名为目录名的文件夹内, 例如子模块 base.js 的编写：


.. code-block:: javascript

    KISSY.add("gallery/overlay/1.0/base",function(S){
        function Overlay(){}
        
        // functions

        return Overlay;
    });
    
子模块间也可有依赖关系, 例如子模块 position.js 需要对基本模块 base.js 进行增强 :


.. code-block:: javascript

    KISSY.add("gallery/overlay/1.0/position",function(S,Overlay){       

        Overlay.prototype.xx=function(){};
        
        return Overlay;

    },{
        requires:['./base']
    });
    


3, demo 编写
-----------------------------------------------------------------------------

必须. 写一个 ``demo.html`` 简单展示下这个组件怎么用, 静态载入组件的所有依赖js即可, 注意被依赖模块js要放在依赖js前面, 例如：

.. code-block:: html

    <!DOCTYPE HTML>
    <html>
        <head>
            <title>overlay demo</title>
        </head>
        <body>
            <script src='../../../kissy/build/seed.js'></script>
            <script src='base.js'></script>
            <script src='position.js'></script>
            <script src='index.js'></script>
            <script>
                KISSY.use("gallery/overlay/1.0/index",function(S,Overlay){                    
                });
            </script>
        </body>
    </html>
    
4, readme.txt 编写
--------------------------------------------------------------------------------

可选. 随意写, 但推荐你参考 KISSY 的 `readme <https://github.com/kissyteam/kissy/blob/master/README.md>`_




5, 文档编写
-------------------------------------------------------------------------------

可选. 在 ``docs`` 目录下编写组件文档, 后缀名为 ``rst`` , 可参照 ``KISSY Overlay`` 的文档 `api <../api/component/overlay/>`_ 以及
`使用文档 <../demo/component/overlay/>`_ , 详细格式可参见 `sphinx <../tools/use-sphinx.html>`_ .
文档不做强求, 也可直接写纯文本格式, 在 demo.html 详细讲解即可.
 
 
6, 单元测试编写
----------------------------------------------------------------------------------

可选. 在 ``tests`` 目录下编写单元测试代码, 单元测试包括两个部分, 测试准备页面以及单元测试用例脚本.


6.1 测试准备页面
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

编写 test.html , 引入组件源码以及单元测试框架 jasmine (在 kissy/tools/ 下) , 例如：

.. code-block:: html

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Overlay Test Runner</title>
            <link rel="stylesheet" href="../../../tools/jasmine/jasmine.css">
            <script src="../../../kissy/tools/jasmine/jasmine.js"></script>
            <script src="../../../kissy/tools/jasmine/jasmine-html.js"></script>
            <script src="../../../kissy/tools/jasmine/event-simulate.js"></script>
            <script src="../../../kissy/build/seed.js"></script>
        </head>
        <body>
            <script src='base.js'></script>
            <script src='position.js'></script>
            <script src='index.js'></script>
            <script src="overlay-spec.js"></script>
            <script>
                jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
                jasmine.getEnv().execute(function() {
                    if (parent && parent.jasmine.kissyNext) {
                        parent.jasmine.kissyNext(this.results().failedCount);
                    }
                });
            </script>
        </body>
    </html>
    
    
6.2 测试用例脚本编写
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~      

测试用例编写在脚本 ``overlay-spec.js`` 中, 详细可参考 `jasmine wiki <https://github.com/pivotal/jasmine/wiki>`_ , 这里简单举个例子：

.. code-block:: javascript

    // 测试用例脚本可以包含很多 suit
    describe("开始一个 suit",function(){

        // 一个 suit 包含很多 spec
        it("开始一个 spec",function(){

            /*
                一个 spec 包含很多 expectation
            */
            expect("xx").toBe("xx");
            expect("yy").toBe("yy");

        });
    });

复杂点的例子可以看 `KISSY.Overlay Unit Test <https://github.com/kissyteam/kissy/blob/master/src/overlay/tests/overlay-spec.js>`_