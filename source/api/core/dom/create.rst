.. currentmodule:: DOM

.. _dom-create:

create
=================================

Class
-----------------------------------------------

  :js:data:`KISSY.DOM`

Methods
-----------------------------------------------

.. function:: create( html [ , props = {} , ownerDoc = document ] )

    创建 dom 节点
    
    :param string html: dom 节点的 html
    :param object props: 属性键值对象
    :param HTMLDocument ownerDoc: 节点所属文档
    :returns: {HTMLFragment|HTMLElement} - 创建出的 dom 节点或碎片列表
    
    举例：

    .. code-block:: javascript

        var S = KISSY, DOM = S.DOM;

        // 等价 document.createElement('div')
        DOM.create('<div>');
        DOM.create('<div />');
        DOM.create('<div></div>');

        // 等价 document.createTextNode('text')
        DOM.create('text');

        // 创建时，同时添加属性值
        DOM.create('<a>', { href: 'hot.html', title: 'Hot Page' });

        // KISSY v1.1.5+， 创建时，支持添加更多的属性；
        // 新增属性有： val, css, html, text, data, width, height, offset
        DOM.create('<a>', { href: 'hot.html',
                            title: 'Hot Page',
                            css: {color: 'blue'},
                            text: 'Test Link'
                  });

        // 直接内联属性
        DOM.create('<img src="logo.png" alt="logo" />');