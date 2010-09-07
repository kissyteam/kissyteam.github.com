.. _ajax:


Ajax
===============================================

KISSY中提供了最基本的Ajax异步请求功能 [1]_, 目前虽然只有一个 ``getScript`` 方法, 但在小应用中已经足够了. 其他的ajax模块中方法, 如 ``get`` , ``post`` 后续补上.

``getScript`` 异步请求之后, 会以js脚本执行请求回来的数据, 与 ``jQuery $.getScript`` 是一致的. 

这种请求方式, 我们一般称为 ``JSONP回调`` , 可以跨域请求, 关于跨域可参见 [2]_ .


使用Ajax
-------------------

在日常Web应用中, 经常用到异步请求, 比如, 异步加载一些评论信息, 异步加载图片列表等, 这样可以减少不必要的请求, 减轻服务器压力, 也加快主页面的打开速度.

下面介绍个如何通过 ``getScript`` 方法去请求flickr上提供的图片数据. 

先见示例:

.. raw:: html
   
   <div class="demo">
        <style>
            #J_photo-list img  {
                border: 1px solid grey;
                padding: 4px;
                margin: 8px;
            }
            #J_button {
                height: 40px;
                width: 120px;
                text-align: center;
                border: none;
                cursor: pointer;
            }
            .loading {
                background: transparent url(http://www.iconfinder.com/design/images/ajax-loader10.gif) no-repeat;
            }
        </style>
        <button id="J_button" type="button">Fetch Photo</button>
        
        <div id="J_photo-list">
            <div class="loading"></div>
        </div>
        
        <script>
            KISSY.ready(function(S){
                var btn = S.one('#J_button'),
                    photoList = S.one('#J_photo-list');
                
                btn.on('click', function(){
                    btn.attr('disabled', true);
                    btn.html('');
                    btn.addClass('loading');
                    var data = {
                        'method': 'flickr.favorites.getPublicList',
                        'api_key': '5d93c2e473e39e9307e86d4a01381266',
                        'user_id': '26211501@N07',
                        'per_page': 10,
                        'format': 'json',
                        'jsoncallback': 'getFavorites'
                        },
                        URL = 'http://api.flickr.com/services/rest/?';
                    S.getScript(URL+S.param(data), function(){
                        btn.removeAttr('disabled');
                    });
                });
                function getFavorites(jdata){
                    var s = '';
                    if (jdata.stat === 'ok'){
                        S.each(jdata.photos.photo, function(t,i){
                            s += '<img src="http://farm'+t.farm+'.static.flickr.com/'+t.server+'/'+t.id+'_'+t.secret+'_t.jpg" />';
                        });
                    } else {
                        s = 'fetch photo failed, pls try again!'
                    }
                    photoList.html(s);
                    setTimeout(function(){
                        btn.removeClass('loading');
                        btn.html('Fetch Photo');
                    }, 1000);
                }
                window.getFavorites = getFavorites;
            });
        </script>
   </div>

再来看代码:

.. code-block:: javascript
   :linenos:
   
   KISSY.ready(function(S){
       // get element
       var btn = S.one('#J_button'),
           photoList = S.one('#J_photo-list');
       
       
       // bind click event
       btn.on('click', function(){
           // change btn status
           btn.attr('disabled', true);
           btn.html('...');
           
           // constuct data
           var data = {
               'method': 'flickr.favorites.getPublicList',
               'api_key': '5d93c2e473e39e9307e86d4a01381266',
               'user_id': '26211501@N07',
               'per_page': 10,
               'format': 'json',
               'jsoncallback': 'getFavorites'
               },
               URL = 'http://api.flickr.com/services/rest/?';
           
           // do request
           S.getScript(URL+S.param(data), function(){
               btn.removeAttr('disabled');
               btn.html('Fetch Photo');
           });
       });
       
       // request callback
       function getFavorites(jdata){
           var s = '';
           if (jdata.stat === 'ok'){
               S.each(jdata.photos.photo, function(t,i){
                   s += '<img src="http://farm'+t.farm \
                     +'.static.flickr.com/' \
                     +t.server+'/'+t.id+'_' \
                     +t.secret+'_t.jpg" />';
               });
           } else {
               s = 'fetch photo failed, pls try again!'
           }
           photoList.html(s);
       }
       window.getFavorites = getFavorites;
   });
   

稍加解释下:
 #. 当点击按钮时, 组装URL参数后, 发送请求, ps, 这里各个参数可以在 flickr API文档中找到 [3]_ , 最后的jsoncallback指定回调函数的名字;
 #. 组装参数时, 使用到了 ``S.param`` 方法, 是将对象 data 转换为URL中的参数字符串, 且是经过 encodeURI 编码的;
 #. 在回调函数中, 获取传入的json数据, 稍加拼装就可以使用啦~
 #. 最后的 ``window.getFavorites = getFavorites;`` 是将方法 ``getFavorites`` 暴露给全局, 因为当请求后调用的就是全局范围内的 ``getFavorites`` 函数, 如果是对象中的方法, 同样可以将该对象暴露给全局后再调用其方法.
   


在简单介绍完 ``S.getScript`` 之后, 讲述 KISSY提供的动画支持 :ref:`KISSY.anim <anim>` ...

.. rubric:: 参考链接

.. [1] `Ajax 文档 <http://KISSYteam.github.com/KISSY/docs/ajax/index.html>`_ ;
.. [2] `JSON介绍 <http://en.wikipedia.org/wiki/JSON>`_ ;
.. [3] `Flickr API <http://www.flickr.com/services/api/>`_ ;


