.. currentmodule:: tree

.. _kissy-tree-lazy:

懒加载树
======================================

.. versionadded:: 1.2

|  `API <../../../api/component/tree/index.html>`_ | `源码 <https://github.com/kissyteam/kissy/tree/master/src/tree/>`_

Class
-----------------------------------------------

  * :class:`Tree.Node <tree.Node>`
  * :class:`Tree.CheckNode <tree.CheckNode>`
  * :class:`Tree <tree.Tree>`
  * :class:`Tree.CheckTree <tree.CheckTree>`

懒加载树的子节点
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="200" class="iframe-demo" src="../../../static/demo/tree/demo4.html"></iframe>

    **载入1.2的 kissy**

    .. code-block:: html

        <script src="http://a.tbcdn.cn/s/kissy/1.2.0/kissy-min.js"></script>

    **监听 expand 事件懒加载树节点**

    .. literalinclude:: /_static/demo/tree/assets/demo4.js
           :language: javascript
    
    .. note::

        使用树还需要自己定义皮肤样式, 以上参考的是 `google 的样式 <../../../static/demo/tree/assets/tree.css>`_
