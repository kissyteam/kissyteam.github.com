.. currentmodule:: io

io.get
=================================

Module
-----------------------------------------------

  * :mod:`io`


Methods Detail
-----------------------------------------------

.. method:: get

    | XHR **get** ( url , [ data , callback , dataType ] )
    | 发送 http get 请求
    
    :param string url: 请求地址
    :param Object|string data: 请求附带的参数，参见 :data:`~io.cfg.data` .
    :param function callback: 请求成功后的回调，参见 :data:`~io.cfg.success` .
    :param string dataType: 传到回调函数作为参数的数据类型，参见 :data:`~io.cfg.dataType`
    :returns: 代表本次请求的 xhrObj
    :rtype: :class:`~io.XhrObj`

    
    | XHR|HTMLElement **get** get( url , [ callback , dataType ] )
    | data 可忽略，同上个函数描述.
    

    实际上该函数是 :func:`~io.io` 的 shortcut

    .. code-block:: javascript

        io.get = function(url, data, callback, dataType) {
            // data 参数可省略
            if (S.isFunction(data)) {
                dataType = callback;
                callback = data;
                data = undefined;
            }

            return io({
                type:"get",
                url: url,
                data: data,
                success: callback,
                dataType: dataType
            });
        };
  
    
Demo
------------------------------------

    **请求页面 test.php , 但是忽略返回结果**

    .. code-block:: javascript

        KISSY.io.get("test.php");


    **请求页面 test.php , 并附带一些参数传递给后端**

    .. code-block:: javascript

        KISSY.io.get("test.php",{
            name:"john".
            time:"2pm"
        });

    **alert 请求成功后返回的结果，数据类型由响应的 content-type 决定**

    .. code-block:: javascript

        KISSY.io.get("test.php",function(d){
            alert(d);
        });

    **alert 请求成功后返回的 json 数据，和响应的 content-type 无关**

    .. code-block:: javascript

        KISSY.io.get("test.php",function(d){
            alert(d);
        },"json");
