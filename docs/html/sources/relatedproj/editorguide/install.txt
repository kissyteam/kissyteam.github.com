.. currentmodule:: editor

引入
===========


引入 css
--------------

1) 在页头加入 reset css (淘宝页面一般都已引入)

.. code-block:: html

    <link href="http://a.tbcdn.cn/s/kissy/1.x.x/cssreset/reset-min.css" rel="stylesheet"/>


2) 在页头加入编辑器淘宝主题 css

.. code-block:: html

    <!--[if lt IE 8]>
    <link href="http://a.tbcdn.cn/s/kissy/1.x.x/editor/theme/cool/editor-pkg-sprite-min.css" rel="stylesheet"/>
    <![endif]-->
    <!--[if gte IE 8]><!-->
    <link href="http://a.tbcdn.cn/s/kissy/1.x.x/editor/theme/cool/editor-pkg-min-datauri.css" rel="stylesheet"/>
    <!--<![endif]-->
    
.. note::

    1.x 表示 1.1.7 或 1.2.0   


引入 javascript
--------------------------

kissy 1.1.6
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

建议升级到 kissy 1.1.7 ，情况特殊的话可引：

.. code-block:: html

    <script src="http://a.tbcdn.cn/s/kissy/1.1.6/editor/editor-pkg-min.js"></script>

kissy 1.1.7
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: html

    <script src="http://a.tbcdn.cn/s/kissy/1.1.7/??kissy-min.js,
    uibase/uibase-pkg-min.js,
    dd/dd-pkg-min.js,overlay/overlay-pkg-min.js,
    editor/editor-all-pkg-min.js"></script>

kissy 1.2.0
~~~~~~~~~~~~~~~~~~~~~~~~~~~

**静态引入**

.. code-block:: html

    <script src="http://a.tbcdn.cn/s/kissy/1.2.0/??kissy-min.js,
    uibase-min.js,
    component-min.js,
    dd-min.js,
    overlay-min.js,
    editor-min.js"></script>
    
**动态引入**   
 
.. code-block:: html

    <script src="http://a.tbcdn.cn/s/kissy/1.2.0/kissy-min.js"></script>
    <script>
        KISSY.use("editor",function(S,Editor){
            // new Editor().use("xx")
        });
    </script>

.. note::

    默认动态引入时，编辑器不可 use "video" ,"music" ,"multi-upload" ,"checkbox-source" 插件，如果需要这样插件，需要覆盖 editor 模块配置：
    
    .. code-block:: javascript
    
        KISSY.add({
            editor:{
                fullpath:"http://a.tbcdn.cn/s/kissy/1.2.0/??editor-min.js,editor/biz/ext/editor-plugin-pkg-min.js"
            }
        });
        
        KISSY.use("editor",function(S,Editor){
            Editor(...).use("video");
        });
    

加入 textarea
--------------------------

.. code-block:: html

    <textarea id="textareaId" style="width:90%;height:200px"></textarea>

该 textarea 将被编辑器组件替换.

.. note::

    宽高一定要用行内样式设定, 否则各个浏览器编辑器大小会有差别！
