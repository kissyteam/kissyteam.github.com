.. currentmodule:: component

Component.Control
===============================

|  合并了原来的 box
|  组件基类.仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review


Class
---------------------------------

    * :class:`Control`

Configs
-----------------------------------------------

    * :data:`~Control.config.content`
    * :data:`~Control.config.disabled`
    * :data:`~Control.config.elAttrs`
    * :data:`~Control.config.elBefore`
    * :data:`~Control.config.elCls`
    * :data:`~Control.config.elStyle`
    * :data:`~Control.config.focused`
    * :data:`~Control.config.height`
    * :data:`~Control.config.parent`
    * :data:`~Control.config.prefixCls`
    * :data:`~Control.config.prefixXClass`
    * :data:`~Control.config.render`
    * :data:`~Control.config.srcNode`
    * :data:`~Control.config.visible`
    * :data:`~Control.config.width`
    * :data:`~Control.config.x`
    * :data:`~Control.config.y`
    * :data:`~Control.config.xy`
    * :data:`~Control.config.zIndex`


Attributes
----------------------------------------------------

    * :attr:`~Control.prototype.active`
    * :attr:`~Control.prototype.content`
    * :attr:`~Control.prototype.disabled`
    * :attr:`~Control.prototype.el`
    * :attr:`~Control.prototype.focused`
    * :attr:`~Control.prototype.height`
    * :attr:`~Control.prototype.highlighted`
    * :attr:`~Control.prototype.isControl`
    * :attr:`~Control.prototype.parent`
    * :attr:`~Control.prototype.visible`
    * :attr:`~Control.prototype.created`
    * :attr:`~Control.prototype.rendered`
    * :attr:`~Control.prototype.x`
    * :attr:`~Control.prototype.y`
    * :attr:`~Control.prototype.xy`
    * :attr:`~Control.prototype.zIndex`
    * :attr:`~Control.prototype.width`

Methods
-----------------------------------------------

    * :meth:`~Control.extend` <static>
    * :meth:`~Control.prototype.hide`
    * :meth:`~Control.prototype.show`
    * :meth:`~Control.prototype.create`
    * :meth:`~Control.prototype.render`
    * :meth:`~Control.prototype.sync`
    * :meth:`~Control.prototype.move`
    * :meth:`~Control.prototype.blur`
    * :meth:`~Control.prototype.focus`

Events
-----------------------------------------------

    * :func:`~Control.Events.afterBindUI`
    * :func:`~Control.Events.afterCreateDom`
    * :func:`~Control.Events.afterRenderUI`
    * :func:`~Control.Events.afterSyncUI`
    * :func:`~Control.Events.beforeBindUI`
    * :func:`~Control.Events.beforeCreateDom`
    * :func:`~Control.Events.beforeRenderUI`
    * :func:`~Control.Events.beforeSyncUI`
    * :func:`~Control.Events.hide`
    * :func:`~Control.Events.show`
    * :func:`~Control.Events.beforeVisibleChange`


Class Detail
--------------------------

.. class:: Control

    | **Control** (config)

    * 继承自 :class:`~base.Base` , 包含其全部配置,属性,方法,事件.

    :param Object config: 配置项，详细见下方 **Configs Detail** .


Configs Detail
-----------------------------------------------

.. note::

    content 和 srcNode 不能同时都设置

.. data:: Control.config.content

    {String} - 可选, 设置内容 html.

.. data:: Control.config.disabled

    {Boolean} - 可选，该组件是否初始禁用.

.. data:: Control.config.elAttrs

    {Object} - 可选，附加给组件根节点的属性键值对

.. data:: Control.config.elBefore

    {KISSY.Node} - 可选，组件根节点的渲染到该节点之前.

.. data:: Control.config.elCls

    {String} - 可选，附加给组件根节点的样式类

.. data:: Control.config.elStyle

    {Object} - 可选，附加给组件根节点的内联样式

.. data:: Control.config.focused

    {Boolean} - 可选，该组件是否初始获得焦点.

.. data:: Control.config.height

    {Number} - 可选，组件的高度，单位像素

.. data:: Control.config.parent

    {Control} - 可选，该组件的父组件.

.. data:: Control.config.prefixCls

    {String} - 可选，默认 "ks-" . 组件的 css 样式类前缀 . 例如假设组件为 menu ，则该组件内的样式类名为 {prefixCls}menu，默认为 "ks-menu".
               可用于实现自定义皮肤.

.. data:: Control.config.prefixXClass

    {String} - 可选，组件 prefix 的超类。只在config中实用。当超类未被指定时，用这个做超类。

.. data:: Control.config.render

    {KISSY.Node} - 组件要应用的节点。默认 S.all("body")，组件根节点的渲染为该节点最后一个节点.

.. data:: Control.config.srcNode

    {KISSY.Node} - 可选，组件从页面中已存在的该节点中渲染而来.

    .. note::

        srcNode 时设置其他属性不起作用，属性通通在 html 标签中指定，并且 html 标签必须包含完整结构，例如 content 节点必须存在

.. data:: Control.config.visible

    {Boolean} - 默认 true ，是否显示

    .. note::

        只是为组件的根节点添加/删除 {prefix}{component}-hidden 形式的 css class，自行指定具体的 css 样式。

.. data:: Control.config.width

    {Number} - 可选，组件的宽度，单位像素

.. data:: Control.config.x

    {Number} - 横轴位置

