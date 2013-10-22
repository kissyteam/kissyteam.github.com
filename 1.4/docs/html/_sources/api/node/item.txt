.. currentmodule:: node

item
==================================================



Module
-----------------------------------------------

  :mod:`node`

Methods
-----------------------------------------------

.. method:: NodeList.item

    | NodeList **item** ( index )
    | 获取包含当前节点列表 index 位置处的单个原生节点的新 NodeList 对象
    
    :returns: null 或者包含一个原生节点的 NodeList 对象
    :rtype: NodeList


    .. code-block:: html

        <div class='a' id='a'>
        </div>
        <div class='a' id='b'>
        </div>

        <script>
            NodeList.all(".a").item(0).attr("id")  // => a
            NodeList.all(".a").item(1).attr("id")  // => b
            NodeList.all(".a").item(2)  // => null
        </script>