.. currentmodule:: seed

escapeHTML
===============================



Module
-----------------------------------------------

  :mod:`seed`


Methods
-----------------------------------------------

.. function:: KISSY.escapeHTML

    | String **KISSY.escapeHTML** (str)
    | 将字符串经过 html 转义得到适合在页面中显示的内容, 例如替换 ``<`` 为 ``&lt;``
    
    :param string str: 要显示在页面中的真实内容
    :returns: 经过 html 转义后的字符串
    :rtype: string
    
    例如

    .. code-block:: javascript

        KISSY.escapeHTML("<a>x</a>"); // =>  "&lt;a&gt;x&lt;/a&gt;"

.. note::

    此函数只会对以下符号进行 escape：

    .. code-block:: javascript

        & > < ` / " '

