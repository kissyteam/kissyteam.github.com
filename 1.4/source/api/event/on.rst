.. currentmodule:: event

on
=================================

Module
-----------------------------------------------

  :mod:`event`

Methods
-----------------------------------------------

.. function:: on

    | void **on** ( selector , eventType , fn [ , scope ] )
    | 为符合匹配的 dom 节点的相应事件添加事件处理器

    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    :param string eventType: 包含一个或多个事件名称的字符串, 多个事件名以空格分开。
        事件可以通过加点来表示分组，例如 "click.one" , "click.two"

    :param function(eventObject) fn: 当事件触发时的回调函数
    :param object scope: 回调函数的 this 值. 如果不指定默认为绑定事件的当前元素


.. note::

    ``on`` 方法是给文档添加行为的主要方式. 所有的事件类型, 例如 ``focus`` , ``mouseover`` , ``resize`` 都是有效的事件类型.

    ``window`` 的 ``beforeunload`` 和 ``error`` 事件使用了不标准的方式, 该方法不支持, 请直接在 ``window`` 对象上注册事件处理器.

    当一个节点的某个事件出发时, 绑定该事件的所有处理器都会被调用.如果有多个事件处理器, 则他们的执行顺序和绑定的顺序保持一致, 当所有的事件处理器执行完毕后,
    事件才继续向上传播.

.. note::

    | 支持 Event.on(target,type,opts), opts 可以是对象描述，例如 opts.once/opts.filter
    | 支持 Event.on(target,opts), opts 为事件与对象描述对

    .. code-block:: javascript

        Event.on(document.body,{
            'click':{
                fn:function(){
                },
                filter: '' // delegate,
                once:true // 绑定一次
            },
            'mouseenter':function(){}
        });


.. function:: add

    | void **add** ( selector , eventType , fn , scope )
    | 为 :func:`~event.on` 的别名

    .. note::

        不能在 ``object`` , ``embed`` , ``applet`` 元素上注册事件.


.. note::

    Event.on 仅用于原生 dom 节点，不可以用于自定义事件源，自定义事件源请 mix Event.Target 后在本对象 fire.


Demo
-------------------------------------------------

    **基本用法**

    .. code-block:: javascript

        Event.on('#foo','click',function(){
            alert('clicked : '+this.id);
        });

    上面的代码作用是：为 id 为 foo 的元素绑定 click 事件.当用户在该元素内部点击时, 则 alert 会弹出来.


    **事件分组**

        .. code-block:: javascript

            Event.on('#foo','click.one',function(){
                alert('clicked : '+this.id);
            });

            Event.on('#foo','click.two',function(){
                alert('clicked 2 : '+this.id);
            });

            Event.remove('#foo','.two');

        上面的代码作用是：为 id 为 foo 的元素绑定 click 事件.当用户在该元素内部点击时, 则 alert 会弹出来.
        后面同样绑定的 click 事件被分到另一个组，而这个组的事件在接下来被宣布清除.


    **多个事件用空格分开, 可以同时绑定多个事件**

    .. code-block:: javascript

        Event.on('#foo','mouseenter mouseleave', function(e) {
          DOM.toggleClass(this,"enter");
        });

    上述代码的作用是：一开始 foo 节点没有 enter 样式类, 当鼠标进入时给该节点添加 enter 样式类, 当鼠标移出时把 enter 样式类去掉. 这样就达到了 hover 的效果.

    当事件发生时, 事件处理器回调函数会被传递给一个事件对象参数.具体可见 :class:`~event.Object` .

    返回 ``false`` 相当于调用了事件对象的 :meth:`~event.EventObject.preventDefault` 以及 :meth:`~event.EventObject.stopPropagation`

    **在事件处理器中使用事件对象**

    .. code-block:: javascript

         Event.on('#foo','mouseup mousedown', function(event) {
            console.log(event.type +" occured");
         });

    这样就可以在绑定多事件时, 明确知道当前哪个事件触发了.

    .. note::

        KISSY 也对 ``mouseenter/mouseleave focusin/focusout`` 进行了兼容处理, 所有浏览器都可以使用这两个事件了.


    **处理段落的单击与双击**
    注意坐标是相对于例子的 iframe 窗口的, 这里方便起见采用 :mod:`node` 来操作 Event.

    .. raw:: html

        <iframe width="100%" height="135" class="iframe-demo" src="/1.4/source/raw/api/event/on_1.html"></iframe>


    .. literalinclude:: /raw/api/event/on_1.html
       :language: html

    **阻止链接的默认事件以及冒泡**

    .. code-block:: html

        Event.on('a','click',function(){
            // 等价于 e.preventDefault(); e.stopPropagation();
            e.halt();
        });