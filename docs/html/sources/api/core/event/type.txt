.. currentmodule:: Event

event.type
===============================

返回 :class:`Event.Object`

.. attribute:: Object.type    

    描述当前事件的类型
    
     
    
例子
------------------------------    

.. code-block:: javascript
    
    var $=KISSY.Node.all;
    $("a").on('click',function(event) {
      alert(event.type); // "click"
    });     