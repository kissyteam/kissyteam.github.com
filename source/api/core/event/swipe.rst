.. currentmodule:: event

swipe
====================================

触屏上当快速划过某个元素时触发

定义
-----------------------

触屏上当快速划过某个元素时触发

包括格外下面的属性：

.. attribute:: swipe.distance

    {Number} 划过的距离，单位 px

.. attribute:: swipe.direction

    {String} 划动方面，枚举： ``left`` ``right`` ``top`` ``bottom``

.. attribute:: swipe.duration

    {Number} 滑动持续时间，单位秒

示例
------------------

.. raw:: html

    <iframe width="100%" height="300" class="iframe-demo"
     src="../../../../../source/raw/api/core/event/swipe.html"></iframe>

.. literalinclude:: /raw/api/core/event/swipe.html
       :language: html
