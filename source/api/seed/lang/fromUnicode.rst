.. currentmodule:: Lang

fromUnicode
===============================

.. versionadded:: 1.2

Module
-----------------------------------------------

  :mod:`Lang`


Methods
-----------------------------------------------

.. function:: KISSY.fromUnicode

    | Boolean **KISSY.fromUnicode** (str)
    | 将 str 中 unicode 转义的字符替换成真实字符。主要用于 taobao 用户名 cookie 读取。
    
    :param string str: 包含 unicode 转义的字符串
    :returns: unicode 转义后的字符串
    :rtype: string
    
    例如

    .. code-block:: javascript

        KISSY.fromUnicode("\\u627F\\u7389") // => "承玉"