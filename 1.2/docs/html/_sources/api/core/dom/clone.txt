.. currentmodule:: dom



clone
=================================

Module
-----------------------------------------------

  :mod:`DOM <dom>`


Methods
-----------------------------------------------

.. function:: clone

    | HTMLElement **clone** (selector [ , deep=false , withDataAndEvent=false , deepWithDataAndEvent=false ])
    | 获取符合选择器的第一个元素的克隆元素.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param boolean deep: 是否深度克隆（克隆节点的子孙节点）
    :param boolean withDataAndEvent: 节点是否具备源节点的 :func:`DOM.data <dom.data>` 属性以及 :mod:`事件 <event>`
    :param boolean deepWithDataAndEvent: 子孙节点是否具备源节点对应子孙节点的 :func:`DOM.data <dom.data>` 属性以及 :mod:`事件 <event>`
    :returns: 符合选择器的第一个元素的克隆元素.
    :rtype: HTMLElement

    .. note::

        普通对象和普通数组请用 :func:`KISSY.clone <seed.KISSY.clone>`

    ``clone`` 方法可以进行深度复制，当配合插入方法时，可以方便得复制页面中的元素.

    .. code-block:: html

        <div class="container">
          <div class="hello">Hello</div>
          <div class="goodbye">Goodbye</div>
        </div>
    
    如果页面中的已存在元素被插入到 DOM 树的其他位置，那么它会从原来的位置移除，如以下代码所示

    .. code-block:: javascript

        KISSY.one('.hello').appendTo('.goodbye');

    产生的 dom 结构如下：

    .. code-block:: html

        <div class="container">
          <div class="goodbye">
            Goodbye
            <div class="hello">Hello</div>
          </div>
        </div>
    
    为了阻止原来的元素移动，而插入一个元素的复制版本，那么你可以这样写

    .. code-block:: javascript

        KISSY.one('.hello').clone(true).appendTo('.goodbye');

    这就会产生：

    .. code-block:: html

        <div class="container">
          <div class="hello">Hello</div>
          <div class="goodbye">
            Goodbye
            <div class="hello">Hello</div>
          </div>
        </div>

    .. note::

        ``clone`` 后, 你可以对其进行修改后再插入，可有效提高性能.
    
    默认情况下 clone 后的元素不会具备源元素的 data 属性以及事件绑定，但是如果你设置了 withDataAndEvent=true ,
    那么 clone 后的元素也会具备源元素的 data 属性以及事件绑定。

    更进一步的你可以设置 deepWithDataAndEvent 来使得 clone 后元素的子孙元素也具备源元素对应子孙元素的 data 属性和事件绑定.注意这时 deep 参数也要设置为 true.


    .. note::

        源元素的对象以及数组类型的 data 属性只是引用被复制到 clone 后的元素，他们的值则会在源元素以及克隆元素间共享，如果想进行 deep copy，请手动进行

        .. code-block:: html

            var elem=KISSY.one(".hello").attr("cutom",{x:1});
            elem.clone().attr("custom",{x:2});
        
        
    示例: **高级点的，克隆后保留原有事件逻辑**

    .. raw:: html

        <iframe width="100%" height="135"  class="iframe-demo" src="../../../_static/api/core/dom/clone.html"></iframe>

    .. literalinclude:: /_static/api/core/dom/clone.html
           :language: html

