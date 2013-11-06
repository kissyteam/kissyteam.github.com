.. currentmodule:: dom

wrapAll
=================================


Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: wrapAll

    | void **wrapAll** ( selector,wrapperNode )
    | 用 wrapperNode 包装所有符合 selector 的节点
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    :param HTMLElement wrapperNode: 包装节点

.. code-block:: html

    <div class="container">
      <div class="inner">Hello</div>
      <div class="inner">Goodbye</div>
    </div>

after

.. code-block:: javascript

    DOM.wrapAll(".inner",DOM.create('<div class="new" />'));

become

.. code-block:: html

    <div class="container">
      <div class="new">
        <div class="inner">Hello</div>
        <div class="inner">Goodbye</div>
      </div>
    </div>
