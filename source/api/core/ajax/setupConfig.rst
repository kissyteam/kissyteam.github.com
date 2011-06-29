.. currentmodule:: io

io.setupConfig()
=================================

.. versionadded:: 1.2

.. function:: setupConfig ( cfg )

    为所有的 ajax 请求(包括未来)设定默认配置
    
    :param Object cfg: 用来配置默认请求配置的键值对对象。其中的每个配置都是可选的.


所有可配置的项参见 :func:`KISSY.io() <io.io>` .通过 ``setupConfig`` 设置后，除非单个请求设置了对应的配置值，否则后续所有的 ajax 请求都使用该设置.


例如，下面代码在连续访问 ``ping.php`` 前，设置了 ``url`` 的默认值.



.. code-block:: javascript

    io.setupConfig({
        url:'ping.php'
    });


那么接下来的请求如果没有指定 ``url`` 配置，就会使用 ``ping.php``       



.. code-block:: javascript

    io({
        // url 没设置，就为 ping.php
        data : {name:'dan'}
    });
        
例子
---------------------------------

设置默认的请求地址为 ``/xmlhttp/`` ，并使用 ``POST`` 方式。那么接下来的请求都会往 ``/xmlhttp/`` 发送请求.


.. code-block:: javascript

    io.setupConfig({
        url:'/xmlhttp/',
        type:'post'
    });    
    
    io({
        data:{x:'mydata'}
    });