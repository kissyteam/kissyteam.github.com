.. currentmodule:: tree

新建多选树
======================================





Class
-----------------------------------------------

  * :class:`Tree.Node <tree.Node>`
  * :class:`Tree.CheckNode <tree.CheckNode>`
  * :class:`Tree <tree.Tree>`
  * :class:`Tree.CheckTree <tree.CheckTree>`

新建多选树
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="200" class="iframe-demo" src="../../../_static/demo/tree/demo2.html"></iframe>


    **HTML关键代码**
    
    .. code-block:: html
    
        <div id="treeContainer" style="width: 200px;">
        	<!-- 此次只提供一个树的容器，通过KISSY代码向容器中增加构成树的DOM元素  -->
        	<!-- 在树生成之后，此处会有DOM元素添加进来 -->
        </div>

    **初始化树**

    .. literalinclude:: /_static/demo/tree/assets/demo2.js
           :language: javascript
	
    .. note::

        使用树还需要自己定义皮肤样式, 以上参考的是 `google 的样式 <../../../_static/demo/tree/assets/tree.css>`_
