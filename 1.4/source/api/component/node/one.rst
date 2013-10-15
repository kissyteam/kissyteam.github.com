.. currentmodule:: node

one
==================================================

|  该方法的快捷方式为 ``KISSY.one``

Module
-----------------------------------------------

  :mod:`node`

Methods
-----------------------------------------------

.. staticmethod:: NodeList.one

    | NodeList **one** ( args... )
    | 如果参数为选择字符串, 找不到则返回 null
    | 其他情况下等同于 NodeList.all( args... ).item(0)
    
    :returns: null 或者 NodeList 对象
    :rtype: NodeList
    
    .. code-block:: javascript

        NodeList.one("#noexist") // => null

        NodeList.one() // 其他 => NodeList.all()
