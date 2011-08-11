.. currentmodule:: Node

one
==================================================

Module
-----------------------------------------------

  :mod:`Node`

Methods
-----------------------------------------------

.. method::  NodeList.prototype.one

    | NodeList **one** ( selector )
    | 等同于 :func:`this.all( selector ) <NodeList.all>` .item(0)
    
    :param string selector: 选择器字符串
    :returns: null 或者 NodeList 对象
    :rtype: NodeList

    例如:
    
    .. code-block:: javascript

        KISSY.one("#noexist").one(".cls") // => KISSY.one("#noexist .cls")
