.. currentmodule:: dom

parent
=================================

Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: parent

    | HTMLElement **parent** (selector [ , filter ])
    | 获取符合选择器的第一个元素的祖先元素.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param number|string|function|string[]|function[] filter: 过滤条件,
        数组表示会返回所有符合 filter 的祖先元素，否则只会返回第一个符合条件的祖先元素。
        整数以及数组外的例子参见 :func:`dom.filter <dom.filter>` 的相应参数
    :returns: 符合选择器的第一个元素的祖先元素.
    :rtype: HTMLElement

    .. code-block:: javascript

        var S = KISSY, DOM = S.DOM,
        elem = S.get('#id');

        // 返回 elem.parentNode
        DOM.parent(elem);

        // 返回 elem.parentNode.parentNode
        DOM.parent(elem, 2);

        // 寻找 elem 的祖先节点, 返回第一个拥有 container class 值的祖先
        DOM.parent(elem, '.container');

        // 寻找 elem 的祖先节点, 返回所有拥有 container class 值的祖先
        DOM.parent(elem, ['.container']);

        // 寻找 elem 的祖先节点, 返回第一个 tagName 为 ul 的祖先
        DOM.parent(elem, 'ul');

        // 寻找 elem 的祖先节点, 返回第一个 rel 属性为 data 值的祖先
        DOM.parent(elem, function(p) {
            return DOM.attr(p, 'rel') == 'data';
        });