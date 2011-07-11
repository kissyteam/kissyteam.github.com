.. module:: DataLazyload


DataLazyload
===============================

|  数据延迟加载组件.
|  很多时候, 用户在第一屏就发生了跳转, 大量"未曾露面"的图片下载对用户来说是无意义的.
|  DataLazyload 可以 "揣测" 用户的行为, 当用户想看某个区域时, 才开始下载这个区域的图片.
|  除了延迟图片下载, DataLazyload 还可以延迟某个区域的所有 html 的渲染, 这对 Tabs 等 UI 组件很有裨益, 能提高整个页面的性能. 
|  作者: `玉伯 <lifesinger@gmail.com>`_
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/datalazyload/impl.js>`_  | `Demo <../../../demo/component/datalazyload/index.html>`_

Class
-----------------------------------------------

  * :class:`DataLazyload`

  
Config Attributes
-----------------------------------------------
  
  * :data:`mod`
  * :data:`diff`
  * :data:`placeholder`
  * :data:`execScript`
  
 
Properties
-----------------------------------------------

  * :attr:`containers`
  * :attr:`config`
  * :attr:`images`
  * :attr:`areaes`
  * :attr:`callbacks`
  * :attr:`threshold`

  
Methods
-----------------------------------------------

  * :meth:`addCallback`
  * :meth:`loadCustomLazyData`



Class Detail
-----------------------------------------------

.. class:: DataLazyload
    
    | **DataLazyload** (containers[, config])
    
    :param String|HTMLElement|Array<HTMLElement> containers: 默认为 document.body ，图片所在容器(可以多个)
    :param Object config: 配置项, 详细见下方 **Config Attributes Detail** .
    
    
Config Attributes Detail
-----------------------------------------------


.. data:: mod

    {String} - 默认是 'manul',懒处理模式。
    
        * 'auto' : 自动化. html 输出时, 不对 img.src 做任何处理
        * 'manul' : 输出 html 时, 已经将需要延迟加载的图片的 src 属性替换为 IMG_SRC_DATA
        
        .. note::

            对于 textarea 数据, 只有手动模式

.. data:: diff

    {Number} - 当前视窗往下, diff px 外的 img/textarea 延迟加载, 适当设置此值, 可以让用户在拖动时感觉数据已经加载好, 默认为当前视窗高度(两屏以外的才延迟加载)。

.. data:: placeholder

    {String} - 默认为 null ，图像的占位图。

.. data:: execScript

    {Boolean} - 默认为 true ，是否执行 textarea 里面的脚本。


Properties Detail
-----------------------------------------------

.. attribute:: containers

    {Array} - 可读写，图片所在容器(可以多个), 默认为 document.body
    
.. attribute:: config

    {Object} - 可读写 ,配置参数
    

.. attribute:: images

    {Array<String>} - 可读写 ,需要延迟下载的图片列表


.. attribute:: areaes

    {Array<String>} - 可读写 ,需要延迟处理的 textarea列表

.. attribute:: callbacks

    {Object} - 可读写 ,和延迟项绑定的回调函数, 元素列表和函数列表一一对应

.. attribute:: threshold

    {Number} - 可读写 ,需要开始延迟的 Y 坐标值

    
Methods Detail
-----------------------------------------------

.. method:: addCallback

    | **addCallback** (el, fn)
    | 添加回调函数. 当 el 即将出现在视图中时, 触发 fn


.. method:: loadCustomLazyData

    | static **loadCustomLazyData** (containers, type)
    | 加载自定义延迟数据



