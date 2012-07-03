.. currentmodule:: event

.. _event-delegate:


delegate
=================================



Module
-----------------------------------------------

  :mod:`event`

Methods
-----------------------------------------------

.. function::  delegate

    | void **delegate** ( selector , eventType , filter , fn [ , scope ] )
    | 为符合匹配的 dom 节点的相应事件添加事件处理器, 并在该节点的子孙节点中匹配 filter 的节点上触发事件时调用.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string eventType: 包含一个或多个事件名称的字符串, 多个事件名以空格分开
    :param string filter: 可参见 :func:`DOM.filter` 的 filter 参数
    :param function(eventObject) fn: 当事件触发时的回调函数
    :param object scope: 回调函数的 this 值. 如果不指定默认为绑定事件的当前元素

    该方法是 ``on`` 方法的增强. 当 on 方法被调用时, 符合选择器的元素被绑定事件处理器, 而后面添加的元素则没有, 即他们需要另外一次绑定, 例如

    .. code-block:: html

        <body>
          <div class="clickme">
            Click here
          </div>
        </body>

    绑定一个 click 事件的事件触发器：

    .. code-block:: javascript

        Event.on('.clickme','click', function() {
          // Bound handler called.
        });

    当该元素被点击时, 调用对应的事件处理器. 但是如果新加入一个元素：

    .. code-block:: javascript

        KISSY.Node.all('body').append('<div class="clickme">Another target</div>');

    新元素匹配选择器 ``clickme`` ,但是他如果不再次 on , 则在他上面的点击不会有任何效果.

    delegate 方法提供了解决方法, 如果这样调用：

    .. code-block:: javascript

        Event.delegate(document,'click','.clickme',function(){
           // Bound handler called.
        });

    这样的话如果今后又添加了一个元素

    .. code-block:: javascript

        KISSY.Node.all('body').append('<div class="clickme">Another target</div>');

    在新元素上点击仍然会调用之前的事件处理器.

    可以使用 undelegate 来移除之前的绑定:

    .. code-block:: javascript

        function d(){
        }

        Event.delegate(document,'click','.clickme',d);

        Event.undelegate(document,'click','.clickme',d);

    .. note::

        不能在 ``object`` , ``embed`` , ``applet`` 元素上注册事件.
        事件处理器回调函数中 this 指向 scope (没指定指向绑定事件的元素), 传入的参数为 event ,
        event.target 指向事件触发源, event.currentTarget 指向当前事件处理器调用所在的匹配 filter 的元素.
        可以使用 :meth:`~event.Object.stopPropagation` 来停止事件的向上冒泡, 这样就不会在同样符合 filter 条件的祖先节点上调用事件处理器.
        
    .. note::
    
        因为 ``delegate`` 是在事件冒泡到代理元素后才开始处理的，那么通过 ``on`` 注册到代理元素的子节点的事件处理器已经被触发，
        而无法被 ``delegate`` 绑定的事件处理器阻止 ( ``stopPropagation`` )，但 ``delegate`` 事件处理器可以阻止绑定到同一元素但是匹配元素在当前事件处理器之上的 ``delegate`` 事件处理器.   
        
        
    .. note::
    
        同样可以对 ``mouseenter`` , ``mouseleave`` 进行委托.        
    

Demo
-------------------------------------------------

    **委托实现点击通知**


    .. raw:: html

        <iframe width="100%" height="135" class="iframe-demo" src="../../../_static/api/core/event/delegate.html"></iframe>

    .. literalinclude:: /_static/api/core/event/delegate.html
       :language: html


    **也可以阻止事件向上冒泡**


    .. raw:: html

        <iframe width="100%" height="135" class="iframe-demo" src="../../../_static/api/core/event/delegate_2.html"></iframe>

    .. literalinclude:: /_static/api/core/event/delegate_2.html
       :language: html


    **委托 mouseenter/mouseleave**

    .. raw:: html

        <iframe width="100%" height="370" class="iframe-demo" src="../../../_static/api/core/event/delegate_mouse.html"></iframe>

    .. literalinclude:: /_static/api/core/event/delegate_mouse.html
       :language: html

