.. currentmodule:: component

Component.Extension.Box
===============================

|  盒子。组件扩充类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review



Class
---------------------------------

    * :class:`~component.extension.Box`
  

Configs
-----------------------------------------------

    * :data:`~component.extension.Box.config.content`
    * :data:`~component.extension.Box.config.width`
    * :data:`~component.extension.Box.config.height`
    * :data:`~component.extension.Box.config.elCls`
    * :data:`~component.extension.Box.config.elStyle`
    * :data:`~component.extension.Box.config.elAttrs`
    * :data:`~component.extension.Box.config.elBefore`
    * :data:`~component.extension.Box.config.render`
    * :data:`~component.extension.Box.config.visible`
    * :data:`~component.extension.Box.config.visibleMode`
    * :data:`~component.extension.Box.config.srcNode`

Attributes
-----------------------------------------------     

    * :attr:`~component.extension.Box.prototype.el`
    * :attr:`~component.extension.Box.prototype.contentEl`
    * :attr:`~component.extension.Box.prototype.content`
    * :attr:`~component.extension.Box.prototype.visible`
    
Methods
-----------------------------------------------

    * :meth:`~component.extension.Box.prototype.show`    
    * :meth:`~component.extension.Box.prototype.hide`    
    

Events
-----------------------------------------------

  * :func:`~component.extension.Box.Events.hide`
  * :func:`~component.extension.Box.Events.show`
  * :func:`~component.extension.Box.Events.beforeVisibleChange`

    

Class Detail
--------------------------

.. class:: extension.Box

    | **Box** (config)
    
    :param Object config: 配置项，详细见下方 **Configs Detail** .
    
    
Configs Detail
-----------------------------------------------

.. data:: extension.Box.config.content

    {String} - 可选, 设置内容 html.

.. data:: extension.Box.config.width

    {Number} - 可选，组件的宽度，单位像素
    
    
.. data:: extension.Box.config.height

    {Number} - 可选，组件的高度，单位像素
    
.. data:: extension.Box.config.elCls

    {String} - 可选，附加给组件根节点的样式类    

.. data:: extension.Box.config.elStyle

    {Object} - 可选，附加给组件根节点的内联样式
    
.. data:: extension.Box.config.elAttrs

    {Object} - 可选，附加给组件根节点的属性键值对
    
.. data:: extension.Box.config.elBefore

    {KISSY.Node} - 可选，组件根节点的渲染到该节点之前.
    
.. data:: extension.Box.config.render

    {KISSY.Node} - 默认 S.all("body")，组件根节点的渲染为该节点最后一个节点.  
    
.. data:: extension.Box.config.visible

    {Boolean} - 默认 true ，是否显示
    
.. data:: extension.Box.config.visibleMode

    {String} - 默认 "display" ，如何控制显示与否.可选 "display" 与 "visible"    
    
.. data:: extension.Box.config.srcNode

    {KISSY.Node} - 可选，组件从页面中已存在的该节点中渲染而来.
    

 假设 组件 X 继承自 UIBase 并扩充了 Box 
 
.. code-block:: javascript

    var x=new X({width:12,height:12});
    // 渲染为 body 下第一个节点
    x.render();
    

Attributes Detail
-------------------------------------------------------


.. attribute:: extension.Box.prototype.el

    {KISSY.Node} - 该组件的根节点. 注意调用 render() 后才可以取得.

.. attribute:: extension.Box.prototype.contentEl

    {KISSY.Node} - 该组件的内容所在节点，一般和 el 相同（除了 :class:`overlay.Overlay` ，
    :class:`menu.SubMenu` 等）.
    注意调用 render() 后才可以取得.

.. attribute:: extension.Box.prototype.content

    {String} - 设置的 content 属性

.. attribute:: extension.Box.prototype.visible

    {Boolean} - 该组件是否显示
        
    
Methods Detail
-----------------------------------------------    

.. method:: extension.Box.prototype.show()

    | **show()**

    渲染该组件并显示出来.
    
.. method:: extension.Box.prototype.hide()

    | **hide()**

    隐藏该组件并显示出来.

    
Events Detail
-----------------------------------------------

.. function:: extension.Box.Events.hide
    
    | **hide** ()
    | 当组件隐藏时触发

.. function:: extension.Box.Events.show

    | **show** ()
    | 当组件显示时触发

.. function:: extension.Box.Events.beforeVisibleChange

    | **beforeVisibleChange** (ev)
    | 当组件隐藏或显示前触发

    :param Boolean ev.newVal: 将要隐藏时为 false, 将要显示时为 true
    :param Boolean ev.prevVal: 当前悬浮层显示与否
    :returns: {Boolean} - 返回 false 时, 则会阻止将要进行的显示或隐藏动作.