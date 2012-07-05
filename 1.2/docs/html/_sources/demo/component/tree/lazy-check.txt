.. currentmodule:: tree


懒加载多选树
======================================





Class
-----------------------------------------------

  * :class:`Tree.Node <tree.Node>`
  * :class:`Tree.CheckNode <tree.CheckNode>`
  * :class:`Tree <tree.Tree>`
  * :class:`Tree.CheckTree <tree.CheckTree>`

懒加载多选树的子节点
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="200" class="iframe-demo" src="../../../_static/demo/tree/lazy-check.html"></iframe>


    **监听 expand 事件懒加载树节点**

    .. literalinclude:: /_static/demo/tree/assets/lazy-check.js
           :language: javascript
    
    .. note::

        使用树还需要自己定义皮肤样式, 以上参考的是 `google 的样式 <../../../_static/demo/tree/assets/tree.css>`_
