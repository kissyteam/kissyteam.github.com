.. py:currentmodule:: Overlay

弹出层 api
===================================================================

获取构造器
--------------------------------------------------------------------
页面引入 kissy.js :

.. code-block:: html

    <script src='kissy.js'></script>

通过 use 加载 overlay 模块：

.. code-block:: javascript

    KISSY.use("overlay",function(){
        var Overlay=S.Overlay;
        //使用 Overlay 构造器
    });

.. versionadded:: 1.2
    KISSY 1.2 可直接通过依赖注入，从函数参数中取得
    
    .. code-block:: javascript
    
        KISSY.use("overlay",function(S,Overlay){
            //使用 Overlay 构造器
        });

.. seealso::

    KISSY 1.2 :py:mod:`Loader` 新增功能
    
构造器接口
---------------------------------------------------------------------

.. py:class:: Overlay(config)

    :param object config: 类型对象，实例对象所需的配置
    
    例如一个简单的配置项：
    
    .. code-block:: javascript
    
        {
            width:"200px",
            render:"#container"
        }


config 配置项详解
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. py:attribute:: Overlay.prefixCls

    (optional): kissy 1.2 新增，类型字符串，默认值为 "ks-"，样式类名前缀，如默认弹出层根元素会加上样式类："ks-overlay"，
    kissy 1.2 版本以前设置无效，都为 "ks-".

.. py:attribute:: srcNode

    (optional): 类型选择器字符串，取第一个节点作为弹出层根节点的已存在页面节点，例如设置

    .. code-block:: javascript
    
        {
            srcNode : "#overlay_test"
        }

    作用于页面

    .. code-block:: html
    
        <div id='overlay_test'>
            从页面已有元素中渲染而来
        </div>

    则会把 ``overlay_test`` 转化为弹出层根节点。

.. py:attribute:: width

    (optional): 类型字符串或者整数，弹出层宽度。整数表示单元为 px。

.. py:attribute:: height

    (optional): 类型字符串或者整数，弹出层高度。整数表示单元为 px。

.. py:attribute:: elCls

    (optional): 类型字符串，将要添加到弹出层根元素的样式类。

.. py:attribute:: content

    (optional): 类型字符串，设置弹出层的内容 html。

.. py:attribute:: zIndex

    (optional): 类型整数，设置弹出层的 ``z-index`` css属性值。默认 9999。

.. py:attribute:: x

    (optional): 类型整数，设置弹出层相对于文档根节点的 x 坐标。

.. py:attribute:: y

    (optional): 类型整数，设置弹出层相对于文档根节点的 y 坐标。

.. py:attribute:: xy

    (optional): 类型整数数组，相当于将数组第一个元素设置为 :py:attr:`x` 的值，将数组的第二个元素设置为 :py:attr:`y` 的值。

.. py:attribute:: align

    (optional): 类型对象，弹出层对齐的相关配置，例如
    
    .. code-block:: javascript
    
        {
            align:{
                value:{
                    node: null,         // 类型选择器字符串，对齐参考元素，falsy 值为可视区域
                    points: ['tr','tl'], // 类型字符串数组，表示 overlay 的 tl 与参考节点的 tr 对齐
                    offset: [0, 0]      // 类型整数数组，表示 overlay 最终位置与经 node 和 points 计算后位置的偏移，
                                        // 数组第一个元素表示 x 轴偏移，第二个元素表示 y 轴偏移。
                }
            }
        }
        
    ``points`` 字符串数组元素的取值范围为  t,b,c 与 l,r,c 的两两组合，分别表示 top,bottom,center 与 left,right,center 的两两组合，
    可以表示 9 种取值范围。
    
        .. note::
        
            第一个字符取值 t,b,c ，第二个字符取值 l,r,c。如下图所示
        
            .. image:: /_images/overlay/align.png
    
.. py:attribute:: resize

    (optional): kissy 1.2 新增，拖动调整大小的配置，例如：
    
    .. code-block:: javascript
    
        {
            minWidth:100, //类型整数，表示拖动调整大小的最小宽度
            maxWidth:1000, //类型整数，表示拖动调整大小的最大宽度
            minHeight:100, //类型整数，表示拖动调整大小的最小高度
            maxHeight:1000, //类型整数，表示拖动调整大小的最大高度
            handlers:["b","t","r","l","tr","tl","br","bl"] //类型字符串数组，取自上述 8 个值的集合。
        }    
          
    ``handlers`` 配置表示的数组元素可取上述八种值之一，t,b,l,r 分别表示 top,bottom,left,right，加上组合共八种取值，
    可在上，下，左，右以及左上，左下，右上，右下进行拖动。          


