.. _quickstart-ajax:

Ajax
===============================================

KISSY 中提供了 Ajax 异步请求功能, 下面仅介绍最常用的 :class:`~io.IO` 类的 ``JSONP`` 方式,
其他 ajax 模块中的方法, 如 ``get``, ``post`` 等, 请参考 API 文档 [1]_ .
JSONP 是最常用的跨域请求方式. 关于跨域可参见 [2]_ .

使用 Ajax
-------------------

在日常 Web 应用中, 经常用到异步请求, 比如, 异步加载一些评论信息, 异步加载图片列表等, 这样可以减少页面初始加载时的请求, 减轻服务器压力, 也加快主页面的初始打开速度.
下面介绍个如何通过 ``io`` 模块去请求 flickr 上提供的图片数据.

先见示例:

.. raw:: html

    <script src="http://a.tbcdn.cn/s/kissy/1.3.0/seed.js" data-config="{combine:true}"></script>
   <div class="demo">
        <style>
            #photo-list img  {
                border: 1px solid grey;
                padding: 4px;
                margin: 8px;
            }
            .loading {
                background: transparent url(../../../../source/_static/loading.gif) no-repeat;
                width: 100px;
                height: 100px;
                margin: 20px;
            }
        </style>
        <button id="fetch-btn" autocomplete="off">Fetch Photo</button>
        <div id="photo-list"></div>

        <script>
            KISSY.use('node,ajax',function (S,Node,IO) {
                var API = 'http://api.flickr.com/services/rest/',
                    params = {
                        'method': 'flickr.favorites.getPublicList',
                        'api_key': '5d93c2e473e39e9307e86d4a01381266',
                        'user_id': '26211501@N07',
                        'per_page': 10,
                        'format': 'json'
                    },
                    photoList = Node.one('#photo-list');

                Node.one('#fetch-btn').on('click', function() {
                    Node.one(this).attr('disabled', true);
                    photoList.addClass('loading');
                    Node.one('#fetch-btn')[0].disabled=true;

                    new IO({
                        url: API,
                        data: params,
                        dataType:'jsonp',
                        'jsonp':'jsoncallback',
                        success:function(data){
                            var html = 'Fetch photo failed, pls try again!';
                            if (data.stat === 'ok') {
                                html = '';
                                S.each(data.photos.photo, function(item, i){
                                    html += '<img src="http://farm' + item.farm + '.static.flickr.com/'
                                            + item.server + '/' + item.id + '_' + item.secret + '_t.jpg" />';
                                });
                            }
                            photoList.removeClass('loading').html(html);
                        },
                        complete:function(){
                            Node.one('#fetch-btn')[0].disabled=false;
                        }
                    });
                });
            });
        </script>
   </div>

再来看代码:

.. code-block:: javascript
   :linenos:

            KISSY.use('node,ajax',function (S,Node,IO) {
                var API = 'http://api.flickr.com/services/rest/',
                    params = {
                        'method': 'flickr.favorites.getPublicList',
                        'api_key': '5d93c2e473e39e9307e86d4a01381266',
                        'user_id': '26211501@N07',
                        'per_page': 10,
                        'format': 'json'
                    },
                    photoList = Node.one('#photo-list');

                Node.one('#fetch-btn').on('click', function() {
                    Node.one(this).attr('disabled', true);
                    photoList.addClass('loading');
                    Node.one('#fetch-btn')[0].disabled=true;

                    new IO({
                        url: API,
                        data: params,
                        dataType:'jsonp',
                        'jsonp':'jsoncallback',
                        success:function(data){
                            var html = 'Fetch photo failed, pls try again!';
                            if (data.stat === 'ok') {
                                html = '';
                                S.each(data.photos.photo, function(item, i){
                                    html += '<img src="http://farm' + item.farm + '.static.flickr.com/'
                                            + item.server + '/' + item.id + '_' + item.secret + '_t.jpg" />';
                                });
                            }
                            photoList.removeClass('loading').html(html);
                        },
                        complete:function(){
                            Node.one('#fetch-btn')[0].disabled=false;
                        }
                    });
                });
            });


稍加解释下:
    #. 当点击按钮时, 组装 API 参数后, 发送请求. ps: 这里各个参数可以在 flickr API 文档中找到 [3]_
    #. 在回调函数中, 获取传入的 json 数据, 稍加拼装就可以使用啦~

|

在简单介绍完 ``io`` 之后, 下面将讲述 KISSY 提供的动画支持 :ref:`Anim <quickstart-anim>` ...

.. rubric:: 参考链接

.. [1] :mod:`Ajax API 文档 <io>`
.. [2] `JSON 介绍 <http://en.wikipedia.org/wiki/JSON>`_
.. [3] `Flickr API <http://www.flickr.com/services/api/>`_


