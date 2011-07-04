.. currentmodule:: Node

add()
==================================================
.. versionadded:: 1.2
    参数包含以下形式 : 

.. method:: NodeList.add( selector [ , context ] )

    返回包含合并选择器字符串匹配的元素和当前节点列表元素的新 NodeList 对象
    
    :rtype: NodeList
    
.. method:: NodeList.add( element )

    :rtype: NodeList
    
.. method:: NodeList.add( elementArray )

    :rtype: NodeList
    
.. method:: NodeList.add( nodeList )

    :rtype: NodeList     
    
参数同 :meth:`~NodeList.all` 保持一致.

.. note::
    调用该方法并不会改变当前 NodeList 对象.
           
    
    
例子:

.. code-block:: html

    <p>1</p><div>2</div>
    
    <script>
        var pdiv = $("p");
        var all=pdiv.add("div");  //  pdiv will not change
        all.css("color","red"); // => 1,2 都为红字
    </script>