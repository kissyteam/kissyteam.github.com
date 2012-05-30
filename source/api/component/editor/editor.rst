.. currentmodule:: editor

Editor
===============================

|  编辑器.

Class
---------------------------------

    * :class:`Editor`

Configs
------------------------------------------

    * :data:`~component.UIBase.Box.config.width`
    * :data:`~component.Controller.config.focused`
    * :data:`~Editor.config.pluginConfig`
    * :data:`~Editor.config.height`
    * :data:`~Editor.config.customStyle`
    * :data:`~Editor.config.customLink`

Properties
----------------------------------------------------
    
    * :attr:`~Editor.prototype.textarea`
    * :attr:`~Editor.prototype.iframe`
    * :attr:`~Editor.prototype.window`
    * :attr:`~Editor.prototype.document`
    * :attr:`~Editor.prototype.iframeWrapEl`
    * :attr:`~Editor.prototype.toolBarEl`
    * :attr:`~Editor.prototype.statusBarEl`
    * :attr:`~Editor.prototype.mode`
    * :attr:`~Editor.prototype.data`
    * :attr:`~Editor.prototype.formatData`
    * :attr:`~Editor.SOURCE_MODE` <static>
    * :attr:`~Editor.WYSIWYG_MODE` <static>

Methods
-----------------------------------------------

    * :meth:`~component.Controller.extend` <static>
    * :meth:`~Editor.prototype.use`
    * :meth:`~Editor.prototype.adjustHeight`
    * :meth:`~Editor.prototype.execCommand`
    * :meth:`~Editor.prototype.sync`
    * :meth:`~Editor.prototype.getDocHtml`
    * :meth:`~Editor.prototype.focus`
    * :meth:`~Editor.prototype.blur`
    * :meth:`~Editor.prototype.addCustomStyle`
    * :meth:`~Editor.prototype.removeCustomStyle`
    * :meth:`~Editor.prototype.addCustomLink`
    * :meth:`~Editor.prototype.removeCustomLink`
    * :meth:`~Editor.prototype.docReady`
    * :meth:`~Editor.prototype.insertElement`
    * :meth:`~Editor.prototype.insertHtml`
    
Events
--------------------------------------------------------

    * :func:`~Editor.wysiwygMode`
    * :func:`~Editor.sourceMode`
    * :func:`~Editor.selectionChange`
    * :func:`~Editor.dialogShow`

Class Detail
--------------------------

.. class:: Editor

    | **Editor** (config)
    
    * 继承自 :class:`~component.Controller` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项.
    
    .. note::

        从已有元素实例 Editor 对象时：

        #. 元素节点标明类名 ``{prefixCls}editor`` .
        #. textarea 节点标明类名 ``{prefixCls}editor-textarea`` .
        #. ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .


Configs Detail
---------------------------------------------------

.. data:: Editor.config.pluginConfig

    {Object} - 各个插件的配置键值对,例如

    .. code-block:: javascript

        {
            "image":{
                defaultMargin:0,
                upload:{
                    url:'xx.htm'
                }
            }
        }



.. data:: Editor.config.height

    {String|Number} - 继承自 :class:`~Component.UIBase.Box` 。注意表示：编辑器的整体高度。（ 包括 toolbar/statusbar ）

.. data:: Editor.config.customLink

    {String[]} - 自定义样式表 url 数组.

.. data:: Editor.config.customStyle

    {String} - 自定义样式字符串.

Properties Detail
-----------------------------------------------------


.. attribute:: Editor.SOURCE_MODE

    {KISSY.Node} - 编辑器源码模式. <static>

.. attribute:: Editor.WYSIWYG_MODE

    {KISSY.Node} - 编辑器可视化模式. <static>

.. attribute:: Editor.prototype.textarea

    {KISSY.Node} - 编辑器的 textarea.只读.
        
.. attribute:: Editor.prototype.iframe

    {KISSY.Node} - 编辑器的 iframe.只读.

.. attribute:: Editor.prototype.window

    {KISSY.Node} - 编辑器 iframe 的 window.只读.

.. attribute:: Editor.prototype.document

    {KISSY.Node} - 编辑器 iframe 的 document.只读.

.. attribute:: Editor.prototype.iframeWrapEl

    {KISSY.Node} - 编辑器 iframe 的父节点.只读.

.. attribute:: Editor.prototype.toolBarEl

    {KISSY.Node} - 编辑器的 toolbar 节点.只读.

