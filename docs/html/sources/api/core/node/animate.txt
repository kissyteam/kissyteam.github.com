.. currentmodule:: Node

animate()
==================================================

.. method:: NodeList.animate( props[, duration=1, easing='easeNone', callback, nativeSupport=true] )

    在当前节点列表上开始动画.
    
    :rtype: NodeList

.. code-block:: javascript

    var node=KISSY.all(".foo");
    node.animate(...);           
           
相当于：

.. code-block:: javascript

    KISSY.query(".foo").each(function(n){
        new KISSY.Anim(n,...).run();
    });
    
所以详细参数请参考 : :class:`~Anim.Anim`  构造器接口. 

.. note::

    回调 callback 在每个元素动画结束后都会回调， this 值指向当前单个元素所属的动画对象.    