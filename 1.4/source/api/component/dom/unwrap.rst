.. currentmodule:: dom

unwrap
=================================


Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: unwrap

    | void **unwrap** ( selector )
    | 移除符合 selector 的节点的父节点
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`

.. code-block:: html

    <div class="container">
      <div class="new">
        <div class="inner">Hello</div>
      </div>
      <div class="new">
        <div class="inner">Goodbye</div>
      </div>
    </div>


after

.. code-block:: javascript

    DOM.unwrap(".inner");

become

.. code-block:: html

     <div class="container">
      <div class="inner">Hello</div>
      <div class="inner">Goodbye</div>
    </div>
