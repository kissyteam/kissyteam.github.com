.. currentmodule:: tree

Demo - KISSY新建简单树
======================================

.. versionadded:: 1.2

|  `API <../../../api/component/tree/index.html>`_ | `源码 <https://github.com/kissyteam/kissy/tree/master/src/tree/>`_

Class
-----------------------------------------------

  * :class:`Tree`
  * :class:`TreeMgr`

Demo - KISSY新建简单树
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="200" class="iframe-demo" src="../../../static/demo/tree/demo1.html"></iframe>

    **载入1.2的 kissy**

    .. code-block:: html

        <script src="http://a.tbcdn.cn/s/kissy/1.2.0/kissy.js"></script>

    **html关键代码**
	
    .. code-block:: html
	
    	<!-- 简单树 -->
    	<div style="margin-bottom:10px">
    		<a href="javascript:void(0)" id="expandAll">展开全部</a>&nbsp; <a href="javascript:void(0)" id="collapseAll">关闭全部</a>
    	</div>
    	<div id="treeContainer" style="width: 200px;">
    		<!-- 简单树只提供一个树的容器，通过KISSY代码向容器中增加DOM元素 -->
    		<!-- 在树生成之后，此处会有DOM元素添加进来 -->
    	</div>
		
    **初始化树**

    .. literalinclude:: /_static/demo/tree/assets/demo1.js
           :language: javascript

    .. note::

        使用树还需要自己定义皮肤样式, 以上参考的是 `google 的样式 <../../../static/demo/tree/assets/tree.css>`_

