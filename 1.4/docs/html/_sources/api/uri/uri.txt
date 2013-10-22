.. module:: uri

Uri
===============================

|  uri 解析模块.

.. code-block:: javascript

    KISSY.use('uri',function(S,Uri){
        // use Uri
    });


Class
-----------------------------------------------

  * :class:`Uri`

  
Methods
-----------------------------------------------

  * :meth:`~Uri.prototype.clone`
  * :meth:`~Uri.prototype.resolve`
  * :meth:`~Uri.prototype.getScheme`
  * :meth:`~Uri.prototype.setScheme`
  * :meth:`~Uri.prototype.getHostname`
  * :meth:`~Uri.prototype.setHostname`
  * :meth:`~Uri.prototype.getUserInfo`
  * :meth:`~Uri.prototype.setUserInfo`
  * :meth:`~Uri.prototype.setPort`
  * :meth:`~Uri.prototype.getPort`
  * :meth:`~Uri.prototype.setPath`
  * :meth:`~Uri.prototype.getPath`
  * :meth:`~Uri.prototype.setQuery`
  * :meth:`~Uri.prototype.getQuery`
  * :meth:`~Uri.prototype.getFragment`
  * :meth:`~Uri.prototype.setFragment`
  * :meth:`~Uri.prototype.isSameOriginAs`
  * :meth:`~Uri.prototype.toString`



Class Detail
-----------------------------------------------

.. class:: Uri
    
    | **Uri** (uriStr)
    
    :param String uriStr: uri 字符串

    
Methods Detail
-----------------------------------------------

.. method:: Uri.prototype.clone

    | **clone** ()
    | 返回一个当前 uri 实例的克隆对象

    :returns: {Uri}


.. method:: Uri.prototype.resolve

    | **resolve** (other)
    | 以当前 uri 实例为基准路径解析 other uri 并返回新的实例

    :param: {Uri|String} - other 带解析 uri
    :returns: {Uri} - 新的 uri 实例

    举例：

    .. code-block:: javascript

        var one = new Uri('http://www.g.cn/x');
        one.resolve('foo').toString() // => http://www.g.cn/foo
        one.resolve(new Uri('?foo')).toString() // => http://www.g.cn/x?foo


.. method:: Uri.prototype.getScheme

    | **getScheme** ()
    | 得到 uri 实例的 scheme 部分

    :returns: {String}

    举例：

    .. code-block:: javascript

        new Uri('http://www.g.cn/x').getScheme() // => http

.. method:: Uri.prototype.setScheme

    | **setScheme** (scheme)
    | 设置 uri 实例的 scheme 部分

    :returns: 当前 uri 实例

    举例：

    .. code-block:: javascript

        new Uri('http://www.g.cn/x').setScheme('ftp').getScheme() // => ftp

.. method:: Uri.prototype.getHostname

    | **getHostname** ()
    | 得到当前 uri 实例的 hostname

    :returns: {String}

    举例：

    .. code-block:: javascript

        new Uri('http://www.g.cn:8888/x').getHostname() // => www.g.cn


.. method:: Uri.prototype.setHostname

    | **setHostname** (hostname)
    | 设置当前 uri 实例的 hostname

    :param {String} hostname:
    :returns: 当前实例

    举例：

    .. code-block:: javascript

        new Uri('http://www.g.cn:8888/x').setHostname('www.google.com').toString()
        // => http://www.google.com:8888/x

.. method:: Uri.prototype.getUserInfo

    | **getUserInfo** ()
    | 获取当前 uri 实例的 user info

    :returns: {String}

    举例：

    .. code-block:: javascript

        new Uri('http://my:pass@www.g.cn:8888/x').getUserInfo() // => 'my:pass'


