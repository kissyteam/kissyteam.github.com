.. currentmodule:: datalazyload

Demo - DataLazyload 手动模式
=====================================================

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/datalazyload/>`_


Class
-----------------------------------------------

  * :class:`DataLazyload`


Demo - DataLazyload 手动模式
-------------------------------

    采用手动模式时, 需要自行在输出页面时, 可以不设置 img 的 src 属性, 但是必须设置 img 的 ``data-ks-lazyload`` 自定义属性为真实图片地址,  如:

    .. code-block:: html

        <img data-ks-lazyload="xx.jpg" />


    当滚动导致该图片出现在当前视窗时会将 src 设置为真实地址.

    .. note:

        * 在任何浏览器下都可以完美实现, 不增加额外http连接数.
        * 缺点是不渐进增强, 无 JS 时, 图片不能展示.