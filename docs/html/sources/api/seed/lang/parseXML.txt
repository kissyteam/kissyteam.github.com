.. currentmodule:: seed

parseXML
===============================

.. versionadded:: 1.2

Module
-----------------------------------------------

  :mod:`seed`


Methods
-----------------------------------------------

.. function:: KISSY.parseXML

    | String **KISSY.parseXML** (str)
    | 将字符串转化为 xml 文档
    
    :param string str: 有效的 xml 文档字符串
    :returns: xml 文档
        
    .. note::

        KISSY.parseXML 使用原生的浏览器机制进行 xml 解析。结果 xml 文档可以像 html dom 一样进行选择器查找。
        默认 kissy 对于 xml 文档仅支持 ``tag`` 选择器.
        载入 ``sizzle`` 后可对返回的 xml 文档进行全面遍历.
    
    例如

    .. code-block:: javascript

        var xml = "<rss version='2.0'><channel><title>RSS Title</title></channel></rss>";
        var xmlDoc=KISSY.all(KISSY.parseXML(xml));
        alert(xmlDoc.one("title").text()); // => RSS Title
        
