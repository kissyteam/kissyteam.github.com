.. currentmodule:: waterfall

瀑布示例
======================================

.. versionadded:: 1.2

|  `API <../../../api/component/waterfall/index.html>`_ | `源码 <https://github.com/kissyteam/kissy/waterfall/master/src/waterfall/>`_

Class
-----------------------------------------------

  * :class:`Waterfall.Async <waterfall.Async>`

瀑布示例
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="700" class="iframe-demo" src="../../../static/demo/waterfall/demo1.html"></iframe>

    **载入1.2的 kissy**

    .. code-block:: html

        <script src="http://a.tbcdn.cn/s/kissy/1.2.0/kissy-min.js"></script>
    
    **添加css控制**
    
    这里的css用来控制瀑布容器中每个瀑布元素的属性
    
    .. code-block:: html
    
        <style>
            .ks-waterfall {
                position:absolute;
                width: 149px ;
                overflow: hidden;
                padding: 15px 15px 15px 4px;
            }
        </style>

    **HTML关键代码**
	
    .. code-block:: html
        
        <div>
            <!--放置一个button用于演示销毁瀑布的外部调用-->
            <button id="uninstall">卸载组件</button>
        </div>
    	<div id='container' style="position: relative;">
            <!--这里只需要一个容器就行了，瀑布中每个元素的内容由js配置的模板内容渲染-->
        </div>
    
    **模板代码**
    
    .. code-block:: html
	
        <script type="tpl" id="tpl">
            <div class="ks-waterfall" >
                <img src="{{image_url}}"
                     width="{{image_width}}"
                     height="{{image_height}}"
                />
                <div class="title">{{title}}</div>
            </div>
        </script>
        
    **使用脚本生成瀑布**

    .. literalinclude:: /_static/demo/waterfall/assets/demo1.js
           :language: javascript


