.. currentmodule:: io

io
=================================

Module
-----------------------------------------------

  * :mod:`io`

Configs
-----------------------------------------------

  * :data:`cfg.url`
  * :data:`cfg.accepts`
  * :data:`cfg.dataType`
  * :data:`cfg.processData`
  * :data:`cfg.async`
  * :data:`cfg.cache`
  * :data:`cfg.contentType`
  * :data:`cfg.context`
  * :data:`cfg.crossDomain`
  * :data:`cfg.data`
  * :data:`cfg.serializeArray`
  * :data:`cfg.error`
  * :data:`cfg.success`
  * :data:`cfg.complete`
  * :data:`cfg.headers`
  * :data:`cfg.jsonp`
  * :data:`cfg.jsonpCallback`
  * :data:`cfg.mimeType`
  * :data:`cfg.password`
  * :data:`cfg.username`
  * :data:`cfg.scriptCharset`
  * :data:`cfg.timeout`
  * :data:`cfg.type`
  * :data:`cfg.xdr`
  * :data:`cfg.xhrFields`
  * :data:`cfg.form`
  * :data:`cfg.beforeSend`

Events
-----------------------------------------------

  * :func:`~io.Events.start`
  * :func:`~io.Events.send`
  * :func:`~io.Events.success`
  * :func:`~io.Events.error`


Methods Detail
-----------------------------------------------

.. method:: io

    | XHR **io** ( cfg )
    | 发送 io 请求
    
    :param Object cfg: 用来配置请求的键值对对象.所有的配置项都是可选的,可以通过 :func:`io.setupConfig` 来设置默认配置. 见下节
    

       返回 :class:`~io.XhrObj` 对象.

.. _io-config:

Config Detail
-----------------------------------------------

.. data:: cfg.url

    {String} - 类型 String. 本次请求发送的地址.

.. data:: cfg.accepts



    {Object} - 该配置和 :data:`~io.cfg.dataType` 一起确定当前发送给服务器的 Accept 头. 默认包括

        .. code-block:: javascript

            {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript"
            }

.. data:: cfg.dataType

    {String} - 期望能够从服务器返回的数据类型.


        如果没有指定，kissy 将尽量从返回的 ``mimeType`` | ``Content-type`` 相应头中推导出来 ('text/xml' 将推导出 xml , 'text/json' 将推导出 json).

    默认支持的类型（该类型的响应信息会作为第一个参数传到 ``success`` ``complete`` 回调中）有:

        * "xml" : 返回响应信息代表的 xml 文档.
        * "text" : 返回响应信息串
        * "html" : 同 "text"
        * "script" : 将响应信息作为脚本执行。
        * "json" : 返回响应信息代表的 json 对象.
        * "jsonp" : 返回 `jsonp <http://bob.pythonmac.org/archives/2005/12/05/remote-json-jsonp/>`_ 的响应信息代表的 json 对象.


.. data:: cfg.processData



    {Boolean} -  默认 true . 当 :data:`~io.cfg.data` 为对象时是否用 :func:`~seed.KISSY.param` 序列化.
    例如当需要传送一个 xml 或 `formdata <http://www.w3.org/TR/XMLHttpRequest/#interface-formdata>`_ 到服务器时就不需要 param data，
    并且最好同时设置 contentType 为合适的值.

.. data:: cfg.async

    {Boolean} - 默认 true.本次 xhr 请求是否异步发送，如果你需要同步发送，设置该配置为 false,注意同步请求在完成前会锁死浏览器.

.. data:: cfg.cache

    {Boolean} -  默认 true.如果设为 false, 则会自动给请求 url 加上时间戳.

.. data:: cfg.contentType

    {String} - 设置请求头 Content-type, 默认 "application/x-www-form-urlencoded". 设置 false 则不设置 Content-type 头 
    (例如传输 `formdata <http://www.w3.org/TR/XMLHttpRequest/#interface-formdata>`_ 时需要设置 false).

    .. note::
        "application/x-www-form-urlencoded" 时的数据总是以 utf-8 的编码传往服务器端.

.. data:: cfg.context

    {Object} - 设置回调函数中的 this 值,默认为当前配置项.例如可以把一个 dom 节点作为 complete 回调函数的上下文:

    .. code-block:: javascript

        io({
            url:'test.html',
            context:document.body,
            complete:function(){
                this.className="complete";
            }
        });

