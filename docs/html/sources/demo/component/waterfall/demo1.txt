.. currentmodule:: waterfall

瀑布布局基本使用示例
======================================

Class
-----------------------------------------------

  * :class:`Waterfall`

瀑布布局基本使用示例
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="700" class="iframe-demo" src="../../../static/demo/waterfall/demo1.html"></iframe>

    **添加css控制**
    
    这里的css用来控制瀑布容器中每个元素的属性
    
    .. code-block:: html
    
        <style>
            .ks-waterfall {
                position: absolute;
                width: 192px;
                overflow: hidden;
                padding: 15px;
                border: 2px solid #ddd;
                margin-bottom: 20px;
                text-align: center;
                left:-9999px;
                top:-9999px;
            }
        </style>

    **HTML关键代码**
	
    .. code-block:: html

    	<div id='container' style="position: relative;">
            <!-- 重复的数据块 -->
            <div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6072/6128820646_75d4f4f26d_m.jpg" width="192" height="113">
                <div class="title">untitled</div>
            </div>
        </div>

    .. note::

        - 由于数据块高度是需要包含图片高度的, 当图片未加载完时, 当前取不到其高度, 所以需要人为设定图片的高度;
        - 图片高度值一般直接有数据接口给出.

        
    **使用脚本生成瀑布**

    .. literalinclude:: /_static/demo/waterfall/assets/demo1.js
           :language: javascript


