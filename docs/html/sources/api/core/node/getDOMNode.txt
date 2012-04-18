.. currentmodule:: node

getDOMNode
==================================================

.. versionadded:: 1.2

Module
-----------------------------------------------

  :mod:`node`

Methods
-----------------------------------------------

.. method:: NodeList.getDOMNode

    | HTMLElement **getDOMNode** ()
    | 得到该 NodeList 对象包含的第一个原生节点


    .. code-block:: html

        <p id='p1'>1</p><p id='p2'>2</p>

        <script>
            var $ = KISSY.all,
                pdiv = $("p"),
                all=pdiv.getDOMNode(); // => document.getElementById("p1")
        </script>