.. attribute:: Editor.prototype.statusBarEl

    {KISSY.Node} - 编辑器的 statusbar 节点.只读.

.. attribute:: Editor.prototype.mode

    {KISSY.Node} - 编辑器模式.可读写.取值 ``Editor.SOURCE_MODE`` 或 ``Editor.WYSIWYG_MODE`` .

.. attribute:: Editor.prototype.data

    {KISSY.Node} - 编辑器 body 下的 html 内容.可读写.

.. attribute:: Editor.prototype.formatData

    {KISSY.Node} - 编辑器 body 下的格式化后的 html 内容.可读写.


Methods Detail
-----------------------------------------------


.. method:: Editor.prototype.use()

    | **use( mods, callback)**
    | 加载编辑器内置插件

    :param String[] mods: 插件名称数组
    :param Function callback: 插件载入后的回调

.. method:: Editor.prototype.adjustHeight

    | **adjustHeight()**
    | 在 editor toolbar/statusbar 高度发生变化后需要调用该方法调整 textarea 高度.


.. method:: Editor.prototype.execCommand(commandName, arg1, arg2, ...)

    | **execCommand(commandName, arg1, arg2, ...)**
    | 调用编辑器的响应命令功能

    :param String commandName: 命令名称，由各个插件提供
    :param arg1: 对应命令所需要的参数


.. method:: Editor.prototype.sync

    | **sync()**
    | 同步编辑器内容到对应的 textarea

.. method:: Editor.prototype.getDocHtml

    | **getDocHtml()**
    | 获取编辑器文档的完整 html（不仅仅是 body 内的内容）


.. method:: Editor.prototype.focus

    | **focus()**
    | 使得编辑器获得焦点

.. method:: Editor.prototype.blur

    | **blur()**
    | 使得编辑器失去焦点


.. method:: Editor.prototype.addCustomStyle(cssText, [id])

    | **addCustomStyle(cssText, [id])**
    | 添加自定义样式到编辑器文档中

    :param String cssText: 自定义样式文本
    :param String id: 产生的 style 标签 id，用于删除


.. method:: Editor.prototype.removeCustomStyle( id )

    | **removeCustomStyle( id )**
    | 删除编辑器文档的自定义样式

    :param String id: 自定义样式产生的 style 标签的 id


.. method:: Editor.prototype.addCustomLink( url )

    | **addCustomLink( url )**
    | 添加自定义样式表到编辑器文档中

    :param String url: 自定义样式表的地址


.. method:: Editor.prototype.removeCustomLink( url )

    | **removeCustomLink( url )**
    | 删除编辑器文档的自定义样式表

    :param String url: 自定义样式表的地址


.. method:: Editor.prototype.docReady ( fn )

    | **docReady( fn )**
    | 注册函数到编辑器文档 ready 队列（编辑器文档 ready 后触发）

    :param Function fn: 编辑器文档 ready 后触发

    .. note::

        该函数在编辑器生存周期内可能会运行多次（每次切换源码模式再切换回可视化模式都会因为编辑器文档重建而触发）


.. method:: Editor.prototype.insertElement( element )

    | **insertElement( element )**
    | 往编辑器中插入元素

    :param KISSY.Node element: 待插入的元素节点。（需从编辑器文档中创建）


.. method:: Editor.prototype.insertHtml( html )

    | **insertHtml( html )**
    | 往编辑器中插入 html 串

    :param String html: 待插入的 html 字符串.


.. method:: Editor.prototype.sync

    | **sync()**
    | 同步编辑器内容到对应的 textarea



Events Detail
------------------------------------------------------

.. function:: Editor.wysiwygMode

    | **wysiwygMode(e)**
    | 当切换到可视化模式后触发


.. function:: Editor.sourceMode

    | **sourceMode(e)**
    | 当切换到源码模式后触发


.. function:: Editor.selectionChange

    | **selectionChange(e)**
    | 当用户光标路径变化后触发

    :param {Editor.Selection} selection: 当前的选区对象
    :param {Editor.ElementPath} path: 当前的光标路径
    :param {KISSY.Node} element: 光标开始处所在的非文字节点元素.


.. function:: Editor.dialogShow

    | **dialogShow(e)**
    | 当弹出插件窗口事触发

    :param {Overlay.Dialog} dialog: 窗口对象实例
    :param {String} dialogName: 窗口标志名称