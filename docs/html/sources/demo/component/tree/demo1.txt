.. currentmodule:: tree

新建简单树
======================================

.. versionadded:: 1.2

|  `API <../../../api/component/tree/index.html>`_ | `源码 <https://github.com/kissyteam/kissy/tree/master/src/tree/>`_

Class
-----------------------------------------------

  * :class:`Tree.Node <tree.Node>`
  * :class:`Tree.CheckNode <tree.CheckNode>`
  * :class:`Tree <tree.Tree>`
  * :class:`Tree.CheckTree <tree.CheckTree>`

新建简单树
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="200" class="iframe-demo" src="../../../static/demo/tree/demo1.html"></iframe>

    **载入1.2的 kissy**

    .. code-block:: html

        <script src="http://a.tbcdn.cn/s/kissy/1.2.0/kissy-min.js"></script>

    **HTML关键代码**
	
    .. code-block:: html
	
    	<div id="treeContainer" style="width: 200px;">
    		<!-- 简单树只提供一个树的容器，通过KISSY代码向容器中增加DOM元素 -->
    		<!-- 在树生成之后，此处会有DOM元素添加进来 -->
    	</div>
		
    **初始化树**

    .. literalinclude:: /_static/demo/tree/assets/demo1.js
           :language: javascript

    .. note::

        #. 使用树还需要自己定义皮肤样式, 以上参考的是 `google 的样式 <../../../static/demo/tree/assets/tree.css>`_
        #. 如果一次性树节点太多，可通过懒加载来减少初始启动时间。参考:  :ref:`Lazy Tree <kissy-tree-lazy>`

