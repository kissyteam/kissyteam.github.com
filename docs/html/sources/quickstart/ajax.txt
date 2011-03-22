.. _ajax:


Ajax
===============================================

KISSY 中提供了 Ajax 异步请求功能, 下面仅介绍最常用的 ``getScript`` 方法, 其他 ajax 模块中的方法, 如 ``get``, ``post`` 等，请参考 API 文档 [1]_ .

``getScript`` 异步请求成功后, 可以执行请求回来的数据, 与 ``jQuery $.getScript`` 是一致的.

这种请求方式, 我们一般称为 ``JSONP``, 是最常用的跨域请求方式. 关于跨域可参见 [2]_ .


使用 Ajax
-------------------

在日常 Web 应用中, 经常用到异步请求, 比如, 异步加载一些评论信息, 异步加载图片列表等, 这样可以减少页面初始加载时的请求, 减轻服务器压力, 也加快主页面的初始打开速度.

下面介绍个如何通过 ``getScript`` 方法去请求 flickr 上提供的图片数据.

先见示例:

.. raw:: html
   
   <div class="demo">
        <style>
            #photo-list img  {
                border: 1px solid grey;
                padding: 4px;
                margin: 8px;
            }
            .loading {
                background: transparent url(../_static/loading.gif) no-repeat;
                width: 100px;
                height: 100px;
                margin: 20px;
            }
        </style>
        <button id="fetch-btn" autocomplete="off">Fetch Photo</button>
        <div id="photo-list"></div>
        
        <script>
            KISSY.ready(function(S){
                var API = 'http://api.flickr.com/services/rest/?'
                    params = {
                        'method': 'flickr.favorites.getPublicList',
                        'api_key': '5d93c2e473e39e9307e86d4a01381266',
                        'user_id': '26211501@N07',
                        'per_page': 10,
                        'format': 'json',
                        'jsoncallback': 'getFavorites'
                    },
                    photoList = S.one('#photo-list');
                
                S.one('#fetch-btn').on('click', function() {
                    this.attr('disabled', true);
                    photoList.addClass('loading');
                    S.getScript(API + S.param(params));
                });

                window.getFavorites = function(data) {
                    var html = 'Fetch photo failed, pls try again!';

                    if (data.stat === 'ok') {
                        html = '';
                        S.each(data.photos.photo, function(item, i){
                            html += '<img src="http://farm' + item.farm + '.static.flickr.com/'
                                    + item.server + '/' + item.id + '_' + item.secret + '_t.jpg" />';
                        });
                    }
                    photoList.removeClass('loading').html(html);
                }
            });
        </script>
   </div>

再来看代码:

.. code-block:: javascript
   :linenos:
   
    KISSY.ready(function(S){
        var API = 'http://api.flickr.com/services/rest/?'
            params = {
                'method': 'flickr.favorites.getPublicList',
                'api_key': '5d93c2e473e39e9307e86d4a01381266',
                'user_id': '26211501@N07',
                'per_page': 10,
                'format': 'json',
                'jsoncallback': 'getFavorites'
            },
            photoList = S.one('#photo-list');

        S.one('#fetch-btn').on('click', function() {
            this.attr('disabled', true);
            photoList.addClass('loading');
            S.getScript(API + S.param(params));
        });

        window.getFavorites = function(data) {
            var html = 'Fetch photo failed, pls try again!';

            if (data.stat === 'ok') {
                html = '';
                S.each(data.photos.photo, function(item, i){
                    html += '<img src="http://farm' + item.farm + '.static.flickr.com/'
                            + item.server + '/' + item.id + '_' + item.secret + '_t.jpg" />';
                });
            }
            photoList.removeClass('loading').html(html);
        }
    });
   

稍加解释下:
 #. 当点击按钮时, 组装 API 参数后, 发送请求. ps: 这里各个参数可以在 flickr API 文档中找到 [3]_, 最后的 jsoncallback 指定回调函数的名字.
 #. 组装参数时, 使用到了 ``S.param`` 方法, 是将对象 data 转换为 URL 中的参数字符串, 且是经过 encodeURI 编码的.
 #. 在回调函数中, 获取传入的 json 数据, 稍加拼装就可以使用啦~
 #. 最后的 ``window.getFavorites`` 是将方法 ``getFavorites`` 暴露给全局, 因为当请求后调用的就是全局范围内的 ``getFavorites`` 函数, 如果是对象中的方法, 同样可以将该对象暴露给全局后再调用其方法.
   


在简单介绍完 ``S.getScript`` 之后, 下面将讲述 KISSY 提供的动画支持 `Anim <anim.html>`_ ...

.. rubric:: 参考链接

.. [1] `Ajax API 文档 <http://kissyteam.github.com/KISSY/docs/ajax/index.html>`_
.. [2] `JSON 介绍 <http://en.wikipedia.org/wiki/JSON>`_
.. [3] `Flickr API <http://www.flickr.com/services/api/>`_


