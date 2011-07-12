.. module:: Node

Node
====================================

|  作者: `承玉 <yiminghe@gmail.com>`_
|  源码: `查看 <https://github.com/kissyteam/kissy/tree/master/src/node>`_

.. versionchanged:: 1.2
    Node 包括 :mod:`DOM` , :mod:`Event` , :mod:`Anim` 模块的所有功能，推荐采用 ``Node`` 模块，
    你只需要把 ``KISSY.all`` 看做 ``jquery`` 中的 ``$`` 就可以了，
    链式操作你会喜欢的！

Module
-----------------------------------------------

  :mod:`Node`


  基本使用:

     .. code-block:: javascript

        // 也可载入 kissy.js 后直接 KISSY.Node/KISSY.NodeList, 实际上 KISSY.Node=KISSY.NodeList
        KISSY.use("node",function(S,Node){
            var NodeList=Node;
        });

  以下的这些方法,
  :func:`~DOM.filter`, :func:`~DOM.test`, :func:`~DOM.hasClass`, :func:`~DOM.addClass`, :func:`~DOM.removeClass`,
  :func:`~DOM.replaceClass`, :func:`~DOM.toggleClass`, :func:`~DOM.removeAttr`, :func:`~DOM.attr`, :func:`~DOM.hasAttr`,
  :func:`~DOM.prop`, :func:`~DOM.hasProp`, :func:`~DOM.val`, :func:`~DOM.text`, :func:`~DOM.css`, :func:`~DOM.toggle`,
  :func:`~DOM.offset`, :func:`~DOM.scrollIntoView`, :func:`~DOM.parent`, :func:`~DOM.next`, :func:`~DOM.prev`,
  :func:`~DOM.siblings`, :func:`~DOM.children`,
  :func:`~DOM.contains`, :func:`~DOM.html`, :func:`~DOM.remove`, :func:`~DOM.data`, :func:`~DOM.removeData`,
  :func:`~DOM.hasData`, :func:`~DOM.unselectable`, :func:`~DOM.contains`,
  :func:`~Event.on`, :func:`~Event.detach`, :func:`~Event.fire`,

  的调用都会被转发给 :mod:`DOM` , :mod:`Event` , 原 ``DOM`` , ``Event`` 对应方法的第一个参数传入一个原生 DOM 节点数组, 而这个原生 DOM 节点数组则是由当前的 ``KISSY NodeList`` 对象得到的.

  ``Node`` 模块会对返回值进行处理:

    * 如果返回值为单个节点或节点数组, 则包装为 :class:`NodeList`
    * 如果返回值为 ``undefined`` , 则返回调用者 ``NodeList`` 对象
    * 其他, 直接返回


.. versionchanged:: 1.2
    ``Node`` 模块的 ``on`` 方法中的 ``this`` 关键字指向当前绑定事件的单个原生节点, 事件对象的 ``target`` 和 ``relatedTarget`` 也指向对应的原生节点, 例如：

.. code-block:: html

    <div id='d1' class='d'></div>
    <div id='d2' class='d'></div>

    <script>
        KISSY.Node.all(".d").on("mouseenter",function(ev){
            this.id // => d1 或者 d2
            ev.target.id // => d1 或者 d2
            ev.relatedTarget // => d1 或者 d2 或者 document.body
                            // 或者 document.documentElement
        });
    </script>


Methods
-----------------------------------------------

.. toctree::
   :titlesonly:

   nodelist.rst
   equals.rst
   all.rst
   one.rst
   add.rst
   item.rst
   slice.rst
   scrollTop.rst
   scrollLeft.rst
   height.rst
   width.rst
   addStyleSheet.rst
   append.rst
   appendTo.rst
   prepend.rst
   prependTo.rst
   insertBefore.rst
   before.rst
   after.rst
   insertAfter.rst

   animate.rst
   stop.rst
   show.rst
   hide.rst
   toggle.rst
   fadeIn.rst
   fadeOut.rst
   slideDown.rst
   slideUp.rst

    
        