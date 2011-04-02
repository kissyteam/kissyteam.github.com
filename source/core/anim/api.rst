api
===================================

获取动画构造器
-----------------------------------
页面引入 kissy.js :

.. code-block:: html

    <script src='kissy.js'></script>

通过 use 加载 anim 模块：

.. code-block:: javascript

    KISSY.use("anim",function(){
        var Anim=S.Anim;
        //使用 Anim 构造器
    });

KISSY 1.2 新增使用模块方法
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
可直接通过依赖注入，从函数参数中取得

.. code-block:: javascript

    KISSY.use("anim",function(S,Anim){
        //使用 Anim 构造器
    });



构造器接口
----------------------------------------------

.. code-block:: javascript

    Anim function Anim(elem, props, duration, easing, callback, nativeSupport) {}

``elem (必填)``: 类型选择器字符串或是通过S.get 获得的原生 dom 节点


``props (必填)``: 类型 object,动画结束的 dom 样式值，例如

.. code-block:: javascript

    {
        width:"100px",
        height:"100px"
    }

表示节点将从当前宽高经过动画平滑变化到宽 100px 与高 100px

``duration (optional)``: 类型整数，动画持续时间，以秒为单元，默认为1秒


``easing (optional)``:类型字符串，动画平滑函数，可取值 "easeNone","easeIn","easeOut",
"easeBoth","easeInStrong","easeOutStrong","easeBothStrong","elasticIn","elasticOut","elasticBoth","backIn",
"backOut","backBoth","bounceIn","bounceOut","bounceBoth"，默认 "easeNone"，具体效果可自行尝试


``callback (optional)``:类型函数，动画结束时调用


``nativeSupport:类型 bool``，是否在支持css动画的浏览器上使用原生机制，默认 true

实例动画对象
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

通过 ``var anim=Anim(...)`` 来实例化一个动画对象。


实例方法
---------------------------------------------------------------

``run : void function(){}``:在动画实例上调用，开始当前动画实例的动画.


``stop : void function(){}``:在动画实例上调用，结束当前动画实例的动画.


在节点实例上开始动画
----------------------------------------------------------------

调用接口
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. code-block:: javascript

    S.Node.prototype.animate = function(props,duration,easing,callback,nativeSupport){
    }

参数可见构造器接口部分

快捷方法
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

show/hide
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

``show : Node function(speed,callback){}`` : 元素动画效果显示

``hide : Node function(speed,callback){}`` : 元素动画效果隐藏

``toogle : Node function(speed,callback){}`` : 当前元素为显示时动画效果隐藏，否则动画效果显示

speed (optional):类型整数，不设置，则无动画过程

callback (optional):类型函数，要求设置 speed ，动画结束后调用

fadeIn/Out
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

``fadeIn : Node function(speed,callback){}`` : 元素渐隐效果显示，设置opacity

``fadeOut : Node function(speed,callback){}`` : 元素渐隐效果隐藏，设置opacity

speed (optional):类型整数，默认为1，动画时长，单位为秒

callback (optional):类型函数，动画结束后调用



slideDown/Up
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

``slideDown : Node function(speed,callback){}`` : 元素从上到下滑动显示，设置height

``slideUp : Node function(speed,callback){}`` : 元素从下到上隐藏，设置height

speed (optional):类型整数，默认为1，动画时长，单位为秒

callback (optional):类型函数，动画结束后调用




