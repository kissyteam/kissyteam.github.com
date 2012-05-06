.. currentmodule:: waterfall

加载动态数据的瀑布布局示例
======================================

|  KISSY 1.1x 中也有 waterfall 组件, 和1.2 中配置接口完全一致, 只是加载方式有些区别, 具体请参考 `这里 <http://lizzie.github.com/kissy/src/waterfall/demo/tlive.html>`_


Class
-----------------------------------------------

  * :class:`Waterfall`
  * :class:`Waterfall.Loader`

加载动态数据的瀑布布局示例
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="700" class="iframe-demo" src="../../../static/demo/waterfall/demo2.html"></iframe>

    大体类似于前一个例子. 但需要添加:

    **模板代码**
    
    .. code-block:: html
	
        <script type="tpl" id="tpl">
            <div class="pin ks-waterfall" data-id="{{id}}">
                <a href="#" class="image">
                    <img height="{{height}}" alt="{{title}}" src="http://farm{{farm}}.static.flickr.com/{{server}}/{{id}}_{{secret}}_m.jpg" />
                </a>
                <p class="description">{{title}}</p>
            </div>
        </script>
        
    **使用脚本生成瀑布**

    .. literalinclude:: /_static/demo/waterfall/assets/demo2.js
           :language: javascript

