.. currentmodule:: tree

新建简单树
======================================





Class
-----------------------------------------------

  * :class:`Tree.Node <tree.Node>`
  * :class:`Tree.CheckNode <tree.CheckNode>`
  * :class:`Tree <tree.Tree>`
  * :class:`Tree.CheckTree <tree.CheckTree>`

新建简单树
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="200" class="iframe-demo" src="/1.3/source/raw/demo/tree/demo1.html"></iframe>


    **HTML关键代码**
	
    .. code-block:: html
	
    	<div id="treeContainer" style="width: 200px;">
    		<!-- 简单树只提供一个树的容器，通过KISSY代码向容器中增加DOM元素 -->
    		<!-- 在树生成之后，此处会有DOM元素添加进来 -->
    	</div>
		
    **初始化树**

    .. literalinclude:: /raw/demo/tree/assets/demo1.js
           :language: javascript

    .. note::

        #. 如果一次性树节点太多，可通过懒加载来减少初始启动时间。参考:  :ref:`Lazy Tree <kissy-tree-lazy>`

