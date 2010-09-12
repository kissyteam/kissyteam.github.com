.. _yourwidgets:


自定义组件
===============================================


为何要以组件形式
------------------------
将JS代码组件化的好处:
 #. 提高代码复用;
 #. 模块间保持独立, 不会导致多个开发人员合作时产生的冲突;
 #. 封装性好, 只提供API接口给外部调用, 非常OO;


Kissy 中, 通过 ``add( name, fn )`` 方法来添加新的模块, 这在 Kissy 内部, 代码也是这么组织的. 所以如果你想要扩展 Kissy , 建议你采用这种形式.


下面通过个小例子来说明如何开发自定义组件.



组件开发示例
-------------------
在淘宝交易结束前有个评价环节, 里面有一个星星打分功能, 如下示例 , 在这里就把这个打分做成一个小Kissy组件.

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
        <script src="demo/starscore.js"></script>
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



完整步骤:
 #. 首先, 想好组件的名字, 见名知意, 模块名字统一小写, 而暴露给外部的组件名称使用单词首字母大写, 如 ``StarRating``;
 #. 通过 ``KISSY.add('starrating', function(S){});`` 加入新模块到 KISSY中, 这里也可以使用 ``KISSY.app('XXX');`` 创建特定的应用, 然后用 ``XXX.add('starrating', function(S){});`` 给特定应用 XXX 添加一个模块;
 #. 接下来是声明一些模块内的公共变量, 像 ``S.DOM, S.Event`` 都会用到, 另外一些如组件自己的 class 钩子;
 #. 默认的配置信息, ``defaultConfig``, 提供了使用者如果没有设置时的默认值;
 #. ``function StarRating(obj, cfg){} KISSY.StarRating = StarRating;`` 定义 ``StarRating`` 并建立引用;
 #. 在 ``StarRating()`` 中处理自身变量及配置信息等, 或者做一些判断等;
 #. 通过 ``S.augment(StarRating, {});`` 添加属性及方法, 每个方法在注释中写明含义, 入口参数及其类型. 另外, 开发者需要想好哪些属性/方法需要对外提供及命名方式如何等. 在这个例子中, 只添加了 ``_init`` 私有方法, 构建所需DOM, 绑定事件;
 #. 最后, 在使用时只需要创建一个对象即可, 如, ``new S.StarRating('#J_Rating', {})``;


完整代码:

.. literalinclude:: demo/starscore.js
   :language: javascript
   :lines: 7-

.. note::

   关于组件的开发规则, 以前也有讨论过:

   * 接口/公共方法的确定;
   * 尺寸形状的命名: 采用对象形式构成, 如{height: 100, width: 100};
   * 缩略语: 变量名如有出现常用的名字有固定且大家都知道的缩略语, 则尽可能用缩略语代替原单词, 保持整个变量简短;
   * 配置参数: 提供默认参数, 且在用户设定之后的错误参数给出提示或者采取默认行为;
   * 选择器: 传给组件的选择器, 如果有多个则组件需要支持处理多个, 尽可能地支持批量;
   


.. _kissyflow:

在动手写 KISSY 组件之前, 还需要了解一下 KISSY 组件的开发流程相信会对你有用的.



KISSY 组件开发流程
-------------------------------
在开发过程中, 开发者,,(就拿我来举例吧), 经常会出现:

#. 需求过来: 稍加理清下思路, 急急忙忙就开始写代码了, 然后写到七八分了, 才发现貌似一开始就没完全明白需求是什么...然后只能重构.

#. 重构第一次: 现在完全明白需求是什么了, 嗯嗯, 基本上是完全删除原来的代码, 按照新需求写, 其间要考虑n多种情况以尽可能满足所有场景下的需求, 导致一个 js 源文件打开后的滚动条缩得很短;

#. 呃. 太长了, 未来及现在的自己都不愿意再去看这段代码, 所以, 即将面临着再一次重构;

#. 重构第二次, 拆分大逻辑, 删减不必要的代码, 保持JS文件的精简, 代码组织的也比较好看, 易懂;

#. 问题又来了, 精简之后, 只保留了基本功能, 一些其他的功能被完全删除了, 但这些功能又需要, 为了尽量不增加核心 js 文件, 所以再次重构;

#. 这次重构是针对扩展来得, 在避免修改核心代码的前提下, 编写适合特定需求的扩展代码;


我们需要避免这些问题(需求不明确, 盲目动手, 代码冗长, 写了后面的忘了前面的逻辑, 导致可扩展性差, 可复用性也差). HOW?



以前听人提过 ``Literate Programming(文学化编程)`` [1]_ 一词, 说的是: 

Literate Programming

    文学编程自由地表达逻辑, 而且它用人类日常使用的语言写出来, 就好像一篇文章一样, 让开发者用他们自己思维内在的逻辑和流程所要求的顺序开发程序.
    
    


