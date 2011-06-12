.. currentmodule:: Event

event.relatedTarget
===============================

返回 :class:`Event.Object`

.. attribute:: Object.relatedTarget    

    和当前事件对象关联的 dom 节点.
    
.. hint::

    对于 `mouseout/leave` 事件为将要进入的节点. 对于 `mouseover/enter` 为将要离开的节点.
     
    
例子
------------------------------    

当鼠标移出链接时，alert 将要进入的元素节点名称

.. code-block:: javascript
    
    var $=KISSY.Node.all;
    $("a").mouseout(function(event) {
      alert(event.relatedTarget.nodeName); // "DIV"
    });          