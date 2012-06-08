.. currentmodule:: datalazyload

DataLazyload 自动模式
=====================================================

Class
-----------------------------------------------

  * :class:`DataLazyload`

DataLazyload 自动模式
-------------------------------

    使用自动模式时, 设置配置项中的 ``mod`` 为 'auto' , 如下:

    .. code-block:: javascript

        var dataLazyload = DataLazyload({
            placeholder : "占位.png"
            mod:'auto'
        });

    页面上出现大量图片元素时,

    .. code-block:: html

        <img src="xx.png" />

    会把当前视窗外的 img 的 src 保存在自定义属性中, 并将 src 替换为 placeholder (不指定为空), 当滚动导致该图片出现在当前视窗时将 src 设置已经保存的真实值.


    .. note:

        *  在 Firefox 下非常完美. 脚本运行时, 还没有任何图片开始下载, 能真正做到延迟加载.
        *  在 IE 下不尽完美. 脚本运行时, 有部分图片已经与服务器建立链接, 这部分 abort 掉, 再在滚动时延迟加载, 反而增加了链接数.
        *  在 Safari 和 Chrome 下, 因为 webkit 内核 bug, 导致无法 abort 掉下载. 该脚本完全无用.
        *  在 Opera 下, 和 Firefox 一致, 完美.
        *  2010-07-12: 发现在 Firefox 下, 也有导致部分 Aborted 链接.
