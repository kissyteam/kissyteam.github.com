.. currentmodule:: seed

unEscapeHTML
===============================



Module
-----------------------------------------------

  :mod:`seed`


Methods
-----------------------------------------------

.. function:: KISSY.unEscapeHTML

    | String **KISSY.unEscapeHTML** (str)
    | 将字符串中的 html 实体字符替换成对应字符
    
    :param string str: 包含 html 实体字符的字符串
    :returns: 替换实体字符后的字符串
    :rtype: string

    例如

    .. code-block:: javascript

        KISSY.unEscapeHTML("&lt;a&gt;x&lt;/a&gt;"); // =>  "<a>x</a>"

.. note::

    该函数只会 unescape 以下字符序列（正则式）

    .. code-block:: javascript

        &amp; &lt; &gt; &#x60; &#x2F; &quot; &#x27; &#\d{1,5}


