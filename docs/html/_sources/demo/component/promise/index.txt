.. _promise-demo:

.. currentmodule:: seed

Promise 使用示例
===============================

Classes
-----------------------------------------------

  :class:`Promise`

  :class:`Defer`

Demos
-----------------------------------------------

链式传递的效果
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    <iframe width="100%" height="50" class="iframe-demo"
    src="../../../../../source/raw/demo/promise/index.html?type=chain"></iframe>

.. literalinclude:: /raw/demo/promise/assets/chain.js
       :language: javascript


resolve 和 then 没有顺序依赖
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    <iframe width="100%" height="50" class="iframe-demo"
     src="../../../../../source/raw/demo/promise/index.html?type=chain-order"></iframe>

.. literalinclude:: /raw/demo/promise/assets/chain-order.js
       :language: javascript


错误可以被传递
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    <iframe width="100%" height="50" class="iframe-demo"
    src="../../../../../source/raw/demo/promise/index.html?type=error-propagate"></iframe>

.. literalinclude:: /raw/demo/promise/assets/error-propagate.js
       :language: javascript


前一个 promise 如果处理了错误并返回会影响下一个 promise 的成功回调
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    <iframe width="100%" height="50" class="iframe-demo"
    src="../../../../../source/raw/demo/promise/index.html?type=error-recovery"></iframe>

.. literalinclude:: /raw/demo/promise/assets/error-recovery.js
       :language: javascript



前一个 promise 的成功或失败回调如果抛出异常则影响下一个 promise 的失败回调
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    <iframe width="100%" height="50" class="iframe-demo"
    src="../../../../../source/raw/demo/promise/index.html?type=error-throw"></iframe>

.. literalinclude:: /raw/demo/promise/assets/error-throw.js
       :language: javascript



成功回调可以返回新的 promise 进行嵌套处理
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    <iframe width="100%" height="50" class="iframe-demo"
    src="../../../../../source/raw/demo/promise/index.html?type=nest"></iframe>

.. literalinclude:: /raw/demo/promise/assets/nest.js
       :language: javascript