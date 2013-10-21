.. module:: uri

Query
===============================

|  uri 查询串解析模块.

.. code-block:: javascript

    KISSY.use('uri',function(S,Uri){
        // use Uri.Query
    });


Class
-----------------------------------------------

  * :class:`Query`

  
Methods
-----------------------------------------------

  * :meth:`~Query.prototype.clone`
  * :meth:`~Query.prototype.reset`
  * :meth:`~Query.prototype.count`
  * :meth:`~Query.prototype.has`
  * :meth:`~Query.prototype.get`
  * :meth:`~Query.prototype.keys`
  * :meth:`~Query.prototype.set`
  * :meth:`~Query.prototype.remove`
  * :meth:`~Query.prototype.add`
  * :meth:`~Query.prototype.toString`


Class Detail
-----------------------------------------------

.. class:: Query
    
    | **Query** (queryStr)
    
    :param String queryStr: 查询字符串

    
Methods Detail
-----------------------------------------------

.. method:: Query.prototype.clone

    | **clone** ()
    | 返回新的查询对象

    :returns: {Uri.Query}

.. method:: Query.prototype.reset

    | **reset** (queryStr)
    | 设置查询字符串

    :param String queryStr: 查询字符串


.. method:: Query.prototype.count

    | **count** ()
    | 返回参数个数

    :returns: {Number}

    举例：

    .. code-block:: javascript

        new Query('x=2&y=3').count() // => 2

.. method:: Query.prototype.has

    | **has** (key)
    | 返回是否包含指定查询参数键名或是否有查询参数

    :param {String} key:
    :returns: {Boolean}

    举例：

    .. code-block:: javascript

        new Query('x=2&y').has('y') // =>true
        new Query('x=2&y').has('z') // =>false
        new Query('').has() // => false
        new Query('z').has() // => true

.. method:: Query.prototype.get

    | **get** (key)
    | 返回指定的查询参数对应的值或查询参数键值对象

    :param {String} key:
    :returns: 指定 key 时返回对应值，不指定 key 时返回全部键值对

    举例：

    .. code-block:: javascript

        new Query('x=2&y=3').get('x') // => 2
        new Query('x=2&y=3').get() // => {x:'2',y:'3'}


.. method:: Query.prototype.set

    | **set** (key,value)
    | 设置对应键值

    :param {String|Query} key: 键名或query实例
    :param value: 键值
    :returns: 当前实例

    举例：

    .. code-block:: javascript

        new Query('x=2&y=3').set('y',4).toString() => x=2&y=4
        new Query('x=2&y=3').set(new Query('z=4')).toString() => x=2&y=3&z=4


.. method:: Query.prototype.add

    | **add** (key,value)
    | 增加对应键值

    :param {String|Query} key: 键名或query实例
    :param value: 键值
    :returns: 当前实例

    举例：

    .. code-block:: javascript

        new Query('x=2&y=3').add('y',4).toString(false) => x=2&y=4&y=3
        new Query('x=2&y=3').add(new Query('y=4')).toString(false) => x=2&y=3&y=4


.. method:: Query.prototype.remove

    | **set** (key)
    | 删除指定键名或全部查询参数

    :param {String} key: 指定键名，不指定则删除全部
    :returns: 当前实例

    举例：

    .. code-block:: javascript

        new Query('x=2&y=3').remove('y').toString() => x=2
        new Query('x=2&y=3').remove().toString() => ''


.. method:: Query.prototype.keys

    | **keys** ()
    | 返回参数名数组

    :returns: {String[]}

    举例：

    .. code-block:: javascript

        new Query('x=2&y=3').keys() // => ['x','y']


.. method:: Query.prototype.toString

    | **toString** (arr)
    | 序列化查询参数

    :param {Boolean} arr: 同 :func:`~seed.KISSY.param` 同名参数
    :returns: {String}

    举例：

    .. code-block:: javascript

        new Query('x=2&y=3&y=4').toString(false)// => 'x=2&y=3&y=4'
        new Query('x=2&y=3&y=4').toString(true)// => 'x=2&y%5b%5d=3&y%5b%5d=4'