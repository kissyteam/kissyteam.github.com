.. currentmodule:: overlay

Dialog
===============================================

|  对话框.
|  扩展于 :class:`Overlay`

Class
-----------------------------------------------

  * :class:`Dialog`

Configs
-----------------------------------------------

  除了 :attr:`~Overlay.config.content` 配置项外与 :class:`Overlay` 的配置项完全相同, 其他新增配置项如下：
  
  * :data:`~Dialog.config.headerContent`
  * :data:`~Dialog.config.bodyContent`
  * :data:`~Dialog.config.footerContent`
  * :data:`~Dialog.config.draggable`
  * :data:`~Dialog.config.aria`
  * :data:`~Dialog.config.constrain`
  
Attributes
-----------------------------------------------

  除了 :class:`Overlay` 的所有属性之外还有：
  
  * :attr:`~Dialog.prototype.header`
  * :attr:`~Dialog.prototype.body`
  * :attr:`~Dialog.prototype.footer`
  * :attr:`~Dialog.prototype.draggable`
  * :attr:`~Dialog.prototype.constrain`
  
Methods
-----------------------------------------------

  * 同 :class:`Overlay` .

Events
-----------------------------------------------

  * 同 :class:`Overlay` , 包括 :func:`~Overlay.show` , :func:`~Overlay.hide` , :func:`~Overlay.beforeVisibleChange` .


Class Detail
-----------------------------------------------

.. class:: Dialog
    
    | **Dialog** (config)
    
    :param Object config: 配置项, 详细见下方 **Configs Detail** .
    
    对话框的 DOM 结构为：
    
    .. code-block:: html

        <div class='dialog'> <!-- 对话框根节点 -->
            <div class='content'> <!-- 对话框内容节点 -->
                <div class='header'> <!-- 对话框标题节点 -->
                </div>
                
                <div class='body'> <!-- 对话框体节点 -->  
                </div>
                
                <div class='footer'> <!-- 对话框底部节点 -->
                </div>
            </div>
        </div>
        
        
.. note::

    使用前请加上初始样式
    
    .. code-block:: html
    
        <style>
            .ks-overlay {
                position:absolute;
                left:-9999px;
                top:-9999px;
            }
        </style>        

Configs Detail
-----------------------------------------------

    除了 :attr:`~Overlay.prototype.content` 配置项外与 :class:`Overlay` 的配置项完全相同, 但是新增了一些配置项如下所示：

.. data:: Dialog.config.headerContent

    {String|KISSY.Node} - 对话框的标题 html 或标题节点.

.. data:: Dialog.config.bodyContent

    {String|KISSY.Node} - 对话框的体 html 或体节点.

.. data:: Dialog.config.footerContent

    {String|KISSY.Node} - 对话框的底部 html 或底部节点.

.. data:: Dialog.config.draggable

    {Boolean|Object} - 是否允许拖动头部移动及其控制, 注意启用时需同时 ``use("dd")`` , 例如：

    .. code-block:: javascript
    
        KISSY.use("dd,overlay",function(S,DD,Overlay){
            new Overlay.Dialog({
                draggable : true
            });
        });

    .. versionadded:: 1.3

    可以设置 :class:`proxy <dd.Proxy>` 或 :class:`scroll <dd.Scroll>` 的控制选项， 例如：

    .. code-block:: javascript

            KISSY.use("dd,overlay",function(S,DD,Overlay){
                new Overlay.Dialog({
                    draggable : {
                        proxy:{
                            node:function(){
                                // 生成代理节点
                            },
                            destroyOnEnd:true // 每次拖放都生成新的代理节点
                        },

                        scroll:{
                            node:window // 随窗口自动滚动
                        }
                    }
                });
            });
        
.. data:: Dialog.config.aria

    {Boolean} - 默认为 false, 是否开启 aria 支持. 开启后, 窗口显示出来时自动获得焦点并且 tab 键只能在窗口内部转移焦点.
    

        
.. data:: Dialog.config.constrain

    {Boolean | String} - 和 :class:`~Draggable.Draggable` 配合, 限制拖动的范围.
        * 取值选择器字符串时, 则在限制拖动范围为根据该选择器字符串取到的第一个节点所在区域.
        * 取值 true 时, 只能在当前视窗范围内拖动.
        * 取值 false 时, 可任意移动, 例如：

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

Attributes Detail
-----------------------------------------------
    
    除了 :class:`Overlay` 的所有属性之外还有：

.. attribute:: Dialog.prototype.header

    {KISSY.Node} - 只读, 对话框的头部节点.

.. attribute:: Dialog.prototype.body

    {KISSY.Node} - 只读, 对话框的体部节点.

.. attribute:: Dialog.prototype.footer

    {KISSY.Node} - 只读, 对话框的底部节点.

    .. note::

        以上三个属性在获取前必须调用过 ``render()`` 方法.

.. attribute:: Dialog.prototype.draggable

    {Boolean} - 头部是否可以拖放及其控制.

.. attribute:: Dialog.prototype.constrain

    {Boolean|String} - 拖放区域范围.

    
Methods Detail
-----------------------------------------------

    同 :class:`Overlay` .
    

Events Detail
-----------------------------------------------

    同 :class:`Overlay` , 包括 :func:`~Overlay.show` , :func:`~Overlay.hide` , :func:`~Overlay.beforeVisibleChange` .
