.. currentmodule:: node


addStyleSheet
========================================



Module
-----------------------------------------------

  :mod:`node`



Methods
-----------------------------------------------

.. function:: addStyleSheet

    | void **addStyleSheet** ( cssText [, id ] )
    | 将 cssText 字符串作为内联样式表内容添加到节点所属的文档中.

    :param string cssText: 样式内容
    :param string id: 内联样式表所在 style 节点的 id

.. note::

    或许根本不需要此方法，只需

    .. code-block:: javascript

        var $=KISSY.all;
        var styleEl = $("<style>p {color:red}</style>").appendTo("head");

        // 区别点在于 addStyleSheet 可以处理 ie 的 hack （不推荐）
        // addStyleSheet('xx {_width:xx;}')

