.. currentmodule:: event

mousewheel
====================================

对 mousewheel 事件做了浏览器兼容性处理


事件对象
--------------------------

.. function:: event.mousewheel()
    
    | **mousewheel( e )**
    | 滚轮事件
    
    :param Number e.deltaY: 纵向滚动幅度，一般是表示向上滚动的 1 或向下滚动的 -1
    :param Number e.deltaX: 横向滚动幅度，一般是表示向左滚动的 1 或向右滚动的 -1
    
    
示例
------------------

.. raw:: html

    <iframe width="100%" height="400" class="iframe-demo" src="../../../static/api/core/event/mousewheel.html"></iframe>
    
    
.. literalinclude:: /_static/api/core/event/mousewheel.html
       :language: html    