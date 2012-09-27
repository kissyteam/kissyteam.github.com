.. currentmodule:: io

io.jsonp
=================================

Module
-----------------------------------------------

  * :mod:`io`


Method
-----------------------------------------------

.. method:: jsonp

    | void **jsonp** ( url , [ data , callback ] )
    | 发送 jsonp 请求，将返回 json 信息作为第一个参数调用 callback 回调.
    
    :param string url: 请求地址
    :param Object|string data: 请求附带的参数，参见 :attr:`~io.cfg.data` .
    :param function callback: 请求成功后的回调，参见 :attr:`~io.cfg.success` .
    :returns: 代表本次请求的 xhrObj
    :rtype: :class:`~io.XhrObj`
    
    
    | void **jsonp** ( url , [ callback ] )
    | data 可忽略，同上个函数描述.
    

    实际上该函数是 :meth:`~io.io` 的 shortcut

    .. code-block:: javascript

        io.jsonp = function(url, data, callback) {
            // data 参数可省略
            if (S.isFunction(data)) {
                callback = data;
                data = undefined;
            }

            return io({
                type:"get",
                url: url,
                data: data,
                success: callback,
                dataType: "jsonp"
            });
        };

Demo
------------------------------------

    **从 flickr 中动态获取图片信息**

    .. raw:: html

        <iframe width="100%" height="135" class="iframe-demo"  src="../../../../../source/raw/api/core/ajax/jsonp.html"></iframe>

    .. literalinclude:: /raw/api/core/ajax/jsonp.html
       :language: html


    .. note::

        上述例子中的 ``jsonp`` 参数含义, 请参见 :data:`cfg.jsonp`



            