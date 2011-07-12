.. module:: Dialog

Dialog
===============================================

|  对话框.
|  扩展于 :class:`Overlay`
|  作者: `承玉 <yiminghe@gmail.com>`_
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/overlay/>`_  | `Demo <../../../demo/component/overlay/>`_

Class
-----------------------------------------------

  * :class:`Dialog`

Config Attributes
-----------------------------------------------

  除了 :attr:`Overlay.content` 配置项外与 :class:`Overlay` 的配置项完全相同, 其他新增配置项如下：
  
  * :data:`headerContent`
  * :data:`bodyContent`
  * :data:`footerContent`
  * :data:`closable`
  * :data:`draggable`
  * :data:`aria`
  * :data:`constrain`
  
Properties
-----------------------------------------------

  除了 :class:`Overlay` 的所有属性之外还有：
  
  * :attr:`header`
  * :attr:`body`
  * :attr:`footer`
  * :attr:`closable`
  * :attr:`draggable`
  * :attr:`constrain`
  
Methods
-----------------------------------------------

  * 同 :class:`Overlay` .

Events
-----------------------------------------------

  * 同 :class:`Overlay` , 包括 :attr:`show` , :attr:`hide` , :attr:`beforeVisibleChange` .


Class Detail
-----------------------------------------------

.. class:: Dialog
    
    | **Dialog** (config)
    
    :param Object config: 配置项, 详细见下方 **Config Attributes Detail** .
    
    对话框的 DOM 结构为：
    
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

Config Attributes Detail
-----------------------------------------------

    除了 :attr:`Overlay.content` 配置项外与 :class:`Overlay` 的配置项完全相同, 但是新增了一些配置项如下所示：

.. data:: headerContent

    {String} - 对话框的标题 html.

.. data:: bodyContent

    {String} - 对话框的体 html.

.. data:: footerContent

    {String} - 对话框的底部 html.

.. data:: closable

    {Boolean} - 对话框右上角是否包括关闭按钮

.. data:: draggable

    {Boolean} - 是否允许拖动头部移动, 注意启用时需同时 ``use("dd")`` , 例如：

    .. code-block:: javascript
    
        KISSY.use("dd,overlay",function(S,DD,Overlay){
            new Overlay.Dialog({
                draggable : true
            });
        });
        
.. data:: aria

    {Boolean} - 默认为 false, 是否开启 aria 支持. 开启后, 窗口显示出来时自动获得焦点并且 tab 键只能在窗口内部转移焦点.
    
    .. versionadded:: 1.2      
        
.. data:: constrain

    {Boolean | String} - 和 `~Draggable` 配合, 限制拖动的范围.
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

Properties Detail
-----------------------------------------------
    
    除了 :class:`Overlay` 的所有属性之外还有：

.. attribute:: header

    {KISSY.Node} - 只读, 对话框的头部节点.

.. attribute:: body

    {KISSY.Node} - 只读, 对话框的体部节点.

.. attribute:: footer

    {KISSY.Node} - 只读, 对话框的底部节点.

.. note::

    以上三个属性在获取前必须调用过 ``render()`` 方法.

.. attribute:: closable

    {Boolean} - 右上角拖放区域有无.

.. attribute:: draggable

    {Boolean} - 头部是否可以拖放.

.. attribute:: constrain

    {Boolean | String} - 拖放区域范围.

    
Methods Detail
-----------------------------------------------

    同 :class:`Overlay` .
    

Events Detail
-----------------------------------------------

    同 :class:`Overlay` , 包括 :attr:`Overlay.show` , :attr:`Overlay.hide` , :attr:`Overlay.beforeVisibleChange` .
