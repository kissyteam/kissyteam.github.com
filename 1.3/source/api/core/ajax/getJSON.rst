.. currentmodule:: io

getJSON
=================================



Module
-----------------------------------------------

  * :mod:`io`


Method
-----------------------------------------------

.. method:: getJSON

    | XHR **getJSON** ( url , [ data , callback ] )
    | 发送 http get 请求，无视请求响应的 Content-type，将返回信息解析为 json 作为第一个参数调用 callback 回调.
    
    :param string url: 请求地址
    :param Object|string data: 请求附带的参数，参见 :data:`~io.cfg.data` .
    :param function callback: 请求成功后的回调，参见 :data:`~io.cfg.success` .
    :returns: 代表本次请求的 xhrObj
    :rtype: :class:`~io.XhrObj`
    
    
    | XHR **getJSON** ( url , [ callback ] )

    data 可忽略，同上个函数描述.    
    

    实际上该函数是 :class:`~io.IO` 的 shortcut

    .. code-block:: javascript

        IO.getJSON = function(url, data, callback) {
            // data 参数可省略
            if (S.isFunction(data)) {
                dataType = callback;
                callback = data;
                data = undefined;
            }

            return new IO({
                type:"get",
                url: url,
                data: data,
                success: callback,
                dataType: "json"
            });
        };
  
    
Demo
------------------------------------

    **从 test.js 中加载 json 数据并访问**

    .. raw:: html

        <iframe width="100%" height="135"  class="iframe-demo" src="/1.3/source/raw/api/core/ajax/getJSON.html"></iframe>

    .. literalinclude:: /raw/api/core/ajax/getJSON.html
       :language: html
