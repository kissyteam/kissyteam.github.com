.. _anim:


Anim
===============================================
关于js中的动画, 让我映象最为深刻的就是 JQuery 首页上最经典的例子 ``$("p.neat").addClass("ohmy").show("slow");``

相当简单的一行代码就可以出现元素的渐隐效果, 从那时她就已经深深吸引了当初只知道flash能做动画的我;


S.Anim
----------------------------

KISSY 中也提供了基本的动画特效支持. 主要由三个子模块组成 [1]_ :
 #. ``anim``, 动画的基础模块;
 #. ``anim-easing``, 提供easeIn/Out, elasticIn/Out, backIn/Out, bounceIn/Out 等平滑函数;
 #. ``anim-node-plugin``, 对 ``Node/NodeList`` 的动画支持;

核心的动画函数 ``S.Anim(elem, props, duration, easing, callback)`` , 5个参数分别为:
 #. ``elem`` : 指定动画的目标元素;
 #. ``props`` : 动画属性, 可以是字符串或者普通对象;
 #. ``duration`` : 动画时长, 以秒为单位;
 #. ``easing`` : 动画平滑函数, 可以取 [2]_ , 不同的函数呈现不同的变化效果;
 #. ``callback`` : 动画完毕后的回调函数;

其实, 这两个函数很简单, 在这个文档的第一节就已经使用到了最基本的功能. 更多类似的小例子可见 [3]_ . 

动画的原理都是一样的, 但要实现一些很酷的动画效果, 首先得分析出动画每个部分的状态, 再把它们有顺序的组合起来. 



show()/hide()/fadeIn()/fadeOut()
----------------------------------------------------------
看一下 JQuery 关于这部分的源码, 可以看到 ``show()/hide()`` 和 ``fadeIn()/fadeOut()`` 是操作 ``display``, ``overflow``, ``height``, ``width``, ``opacity`` 这几个 css 属性实现的. 比如: 元素 ``show`` 之前设置 ``display`` 为 ``block`` , 设置 ``overflow`` 为 ``hidden``, 防止溢出, 设置 ``opacity`` 为0, 使其不可见, 然后, 获取元素的原始宽高度, 之后宽高度清0, 动画开始, 从宽高度透明度渐变到元素正常的设置; 元素 ``hide`` 刚好相反;

``fadeIn/fadeOut`` 比较 ``show/hide`` , 不需要重设宽高度, 只需要调节透明度即可;

完整源码:

.. literalinclude:: demo/show.js
   :language: javascript
   :lines: 7-
   :linenos:
   


在上一节的图片获取的例子中, 点击按钮之后, 图片一下子的跑出来了, 感觉不是很好, 现在, 我们利用刚才实现好的 ``show()/hide()`` 和 ``fadeIn()/fadeOut()`` , 让图片完全加载完毕后逐渐显示出来;


.. raw:: html
      
      <div class="demo">
           <style>
               #J_photo-list img  {
                   display: none;
                   border: 1px solid grey;
                   padding: 4px;
                   margin: 8px;
                   float: left;
               }
               .ks-clear:after { content: '\20'; display: block; height: 0; clear: both; }
               .ks-clear { *zoom: 1; }
               
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
           
           <div id="J_photo-list" class="ks-clear"></div>
           <script src="demo/show.js"></script>
           
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
                
                    function imgOnLoad(img, callback) {
                        if (img.complete) callback();
                        else S.Event.on(img, 'load', callback);
                    }
                    
                   function getFavorites(jdata){
                       var imgUrlList = [];
                       if (jdata.stat === 'ok'){
                            var s = '';
                            if (jdata.stat === 'ok'){
                                S.each(jdata.photos.photo, function(t,i){
                                   s += '<img src="http://farm'+t.farm+'.static.flickr.com/'+t.server+'/'+t.id+'_'+t.secret+'_t.jpg" />';
                                });
                            } else {
                               s = 'fetch photo failed, pls try again!'
                            }
                            photoList.html(s);
                           
                            S.each(photoList.all('img'), function(img){
                                imgOnLoad(img, function(){
                                    S.fadeIn(img);
                                });
                            });
                            
                       }
                       setTimeout(function(){
                           btn.removeClass('loading');
                           btn.html('Fetch Photo');
                       }, 1000);
                   }
                   window.getFavorites = getFavorites;
               });
           </script>
      </div>

每张图片获取之后, 先不显示出来, 等图片加载完成之后, 调用 ``S.fadeIn`` 渐进显示, 部分代码:

.. code-block:: javascript
   :linenos:
   
   
   S.each(photoList.all('img'), function(img){
       imgOnLoad(img, function(){
           S.fadeIn(img);
       });
   });
   

.. note:: 
 
 #. 动画属性 ``props`` 须是连续型的数值, 如果是 ``display`` 这种 "离散型" 的, 可以利用 ``opacity`` 设置透明度这种方式, 在 ``display: block`` 之后获取 ``height/width``, 设置元素宽高度及透明度;
 #. 像 ``height/width`` 这种属性, 需要加上单位, 不能光光是数字;
 #. ``S.Easing`` 取值可以根据你的需要选取, 默认不写也是可以的;



关于动画, 先介绍到这里吧, 其他更炫的效果, 等你来实现! 

下一节, 将会介绍 KISSY 的第一个功能强大, 且在 Taobao 上经常能够看到的组件 -- ``Switchable`` , 并会介绍 :ref:`KISSY组件 <widgets>`  的组织方式...


.. rubric:: 参考链接

.. [1] `Anim 文档 <http://kissyteam.github.com/kissy/docs/anim/>`_ ;
.. [2] `平滑函数 <http://kissyteam.github.com/kissy/docs/anim/anim-easing.html>`_ ;
.. [3] `动画示例 <http://kissyteam.github.com/kissy/src/anim/test.html>`_ ;
