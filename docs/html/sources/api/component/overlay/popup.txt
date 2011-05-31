.. py:currentmodule:: Overlay

子类 Popup
===================================================================

获取对话框构造器
--------------------------------------------------------------------
页面引入 kissy.js :

.. code-block:: html

    <script src='kissy.js'></script>

Popop 属于 overlay 模块, 通过 use 加载 overlay 模块：

.. code-block:: javascript

    KISSY.use("overlay",function(){
        var Popop = S.Popop;
        // 使用 Popop 构造器
    });

.. versionadded:: 1.2
    KISSY 1.2 可直接通过依赖注入, 从函数参数中取得
    
    .. code-block:: javascript
    
        KISSY.use("overlay",function(S,Overlay){
            //使用 Popop 构造器
            var Popop = Overlay.Popop;
        });


构造器接口
---------------------------------------------------------------------

.. py:class:: Popop(container, config)

    :param object container: 容器对象, 可取:

        * 选择器字符串, 此时会取第一个节点作为弹出层的根节点;

        * HTMLElement 或直接传入 KISSY Node 对象;

        * 也可不设置, 此时, 表示新建 HTMLElement;

     :param object config: 类型对象, 实例对象所需的配置
    
    例如一个简单的配置项：
    
    .. code-block:: javascript
    
        {
            width:"200px",
            render:"#container"
        }


config 配置项详解
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

与 :class:`~Overlay.Overlay` 的配置项完全相同, 除此之外, 还有：

.. attribute:: trigger

    指定触发器, 类型为 选择器字符串 或 ``HTMLElement`` 或 ``KISSY Node`` 对象

    .. code-block:: javascript
    
        KISSY.use("dd,overlay",function(S,DD,Overlay){
            new Overlay.Dialog({
                draggable : true,
                contrain:true // 限制拖动区域为当前视窗范围
            });
        });
        
        KISSY.use("dd,overlay",function(S,DD,Overlay){
            new Overlay.Dialog({
                draggable : true,
                contrain:"#container" // 限制拖动区域为 container 节点所占据区域
            });
        });

.. attribute:: triggerType

    触发类型, 可取 'click', 'mouse', 默认为 'click'.

    * 取 'click' 时, 表示当点击触发器元素时, 显示弹出层;

    * 取 'mouse' 时, 表示当鼠标移入触发器元素时, 显示弹出层, 当鼠标离开触发器元素时, 隐藏弹出层;


实例方法
----------------------------------------------------------------------------------------------------------

同 :class:`~Overlay.Overlay`.
        
        
实例属性
----------------------------------------------------------------------------------------------
      
同 :class:`~Overlay.Overlay`.



触发事件
-----------------------------------------------------------------------------------------------------

同 :class:`~Overlay.Overlay`, 包括 :attr:`show` , :attr:`hide` , :attr:`beforeVisibleChange` .
