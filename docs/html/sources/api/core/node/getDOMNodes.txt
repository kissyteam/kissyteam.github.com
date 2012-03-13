.. currentmodule:: node

getDOMNodes
==================================================

.. versionadded:: 1.2

Module
-----------------------------------------------

  :mod:`node`

Methods
-----------------------------------------------

.. method:: NodeList.getDOMNodes

    | Array<HTMLElement> **getDOMNodes** ()
    | 得到该 NodeList 对象包含的原生节点数组


    .. code-block:: html

        <p id='p1'>1</p><p id='p2'>2</p>

        <script>
            var $ = KISSY.all,
                pdiv = $("p"),
                all=pdiv.getDOMNodes(); // => all == [document.getElementById("p1"),document.getElementById("p2")]
        </script>