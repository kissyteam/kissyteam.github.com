.. currentmodule:: tree

.. _kissy-tree-lazy:

懒加载树
======================================


Class
-----------------------------------------------

  * :class:`Tree.Node <tree.Node>`
  * :class:`Tree.CheckNode <tree.CheckNode>`
  * :class:`Tree <tree.Tree>`
  * :class:`Tree.CheckTree <tree.CheckTree>`

懒加载树的子节点
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="200" class="iframe-demo" src="../../../_static/demo/tree/demo4.html"></iframe>


    **监听 expand 事件懒加载树节点**

    .. literalinclude:: /_static/demo/tree/assets/demo4.js
           :language: javascript
    
    .. note::

        使用树还需要自己定义皮肤样式, 以上参考的是 `google 的样式 <../../../_static/demo/tree/assets/tree.css>`_