.. data:: cfg.crossDomain

    {Boolean} - 默认同域请求为 true,不同域间为 false。设置该值为 true，则强制 script 以及 jsonp 请求通过 ``script`` 节点发送，用于服务器重定向到其他域脚本的场景.

.. data:: cfg.data

    {String|Object} - 如果为 Object 类型则会通过 :func:`~Lang.KISSY.param` 格式化为字符串.

.. data:: cfg.serializeArray

    {Boolean} - 默认 true。表示序列化 :data:`~io.cfg.data` 时是否给数组值对应的键名加 ``[]`` ，例如

        * ``true`` 时  ``{x:[1,2]} //=> x[]=1&x[]=2``
        * ``false`` 时 ``{x:[1,2]} //=> x=1&x=2``

.. data:: cfg.error

    {Function} -  **error** (null, textStatus, xhrObj) 请求失败时的回调函数.这个函数接受 2 个参数：

        * textStatus 表示错误信息，包括 "timeout" , "error" , "abort" 等
        * xhrObj 表示这次请求代表的 xhr 对象.

.. data:: cfg.success

    {Function} -  **success** ( data , textStatus , xhrObj) 请求成功时的回调函数.该函数传入三个参数.

        * data : 根据 dataType 格式化服务器响应信息的响应对象
        * textStatus : 描述成功的状态，一般是 "success"
        * xhrObj : 本次请求的 xhr 对象.

.. data:: cfg.complete

    {Function} -  **complete** ( data , textStatus , xhrObj) 请求完成时的回调函数.该函数传入三个参数.

        * data : 根据 dataType 格式化服务器响应信息的响应对象，失败触发时为 null
        * textStatus : 描述成功的状态，一般是 "success"
        * xhrObj : 本次请求的 xhr 对象.

    .. note::
        无论成功或失败都会触发改回调.

.. data:: cfg.headers

    {Object} -  设置这次请求 xhr 的请求头.

.. data:: cfg.jsonp

    {String} -  覆盖这次 jsonp 请求的 callback 函数名. 这个值可以取代请求 url 中 ``callback=?`` 的 callback.例如   {jsonp:'onJsonLoad'} 会导致 'onJsonLoad=?' 发送给服务器端.

.. data:: cfg.jsonpCallback

    {String|Function} - 覆盖这次 jsonp 请求 callback 函数对应的值 (``callback={jsonpCallback}``). 这个值将取代 kissy 默认生成的 UUID 值.


        当传入函数时，该函数需要返回字符串，每次请求都会调用该函数得到用于替换的字符串.


.. data:: cfg.mimeType



    {String} -  跨平台设置 xhr 的 `mimeType <https://developer.mozilla.org/en/XmlHttpRequest#overrideMimeType%28%29>`_

.. data:: cfg.password



    {String} -  对于需要验证的 http 请求设置密码.

.. data:: cfg.username



    {String} -  对于需要验证的 http 请求设置用户名.

.. data:: cfg.scriptCharset



    {String} -  用于 dataType ``jsonp`` 和 ``script`` ，设定传输用的 script 节点的 ``charset`` 属性。只有当返回编码和当前页面编码不一致时使用.

.. data:: cfg.timeout

    {Number} -  对这次请求设个超时时间，单位秒. 当超时后会触发 ``error`` 以及 ``complete`` 回调 , 状态字符串为 "timeout".

.. data:: cfg.type

    {String} -  可取值 "get" 或者 "post".

.. data:: cfg.xhrFields

    {Object} -   设置到原生 xhr 对象的键值对.例如为了在标准浏览器进行跨域请求时携带cookie你可以设置 `withCredentials <https://developer.mozilla.org/en/http_access_control#Requests_with_credentials>`_ 为 true.

    .. code-block:: javascript

        io({
            url:"http://y.com/ping.php",
            xhrFields:{
                withCredentials: true
            }
        });
        
    这样 x.com 发送请求 y.com 会携带 y.com 的 cookie 信息.   

