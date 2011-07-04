.. currentmodule:: Node


height()
========================================

读
--------------------------------------------

.. method:: NodeList.height()


    得到当前节点列表第一个节点的计算高度
        
    :rtype: number
    
和 ``css('height')`` 的区别在于该函数返回不带单位的纯数值，而前者则返回带单位的原始值（例如 ``400px`` ）.
当需要数值计算时，推荐该方法，如图所示：(from jquery)

.. image:: /_images/node/height.png
   :alt: from jquery
    
.. versionadded:: 1.2
    该方法也可以用来得到 windw 和 document 的高度

.. code-block:: javascript

    KISSY.use("node",function(S,Node){
        Node.all(window).height(); // 得到浏览器可以区域的高度，相当于 DOM.viewportHeight()
        Node.all(document).height(); //得到 html 文档的高度，相当于 DOM.docHeight()
    });
    
例子
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

得到各种各样的高度，黄色高亮区域代表 iframe 体。

.. literalinclude:: /_static/api/core/node/height-get.html
   :language: html

效果
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    <iframe width="100%" height="135" src="../../../static/api/core/node/height-get.html"></iframe>    
       
  
写
--------------------------
       
.. method:: NodeList.height( value )

    设置当前列表每个元素的 css height 值。
    
    :param number|string value: 代表像素的整数值，或数字加上其他单位的字符串值.
    
.. note::

    在现代浏览器中，css height 属性不包括 padding , border 或者 margin.   
    
例子
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. literalinclude:: /_static/api/core/node/height-set.html
   :language: html

效果
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   
.. raw:: html

    <iframe width="100%" height="135" src="../../../static/api/core/node/height-set.html"></iframe>              