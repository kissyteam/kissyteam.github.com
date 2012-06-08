.. currentmodule:: io

io.upload
=================================



Module
-----------------------------------------------

  * :mod:`io`

Method
-----------------------------------------------

.. method:: upload

    | XHR **upload** ( url , form , [ data , callback , dataType ] )
    | 发送 jsonp 请求，将返回 json 信息作为第一个参数调用 callback 回调.
    
    :param string url: 请求地址
    :param HTMLElement|string form: 表单元素，格式参见 :ref:`KISSY selector <dom-selector>` .
    :param Object|string data: 请求附带的参数，参见 :data:`~io.cfg.data` .
    :param function callback: 请求成功后的回调，参见 :data:`~io.cfg.success` .
    :param string dataType: 传到回调函数作为参数的数据类型，参见 :data:`~io.cfg.dataType`
    :returns: 代表本次请求的 xhrObj
    :rtype: :class:`~io.XhrObj`
    
    
    | XHR **upload** ( url , form,[ callback , dataType ] )
    | data 可忽略，同上个函数描述.
    

    实际上该函数是 :meth:`~io.io` 的 shortcut

    .. code-block:: javascript

        io.upload = function(url, form, data, callback, dataType) {
            if (S.isFunction(data)) {
                dataType = callback;
                callback = data;
                data = null;
            }
            return io({
                url:url,
                type:'post',
                dataType:dataType,
                form:form,
                data:data,
                success:callback
            });
        };

    
Demo
------------------------------------

    **向 doUpload.html 上传文件并读取 json 响应**

    .. raw:: html

        <iframe width="100%" height="135"  class="iframe-demo" src="../../../static/api/core/ajax/upload.html"></iframe>


    .. literalinclude:: /_static/api/core/ajax/upload.html
       :language: html

