.. currentmodule:: Lang

substitute
===============================

Module
-----------------------------------------------

  :mod:`Lang`


Methods
-----------------------------------------------

.. function:: KISSY.substitute

    | String **KISSY.substitute** (str,o)
    | 将字符串中的占位符替换为对应的键值。
    
    :param String str: 包含数据占位符的模板字符串，占位符用 ``{}`` 包起来。
    :param Object o: 数据
    :returns: 将模板和数据结合起来的最终字符串
    :rtype: String
    
    例如

    .. code-block:: javascript

        var S = KISSY,
        str = '{name} is {prop_1} and {prop_2}.',
        obj = {name: 'Jack Bauer', prop_1: 'our lord', prop_2: 'savior'};

        S.substitute(str, obj); // => 'Jack Bauer is our lord and savior.'