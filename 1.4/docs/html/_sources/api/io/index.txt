.. module:: io

io
===============================================
.. raw:: html

    <a class='source-button' href='https://github.com/kissyteam/kissy/tree/1.4.x/src/o' target='_blank'>view io source</a>

.. code-block:: javascript

    KISSY.use('io',function(S,IO){
        // use IO
    });


.. note::
    io 组件在 1.3.x 及以前的版本被命名为ajax，1.4.x 及后续版本都更名为io

.. note::

    iframe-upload 模式与 subDomain 模式需配置服务器 CORS 头，例如

    .. code-block:: php

      res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.set('Access-Control-Allow-Credentials', 'true');
      res.set('Access-Control-Allow-Origin', 'http://*.taobao.com');
      res.set('Access-Control-Allow-Headers', 'origin, x-requested-with, yiminghe, content-type, accept, *');

.. note::

    跨域时，withCredentials 默认为 true

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


