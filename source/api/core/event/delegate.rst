.. currentmodule:: Event

delegate
=================================

.. versionadded:: 1.2

Module
-----------------------------------------------

  :mod:`Event`

Methods
-----------------------------------------------

.. function::  delegate

    | void **delegate** ( selector , eventType , filter , fn [ , scope ] )
    | 为符合匹配的 dom 节点的相应事件添加事件处理器，并在该节点的子孙节点中匹配 filter 的节点上触发事件时调用。
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string eventType: 包含一个或多个事件名称的字符串，多个事件名以空格分开
    :param string filter: 可参见 :func:`DOM.filter` 的 filter 参数
    :param function(eventObject) fn: 当事件触发时的回调函数
    :param object scope: 回调函数的 this 值。如果不指定默认为绑定事件的当前元素

    
    .. note::

        不能在 ``object`` , ``embed`` , ``applet`` 元素上注册事件.
        事件处理器回调函数中 this 指向 scope （没指定指向绑定事件的元素），传入的参数为 event ,
        event.target 指向事件触发源, event.currentTarget 指向当前事件处理器调用所在的匹配 filter 的元素.
        可以使用 :meth:`~Event.Object.stopPropagation` 来停止事件的向上冒泡，这样就不会在同样符合 filter 条件的祖先节点上调用事件处理器。
    

简述
-------------------------------------------------

    该方法是 ``on`` 方法的增强。当 on 方法被调用时，符合选择器的元素被绑定事件处理器，而后面添加的元素则没有，即他们需要另外一次绑定，例如

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

    当该元素被点击时，调用对应的事件处理器。但是如果新加入一个元素：

    .. code-block:: javascript

        KISSY.Node.all('body').append('<div class="clickme">Another target</div>');

    新元素匹配选择器 ``clickme`` ,但是他如果不再次 on ，则在他上面的点击不会有任何效果.

    delegate 方法提供了解决方法，如果这样调用：

    .. code-block:: javascript

        Event.on(document,'click','.clickme',function(){
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

        Event.on(document,'click','.clickme',d);

        Event.detach(document,'click','.clickme',d);



    简单示例:

    #. 委托实现点击通知

    .. literalinclude:: /_static/api/core/event/delegate.html
       :language: html


    .. raw:: html

        <iframe width="100%" height="135" src="../../../static/api/core/event/delegate.html"></iframe>


    #. 也可以阻止事件向上冒泡

    .. literalinclude:: /_static/api/core/event/delegate_2.html
       :language: html


    .. raw:: html

        <iframe width="100%" height="135" src="../../../static/api/core/event/delegate_2.html"></iframe>
