.. currentmodule:: Node

equals()
==================================================

.. method:: NodeList.equals( others )

    比较当前节点列表和 others 代表的节点列表是否完全相同
    
    :param NodeList others: 要比较的目标节点列表
    :returns: true/false
    :rtype: boolean
    
    
例子:

.. code-block:: html

    <div class='a b' id='a'>
    </div>
    <div class='a b' id='b'>
    </div>
    
    <script>
        KISSY.all(".a").equals(KISSY.all(".b")) // => true
    </script>