现在越来越觉得, 其实, 写代码和写文章一样, 一个代码完成, 给别人阅读, 就得像看书一样, 从头至尾地, 能清晰的让阅读的人知道这代码实现的功能是什么, 适合/不适合哪些情况, 在使用时有哪些需要注意的地方;

在实际开发中, 除了给代码加注释外, 还有很多代码不能做的事情, 需要更多的文档来支持开发, 下面拿 ImageZoom slide [2]_ 为例说明一下:



应用场景分析
~~~~~~~~~~~~~~~~~~~~~~

一个需求到来, 比如这个图片放大效果, 首先我们需要这个功能能用在哪些地方, 或哪些网站上已经使用了, 如果有的话, 就对比一下不同的情况下不同的要求, 如 #slide4 . 这样以后, 对比自己的需求, 想好要实现什么功能, 哪些功能保留, 哪些功能不需要, ---- 明确需求;


同类组件调研
~~~~~~~~~~~~~~~~~~~~~~

需求明确之后, 查找现有的同类组件, 看看他们针对这个问题, 是怎么实现的, 实现哪些功能, 哪些可以借鉴的地方, 哪些不足的地方要避免或者改进, 如 #slide6 , ---- 明确要实现的功能有哪些;


功能点分析
~~~~~~~~~~~~~~~~~~~~~~

分离出完成整个功能需要的几个核心功能点, 并针对各个功能点逐个描述, 如 #slide8 , 这也可以帮你理清思路,  ---- 进一步明确待实现功能;


技术方案
~~~~~~~~~~~~~~~~~~~~~~

针对上述的几个功能点, 分别给出实现方案, 或者其他的技术难点, 又或者是算法上的分析等, 如 #slide9 , --- 明确如何实现;


Public API
~~~~~~~~~~~~~~~~~~~~~~

设计好的公共 API , 并在此说明, 也可以根据使用场景, 给出一些范例来说明 API 的使用, 如 #slide14 , 这里可以在开始时设计的尽量精简些, ---- 明确 API 接口;


开发计划
~~~~~~~~~~~~~~~~~~~~~~

简略或者详细的制定一个开发计划, 及发布的版本和时间等, ---- 明确进度;


其他
~~~~~~~~~~~~~~~~~~~~~~

可选的部分, 用于记录所有开发过程中碰到的杂类问题或者和其他同学的讨论.



我们建议每个 KISSY 组件下, 都存放一个 slide.html [3]_ , 其内容包含上述几部分内容. 这个 slide 随着你的开发过程的推进, 也会不断添加更新, 最后发布时连同组件源代码一起, 形成非常好的知识体系, 这样, 给别人或是几十年后的自己阅读, 也会像看文章一样的有条理.



KISSY 组件目录及代码组织
-------------------------------

关于代码组织, [4]_ 和 KISSY 工程 README 中都有些简单介绍, 在这里也完整列一下, 建议遵循:

目录结构
~~~~~~~~~~~~~~~~~~~~~~

 * yourwidget
    * assets:                      存放 css, img 相关文件
    * build.properties/build.xml:  打包配置文件
    * yourwidget.js:               组件核心代码
    * plugin-yourwidget.js:        组件插件
    * widget-yourwidget.js:        组件扩展
    * test.html:                   测试文档
    * slide.html:                  上面所说的调研文档


代码结构
~~~~~~~~~~~~~~~~~~~~~~

内部代码组织: 采用 module, sub module 来分拆和组织代码
外部调用接口: component 形式，包括工具型组件 utils 和 UI 型组件 widgets


命名约定
~~~~~~~~~~~~~~~~~~~~~~


原则: 尽量避免潜在冲突, 同时力求精简短小和见名知意.
 - 全局变量:        g_ks_comp_xxx        比如:  g_ks_suggest_callback
 - class/id 命名:  ks-comp[-xxx]        比如:  ks-editor-toolbar-item
 - data 属性命名:   data-ks-comp[-xxx]   比如:  data-ks-suggest
 - hook 规范:      KS_Comp              比如:  KS_Switchable


.. note::

    为了避免太冗长, 在保持清晰和无潜在冲突的情况下, 可以打破原则, 比如: 
    <div class="KS_Widget" data-widget-type="Tabs" data-widget-config="{...}">






罗罗嗦嗦这么一大堆后, 下一节将介绍如何对现有的 KISSY 组件进行扩展 ---- :ref:`扩展 Switchable <extendwidgets>` .




.. rubric:: 参考链接
.. [1] `文学编程 <http://zh.wikipedia.org/zh-cn/%E6%96%87%E5%AD%A6%E7%BC%96%E7%A8%8B>`_ ;
.. [2] `ImageZoom slide <http://kissyteam.github.com/kissy/src/imagezoom/slide.html>`_ ;
.. [3] `Slide <http://github.com/kissyteam/kissy-gallery/tree/master/kslide/>`_ ;
.. [4] `组件开发流程 <http://kissyteam.github.com/kissy/docs/workflow.html>`_ ;