.. data:: cfg.xdr

    {Object} - 设置跨域的具体方式和细节，包括以下配置
    
    .. attribute:: cfg.xdr.src
    
        {String} 完全跨域请求的 flash 发送程序地址。当完全跨域时,KISSY io 在 
        
            * ie 中将采用 flash 发请求，默认采用 KISSY 自带 flash 发请求，也可将 kissy 自带的 flash 部署到其他地方，在 src 中指定。
            * 标准浏览器将采用原生机制.
    
    .. attribute:: cfg.xdr.subDomain
    
        {Object} 跨子域时的一些请求配置，包括
        
        .. attribute:: cfg.xdr.subDomain.proxy
        
            {String} 指定代理页面的地址。默认 "/sub_domain_proxy.html" . 
            例如 x.taobao.com 要发送请求给 y.taobao.com ，那么需要设置 x.taobao.com 的页面 document.domain='taobao.com' ，然后提供 y.taobao.com/sub_domain_proxy.html ，该页面内容为
            
            .. code-block:: html
            
                <script>document.domain='taobao.com'</script>
            
            然后 x.taobao.com 的页面就可以和 y.taobao.com 通信了。
    

.. data:: cfg.form

    {String} -  选择器字符串 :ref:`KISSY selector <dom-selector>`

    * 如果 form 的 enctype 为 `"multipart/form-data`` 则会采用 `iframe <http://www.webtoolkit.info/ajax-file-upload.html>`_ 的方式进行无刷新文件上传，
    * 否则将 form 内的输入域和值序列化后通过 xhr 发送到服务器.




.. data:: cfg.beforeSend

    {Function} - 发送请求前的拦截函数，传入参数 （xhrObject, config）

    * xhrObject 为 :class:`io.XhrObj` 类型

    例如可以通过该函数实现上传进度监控

    .. code-block:: javascript

        var xhr = IO({
            url:'./upload.php',
            type:"post",
            processData:false,
            data:formData,
            dataType:'json',
            contentType:false,
            beforeSend:function (xhr) {
                // 上传监听 upload
                xhr.getNativeXhr().upload.addEventListener('progress', function (ev) {
                    S.log({ 'loaded':ev.loaded, 'total':ev.total });
                });
            },
            success:function (d) {
                S.log(d);
            }
        });


Events Detail
-----------------------------------------------

    所有 io 请求都会在 io 模块上触发事件，可通过 ``io.on`` 来捕获所有的 io 请求，例如

    .. code-block:: javascript

        var indicator=KISSY.one("#indicator"),num;

        //发送前显示 loading 状态
        io.on("send",function(){
            num++;
            indicator.show();
        });

        //发送后隐藏 loading 状态
        io.on("complete",function(){
            num--;
            if(!num)
                indicator.hide();
        });

.. function:: io.Events.start

    | **start** ()
    | 当配置初始化后，获取传输对象前触发。事件对象包括一下属性

    :param Object start.event.ajaxConfig:  当前的配置项

    :param Object start.event.xhr:


        当前的请求关联的 :class:`~io.XhrObj` 对象

.. function:: io.Events.send

    | **send** ()
    | 请求发送前触发。可用于 loading indicator 显示时机。事件对象同 ``start`` 事件.

.. function:: io.Events.success

    | **success** ()
    | 服务器返回成功后触发.事件对象同 ``start`` 事件.

.. function:: io.Events.error

    | **error** ()
    | 服务器返回失败后触发.事件对象同 ``start`` 事件.


Demo
-------------------------------------------      

    **载入并执行一段脚本**

    .. code-block:: javascript

        io({
           type: "GET",
           url: "test.js",
           dataType: "script"
         });


    **发送数据给服务器，服务器返回后通知用户**

    .. code-block:: javascript

        io({
           type: "POST",
           url: "some.php",
           data: {
            x:'y'
           },
           success: function(msg){
             alert( "Data Saved: " + msg );
           }
         });

    **取得最新的 html 并显示**

    .. code-block:: javascript

        io({
          url: "test.html",
          cache: false,
          success: function(html){
            KISSY.one("#results").html(html);
          }
        });

    **发送 xml 文档给服务器**

    .. code-block:: javascript

        var xmlDocument=S.parseXML("<a>h</a>");

        io({
           url: "page.php",
           processData: false,
           contentType:'text/xml',
           data: xmlDocument,
           type:'post'
         });

    **通过 xhr 发送 form 内容**

    自动序列化 ``form`` 为查询串通过 ``xhr`` 发送给服务器端

    .. code-block:: html

        <form>
            <input name='test' value='v' />
        </form>

        <script>
            io({
                url:'send.php',
                form:'#test',
                type:'post',
                dataType:'json',
                success:function(d,s,xhr){
                    alert('success');
                }
            });
        </script>