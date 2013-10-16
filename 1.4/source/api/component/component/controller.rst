.. currentmodule:: component

Component.Controller
===============================

|  合并了原来的 box
|  组件基类.仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review


Class
---------------------------------

    * :class:`Controller`

Configs
-----------------------------------------------

    * :data:`~Controller.config.content`
    * :data:`~Controller.config.disabled`
    * :data:`~Controller.config.elAttrs`
    * :data:`~Controller.config.elBefore`
    * :data:`~Controller.config.elCls`
    * :data:`~Controller.config.elStyle`
    * :data:`~Controller.config.focused`
    * :data:`~Controller.config.height`
    * :data:`~Controller.config.parent`
    * :data:`~Controller.config.prefixCls`
    * :data:`~Controller.config.prefixXClass`
    * :data:`~Controller.config.render`
    * :data:`~Controller.config.srcNode`
    * :data:`~Controller.config.visible`
    * :data:`~Controller.config.width`
    * :data:`~Controller.config.x`
    * :data:`~Controller.config.y`
    * :data:`~Controller.config.zIndex`


Attributes
----------------------------------------------------

    * :attr:`~Controller.prototype.active`
    * :attr:`~Controller.prototype.content`
    * :attr:`~Controller.prototype.disabled`
    * :attr:`~Controller.prototype.el`
    * :attr:`~Controller.prototype.focused`
    * :attr:`~Controller.prototype.height`
    * :attr:`~Controller.prototype.highlighted`
    * :attr:`~Controller.prototype.isControl`
    * :attr:`~Controller.prototype.parent`
    * :attr:`~Controller.prototype.visible`

Methods
-----------------------------------------------

    * :meth:`~Controller.prototype.hide`
    * :meth:`~Controller.prototype.show`


Class Detail
--------------------------

.. class:: Controller

    | **Controller** (config)

    * 继承自 :class:`~base.Base` , 包含其全部配置,属性,方法,事件.
    * 扩展自 :class:`~component.ComponentProcess`, 包含其全部配置，属性，方法，事件.

    :param Object config: 配置项，详细见下方 **Configs Detail** .


Configs Detail
-----------------------------------------------

.. note::

    content 和 srcNode 不能同时都设置

.. data:: Controller.config.content

    {String} - 可选, 设置内容 html.

.. data:: Controller.config.disabled

    {Boolean} - 可选，该组件是否初始禁用.

.. data:: Controller.config.elAttrs

    {Object} - 可选，附加给组件根节点的属性键值对

.. data:: Controller.config.elBefore

    {KISSY.Node} - 可选，组件根节点的渲染到该节点之前.

.. data:: Controller.config.elCls

    {String} - 可选，附加给组件根节点的样式类

.. data:: Controller.config.elStyle

    {Object} - 可选，附加给组件根节点的内联样式

.. data:: Controller.config.focused

    {Boolean} - 可选，该组件是否初始获得焦点.

.. data:: Controller.config.height

    {Number} - 可选，组件的高度，单位像素

.. data:: Controller.config.parent

    {Controller} - 可选，该组件的父组件.

.. data:: Controller.config.prefixCls

    {String} - 可选，默认 "ks-" . 组件的 css 样式类前缀 . 例如假设组件为 menu ，则该组件内的样式类名为 {prefixCls}menu，默认为 "ks-menu".
               可用于实现自定义皮肤.

.. data:: Controller.config.prefixXClass

    {String} - 可选，组件 prefix 的超类。只在config中实用。当超类未被指定时，用这个做超类。

.. data:: Controller.config.render

    {KISSY.Node} - 组件要应用的节点。默认 S.all("body")，组件根节点的渲染为该节点最后一个节点.

.. data:: Controller.config.srcNode

    {KISSY.Node} - 可选，组件从页面中已存在的该节点中渲染而来.

    .. note::

        srcNode 时设置其他属性不起作用，属性通通在 html 标签中指定，并且 html 标签必须包含完整结构，例如 content 节点必须存在

.. data:: Controller.config.visible

    {Boolean} - 默认 true ，是否显示

    .. note::

        只是为组件的根节点添加/删除 {prefix}{component}-hidden 形式的 css class，自行指定具体的 css 样式。

.. data:: Controller.config.width

    {Number} - 可选，组件的宽度，单位像素

.. data:: Controller.config.x

    {Number} - 横轴位置

.. data:: Controller.config.y

    {Nunmber} - 纵轴位置

.. data:: Controller.config.zIndex

    {Number} - z-index 值

Attributes Detail
-----------------------------------------------------

.. attribute:: Controller.prototype.active

    {Boolean} - 组件是否已经激活

.. attribute:: Controller.prototype.content

    {String|KISSY.Node} - 设置的 content 属性

.. attribute:: Controller.prototype.disabled

    {Boolean} - 该组件是否禁用状态.

.. attribute:: Controller.prototype.el

    {KISSY.Node} - 只读属性，该组件的根节点. 注意调用 render() 后才可以取得.

.. attribute:: Controller.prototype.focused

    {Boolean} - 该组件是否获得焦点.

.. attribute:: Controller.prototype.height

    {Number|String} - 组件的高

.. attribute:: Controller.prototype.highlighted

    {Boolean} - 该组件是否处于高亮状态

.. attribute:: Controller.prototype.isControl

    {Boolean} - 标记当前实例是 Control 的实例

.. attribute:: Controller.prototype.parent

    {Boolean} - 只读属性，该组件的父组件

.. attribute:: Controller.prototype.visible

    {Boolean} - 该组件是否显示，同 config 中的 visible，只是添加/删除样式

.. attribute:: Controller.prototype.width

    {Number} - 组件的宽度，单位像素

.. attribute:: Controller.prototype.x

    {Number} - 横轴位置

.. attribute:: Controller.prototype.y

    {Nunmber} - 纵轴位置

.. attribute:: Controller.prototype.zIndex

    {Number} - z-index 值

Methods Detail
-----------------------------------------------

.. method:: Controller.prototype.hide

    | **hide()**
    | 隐藏组件

    :return Object: 自身

.. method:: Controller.prototype.show

    | **show()**
    | 显示组件

    :return Object: 自身