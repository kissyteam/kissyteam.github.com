.. currentmodule:: tree

Tree
===============================



|  树（根节点）.

Class
---------------------------------

    * :class:`Tree`
    
Events
--------------------------------------------------------

    * :func:`~Tree.click`    
    * :func:`~Tree.expand`    
    * :func:`~Tree.collapse`     
    
Class Detail
--------------------------

.. class:: Tree

    | **Tree** (config)
    
    * 继承自 :class:`Tree.Node <tree.Node>` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项.
    
    .. note::

        从已有元素实例 Node 对象时 , 元素节点标明类名 ``{prefixCls}tree-root`` .
        ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .
    

Events Detail
------------------------------------------------------

.. function:: Tree.click

    | **click(e)**
    | 当树节点被点击后触发
    
    :param Tree.Node e.target: 当前被点击的树节点  
    
    
.. function:: Tree.expand

    | **expand(e)**
    | 当树节点扩展后触发
    
    :param Tree.Node e.target: 当前被扩展的树节点
    
    
.. function:: Tree.collapse

    | **collapse(e)**
    | 当树节点收缩后触发
    
    :param Tree.Node e.target: 当前被收缩的树节点      
    
    
.. tip::

    默认情况下，双击树节点的文字部分或单击扩展图标才会展开收缩其子节点，
    如果你需要改变为：单击树节点的文字部分也展开收缩其子节点，可以监控 :func:`~Tree.click` 事件
    
    .. code-block:: javascript
    
        tree.on("click",function(e){
            var node = e.target;
            if(node.get("children").length){
                node.set("expanded",!node.get("expanded"));
            }
        });      
    