.. method:: Uri.prototype.setUserInfo

    | **setUserInfo** (userInfo)
    | 设置当前 uri 实例的 user info

    :param {String} userInfo:
    :returns: 当前 uri 实例

    举例：

    .. code-block:: javascript

        new Uri('http://my:pass@www.g.cn:8888/x').setUserInfo('m:p').getUserInfo()
        // => 'm:p'


.. method:: Uri.prototype.getPort

    | **getPort** ()
    | 获取当前 uri 实例的端口值

    :returns: {String}

    举例：

    .. code-block:: javascript

        new Uri('http://my:pass@www.g.cn:8888/x').getPort()
        // => '8888'


.. method:: Uri.prototype.setPort

    | **setPort** (port)
    | 设置当前 uri 实例的端口值

    :param {String} port:
    :returns: 当前实例

    举例：

    .. code-block:: javascript

        new Uri('http://my:pass@www.g.cn:8888/x').setPort('88').toString()
        // => http://my:pass@www.g.cn:88/x


.. method:: Uri.prototype.getPath

    | **getPath** ()
    | 获取当前 uri 实例的路径

    :returns: {String}

    举例：

    .. code-block:: javascript

        new Uri('http://www.g.cn/x').getPath()
        // => /x


.. method:: Uri.prototype.setPath

    | **setPath** (path)
    | 获取当前 uri 实例的路径

    :param {String} path:
    :returns: {String}

    举例：

    .. code-block:: javascript

        new Uri('http://www.g.cn/x').setPath('/y').toString()
        // => http://www.g.cn/y


.. method:: Uri.prototype.getQuery

    | **getQuery** ()
    | 获取当前 uri 实例的查询参数实例

    :returns: {Uri.Query}

    举例：

    .. code-block:: javascript

        new Uri('http://www.g.cn/x?x=1').getQuery().get('x')
        // => 1


.. method:: Uri.prototype.setQuery

    | **setQuery** (query)
    | 设置当前 uri 实例的查询参数

    :param {String|Uri.Query} query:
    :returns: {Uri.Query}

    举例：

    .. code-block:: javascript

        new Uri('http://www.g.cn/x?x=1').setQuery('y=1').toString();
        // => http://www.g.cn/x?y=1

        new Uri('http://www.g.cn/x?x=1').setQuery(new Uri.Query('y=1')).toString();
        // => http://www.g.cn/x?y=1


.. method:: Uri.prototype.getFragment

    | **getFragment** ()
    | 获取当前 uri 实例的 hash

    :returns: {String}

    举例：

    .. code-block:: javascript

        new Uri('http://www.g.cn/x?x=1#y=2').getFragment() // => y=2


.. method:: Uri.prototype.setFragment

    | **setFragment** (hash)
    | 获取当前 uri 实例的 hash

    :param {String} hash:
    :returns: {String}

    举例：

    .. code-block:: javascript

        new Uri('http://www.g.cn/x?x=1#y=2').setFragment('x=3').toString()
        // => http://www.g.cn/x?x=1#x=3


.. method:: Uri.prototype.isSameOriginAs

    | **isSameOriginAs** (other)
    | 验证当前 uri 实例和 other 是否是同源关系(hostname port scheme 相同)

    :returns: {Boolean}

    举例：

    .. code-block:: javascript

        new Uri('http://www.g.cn/x?x=1#y=2')
        .isSameOriginAs(new Uri('http://www.g.cn:88/x?x=1#y=2')) // => false


.. method:: Uri.prototype.toString

    | **toString** (arr)
    | 序列化当前 uri 实例的 hash

    :param {Boolean} arr: 同 :func:`~seed.KISSY.param` 同名参数
    :returns: {String}

    举例：

    .. code-block:: javascript

        new Uri('http://www.g.cn/x?x=1&x=2').toString(false)
        // => 'http://www.g.cn/x?x=1&x=2'

        new Uri('http://www.g.cn/x?x=1&x=2').toString(true)
        // => 'http://www.g.cn/x?x%5b%5d=1&x%5b%5d=2'