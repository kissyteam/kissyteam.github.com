.. currentmodule:: Node

one()
==================================================

.. function:: NodeList.one( args... )

    * 如果参数为选择字符串，找不到则返回 null
    * 其他情况下等同于 NodeList.all( args... )
    
    :returns: null 或者 NodeList 对象
    :rtype: NodeList
    
    
例子:

.. code-block:: javascript

    NodeList.one("#noexist") // => null
    
    NodeList.one() // 其他 => NodeList.all()