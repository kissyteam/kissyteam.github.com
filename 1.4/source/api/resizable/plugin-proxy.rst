.. module:: resizable

resizable.plugin.Proxy
===============================

|  :class:`~resizable.Resizable` 插件， 可代理缩放对象.

.. code-block:: javascript

    KISSY.use("resizable,resizable/plugin/proxy", function (S, Resizable, ResizableProxyPlugin) {
        //use proxy
    });

Class
---------------------------------

    * :class:`~resizable.plugin.Proxy`


Configs
-----------------------------------------------

    * :attr:`~resizable.plugin.Proxy.config.destroyOnEnd`
    * :attr:`~resizable.plugin.Proxy.config.hideNodeOnResize`
    * :attr:`~resizable.plugin.Proxy.config.node`

Class Details
------------------------------------------------

.. class:: resizable.plugin.Proxy

    | **Proxy** (config)
    |  插件 id: resizable/plugin/proxy
    | 扩展自 :class:`~base.Base`，包含其全部方法，配置，属性，事件

    :param Object config: 配置项, 详细见下方 **Configs Detail**

Configs Details
------------------------------------------------

.. attribute:: resizable.plugin.Proxy.config.node

    {Function} - 当 Resizable 对象需要代理节点时通过调用该函数产生代理节点, 函数的参数为当前 Resizable 对象,  返回值类型为 KISSY.Node . 该属性有默认值

    .. code-block:: javascript

        function(resizable) {
            return new Node(resizable.get("node")[0].cloneNode(true));
        }

    即代理节点和当前节点保持一致.

.. attribute:: resizable.plugin.Proxy.config.destroyOnEnd

    {Boolean} - 默认 false. 指明在 resize 之后是否销毁代理节点

.. attribute:: resizable.plugin.Proxy.config.hideNodeOnResize

    {Boolean} - 默认 false. 是否在用代理节点 resize 时隐藏原节点.


