.. module:: datalazyload


datalazyload
===============================================

| 数据延迟加载组件. 很多时候, 用户在第一屏就发生了跳转, 大量”未曾露面”的图片下载对用户来说是无意义的. DataLazyload 可以 “揣测” 用户的行为, 当用户想看某个区域时, 才开始下载这个区域的图片. 除了延迟图片下载, DataLazyload 还可以延迟某个区域的所有 html 的渲染, 这对 Tabs 等 UI 组件很有裨益, 能提高整个页面的性能.


.. code-block:: javascript

    KISSY.use('calendar',function(S,Calendar){
        // use Calendar
    });

.. hint::

    已经迁移至gallery  `gallery/datalazyload/ <http://gallery.kissyui.com/datalazyload/1.0/guide/>`_

