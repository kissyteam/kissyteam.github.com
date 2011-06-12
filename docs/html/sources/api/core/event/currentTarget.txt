.. currentmodule:: Event

event.currentTarget
===============================

返回 :class:`Event.Object`

.. attribute:: Object.currentTarget    

    当前事件处理器的 dom 节点或对象，通常和 this 相同。
    
.. note::

    如果你在 :meth:`~Event.on` 中指定了 this ，则 currentTarget 和 this 不相同.
     
    
例子
------------------------------    

.. code-block:: javascript
    
    var $=KISSY.Node.all;
    $("p").on('click',function(event) {
      alert( event.currentTarget === this ); // true
    });        