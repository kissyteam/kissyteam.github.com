.. currentmodule:: component

Component.Extension.Align
===============================

|  对齐。组件扩充类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review

.. code-block:: javascript

    KISSY.use('component/extension/align',function(S, Align){
        // use Align
    });

Class
---------------------------------

    * :class:`~extension.Align`


Configs
-----------------------------------------------

    * :data:`~extension.Align.config.align`


Methods
-----------------------------------------------

    * :meth:`~extension.Align.prototype.align`
    * :meth:`~extension.Align.prototype.center`
    

Class Detail
--------------------------

.. class:: extension.Align

    | **Align** (config)
    
    :param Object config: 配置项，详细见下方 **Configs Detail** .
    
    
Configs Detail
-----------------------------------------------
    
.. data:: extension.Align.config.align

    {Object} - 可选, 组件节点对齐的相关配置, 例如：
    
    .. code-block:: javascript
    
        {
            node: null,         // 类型选择器字符串, 对齐参考元素, falsy 值为可视区域
            points: ['tr','tl'], // 类型字符串数组, 表示 overlay 的 tl 与参考节点的 tr 对齐
            offset: [0, 0],      // 类型整数数组, 表示 overlay 最终位置与经 node 和 points 计算后位置的偏移,
                                // 数组第一个元素表示 x 轴偏移, 第二个元素表示 y 轴偏移.
            overflow:{
                adjustX:1, // 当对象不能处于可显示区域时，自动调整横坐标
                adjustY:1 // 当对象不能处于可显示区域时，自动调整纵坐标
            }                        
        }
        
    ``points`` 字符串数组元素的取值范围为  t,b,c 与 l,r,c 的两两组合, 分别表示 top,bottom,center 与 left,right,center 的两两组合,
    可以表示 9 种取值范围.
    
    .. note::

        第一个字符取值 t,b,c , 第二个字符取值 l,r,c. 如下图所示

        .. raw:: html

            <img  src='/1.4/source/raw/api/overlay/align.png' />


Methods Detail
-----------------------------------------------    

.. method:: extension.Align.prototype.align

    | **align** ( node , points [ , offset , overflow ] )
    | 设置组件根节点对齐
    
    :param string|KISSY.Node|HTMLDOMNode node: 类型对齐的参考元素
    :param Array<string> points: 对齐的参考位置
    :param Array<number> offset: 相对对齐元素的偏移
    :param Object overflow: 超出可视区域后如何处理
    

.. method:: extension.Align.prototype.center

    | **center** ()
    | 将组件根节点放在当前视窗中央.