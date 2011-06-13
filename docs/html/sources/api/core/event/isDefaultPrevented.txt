.. currentmodule:: Event

event.isDefaultPrevented
===============================

返回 :class:`Event.Object`

.. method:: Object.isDefaultPrevented()    

    判断 :meth:`~Event.Object.preventDefault` 是否被调用了.
    
    
例子
------------------------------    

.. code-block:: javascript

    $("a").click(function(event){
      alert( event.isDefaultPrevented() ); // false
      event.preventDefault();
      alert( event.isDefaultPrevented() ); // true
    });           