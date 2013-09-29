.. module:: node

node
====================================

.. raw:: html

    <a class='source-button' href='https://github.com/kissyteam/kissy/tree/1.4.x/src/node' target='_blank'>view node source</a>


.. code-block:: javascript

    KISSY.use('node',function(S,Node){
        // use Node
    });

.. note::
    node 包括 :mod:`dom <dom>` , :mod:`event` , :mod:`anim` 模块的所有功能, 推荐采用 ``Node`` 模块,
    你只需要把 ``KISSY.all`` 看做 ``jquery`` 中的 ``$`` 就可以了,
    链式操作你会喜欢的！

Module
-----------------------------------------------

  :mod:`node`


Class
-------------------------------------
.. toctree::
   :titlesonly:
   
   nodelist.rst
   
Static Methods
--------------------------

.. toctree::
   :titlesonly:
   
   all.rst
   one.rst   
   

Member Methods
-----------------------------------------------

.. toctree::
   :titlesonly:
  
   instance_all.rst
   instance_one.rst
   getDOMNodes.rst
   getDOMNode.rst
   end.rst  
   equals.rst
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
   pause.rst
   resume.rst
   isRunning.rst
   isPaused.rst
   show.rst
   hide.rst
   toggle.rst
   fadeIn.rst
   fadeOut.rst
   fadeToggle.rst
   slideDown.rst
   slideUp.rst
   slideToggle.rst
   
.. note::

        以下的这些方法,
        :func:`~dom.filter` , :func:`~dom.test` , :func:`~dom.clone` ,
        :func:`~dom.empty` ,
        :func:`~dom.replaceWith` ,
        :func:`~dom.hasClass`, :func:`~dom.addClass`, :func:`~dom.removeClass`,
        :func:`~dom.replaceClass`, :func:`~dom.toggleClass`, :func:`~dom.removeAttr`,
        :func:`~dom.attr`, :func:`~dom.hasAttr`,
        :func:`~dom.prop`, :func:`~dom.hasProp`, :func:`~dom.val`, :func:`~dom.text`, :func:`~dom.css`, :func:`~dom.toggle`,
        :func:`~dom.offset`, :func:`~dom.scrollIntoView`, :func:`~dom.parent`,
        :func:`~dom.index`,
        :func:`~dom.next`, :func:`~dom.prev`,
        :func:`~dom.first`, :func:`~dom.last`,
        :func:`~dom.siblings`, :func:`~dom.children`,
        :func:`~dom.contains`, :func:`~dom.html`, :func:`~dom.remove`, :func:`~dom.data`, :func:`~dom.removeData`,
        :func:`~dom.hasData`, :func:`~dom.unselectable`, :func:`~dom.contains`,
        :func:`~dom.innerWidth`, :func:`~dom.innerHeight`, :func:`~dom.outerWidth`, :func:`~dom.outerHeight`,
        :func:`~event.on`, :func:`~event.detach`, :func:`~event.fire`,
        的调用都会被转发给 :mod:`dom <dom>` , :mod:`event` , 原 ``DOM`` , ``Event`` 对应方法的第一个参数传入一个原生 DOM 节点数组, 而这个原生 DOM 节点数组则是由当前的 ``KISSY NodeList`` 对象得到的.

        ``Node`` 模块会对返回值进行处理:

            * 如果返回值为单个节点或节点数组, 则包装为 :class:`NodeList`
            * 如果返回值为 ``undefined`` , 则返回调用者 ``NodeList`` 对象
            * 其他, 直接返回


.. note::
    ``Node`` 模块的 ``on`` 方法中的 ``this`` 关键字指向当前绑定事件的单个原生节点, 事件对象的 ``target`` 和 ``relatedTarget`` 也指向对应的原生节点, 

.. code-block:: html

    <div id='d1' class='d'></div>
    <div id='d2' class='d'></div>

    <script>
        KISSY.all(".d").on("mouseenter",function(ev){
            this.id // => d1 或者 d2
            ev.target.id // => d1 或者 d2
            ev.relatedTarget // => d1 或者 d2 或者 document.body
                            // 或者 document.documentElement
        });
    </script>
    
为了保持应用兼容，推荐的做法是，在回调函数开始包装 this （需要的话同样包装 event.target）

.. code-block:: html

    <div id='d1' class='d'></div>
    <div id='d2' class='d'></div>

    <script>
        KISSY.all(".d").on("mouseenter",function(ev){
            var self=KISSY.one(this);
            self.attr("id") // => d1 或者 d2
        });
    </script>


