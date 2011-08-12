.. currentmodule:: Node

all
==================================================

|  该方法的快捷方式为 ``KISSY.all``

Module
-----------------------------------------------

  :mod:`Node`

Methods
-----------------------------------------------

.. staticmethod:: NodeList.all

    | NodeList **all** ( selector , [ context ] )
    | 根据选择器字符串得到节点列表
    
    :param string selector: 选择器字符串
    :param HTMLELement|Document|NodeList context:   选择器上下文, 
    
        .. versionadded:: 1.2 
            格式参照 :func:`DOM.query` ，增加了 :class:`NodeList` 支持.
            
    :rtype: NodeList
    

    | NodeList **all**  ( element )

    :param HTMLElement element: 包装成 NodeList 类型的原生 dom 节点
    :rtype: NodeList
    
    | NodeList **all**  ( elementArray )

    :param Array<HTMLElement>|HTMLCollection elementArray: 包装成 NodeList 类型的原生 dom 节点集合
    :rtype: NodeList
    
    | NodeList **all** ( nodeList )

    :param NodeList nodeList: 克隆出一个新的 NodeList 对象
    :rtype: NodeList        
    
    
    在第一种形式中, NodeList.all() 找到所以匹配选择器参数的原生 dom 节点, 然后创建一个新的 NodeList 对象来指向这些元素, 例如

    .. code-block:: javascript

        NodeList.all("div.foo");
    

    **选择器上下文**

    默认情况下是在文档根节点开始依据选择器字符串开始匹配元素查找. 但是一个上下文可以作为可选的第二个参数来限定查找范围, 例如在事件处理器
    范围内进行查找匹配元素：

    .. code-block:: javascript

        var $=NodeList.all;
        $('div.foo').on("click",function() {
          $('span', this).addClass('bar');
        });

    当对 ``span`` 的选择限定在 this 中时, 只有位于点击元素内的 span 节点会被设置格外的 class.也可以通过 ``$(this).all("span")`` 来实现限定搜索范围.


    **使用原生 DOM 节点**

    第二, 第三种方法使用现有的原生 dom 节点来创建 NodeList 对象. 常用的应用场景是从事件处理器的 this 关键字中创建 NodeList 对象

    .. code-block:: javascript

        var $=NodeList.all;
        $('div.foo').on("click",function() {
          $(this).slideUp();
        });

    这个例子会导致元素点击时以滑动的效果隐藏. 因为事件处理器中的 this 默认指向原生 dom 节点, 在调用 slideUp 方法前一定要通过 NodeList.all 构建 NodeList 对象.


    **克隆 NodeList 对象**

    当一个 NodeList 对象作为参数传递给 NodeList.all 时, 会返回该对象的克隆对象. 返回的克隆对象和源对象指向同一个原生 dom 节点集合.


    | NodeList **all** ( html , [ ownerDocument ] )

    :param string html: 用来得到 dom 节点的 html 字符串
    :param HTMLDocument ownerDocument: 创建的新节点所在的文档
    :rtype: NodeList


    如果一个字符串传递给 Node.all 作为参数, Node.all 会检查该字符粗韩是否像一个html串(例如形式为 <tag ... >). 如果不是, 那么字符串参数就会作为一个选择器字符串, 进行选择元素操作. 如果字符串是一个html片段, 那么就会创建相应的 dom 节点, 并且返回一个新的 NodeList 对象指向产生的 dom 节点.

    .. note::
        为了确保各个浏览器的兼容性, html 片段必须是结构完整的, 例如, 包含结束标签：

        .. code-block:: javascript

            NodeList.all("<a href='http://docs.kissyui.com'></a>");

        如果创建单个元素不带任何属性和子节点, 也可以

        .. code-block:: javascript

            NodeList.all("<a>")

Demo
--------------------------------------------------


    **得到一个包装新 dom element 的 KISSY NodeList**

    .. code-block:: javascript

        var nl=NodeList.all("<div></div><p></p>");
        var domNodes=nl.getDOMNodes();
        domNodes[0].nodeType == 1 // => true : Html Element

    **得到一个包装现有 dom element 的 KISSY NodeList**

    .. code-block:: javascript

        var domNodes=document.getElementsByTagName("div");
        var nl=NodeList.all(domNodes);
        domNodes=nl.getDOMNodes();
        domNodes[0].nodeType == 1 // => true : Html Element
        domNodes[0].nodeType == 1 // => true : Html Element

    **当然 NodeList.all 可以直接获取选择器字符串匹配的节点列表**

    .. code-block:: javascript

        var nl=NodeList.all("div"); // 选择器功能而不是创建 text node
        domNodes=nl.getDOMNodes();
        domNodes[0].nodeType == 1 // => true : Html Element
        domNodes[0].nodeType == 1 // => true : Html Element


    **找到页面第一个表单的所有输入框**

    .. code-block:: javascript

        NodeList.all("input",document.forms[0]);

    **设置页面的背景色为黑色**

    .. code-block:: javascript

        NodeList.all(document.body).css("background","black");

    **隐藏一个表单内的所有输入框**

    .. code-block:: javascript

        NodeList.all(myForm.elements).hide();

                               