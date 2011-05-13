.. currentmodule:: Web

KISSY.ready
===============================

.. function:: KISSY.ready(fn)

    :param function fn: 回调函数，在 DOM 加载完毕时执行。
    
例如：

.. code-block:: javascript

    KISSY.ready(function(S) {
        // code
    });
    
这是 KISSY 外部代码的基本调用方式。
为了保证代码执行时，依赖的 DOM 结构已准备好，推荐尽可能的将代码写在通过 ready 注册的函数里。 

.. note::
           
    在 DOM 加载完毕后，依旧可以通过 ready 添加函数，此时会立刻执行。
    