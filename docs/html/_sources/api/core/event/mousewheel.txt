.. currentmodule:: event

mousewheel
====================================

对 mousewheel 事件做了浏览器兼容性处理


事件对象
--------------------------

.. function:: event.mousewheel()
    
    | **mousewheel( e )**
    | 滚轮事件
    
    :param Number e.deltaY: 纵向滚动幅度，一般是正数表示向上滚动，负数表示向下滚动
    :param Number e.deltaX: 横向滚动幅度，一般是正数表示向左滚动，负数表示向右滚动
    
    
示例
------------------

.. raw:: html

    <iframe width="100%" height="400" class="iframe-demo" src="/1.3/source/raw/api/core/event/mousewheel.html"></iframe>
    
    
.. literalinclude:: /raw/api/core/event/mousewheel.html
       :language: html    