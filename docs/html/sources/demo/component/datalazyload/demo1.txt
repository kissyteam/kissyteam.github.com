.. currentmodule:: datalazyload

DataLazyload 基本使用
=====================================================

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/datalazyload/>`_


Class
-----------------------------------------------

  * :class:`DataLazyload`

DataLazyload 基本使用
-------------------------------

    .. code-block:: javascript

        KISSY.use('datalazyload', function(S, DataLazyload) {
            S.ready(function(S) {
                DataLazyload( { mod: 'auto' } );
            });
        });

    这样, 页面加载时就会自动延迟所有图片的下载, 以及延迟特定 textarea 里的 html 渲染.
