.. currentmodule:: event

.. _event-focusin:

focusin
====================================

原生只有 ie 支持 ``focusin`` 事件，而 kissy 对这一事件进行了 `兼容性处理 <http://yiminghe.iteye.com/blog/813255>`_ .


定义
-----------------------

但一个元素获得焦点或者其子孙元素获得焦点时， ``focusin`` 会在该元素上触发（没被子孙元素阻止）。这就是和 ``focus`` 事件的区别之处 :
你可以在父元素上监控子元素的 ``focus`` 事件，即 ``focusin`` 事件支持冒泡.

这个事件常常和 :ref:`focusout <event-focusout>` 一起使用.


示例
------------------

监听 form 中输入域的聚焦情况

.. raw:: html

    <iframe width="100%" height="135" class="iframe-demo" src="/1.4/source/raw/api/core/event/focusin.html"></iframe>
.. literalinclude:: /raw/api/core/event/focusin.html
       :language: html
