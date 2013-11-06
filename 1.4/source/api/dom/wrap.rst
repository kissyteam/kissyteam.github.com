.. currentmodule:: dom

wrap
=================================


Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: wrap

    | void **wrap** ( selector,wrapperNode )
    | 用 wrapperNode 分别包装符合 selector 的节点
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    :param HTMLElement wrapperNode: 包装节点

.. code-block:: html

    <div class="container">
      <div class="inner">Hello</div>
      <div class="inner">Goodbye</div>
    </div>

after

.. code-block:: javascript

    DOM.wrap(".inner",DOM.create('<div class="new" />'));

become

.. code-block:: html

    <div class="container">
      <div class="new">
        <div class="inner">Hello</div>
      </div>
      <div class="new">
        <div class="inner">Goodbye</div>
      </div>
    </div>
