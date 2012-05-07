.. currentmodule:: uibase

UIBase.Box
===============================

|  盒子。组件扩充类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review



Class
---------------------------------

    * :class:`Box`
  

Config Attributes
-----------------------------------------------

    * :data:`~Box.config.width`
    * :data:`~Box.config.height`
    * :data:`~Box.config.elCls`
    * :data:`~Box.config.elStyle`
    * :data:`~Box.config.elAttrs`
    * :data:`~Box.config.elBefore`
    * :data:`~Box.config.render`
    * :data:`~Box.config.visible`
    * :data:`~Box.config.visibleMode`
    * :data:`~Box.config.srcNode`

Properties
-----------------------------------------------     

    * :attr:`~Box.prototype.el` 
    
Methods
-----------------------------------------------

    * :meth:`~Box.prototype.show`    
    * :meth:`~Box.prototype.hide`    
    

Events
-----------------------------------------------

  * :func:`hide`
  * :func:`show`
  * :func:`beforeVisibleChange`    

    

Class Detail
--------------------------

.. class:: Box

    | **Box** (config)
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
    
Config Attributes Detail
-----------------------------------------------
    
.. data:: Box.config.width

    {Number} - 可选，组件的宽度，单位像素
    
    
.. data:: Box.config.height

    {Number} - 可选，组件的高度，单位像素
    
.. data:: Box.config.elCls

    {String} - 可选，附加给组件根节点的样式类    

.. data:: Box.config.elStyle

    {Object} - 可选，附加给组件根节点的内联样式
    
.. data:: Box.config.elAttrs

    {Object} - 可选，附加给组件根节点的属性键值对
    
.. data:: Box.config.elBefore

    {KISSY.Node} - 可选，组件根节点的渲染到该节点之前.
    
.. data:: Box.config.render

    {KISSY.Node} - 默认 S.all("body")，组件根节点的渲染为该节点最后一个节点.  
    
.. data:: Box.config.visible

    {Boolean} - 默认 true ，是否显示
    
.. data:: Box.config.visibleMode

    {String} - 默认 "display" ，如何控制显示与否.可选 "display" 与 "visible"    
    
.. data:: Box.config.srcNode

    {KISSY.Node} - 可选，组件从页面中已存在的该节点中渲染而来.
    

 假设 组件 X 继承自 UIBase 并扩充了 Box 
 
.. code-block:: javascript

    var x=new X({width:12,height:12});
    // 渲染为 body 下第一个节点
    x.render();
    

Properties Detail
-------------------------------------------------------


.. attribute:: Box.prototype.el

    {KISSY.Node} - 该组件的根节点. 注意调用 render() 后才可以取得.


        
    
Methods Detail
-----------------------------------------------    

.. method:: Box.prototype.show()

    | **show()**

    渲染该组件并显示出来.
    
.. method:: Box.prototype.hide()

    | **hide()**

    隐藏该组件并显示出来.

    
Events Detail
-----------------------------------------------

.. function:: hide
    
    | **hide** ()
    | 当组件隐藏时触发

.. function:: show

    | **show** ()
    | 当组件显示时触发

.. function:: beforeVisibleChange

    | **beforeVisibleChange** (ev)
    | 当组件隐藏或显示前触发

    :param Boolean ev.newVal: 将要隐藏时为 false, 将要显示时为 true
    :param Boolean ev.prevVal: 当前悬浮层显示与否
    :returns: {Boolean} - 返回 false 时, 则会阻止将要进行的显示或隐藏动作.