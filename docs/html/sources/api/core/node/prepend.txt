.. currentmodule:: Node


prepend
========================================

Module
-----------------------------------------------

  :mod:`Node`

Methods
-----------------------------------------------

.. method:: NodeList.prepend

    | NodeList **prepend** ( content )
    | 将参数内容插入到当前节点列表中的每个元素的开头.
    
    :param HTMLELement|string|NodeList content: 将要插入的内容
    :rtype: NodeList
    
    该方法插入指定内容到当前节点列表的第一个元素前面(如果要插入到最后一个元素后面, 请用 :meth:`~NodeList.append` ).

    .. note::

        该方法和 :meth:`~NodeList.prependTo` 功能一样. 最大的区别在于语法不同以及参数意义不同. 当使用 ``prepend`` 方法时, 当前节点列表为参数内容的插入容器.
        而对于 ``prependTo``  当前节点列表则为要插入的元素, 而参数则为目标容器.


    .. code-block:: html

        <h2>Greetings</h2>
        <div class="container">
          <div class="inner">Hello</div>
          <div class="inner">Goodbye</div>
        </div>

    你可以创建 NodeList 并把它立即插入到指定容器中:

    .. code-block:: javascript

        KISSY.use("node",function(S,NodeList){
            NodeList.all('.inner').prepend('<p>Test</p>');
        });

    内层的每个 div 元素都得到了新内容

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

    你可以把页面上已有的元素 ``prepend`` 到另外一个:

    .. code-block:: javascript

        KISSY.use("node",function(S,NodeList){
            NodeList.all('.container').prepend($('h2'));
        });

    如果当前节点列表只包括一个节点, 那么他将会被移到目标容器中(而不是克隆):

    .. code-block:: html

        <div class="container">
            <h2>Greetings</h2>
            <div class="inner">Hello</div>
            <div class="inner">Goodbye</div>
        </div>


    但是如果当前节点列表包括多余一个节点, 则除了第一个节点外, 其他节点都添加的是参数节点的克隆节点.



Demo
------------------------------------------

**在所有段落中添加一些 html 字符串**

    .. literalinclude:: /_static/api/core/node/prepend-1.html
       :language: html


    .. raw:: html

        <iframe width="100%" height="135" src="../../../static/api/core/node/prepend-1.html"></iframe>


**给所有段落添加一个文本节点**

    .. literalinclude:: /_static/api/core/node/prepend-2.html
       :language: html

    .. raw:: html

        <iframe width="100%" height="135" src="../../../static/api/core/node/prepend-2.html"></iframe>


**给所有段落添加一个 ``NodeList``  对象**

    .. literalinclude:: /_static/api/core/node/prepend-3.html
       :language: html


    .. raw:: html

        <iframe width="100%" height="135" src="../../../static/api/core/node/prepend-3.html"></iframe>