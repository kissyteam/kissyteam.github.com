.. _quickstart-yourwidgets:


自定义组件
===============================================


为何要以组件形式
------------------------

将 JS 代码组件化的好处:
 #. 提高代码复用
 #. 模块间保持独立, 不会导致多个开发人员合作时产生的冲突
 #. 封装性好, 只提供 API 接口给外部调用


KISSY 中, 通过 :ref:`add( name, fn ) <loader-add>` 方法来添加新的模块. 在 KISSY 内部, 代码也是这么组织的.

下面通过个小例子来说明如何开发自定义组件.



组件开发示例
-------------------

在淘宝交易结束前有个评价环节, 里面有一个星星打分功能, 如下示例, 在这里就把这个打分做成一个小 KISSY 组件.

.. raw:: html
   
    <div class="demo">
        <style>
            /************************打分*********************/
            .hide {
                display: none;
            }
            .rate-type, .rating-tips, .rating-pop-tip {
                background:url("http://a.tbcdn.cn/app/rc/img/icon_v2.gif") no-repeat scroll 1000px 1000px transparent;
            }
            .rating-level, .rating-level a {
                background:url("http://a.tbcdn.cn/app/rc/img/star_v2.png") no-repeat scroll 1000px 1000px transparent;
            }
            
            .rating-bd {
                position:relative;
            }
            .rating-tips {
                position:absolute;
                left: 320px;
                height:65px;
                width:305px;
                background-position: 0 0;
            }
            .rating-tips h5, .rating-tips p {
                font-weight:normal;
                left:12px;
                position:absolute;
                top:20px;
                margin: 0;
                font-size: 12px;
            }
            .rating-tips p {
                height:50px;
                text-indent:4em;
                width:158px;
            }
            .shop-rating {
                height:25px;
                overflow:hidden;
                padding:2px 0;
                position:relative;
                z-index:999;
            }
            .rating-pop-tip {
                position: absolute;
                width: 162px;
                height: 50px;
                z-index: 1000;
                padding: 12px 10px;
                background-position: -40px -175px;
            }
            .rating-pop-tip span {
                color: #ff6d02;
            }
            .rating-pop-tip em {
                font-family: arial;
                font-weight: bold;
                color: #ff6600;
            }
            .rating-pop-tip strong {
                display: block;
                padding-top: 2px;
                color: #666666;
                font-weight: normal;
                line-height: 16px;
            }
            .shop-rating span {
                display:block;
                float:left;
                height:23px;
                line-height:23px;
            }
            
            .shop-rating span.title {
                font-size: 14px;
                width: 100px;
                margin-right: 5px;
                text-align: right;
            }
            .shop-rating .result {
                margin-left:20px;
                padding-top:2px;
            }
            .shop-rating .result span {
                color:#FF6D02;
            }
            .shop-rating .result em {
                color:#FF6600;
                font-family:arial;
                font-weight:bold;
            }
            .shop-rating .result strong {
                color:#666666;
                font-weight:normal;
            }
            
            .rating-level {
                float: left;
                position:relative;
                height:23px;
                width:120px;
                margin:0 0 0 40px;
                padding-left: 0;
                background-position:0 0;
                z-index:1000;
            }
            .rating-level li {
                display:inline;
            }
            .rating-level a {
                line-height: 23px;
                height: 23px;
                margin: 0 0;
                position: absolute;
                top: 0px;
                left: 0px;
                text-indent: -999em;
                *zoom: 1;
                outline: none;
            }
            .rating-level a.one-star {
                width: 20%;
                z-index: 6;
            }
            .rating-level a.two-stars {
                width: 40%;
                z-index: 5;
            }
            .rating-level a.three-stars {
                width: 60%;
                z-index: 4;
            }
            .rating-level a.four-stars {
                width: 80%;
                z-index: 3;
            }
            .rating-level a.five-stars {
                width: 100%;
                z-index: 2;
            }
            
            .rating-level .current-rating,
            .rating-level a:hover {
                background-position: 0px -28px;
            }
            
            .rating-level a.one-star:hover, .rating-level a.two-stars:hover,
            .rating-level a.one-star.current-rating, .rating-level a.two-stars.current-rating {
                background-position: 0px -116px;
            }
            
            .rating-level .three-stars .current-rating, .rating-level .four-stars .current-rating, .rating-level .five-stars .current-rating {
                background-position: 0px -28px;
            }
        </style>
        <div id="J_Rating" class="rating-bd">
            <div class="rating-tips">
                <h5>小提示：</h5>
                <p>点击星星就能打分了，该打分完全是匿名滴。</p>
            </div>
            <div class="shop-rating">
                <span class="title">设计美观:</span>
                <ul class="rating-level">
                    <li><a href="#" data-star-value="1" class="one-star">1</a></li>
                    <li><a href="#" data-star-value="2" class="two-stars">2</a></li>
                    <li><a href="#" data-star-value="3" class="three-stars">3</a></li>
                    <li><a href="#" data-star-value="4" class="four-stars">4</a></li>
                    <li><a href="#" data-star-value="5" class="five-stars">5</a></li>
                </ul>
                <span class="result"></span>
                <input type="hidden" size="2" value="" name="dsr1" />
            </div>
            
            <div class="shop-rating">
                <span class="title">维护简易:</span>
                <ul class="rating-level">
                    <li><a href="#" data-star-value="1" class="one-star">1</a></li>
                    <li><a href="#" data-star-value="2" class="two-stars">2</a></li>
                    <li><a href="#" data-star-value="3" class="three-stars">3</a></li>
                    <li><a href="#" data-star-value="4" class="four-stars">4</a></li>
                    <li><a href="#" data-star-value="5" class="five-stars">5</a></li>
                </ul>
                <span class="result"></span>
                <input type="hidden" size="2" value="" name="dsr2" />
            </div>
            
            <div class="shop-rating">
                <span class="title">加载迅速:</span>
                <ul class="rating-level">
                    <li><a href="#" data-star-value="1" class="one-star">1</a></li>
                    <li><a href="#" data-star-value="2" class="two-stars">2</a></li>
                    <li><a href="#" data-star-value="3" class="three-stars">3</a></li>
                    <li><a href="#" data-star-value="4" class="four-stars">4</a></li>
                    <li><a href="#" data-star-value="5" class="five-stars">5</a></li>
                </ul>
                <span class="result"></span>
                <input type="hidden" size="2" value="" name="dsr3" />
            </div>
            <div class="rating-pop-tip hide"></div>
            <!-- <p class="msg"><span class="error"></span></p> -->
        </div>
        <script src="../_static/quickstart/starscore.js"></script>
        <script>
            KISSY.ready(function(S) {
                new S.StarRating('#J_Rating',
                    {reason: [['太丑了', '不好看', '一般般', '很漂亮', '哇!非常漂亮'],
                                ['太难维护了', '不好维护', '一般般', '维护很简单', '维护超级容易'],
                                ['太慢了', '有点小慢', '一般般', '挺快的', '超级快!']],
                    level: ['非常不满意','很不满意','一般','很满意','非常满意']}
                );
                
            });
        </script>
    </div>


