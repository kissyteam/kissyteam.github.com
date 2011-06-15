.. _DataLazyload:

DataLazyload
===============================

数据延迟加载组件.

.. hint:

    很多时候, 用户在第一屏就发生了跳转, 大量"未曾露面"的图片下载对用户来说是无意义的.
    DataLazyload 可以 "揣测" 用户的行为, 当用户想看某个区域时, 才开始下载这个区域的图片.

    除了延迟图片下载, DataLazyload 还可以延迟某个区域的所有 html 的渲染, 这对 Tabs 等 UI 组件很有裨益, 能提高整个页面的性能.


构造器接口
---------------------------------


.. py:class:: DataLazyload(containers, config)

    :param object containers: array,  图片所在容器(可以多个), 默认为 [doc]

    :param object config: 类型对象, 实例对象所需的配置, 详见下节列出的各项


.. code-block:: javascript

    S.DataLazyload( cfg );



配置项
---------------------------------

.. py:attribute:: mod

    (optional): {String} 懒处理模式, 默认是 'manul', 可取:

         * 'auto' : 自动化. html 输出时, 不对 img.src 做任何处理
         * 'manul' : 输出 html 时, 已经将需要延迟加载的图片的 src 属性替换为 IMG_SRC_DATA

.. attention::

        对于 textarea 数据, 只有手动模式
        
.. py:attribute:: diff

    (optional):  {Number} 当前视窗往下, diff px 外的 img/textarea 延迟加载, 适当设置此值, 可以让用户在拖动时感觉数据已经加载好, 默认为当前视窗高度(两屏以外的才延迟加载),

.. py:attribute:: placeholder

    (optional): {String} 图像的占位图, 默认无


.. py:attribute:: execScript

    (optional): {Boolean} 是否执行 textarea 里面的脚本, 默认为 true


实例属性
---------------------------------

.. py:attribute:: containers

    (读写)： {Array} 图片所在容器(可以多个), 默认为 [doc]
    
.. py:attribute:: config

    (读写)： {Object} 配置参数
    

.. py:attribute:: images

    (只读)： {Array<String>} 需要延迟下载的图片列表


.. py:attribute:: self.areaes

    (只读)： {Array<String>} 需要延迟处理的 textarea列表

.. py:attribute:: callbacks

    (只读): {Object} 和延迟项绑定的回调函数, 元素列表和函数列表一一对应

.. py:attribute:: threshold

    (只读): {Number} 需要开始延迟的 Y 坐标值


实例方法
---------------------------------

.. py:method:: addCallback(el, fn)

        添加回调函数. 当 el 即将出现在视图中时, 触发 fn



.. py:method:: loadCustomLazyData(containers, type)

        static, 加载自定义延迟数据



