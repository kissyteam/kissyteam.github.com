.. module:: base

base
===============================

.. raw:: html

    <a class='source-button' href='https://github.com/kissyteam/kissy/tree/1.3.x/src/base' target='_blank'>view base source</a>

.. code-block:: javascript

    KISSY.use('base',function(S,Base){
        // use Base
    });

.. note::

    鉴于不同浏览器对属性描述符的支持并不统一, KISSY 的 attribute 模块, 模拟实现了属性描述符, 提供属性的获取和设置操作, 即属性的 getter 和 setter 动作.

    而 KISSY 的 base 提供给我们一个基类, 整合了 attribute 功能, 让继承 base 的子类自动具有 attribute 的功能.

Module
-----------------------------------------------

  :mod:`base`


Classes
-----------------------------------------------

.. toctree::
   :titlesonly:

   attribute.rst
   base.rst


