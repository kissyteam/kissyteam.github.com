.. currentmodule:: Web

isWindow
===============================


Module
-----------------------------------------------

  :mod:`Web`


Methods
-----------------------------------------------

.. function:: KISSY.isWindow

    | void **KISSY.isWindow** (o)
    | 判断参数是否为浏览器 window

    :param o: 需要判断的对象
    

    目前实现为：

    .. code-block:: javascript

        isWindow: function(o) {
            return S.type(o) === 'object'
                && 'setInterval' in o
                && 'document' in o
                && o.document.nodeType == 9;
        }

    有更好的实现，欢迎提出.
