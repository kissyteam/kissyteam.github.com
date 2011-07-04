.. _quickstart-anim:


Anim
===============================================
关于 JS 中的动画, 让我映象最为深刻的就是 jQuery 首页上最经典的例子:

.. code-block:: javascript

   $("p.neat").addClass("ohmy").show("slow");


相当简单的一行代码就可以出现元素的渐隐效果, 从那时她就深深吸引了当初只知道 flash 能做动画的我.

现在 KISSY.Anim 保持了同样精简高效的风格, 很让我心动.


S.Anim
----------------------------

KISSY 提供的动画特效支持主要由三个子模块组成 [1]_ :
 #. ``anim``, 动画的基础模块
 #. ``anim-easing``, 提供 easeIn/Out, elasticIn/Out, backIn/Out, bounceIn/Out 等平滑函数
 #. ``anim-node-plugin``, 让 ``Node/NodeList`` 直接支持动画调用

核心动画函数是 :class:`~Anim.Anim` , 5 个参数分别为:
 #. ``elem``: 指定动画的目标元素
 #. ``props``: 动画属性, 可以是字符串或者普通对象
 #. ``duration``: 动画时长, 以秒为单位
 #. ``easing``: 动画平滑函数, 可以取 [2]_, 不同的函数呈现不同的变化效果
 #. ``callback``: 动画完毕后的回调函数

其实, 这个函数很简单, 在该文档的第一节就已经使用到了最基本的功能. 更多类似的小例子可见 [3]_.

动画的原理都是一样的, 但要实现一些很酷的动画效果, 首先得分析出动画每个部分的状态, 再把它们有顺序的组合起来. 



改进版图片抓取
----------------------------------------------------------

除了直接调用 ``S.Anim`` 实现动画，还可以通过 DOM 或 Node 中的 ``show/hide/toggle``, ``fadeIn/fadeOut`` 等方法来间接调用动画.

在上一节的图片获取的例子中, 点击按钮之后, 图片一下子的跑出来了, 感觉不是很好.现在, 我们利用动画组件, 让图片完全加载完毕后逐渐显示出来:


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
                height: 100px !important;
                margin: 20px;
            }
        </style>
        <button id="fetch-btn-anim" autocomplete="off">Fetch Photo</button>
        <div id="photo-list"></div>

        <script>
            KISSY.ready(function(S){
                var $=S.all;
                var API = 'http://api.flickr.com/services/rest/?'
                    params = {
                        'method': 'flickr.favorites.getPublicList',
                        'api_key': '5d93c2e473e39e9307e86d4a01381266',
                        'user_id': '26211501@N07',
                        'per_page': 10,
                        'format': 'json',
                        'jsoncallback': 'getFavorites'
                    },
                    photoList = $('#photo-list');

                $('#fetch-btn-anim').on('click', function() {
                    $(this).attr('disabled', true);
                    photoList.addClass('loading');
                    S.getScript(API + S.param(params));
                });

                window.getFavorites = function(data) {
                    var html = 'Fetch photo failed, pls try again!',
                        loading = true;

                    if (data.stat === 'ok') {
                        html = '';
                        S.each(data.photos.photo, function(item, i){
                            html += '<img style="display:none" src="http://farm' + item.farm + '.static.flickr.com/'
                                    + item.server + '/' + item.id + '_' + item.secret + '_t.jpg" />';
                        });
                    }
                    
                    photoList.html(html).all('img').each(function(img) {
                        img.on('load', function() {
                            if(loading) {
                                photoList.removeClass('loading');
                                loading = false;
                            }
                            img.fadeIn(3);
                        });
                    });
                }
            });
        </script>
   </div>

每张图片获取之后, 先不显示出来, 等图片加载完成之后, 调用 :meth:`~Node.NodeList.fadeIn` 渐进显示, 部分代码:

.. code-block:: javascript
   :linenos:

    photoList.html(html).all('img').each(function(img) {
        img.on('load', function() {
            if(loading) {
                photoList.removeClass('loading');
                loading = false;
            }
            img.fadeIn(3);
        });
    });
   

关于动画, 先介绍到这里. 其他更炫的效果, 等待你的想象与实现!

下一节, 将会介绍 KISSY 的第一个功能强大, 且在淘宝上经常能够看到的组件 -- :mod:`Switchable`, 并会介绍 :ref:`KISSY 组件 <quickstart-widgets>`  的组织方式...


.. rubric:: 参考链接

.. [1] `Anim API 文档 <anim>`_
.. [2] `平滑函数 <http://kissyteam.github.com/kissy/docs/anim/anim-easing.html>`_
.. [3] `动画示例 <demo-anim>`_
