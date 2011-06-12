.. currentmodule:: Event

Event.on
=================================

.. function:: on ( selector , eventType , fn [ , scope ] )

    为符合匹配的 dom 节点的相应事件添加事件处理器
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string eventType: 包含一个或多个事件名称的字符串，多个事件名以空格分开
    :param function(eventObject) fn: 当事件触发时的回调函数
    :param object scope: 回调函数的 this 值。如果不指定默认为绑定事件的当前元素

.. function:: add ( selector , eventType , fn , scope )

    为 :func:`~Event.on` 的别名
    
.. note::

    不能在 ``object`` , ``embed`` , ``applet`` 元素上注册事件.        
    
简述
------------------------------------
    
``on`` 方法是给文档添加行为的主要方式。所有的事件类型，例如 ``focus`` , ``mouseover`` , ``resize`` 都是有效的事件类型. 
( ``window`` 的 ``beforeunload`` 和 ``error`` 事件使用了不标准的方式，该方法不支持，请直接在 ``window`` 对象上注册事件处理器).

当一个节点的某个事件出发时，绑定该事件的所有处理器都会被调用.如果有多个事件处理器，则他们的执行顺序和绑定的顺序保持一致，当所有的事件处理器执行完毕后，
事件才继续向上传播.

最简单的用法是:

.. code-block:: javascript

    Event.on('#foo','click',function(){
        alert('clicked : '+this.id);
    });
    
上面的代码作用是：为 id 为 foo 的元素绑定 click 事件.当用户在该元素内部点击时，则 alert 会弹出来.


多事件绑定
---------------------------------

多个事件用空格分开，可以同时绑定多个事件.

    
.. code-block:: javascript   

    Event.on('#foo','mouseenter mouseleave', function(e) {
      DOM.toggleClass("enter");
    }); 
    
上述代码的作用是：一开始 foo 节点没有 enter 样式类，当鼠标进入时给该节点添加 enter 样式类，当鼠标移出时把 enter 样式类去掉。这样就达到了 hover 的效果.


事件对象
----------------------------------------

当事件发生时，事件处理器回调函数会被传递给一个事件对象参数.具体可见 :class:`~Event.Object` .

返回 ``false`` 相当于调用了事件对象的 :meth:`~Event.EventObject.preventDefault` 以及 :meth:`~Event.EventObject.stopPropagation`

在事件处理器中使用事件对象举例：

.. code-block:: javascript 
    
     Event.on('#foo','mouseup mousedown', function(event) {
        console.log(event.type +" occured");
     });
     
这样就可以在绑定多事件时，明确知道当前哪个事件触发了.  .

.. note::

    KISSY 也对 ``mouseenter/mouseleave focusin/focusout`` 进行了兼容处理，所有浏览器都可以使用这两个事件了.


例子
---------------------------

处理段落的单击与双击，注意坐标是相对于例子的 iframe 窗口的.
这里方面起见采用 :mod:`Node` 来操作 Event。

.. literalinclude:: /_static/api/core/event/on_1.html
   :language: html   
   
   
Demo

.. raw:: html

    <iframe width="100%" height="135" src="../../../static/api/core/event/on_1.html"></iframe>                
   
   
阻止链接的默认事件以及冒泡

.. code-block:: html

    Event.on('a','click',function(){
        // 等价于 e.preventDefault(); e.stopPropagation();
        e.halt();
    });   