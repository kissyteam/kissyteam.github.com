.. currentmodule:: Event

event.stopPropagation
===============================

返回 :class:`Event.Object`

.. method:: Object.stopPropagation()    

    停止事件沿 dom 树向上冒泡，组织祖先节点的所有事件处理器执行.我们可以使用 :attr:`~Event.Object.isPropagationStopped` 来判断当前方法是否执行过.
    该方法在 :func:`~Event.fire` 中也起作用。
    
.. note::

    调用该方法不会组织该节点其他事件处理器的运行，如果要需要调用 :meth:`~Event.Object.stopImmediatePropagation`    
    
    
例子
------------------------------    

阻止 click 事件的冒泡

.. code-block:: javascript

    var $=KISSY.Node.all;
    $("p").on('click',function(event){
      event.stopPropagation();
      // do something
    });  