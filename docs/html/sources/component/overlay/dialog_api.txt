对话框 api
===================================================================

获取对话框构造器
--------------------------------------------------------------------
页面引入 kissy.js :

.. code-block:: html

    <script src='kissy.js'></script>

Dialog 属于 overlay 模块，通过 use 加载 overlay 模块：

.. code-block:: javascript

    KISSY.use("overlay",function(){
        var Dialog=S.Dialog;
        //使用 Dialog 构造器
    });

KISSY 1.2 新增使用模块方法
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
可直接通过依赖注入，从函数参数中取得
    
    .. code-block:: javascript
    
        KISSY.use("overlay",function(S,Overlay){
            //使用 Overlay 构造器
            var Dialog=Overlay.Dialog;
        });


构造器接口
---------------------------------------------------------------------

.. code-block:: javascript

    Dialog function Dialog(config) {}


``config`` : 类型对象，实例对象所需的配置，例如

.. code-block:: javascript

    {
        width:"200px",
        render:"#container"
    }

对话框的 DOM 结构
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: html

    <div> <!-- 对话框根节点 -->
        <div> <!-- 对话框内容节点 -->
            <div> <!-- 对话框标题节点 -->
            </div>
            
            <div> <!-- 对话框体节点 -->  
            </div>
            
            <div> <!-- 对话框底部节点 -->
            </div>
        </div>
    </div>
    
    

config 配置项详解
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

除了 ``content`` 配置项外与 ``overlay`` 的配置项完全相同，但是 ``Dialog`` 新增了一些配置项，如下所示：




``headerContent`` : 类型字符串，对话框的标题 html.

``bodyContent`` : 类型字符串，对话框的体 html。

``footerContent`` : 类型字符串，对话框的底部 html。

``closable`` : 类型 boolean，对话框右上角是否包括关闭按钮

``draggable`` : 类型 boolean，是否允许拖动头部移动，注意启用时需同时 ``use("dd")``，例如

    .. code-block:: javascript
    
        KISSY.use("dd,overlay",function(S,DD,Overlay){
            new Overlay.Dialog({
                draggable : true
            });
        });
        
``constrain`` : 类型 boolean 或者选择器字符串 ，和 draggable 配合，限制拖动的范围，

    取值 true 时，只能在当前视窗范围内拖动。
    
    取值选择器字符串时，则在限制拖动范围为根据该选择器字符串取到的第一个节点所在区域。
    
    取值 false 时，可任意移动，例如：

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
        
        
实例属性
----------------------------------------------------------------------------------------------
      
对话框 Dialog 实例可以获得弹出层 Overlay 实例的所有属性，除此之外还有：


        
``header`` （只读）: 类型 ``KISSY.Node`` ，获得对话框的头部节点。

``body`` （只读）: 类型 ``KISSY.Node`` ，获得对话框的体部节点。

``footer`` （只读）: 类型 ``KISSY.Node`` ，获得对话框的底部节点。

注意：以上三个属性在获取前必须调用过 ``render()`` 方法。


``closable`` （读写）: 同相应配置项，设置右上角拖放区域有无。

``draggable`` （读写）: 同相应配置项，设置头部是否可以拖放。

``constrain`` （读写）： 同相应配置项，设置拖放区域范围。


触发事件
-----------------------------------------------------------------------------------------------------

同弹出层 Overlay，包括 ``show`` , ``hide`` , ``beforeVisibleChange``
