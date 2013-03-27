.. module:: io

ajax
===============================================
.. raw:: html

    <a class='source-button' href='https://github.com/kissyteam/kissy/tree/1.3.0/src/ajax' target='_blank'>view ajax source</a>

.. code-block:: javascript

    KISSY.use('ajax',function(S,IO){
        // use IO
    });



Module
-----------------------------------------------

  * :mod:`io`


Methods
-----------------------------------------------

    .. toctree::
       :titlesonly:


       setupConfig
       get
       post
       getJSON
       jsonp
       upload
       serialize

Class
-----------------------------------------------

    .. toctree::
       :titlesonly:

       io


Events
-------------------------------------------

所有 io 请求都会在 io 模块上触发事件，可通过 ``IO.on`` 来捕获所有的 io 请求，例如

    .. code-block:: javascript

        var indicator=KISSY.one("#indicator"),
        num;

        //发送前显示 loading 状态
        IO.on("send",function(){
            num++;
            indicator.show();
        });

        //发送后隐藏 loading 状态
        IO.on("complete",function(){
            num--;
            if(!num)
                indicator.hide();
        });

.. function:: io.Events.start

    | **start** ()
    | 当配置初始化后，获取传输对象前触发。事件对象包括一下属性

    :param Object start.event.ajaxConfig:  当前的配置项

    :param Object start.event.io: 当前的请求关联的 :class:`~io.IO` 对象


.. function:: io.Events.send

    | **send** ()
    | 请求发送前触发。可用于 loading indicator 显示时机。事件对象同 ``start`` 事件.


.. function:: io.Events.success

    | **success** ()
    | 服务器返回成功后触发.事件对象同 ``start`` 事件.


.. function:: io.Events.error

    | **error** ()
    | 服务器返回失败后触发.事件对象同 ``start`` 事件.


.. function:: io.Events.complete

    | **complete** ()
    | 服务器返回（无论成功或失败）后触发.事件对象同 ``start`` 事件.