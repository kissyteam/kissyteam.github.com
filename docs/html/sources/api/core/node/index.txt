.. module:: Node

Node
====================================

by `承玉 <yiminghe@gmail.com>`_ 


.. versionchanged:: 1.2
    Node 包括 :mod:`DOM` 模块的所有功能，推荐采用 ``Node`` 模块取代 ``DOM`` 模块，
    你只需要把 ``KISSY.all`` 看做 ``jquery`` 中的 ``$`` 就可以了，
    链式操作你会喜欢的！
    
获取模块

.. code-block:: javascript
    
    // 也可载入 kissy.js 后直接 KISSY.Node/KISSY.NodeList，实际上 KISSY.Node=KISSY.NodeList
    KISSY.use("node",function(S,Node){
        var NodeList=Node;        
    });
    
    
特色方法：  
    
.. toctree::
   :maxdepth: 1

   nodelist.rst
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
   
   
转发方法:

该类方法调用会被转发给 :mod:`DOM` ，原 ``DOM`` 对应方法的第一个参数传入一个原生 DOM 节点数组，而这个原生 DOM 节点数组则是由当前的 ``KISSY NodeList`` 对象得到的。 

``Node`` 模块会对返回值进行处理:

* 如果返回值为单个节点或节点数组则包装为 :class:`NodeList`
* 如果返回值为 ``undefined`` ，则返回调用者 ``NodeList`` 对象
* 其他，直接返回

具体方法包括：

* :func:`~DOM.filter`
* :func:`~DOM.test`  
* :func:`~DOM.hasClass` 
* :func:`~DOM.addClass`
* :func:`~DOM.removeClass`
* :func:`~DOM.replaceClass`
* :func:`~DOM.toggleClass`
* :func:`~DOM.removeAttr`
* :func:`~DOM.attr`
* :func:`~DOM.hasAttr`
* :func:`~DOM.val`
* :func:`~DOM.text`
* :func:`~DOM.css`
* :func:`~DOM.show`
* :func:`~DOM.hide`
* :func:`~DOM.toggle`
* :func:`~DOM.offset`
* :func:`~DOM.scrollIntoView`               
* :func:`~DOM.parent`
* :func:`~DOM.next`
* :func:`~DOM.prev`
* :func:`~DOM.siblings`
* :func:`~DOM.children`
* :func:`~DOM.contains`
* :func:`~DOM.html`
* :func:`~DOM.remove`
* :func:`~DOM.data`
* :func:`~DOM.removeData`
* :func:`~DOM.hasData`
* :func:`~DOM.unselectable`  