.. data:: Control.config.y

    {Number} - 纵轴位置

.. data:: Control.config.xy

    {Number[]} - 横纵坐标

.. data:: Control.config.zIndex

    {Number} - z-index 值

Attributes Detail
-----------------------------------------------------

.. attribute:: Control.prototype.created

    {Boolean} - 只读属性，组件结构是否已经创建

.. attribute:: Control.prototype.rendered

    {Boolean} - 只读属性，组件是否已经渲染

.. attribute:: Control.prototype.active

    {Boolean} - 组件是否已经激活

.. attribute:: Control.prototype.content

    {String|KISSY.Node} - 设置的 content 属性

.. attribute:: Control.prototype.disabled

    {Boolean} - 该组件是否禁用状态.

.. attribute:: Control.prototype.el

    {KISSY.Node} - 只读属性，该组件的根节点. 注意调用 render() 后才可以取得.

.. attribute:: Control.prototype.focused

    {Boolean} - 该组件是否获得焦点.

.. attribute:: Control.prototype.height

    {Number|String} - 组件的高

.. attribute:: Control.prototype.highlighted

    {Boolean} - 该组件是否处于高亮状态

.. attribute:: Control.prototype.isControl

    {Boolean} - 标记当前实例是 Control 的实例

.. attribute:: Control.prototype.parent

    {Boolean} - 只读属性，该组件的父组件

.. attribute:: Control.prototype.visible

    {Boolean} - 该组件是否显示，同 config 中的 visible，只是添加/删除样式

.. attribute:: Control.prototype.width

    {Number} - 组件的宽度，单位像素

.. attribute:: Control.prototype.x

    {Number} - 横轴位置

.. attribute:: Control.prototype.y

    {Nunmber} - 纵轴位置

.. attribute:: Control.prototype.xy

    {Nunmber} - 纵轴位置

.. attribute:: Control.prototype.zIndex

    {Number} - z-index 值

Methods Detail
-----------------------------------------------

.. method:: Control.extend

    | **extend( [ extensions , ] methodDesc , staticAttributes , desc )** <static>

    从当前组件类上扩展出一个子类组件

    :param Function[] extensions: 扩展类数组
    :param Object methodDesc: 方法集合键值对
    :param Object staticAttributes: 放到新产生组件类上的静态属性集合键值对，其中 ``ATTRS`` 属性特殊对待.
    :param Object desc: 组件元信息
    :param String desc.xclass: 组件的 xclass
    :param String desc.name: 组件的名称，不写则等于 xclass


.. method:: Control.prototype.create

    | **create()**
    | 创建当前组件的DOM结构，control将会代理给render.

    :return Object: 自身

.. method:: Control.prototype.render

    | **render()**
    | 把当前组件的DOM结构放入 DOM 文档中，并绑定事件，同步属性。

    :return Object: 自身

.. method:: Control.prototype.sync

    | **sync()**
    | 同步属性值

.. note::

    组件基类增加 sync 函数，调用后可调用父类、扩展类、插件对应的 syncUI 方法。

.. method:: Control.prototype.hide

    | **hide()**
    | 隐藏组件

    :return Object: 自身

.. method:: Control.prototype.show

    | **show()**
    | 显示组件

    :return Object: 自身

.. method:: Control.prototype.move

    | **move(x, y)**
    | 移动到(x,y)

    :param Number x: 横轴位置
    :param Number y: 纵轴位置

    :return Object: 自身

.. method:: Control.prototype.blur

    | **blur()**
    | 使组件失去焦点

.. method:: Control.prototype.focus

    | **focus()**
    | 使组件获得焦点

Events Details
------------------------------------------------

.. function:: Control.Events.afterBindUI

    | **afterBindUI(e)**
    | 当组件内部事件绑定完之后触发

    :params Object: KISSY CustomEvent 对象

.. function:: Control.Events.afterCreateDom

    | **afterCreateDom(e)**
    | 当组件根节点创建的时候触发

    :params Object: KISSY CustomEvent 对象

.. function:: Control.Events.afterRenderUI

    | **afterRenderUI(e)**
    | 当组件根节点渲染到 DOM 文档后触发

    :params Object: KISSY CustomEvent 对象

.. function:: Control.Events.afterSyncUI

    | **afterSyncUI(e)**
    | 当组件内部的状态同步完之后触发

    :params Object: KISSY CustomEvent 对象

.. function:: Control.Events.beforeBindUI

    | **beforeBindUI(e)**
    | 在组件内部事件绑定前触发

    :params Object: KISSY CustomEvent 对象

.. function:: Control.Events.beforeCreateDom

    | **beforeCreateDom(e)**
    | 在组件根节点创建前触发

    :params Object: KISSY CustomEvent 对象

.. function:: Control.Events.beforeRenderUI

    | **beforeRenderUI(e)**
    | 在组件根节点渲染之前触发

    :params Object: KISSY CustomEvent 对象

.. function:: Control.Events.beforeSyncUI

    | **beforeSyncUI(e)**
    | 在同步组件内部状态前触发

    :params Object: KISSY CustomEvent 对象

.. function:: Control.Events.hide

    | **hide(e)**
    | 在组件 show 的时候触发

.. function:: Control.Events.show

    | **show(e)**
    | 在组件 hide 的时候触发

.. function:: Control.Events.beforeVisibleChange

    | **beforeVisibleChange(e)**
    | 在组件 visible 属性发生变化时触发