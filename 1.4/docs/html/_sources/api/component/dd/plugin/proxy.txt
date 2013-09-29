.. currentmodule:: dd

dd.plugin.Proxy
===============================================


|  :class:`~dd.Draggable` 插件， 可代理拖放对象.


.. code-block:: javascript

    KISSY.use('dd/plugin/proxy',function(S,Proxy){
        // use Proxy plugin
    });


Class
-----------------------------------------------

  * :class:`~dd.plugin.Proxy`

Configs
-----------------------------------------------

  * :attr:`~dd.plugin.Proxy.config.node`
  * :attr:`~dd.plugin.Proxy.config.destroyOnEnd`
  * :attr:`~dd.plugin.Proxy.config.moveOnEnd`
  
Class Detail
-----------------------------------------------

.. class:: dd.plugin.Proxy
    
    | **Proxy** (config)
    |  插件 id: dd/plugin/proxy

    :param Object config: 配置项, 详细见下方 **Configs Detail**
    

Configs Detail
-----------------------------------------------
    
.. attribute:: dd.plugin.Proxy.config.node

    {Function} - 当 Draggable 对象需要代理节点时通过调用该函数产生代理节点, 函数的参数为当前 Draggable 对象,  返回值类型为 KISSY.Node . 该属性有默认值

    .. code-block:: javascript
    
        function(drag) {
            return new Node(drag.get("node")[0].cloneNode(true));
        }

    即代理节点和当前节点保持一致.

.. attribute:: dd.plugin.Proxy.config.destroyOnEnd

    {Boolean} - 默认 false. 指明是否代理节点需要每次拖放前 dragstart 生成,  拖放后 dragend 销毁. 用于多 Draggable 对象共享一个 Proxy 对象实例, 且要求代理节点和单个 Draggable 对象关联, 或者一个 DraggableDelegate 对象共享一个 Proxy 对象实例.

.. attribute:: dd.plugin.Proxy.config.moveOnEnd

    {Boolean} - 默认 true. 当拖放结束时，是否移动源节点到代理节点的位置.

.. attribute:: dd.plugin.Proxy.config.hideNodeOnDrag

    {Boolean} - 默认 false. 拖放时是否隐藏源节点.

