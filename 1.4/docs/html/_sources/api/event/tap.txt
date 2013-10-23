.. currentmodule:: event

tap
====================================

触屏上的单击事件

.. note::

    允许 preventDefault 防止链接点击跳转

定义
-----------------------

当点击某个 dom 节点后触发， 和 singleTap 的不同支持载入：
触发 doubleTap 就不会触发 singleTap， 而触发 doubleTap 前会触发 tap

示例
------------------

.. raw:: html

    <iframe width="100%" height="300" class="iframe-demo"
     src="/1.4/source/raw/api/event/tap.html"></iframe>

.. literalinclude:: /raw/api/event/tap.html
       :language: html
