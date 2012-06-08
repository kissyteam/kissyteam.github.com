.. currentmodule:: tree

Node
===============================



|  树节点.



Class
---------------------------------

    * :class:`Node`
    
    
Config Attributes
-----------------------------------------------

    * :data:`~Node.config.content`
    * :data:`~Node.config.isLeaf`
    * :data:`~Node.config.expanded`
    * :data:`~Node.config.tooltip`
        

Properties
----------------------------------------------------
    
    * :attr:`~Node.prototype.content`
    * :attr:`~Node.prototype.expandIconEl`
    * :attr:`~Node.prototype.iconEl`
    * :attr:`~Node.prototype.selected`
    * :attr:`~Node.prototype.expanded`
    * :attr:`~Node.prototype.tooltip`
    * :attr:`~Node.prototype.tree`
    * :attr:`~Node.prototype.depth`
    
Methods
-----------------------------------------------

    * :meth:`~Node.prototype.expandAll`
    * :meth:`~Node.prototype.collapseAll`    
    * :meth:`~Node.prototype.select`
    
    
Class Detail
--------------------------

.. class:: Node

    | **Node** (config)
    
    * 继承自 :class:`~component.ModelControl` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项.详细见下方 **Config Attributes Detail** .
    
    .. note::

        从已有元素实例 Node 对象时 , 元素节点标明类名 ``{prefixCls}tree-item`` .
        ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .
    
Config Attributes Detail
-----------------------------------------------

.. data:: Node.config.content

    {String} - 节点内容
    
.. data:: Node.config.isLeaf

    {Boolean} - 可选，是否固定采用叶子节点或目录节点样式类，不设置的话会动态根据是否具有儿子节点而变化.
    
.. data:: Node.config.expanded

    {String} - 儿子节点是否初始可见
    
.. data:: Node.config.tooltip

    {String} - 节点提示内容
    
    
Properties Detail
-----------------------------------------------------             
    
.. attribute:: Node.prototype.content

    {String} - 节点内容  
    
.. attribute:: Node.prototype.expandIconEl

    {KISSY.Node} - ``+`` ``-`` 扩展图标 dom 节点
    
.. attribute:: Node.prototype.iconEl

    {KISSY.Node} - 树节点图标 dom 节点 
    
.. attribute:: Node.prototype.selected

    {Boolean} - 该节点是否被选中 
    
.. attribute:: Node.prototype.expanded

    {Boolean} - 该节点的儿子节点是否显示，设置后可相应展开收缩儿子节点。
    
.. attribute:: Node.prototype.tooltip

    {String} - 节点的提示内容
    
.. attribute:: Node.prototype.tree

    {Tree} - 该节点所属的树对象
    
.. attribute:: Node.prototype.depth

    {Number} - 该节点所处所在树的深度，只读。        
    
    
Methods Detail
-----------------------------------------------  

.. method:: Node.prototype.expandAll

    | **expandAll ( )**
    | 把当前节点的子孙节点全部显示出来           
    
    
.. method:: Node.prototype.collapseAll

    | **collapseAll ( )**
    | 把当前节点的子孙节点全部收缩起来   
    
.. method:: Node.prototype.select

    | **select ( )**
    | 把当前节点设置为当前树的选中节点
    