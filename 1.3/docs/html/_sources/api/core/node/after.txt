.. currentmodule:: node


after
========================================



Module
-----------------------------------------------

  :mod:`node`

Methods
-----------------------------------------------

.. method:: NodeList.after

    | NodeList **after** ( content )
    | 将参数内容插入到当前列表中每个元素之后.
   
    :param HTMLElement|string|NodeList content: 将要插入的元素

        * string : html 字符串
        * HTMLElement|NodeList : 已有或新建的元素

    :meth:`~node.insertAfter` 和该方法的功能一样, 只不过参数意义不同,  ``insertAfter`` 表示当前节点列表被插入到参数目标节点之后,
    而该方法则表示参数节点被插入到当前节点之后.


    .. code-block:: html

        <div class="container">
          <h2>Greetings</h2>
          <div class="inner">Hello</div>
          <div class="inner">Goodbye</div>
        </div>

    我们可以创建节点并立即把它插入到一些元素之前

    .. code-block:: javascript

        NodeList.all('.inner').after('<p>Test</p>');

    结果为

    .. code-block:: html

        <div class="container">
          <h2>Greetings</h2>
          <div class="inner">Hello</div>
          <p>Test</p>
          <div class="inner">Goodbye</div>
          <p>Test</p>
        </div>

    我们也可以操纵现有元素

    .. code-block:: javascript

        NodeList.all('.container').after(NodeList.all('h2'));

    如果目标节点只有一个, 那么当前节点就会移动到目标节点之后

    .. code-block:: html

        <div class="container">
          <div class="inner">Hello</div>
          <div class="inner">Goodbye</div>
        </div>
        <h2>Greetings</h2>

    如果有多个目标节点, 那么除了第一个目标节点外, 其他目标节点前会被插入当前节点的克隆

Demo
--------------------------------------------------

    把段落插入到 div 节点之前

    .. raw:: html

        <iframe width="100%" height="135"  class="iframe-demo" src="/1.3/source/raw/api/core/node/after.html"></iframe>

    .. literalinclude:: /raw/api/core/node/after.html
       :language: html


