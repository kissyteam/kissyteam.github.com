.. module:: Anim

Anim
===============================================

|  动画
|  作者: `玉伯 <lifesinger@gmail.com>`_ , `承玉 <yiminghe@gmail.com>`_
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/anim>`_  | `Demo <../../../demo/core/anim/index.html>`_


Class
-----------------------------------------------

  * :class:`Anim`

  
Methods
-----------------------------------------------

  * :meth:`run`
  * :meth:`stop`


Class Detail
-----------------------------------------------

.. class:: Anim
    
    | **Anim** (elem, props[, duration, easing, callback, nativeSupport])
    | 得到绑定于某个 dom 节点的动画实例

    :param String|HTMLElement|KISSY.Node elem: 作用动画的元素节点.
    :param Object props: 动画结束的 dom 样式值, 例如
    
        .. code-block:: javascript

            {
                width:"100px",
                height:"100px"
            }
        
        表示节点将从当前宽高经过动画平滑变化到宽 100px 与高 100px
        也可以设置 scrollLeft 或者 scrollTop, 这时会直接对元素的滚动属性产生动画.
        
    :param Number duration: 默认为 1 , 动画持续时间, 以秒为单元.
    :param String easing: 默认为 'easeNone' , 动画平滑函数, 可取值 “easeNone”,”easeIn”,”easeOut”,”easeBoth”,”easeInStrong”, “easeOutStrong”,”easeBothStrong”,”elasticIn”,”elasticOut”, “elasticBoth”,”backIn”,”backOut”,”backBoth”, “bounceIn”,”bounceOut”,”bounceBoth”. 效果预览, 可以参考 Robert Penner 博士的： `easing_demo.html <http://www.robertpenner.com/easing/easing_demo.html>`_ .
    :param function callback: 默认为 null , 动画结束回调.
    :param Boolean nativeSupport: 默认为 true , 是否在支持css动画的浏览器上使用原生机制.

    
Methods Detail
-----------------------------------------------

.. method:: run

    | **run** ()
    | 在动画实例上调用, 开始当前动画实例的动画.

.. method:: stop

    | **stop** ([finish=false])
    | 在动画实例上调用, 结束当前动画实例的动画.
    
    :param boolean finish: flase 时, 动画会在当前帧直接停止；为 true 时, 动画停止时会立刻跳到最后一帧
