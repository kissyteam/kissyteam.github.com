.. currentmodule:: tree

CheckTree
===============================

.. versionadded:: 1.2

|  多选树（根节点）.
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/tree/>`_


Class
---------------------------------

    * :class:`CheckTree`
    

Events
--------------------------------------------------------

    * :func:`~CheckTree.click`    
    * :func:`~CheckTree.expand`    
    * :func:`~CheckTree.collapse`     
    
Class Detail
--------------------------

.. class:: CheckTree

    | **CheckTree** (config)
    
    * 继承自 :class:`Tree.CheckNode <tree.CheckNode>` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项.
    
    .. note::

        从已有元素实例 CheckTree 对象时 , 元素节点标明类名 ``{prefixCls}tree-root-check`` .
        ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .
    

Events Detail
------------------------------------------------------

.. function:: CheckTree.click

    | **click(e)**
    | 当树节点被点击后触发
    
    :param Tree.Node e.target: 当前被点击的树节点  
    
    
.. function:: CheckTree.expand

    | **expand(e)**
    | 当树节点被扩展时触发
    
    :param Tree.Node e.target: 当前被扩展的树节点
    
    
.. function:: CheckTree.collapse

    | **collapse(e)**
    | 当树节点被收缩后触发
    
    :param Tree.Node e.target: 当前被收缩的树节点      
    