完整代码: `startscore.js <../_static/quickstart/starscore.js>`_

一些说明:
 #. 首先, 想好组件的名字, 见名知意, 模块名字统一小写, 而暴露给外部的组件名称使用单词首字母大写, 如 ``StarRating``;
 #. 通过 :ref:`KISSY.add('starrating', function(S){ }); <kissy-add>` 加入新模块到 KISSY 中, 这里也可以使用 ``KISSY.app('XXX');`` 创建特定的应用, 然后用 ``XXX.add('starrating', function(S){});`` 给特定应用 XXX 添加一个模块;
 #. 接下来是声明一些模块内的公共变量, 像 ``S.DOM, S.Event`` 都会用到, 另外一些如组件自己的 class 钩子;
 #. 默认的配置信息, ``defaultConfig``, 提供了使用者如果没有设置时的默认值;
 #. 通过 :ref:`S.augment(StarRating, { }); <kissy-augment>` 添加属性及方法, 每个方法在注释中写明含义, 入口参数及其类型. 另外, 开发者需要想好哪些属性/方法需要对外提供及命名方式如何等. 在这个例子中, 只添加了 ``_init`` 私有方法, 用来构建所需 DOM, 绑定事件;
 #. 最后, 在使用时只需要创建一个对象即可, 如, ``new S.StarRating('#J_Rating', config)``;


罗罗嗦嗦这么一大堆后, 不知道你是否觉得简单? 非常推荐基于 KISSY 尝试去实现一个组件, 一切都很简单的^o^

**注意:** 上面的 StarScore 组件仅是示范，实际应用中，会更复杂些.


下一节将介绍如何对现有的 KISSY 组件进行扩展 ---- :ref:`扩展 Switchable <quickstart-extendwidgets>`

