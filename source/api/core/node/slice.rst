.. currentmodule:: Node

slice()
==================================================

.. method:: NodeList.slice( start [ , end ] )

    .. versionadded:: 1.2
        获取包含当前节点列表选定范围内原生节点的新 NodeList 对象
    
    :param number start: 范围开始位置
    :param number end: 范围结束位置，忽略的话结束坐标为当前列表末尾
    :rtype: NodeList
    
.. note::
    调用该方法并不会改变当前 NodeList 实例
    
例子:

.. code-block:: html

    <div class='a' id='a'>
    </div>
    <div class='a' id='b'>
    </div>
    <div class='a' id='c'>
    </div>
    <div class='a' id='d'>
    </div>
    
    <script>
        var as=NodeList.all(".a");
        var subs=as.slice(1,3); // => subs != as
        subs.length // => 2
        subs.item(0).attr("id") // => b
        subs.item(1).attr("id") // => c
    </script>