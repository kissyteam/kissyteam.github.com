.. py:module:: DataLazyload

DataLazyload
===============================

|  作者: `玉伯 <lifesinger@gmail.com>`_
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/datalazyload/impl.js>`_  | `Demo <../../../demo/component/datalazyload/index.html>`_


Class
-----------------------------------------------

  * :class:`DataLazyload`

Demo - 基本使用
-------------------------------

    .. code-block:: javascript

        KISSY.use('datalazyload', function(S, DataLazyload) {
            S.ready(function(S) {
                S.DataLazyload( { mod: 'auto' } );
            });
        });

    这样, 页面加载时就会自动延迟所有图片的下载, 以及延迟特定 textarea 里的 html 渲染.


Demo - 自动模式
-------------------------------

    使用自动模式时, 设置配置项中的 ``mod`` 为 'auto' , 如下:

    .. code-block:: javascript

        var dataLazyload =DataLazyload({
            placeholder : "占位.png"
            mod:'auto'
        });

    页面上出现大量图片元素时,

    .. code-block:: html

        <img src="xx.png" />

    会把当前视窗外的 img 的 src 保存在自定义属性中, 并将 src 替换为 placeholder (不指定为空), 当滚动导致该图片出现在当前视窗时将 src 设置已经保存的真实值.


    .. note:

        *  在 Firefox 下非常完美。脚本运行时，还没有任何图片开始下载，能真正做到延迟加载。
        *  在 IE 下不尽完美。脚本运行时，有部分图片已经与服务器建立链接，这部分 abort 掉，再在滚动时延迟加载，反而增加了链接数。
        *  在 Safari 和 Chrome 下，因为 webkit 内核 bug，导致无法 abort 掉下载。该脚本完全无用。
        *  在 Opera 下，和 Firefox 一致，完美。
        *  2010-07-12: 发现在 Firefox 下，也有导致部分 Aborted 链接。



Demo - 手动模式
-------------------------------

    采用手动模式时, 需要自行在输出页面时, 可以不设置 img 的 src 属性, 但是必须设置 img 的 ``data-ks-lazyload`` 自定义属性为真实图片地址,  如:

    .. code-block:: html

        <img data-ks-lazyload="xx.jpg" />


    当滚动导致该图片出现在当前视窗时会将 src 设置为真实地址.

    .. note:

        * 在任何浏览器下都可以完美实现, 不增加额外http连接数.
        * 缺点是不渐进增强, 无 JS 时, 图片不能展示.


Demo - textarea 延迟加载
----------------------------------------------


    .. note::

        **这种情况下和模式的手动自动没关系!**


    将页面中需要延迟的 DOM 节点, 放在

    .. code-block:: html

            <textarea class='ks-datalazyload invisible'/>dom code</textarea/>

    里. 可以添加 hidden 等 class, 但建议用 invisible (visiblity:hidden), 并设定 height = '实际高度', 这样可以保证滚动时无缝连接.
    当滚动导致该 textarea 出现在当前视窗时会将该 textarea 内的 html 添加到新生成的 div 中, 并用新生成的 div 替换该 textarea .

    .. note::

        #. 延迟 callback 约定：dataLazyload.addCallback(el, fn) 表示当 el 即将出现时, 触发 fn.
        #. 所有操作都是最多触发一次, 比如来回拖动滚动条时, 只有 el 第一次出现时会触发 fn 回调.



全部示例
-----------------------------------------

    * `manual 模式 <http://docs.kissyui.com/kissy/src/datalazyload/test.html>`_
    * `auto 模式 <http://docs.kissyui.com/kissy/src/datalazyload/test-auto.html>`_