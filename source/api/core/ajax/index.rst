.. module:: ajax

ajax
===============================================

|  ajax
|  作者: `拔赤 <lijing00333@163.com>`_
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/ajax>`_  | `Demo <http://yiminghe.github.com/kissy/src/ajax/demo.html>`_

Class
-----------------------------------------------

  * KISSY
  
Methods
-----------------------------------------------

  * :meth:`getScript`
  * :meth:`ajax`
  * :meth:`get`
  * :meth:`post`
  * :meth:`jsonp`
  * :meth:`IO.on`


Methods Detail
-----------------------------------------------

.. method:: getScript

    | HTMLElement **getScript** (url, success[, charset])
    | 动态加载 js 脚本。

    :param string url: 请求地址
    :param function success: 请求成功的回调,回调参数为 data(内容),textStatus(请求状态),xhr(ajax对象)
    :param string charset: 可选，js 脚本编码格式
    
    :returns: 动态加载 js 脚本。
    
    .. code-block:: javascript
    
        var S = KISSY;
        S.getScript('http://path/to/filename.js', function() {
            alert('filename.js is loaded.');
        }, 'utf-8');

.. method:: ajax

    | XHR|HTMLElement **ajax** (config)

    :param json config: 其中的成员包括type,url,data,success,complete,error,async,jsonp,jsonpCallback,dataType
    :param string config.type: 请求类型，可以取值为 GET,POST 等,默认为 GET
    :param string config.url: 请求地址
    :param string|json config.data: 发起请求需要附加的数据,默认为 null
    :param function config.success: 请求成功的回调,回调参数为 data(内容),textStatus(请求状态),xhr(ajax对象)
    :param function config.complete: 请求完成的回调，在 success 调用之后触发,参数同 success
    :param function config.error: 请求错误时的回调
    :param boolean config.async: 是否为异步，默认为 true
    :param string config.jsonp: 指定 callback 的别名,请求url会生成 "url?{$jsonp}=jsonp123456"
    :param string config.jsonpCallback: 指定 callback 的参数,请求 url 会生成 "url?callback={$jsonpCallback}"
    :param string config.dataType: 请求数据类型,将决定返回值 data 的类型,若不指定，返回值data的类型由响应头决定，可取值为 json | jsonp | script | xml | html | text

    :returns: 根据请求类型不同，返回值不同
    
    直接使用
    
    .. code-block:: javascript
        
        var S = KISSY;
        //S.io 可以写为 S.ajax
        S.io({
            type: 'POST',
            url: 'interface.php',
            data: null,
            success: function(data, textStatus, xhr) {
                //callback
            },
            dataType:'xml' 
        });

.. method:: get

    | XHR|HTMLElement **get** (url[, data], callback[, dataType])
    | 

    :param string url: 接口地址
    :param string|json data: 可选，附加数据，数据将转换成键值对附着在请求的 url 参数串中
    :param function callback: 回调函数，参数为 data,返回数据,textStatus,文本状态,xhr,ajax 对象
    :param string dataType: 可选，可取值为 json,jsonp,script,xml,html,text，其中如果值为json,回调参数data为对象，如果值为xml，回调参数为xml对象,其他情况的回调参数皆为字符串

    :returns: 根据请求类型不同，返回值不同
    
    直接使用

    .. code-block:: javascript
    
        var S = KISSY;
        //在不指定 dataType 的情况下,data 的类型和 ajax 响应头类型保持一致
        //若为 text/json，data 为 json，若为 text/xml，data 为 xml object，其他情况为 text
        S.io.get('interface.php', function(data,textStatus,xhr) {
            S.log(data);
        });
    
    指定dataType

    .. code-block:: javascript
    
        var S = KISSY, IO = S.IO;
        //如果 ajax 响应头类型和用户设置不一定的时候，以用户设置为准
        IO.get('interface.php', function(data,textStatus,xhr) {
            S.log(typeof data);//'object'
        },'json');
    
    附加参数

    .. code-block:: javascript
    
        var S = KISSY, IO = S.IO;
        //传入 json
        IO.get('interface.php',{k:'v'}, function(data) {
            S.log(data);
        });
        //传入 string
        IO.get('interface.php','k=v', function(data) {
            S.log(data);
        });
    
    变身为jsonp

    .. code-block:: javascript

        var S = KISSY, IO = S.IO;
        IO.get('interface.php', function(data) {
            S.log(data);
        }, 'jsonp');

.. method:: post

    | XHR **post** (url[, data], callback[, dataType])

    :param string url: 接口地址
    :param string|json data: 附加数据，数据将转换成键值对附着在请求的 url 参数串中
    :param function callback: 回调函数，参数为 data,返回数据,textStatus,文本状态,xhr,ajax 对象
    :param string dataType: 可取值为 json,jsonp,script,xml,html,text，其中如果值为json,回调参数data为对象，如果值为xml，回调参数为xml对象,其他情况的回调参数皆为字符串

    :returns: XHR
    
    直接使用(无参数)
    
    .. code-block:: javascript

        var S = KISSY, IO = S.IO;
        //直接使用
        IO.post('interface',function(data){
            S.log(data);
        });

    带参数提交 post 请求

    .. code-block:: javascript
    
        var S = KISSY, IO = S.IO;
        //带 json 参数
        IO.post('interface',{
            k:'v'    
        },function(data){
            S.log(data);
        });
        //带 string 参数
        IO.post('interface','k=v',function(data){
            S.log(data);
        });

.. method:: jsonp

    | HTMLElement **jsonp** (url[, data], callback[, callbackName])
    | 将悬浮层放在当前视窗中央。

    :param string url: 接口地址
    :param string|json data: 可选，附加数据，数据将转换成键值对附着在请求的 url 参数串中
    :param function callback: 回调函数
    
    :returns: HTMLElement

    常规用法

    .. code-block:: javascript

        var S = KISSY;
        //直接使用
        S.jsonp('interface.php',function(data){
            S.log(typeof data);
        });

    自定义callback的参数

    .. code-block:: javascript

        var S = KISSY;
        //使用 getScript 模拟
        window['customCallback'] = function(data){
            //callback
        };
        S.getScript('interface.php?callback=customCallback');

    指定 callbackName

    .. code-block:: javascript

        var S = KISSY;
        //将会发起类似 interface.php?customCallback=jsonp123455 的请求
        S.ajax({
            url:'interface.php',
            success: function(data, textStatus, xhr) {
                //callback
            },
            dataType:'jsonp',
            jsonp:'customCallback'
        });

    带参数提交 jsonp

    .. code-block:: javascript

        var S = KISSY;
        //参数可以为 json，也可以为字符串
        S.jsonp('interface.php?sleep=0',{
            myparam:'taobao'
        },function(data){
            //callback
        });

.. method:: IO.on

    | **IO.on** (type, callback)
    | 全局事件绑定

    :param string type: 类型，可取值为 start,complete,stop,send
    :param function callback: 回调函数

    常规用法

    .. code-block:: javascript

        var S = KISSY,IO = S.IO;
        // 全局事件
        IO.on('start', function() {
            //ajax 请求开始事件
        });
        IO.on('complete', function() {
            //ajax 请求结束事件
        });