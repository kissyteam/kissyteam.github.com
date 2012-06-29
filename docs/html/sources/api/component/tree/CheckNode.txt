.. currentmodule:: tree

CheckNode
===============================



|  可多选树节点.

Class
---------------------------------

    * :class:`CheckNode`
    

Attributes
----------------------------------------------------
    
    * :attr:`~CheckNode.prototype.checkState`
    * :attr:`~CheckNode.PARTIAL_CHECK`
    * :attr:`~CheckNode.CHECK`
    * :attr:`~CheckNode.EMPTY`
    
    
Class Detail
--------------------------

.. class:: CheckNode

    | **CheckNode** (config)
    | xclass: 'tree-check-item'
    
    * 继承自 :class:`Tree.Node <tree.Node>` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项.
    
    .. note::

        从已有元素实例 Node 对象时 , 元素节点标明类名 ``{prefixCls}tree-item-check`` .
        ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .
        

    
Attributes Detail
-----------------------------------------------------             
    
.. attribute:: CheckNode.prototype.checkState

    {Enum} - 当前节点的多选状态. 可取：
     :attr:`~CheckNode.PARTIAL_CHECK`
     :attr:`~CheckNode.CHECK`
     :attr:`~CheckNode.EMPTY`
    
.. attribute:: CheckNode.PARTIAL_CHECK

    <static> - 代表节点的部分选中状态（部分子孙节点选中）
    
.. attribute:: CheckNode.CHECK

    <static> - 代表节点的全部选中状态（子孙节点和自身节点全部选中）
    
.. attribute:: CheckNode.EMPTY

    <static> - 代表节点的空状态（子孙节点和自身节点全部不选中）