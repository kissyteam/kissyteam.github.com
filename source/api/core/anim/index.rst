.. module:: Anim

.. _anim:

Anim
===================================

|  事件机制
|  作者: `玉伯 <lifesinger@gmail.com>`_ , `承玉 <yiminghe@gmail.com>`_
|  源码: `查看 <../../../../../../kissy/src/anim/>`_

Class
-----------------------------------------------

.. data:: KISSY.Anim



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

.. versionadded:: 1.2
    KISSY 1.2 可直接通过依赖注入，从函数参数中取得

    .. code-block:: javascript
    
        KISSY.use("anim",function(S,Anim){
            //使用 Anim 构造器
        });

.. seealso::

    KISSY 1.2 :mod:`Loader` 新增功能

构造器接口
----------------------------------------------

.. class:: Anim(elem,props[,duration=1,easing='easeNone',callback,nativeSupport=true])

    得到绑定于某个 dom 节点的动画实例
    
    :param props: 动画结束的 dom 样式值，例如
    
        .. code-block:: javascript

            {
                width:"100px",
                height:"100px"
            }
            
        表示节点将从当前宽高经过动画平滑变化到宽 100px 与高 100px
        
        .. note::
        
            也可以设置 scrollLeft 或者 scrollTop，这时会直接对元素的滚动属性产生动画。
                
    :type props: object
    :param elem: 作用动画的元素节点
    :type elem: 选择器字符串或是通过 ``S.get`` 获得的原生 dom 节点             
    :param duration: 动画持续时间，以秒为单元
    :type duration: number
    :param easing: 动画平滑函数，可取值 
                   "easeNone","easeIn","easeOut","easeBoth","easeInStrong",
                   "easeOutStrong","easeBothStrong","elasticIn","elasticOut",
                   "elasticBoth","backIn","backOut","backBoth",
                   "bounceIn","bounceOut","bounceBoth"
                   
                   效果预览，可以参考 Robert Penner 博士的：
                   `easing_demo.html <http://www.robertpenner.com/easing/easing_demo.html>`_
                   
    :type easing: string
    :param callback: 动画结束回调
    :type callback: function
    :param nativeSupport: 是否在支持css动画的浏览器上使用原生机制
    :type nativeSupport: boolean


实例动画对象
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

通过 ``var anim=Anim(...)`` 来实例化一个动画对象。


实例方法
---------------------------------------------------------------

.. method:: Anim.run()

    在动画实例上调用，开始当前动画实例的动画.
    
.. method:: Anim.stop(finish=false)    

    在动画实例上调用，结束当前动画实例的动画.        

    :param boolean finish: flasy 时，动画会在当前帧直接停止；为 true 时，动画停止时会立刻跳到最后一帧。