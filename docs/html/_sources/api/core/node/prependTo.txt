.. currentmodule:: node


prependTo
========================================

Module
-----------------------------------------------

  :mod:`node`

Methods
-----------------------------------------------

.. method:: NodeList.prependTo

    | NodeList **prependTo** ( containers )
    | 将当前节点列表中的每个元素插入到容器列表的每个元素的开头.
    
    :param HTMLELement|string|NodeList content: 将要插入的内容
    
        * HTMLELement|NodeList: 已有或新创建的节点
        * string: 选择器字符串, 查找已有的容器节点
    :rtype: NodeList
    
    ``prependTo`` 和 :meth:`~NodeList.prepend` 功能一样, 只不过参数意义不同.

    考虑下面 html 字符串:

    .. code-block:: html

        <h2>Greetings</h2>
        <div class="container">
          <div class="inner">Hello</div>
          <div class="inner">Goodbye</div>
        </div>

    我们可以创建元素后立即插入到多个已有元素:

    .. code-block:: javascript

        NodeList.all('<p>Test</p>').prependTo('.inner');

    每个内层 div 元素都得到了新内容

    .. code-block:: html

        <h2>Greetings</h2>
        <div class="container">
          <div class="inner">
            <p>Test</p>
            Hello
          </div>
          <div class="inner">
            <p>Test</p>
            Goodbye
          </div>
        </div>

    我们也可以把一个已有元素插入到另一个

    .. code-block:: javascript

        NodeList.all('h2').prependTo(NodeList.all('.container'));

    如果容器列表只有一个节点, 那么当前节点列表会被移动到容器内(不是克隆):

    .. code-block:: html

        <div class="container">
          <h2>Greetings</h2>
          <div class="inner">Hello</div>
          <div class="inner">Goodbye</div>
        </div>

    不过如果有多个目标容器, 那么除了第一个目标容器, 当前节点列表的复制节点会被插入到其他目标容器



Demo
------------------------------------

**把多个 span 插入到已有元素**

    .. raw:: html

        <iframe width="100%" height="135" class="iframe-demo"  src="../../../_static/api/core/node/prependTo.html"></iframe>

    .. literalinclude:: /_static/api/core/node/prependTo.html
       :language: html