实例属性
-----------------------------------------------------------------------------

当根据配置实例化 overlay 得到当前实例后，可调用实例上的 get 方法得到实例的特定属性以及 set 方法设置属性的值，例如

    .. code-block:: javascript
    
        var o = new Overlay({ xy : [400,200] });
        //alert 当前实例的绝对坐标
        alert(o.get("xy"));
        o.set("xy",[100,200]);
        //alert 当前实例新的绝对坐标
        alert(o.get("xy"));
    

可获取属性列表
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. py:attribute:: x

    （读写）：相对于页面绝对横坐标，类型参见配置

.. py:attribute:: y

    （读写）：相对于页面绝对纵坐标，类型参见配置

.. py:attribute:: xy

    （读写）：相当与一次同时读写 :py:attr:`x` 和 :py:attr:`y` 属性，类型参见配置

.. py:attribute:: align

    （读写）：弹出层的对齐信息，类型参见配置

.. py:attribute:: visible

    （读写）：弹出层的显示与否，类型 boolean

.. py:attribute:: el

    （只读）：获取弹出层的根节点，类型 ``KISSY.Node`` 。
    
    .. note::
    
        必须在调用 :py:meth:`~Overlay.render` 方法之后才可以获取

.. py:attribute:: contentEl

    （只读）：获取弹出层真正内容所在的节点，类型 ``KISSY.Node`` 。
    
    .. note::
    
        必须在调用  :py:meth:`~Overlay.render` 方法之后才可以获取。
        
    弹出层的 html 结构如下

    .. code-block:: html
    
        <div><!-- 弹出层根节点 -->
            <div><!-- 弹出层内容节点 --->
                <!-- 弹出层真正内容所在 -->
            </div>
        </div>
        
    一般调用弹出层的 :py:meth:`~Overlay.render` 方法后，可通过获取 :py:attr:`contentEl` 属性获取内容所在节点，来动态修改弹出层的内容。



实例方法
----------------------------------------------------------------------------------------------------------

.. py:method:: Overlay.render()

    渲染当前实例，生成对应的 dom 节点并添加到页面文档树中。
    
    .. note::
    
        取 :py:attr:`el` 与 :py:attr:`contentEl` 属性值前必须调用过该方法。

.. py:method:: Overlay.show()

    显示弹窗，位置根据 :py:attr:`align` 或者 :py:attr:`xy` 确定。

.. py:method:: Overlay.hide()

    隐藏弹窗

.. py:method:: Overlay.align(node,points,offset)

    :param string|KISSY.Node|HTMLDOMNode node: 类型对齐的参考元素
    :param Array<string> points: 对齐的参考位置
    :param Array<number> offset: 相对对齐元素的偏移


    相当于调用

    .. code-block:: javascript

        set("align",{
            align:{
                value:{
                    node: node,
                    points: points,
                    offset: offset
                }
            }
        });
        
    .. note::
    
        调用该方法前请先调用 :py:meth:`~Overlay.render`.    
    
.. py:method:: Overlay.center()

    将弹出层放在当前视窗中央。
    
    .. note::
    
        调用该方法前请先调用 :py:meth:`~Overlay.render`.      

.. py:method:: Overlay.move(x,y)

    :param number x: 相对文档左上角横坐标
    :param number y: 相对文档左上角纵坐标

    相当于调用

    .. code-block:: javascript

        set("xy",[x,y]);


触发事件
------------------------------------------------------------------------------------------

.. attribute:: hide
    
    当弹出层隐藏时触发

.. attribute:: show

    当弹出层显示时触发

.. attribute:: beforeVisibleChange

    当弹出层隐藏或显示前触发，传给事件处理函数的参数为一个对象，格式如下：

    .. code-block:: javascript
    
        {
            newVal : // 类型 boolean，将要隐藏时为 false，将要显示时为 true
            prevVal : // 类型 boolean，当前弹出层显示与否
        }
        
    .. note::
    
        当该事件的函数处理器返回 false ，则会阻止将要进行的显示或隐藏动作。   