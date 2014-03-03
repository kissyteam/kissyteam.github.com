.. module:: cookie

cookie
====================================

.. raw:: html

    <a class='source-button' href='https://github.com/kissyteam/kissy/tree/1.4.x/src/cookie' target='_blank'>view cookie source</a>

.. code-block:: javascript

    KISSY.use('cookie',function(S,Cookie){
        // use Cookie
    });

Module
-----------------------------------------------

  :mod:`cookie`


Methods
-----------------------------------------------

.. function:: get

    | Object **get** ( name )
    | 获取cookie值
    
    :param String name: cookie的名称

    :returns: {String} - 


.. function:: remove

    | String **remove** ( name, domain, path, secure )
    | 置空cookie值，并立刻过期
    
    :param String name,: cookie的名称
    :param String domain: 域
    :param String path: 路径
    :param Boolean secure: 安全标志
		
.. function:: set

    | String **set** ( name, val[, expires, domain, path, secure] )
    | 设置cookie值
    
    :param String name,: cookie的名称
    :param String val: cookie的值
    :param number|date expires: 失效时间. number 类型时单位为天，不设置表示生效时间为本次浏览器进程。
    :param String domain: 域
    :param String path: 路径
    :param Boolean secure: 安全标志




.. note::

    推荐阅读 NCZ 的这篇文章： `HTTP cookies explained <http://www.nczonline.net/blog/2009/05/05/http-cookies-explained/>`_