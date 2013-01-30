.. currentmodule:: overlay

Dialog
===============================================

|  对话框.
|  扩展于 :class:`Overlay`

.. code-block:: javascript

    KISSY.use('overlay',function(S,Overlay){
        // use Overlay.Dialog
    });

Class
-----------------------------------------------

  * :class:`Dialog`

Configs
-----------------------------------------------

  除了 :class:`Overlay` 的所有配置之外还有：

  * :data:`~Dialog.config.headerContent`
  * :data:`~Dialog.config.bodyContent`
  * :data:`~Dialog.config.footerContent`
  
Attributes
-----------------------------------------------

  除了 :class:`Overlay` 的所有属性之外还有：
  
  * :attr:`~Dialog.prototype.header`
  * :attr:`~Dialog.prototype.body`
  * :attr:`~Dialog.prototype.footer`
  * :attr:`~Dialog.prototype.headerContent`
  * :attr:`~Dialog.prototype.bodyContent`
  * :attr:`~Dialog.prototype.footerContent`

Methods
-----------------------------------------------

  * 同 :class:`Overlay` .

Events
-----------------------------------------------

  * 同 :class:`Overlay`

Class Detail
-----------------------------------------------

.. class:: Dialog
    
    | **Dialog** (config)
    | xclass: 'dialog'
    | 继承自 :class:`~Overlay` 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项, 详细见下方 **Configs Detail** .
    
    对话框的 DOM 结构为：
    
    .. code-block:: html

        <div class='dialog'> <!-- 对话框根节点 -->
            <div class='content'> <!-- 对话框内容节点 -->
                <div class='header'> <!-- 对话框标题节点 -->
                </div>
                
                <div class='body'> <!-- 对话框体节点 -->  
                </div>
                
                <div class='footer'> <!-- 对话框底部节点 -->
                </div>
            </div>
        </div>
        
        
.. note::

    使用前请加上初始样式
    
    .. code-block:: html
    
        <style>
            .ks-overlay {
                position:absolute;
                left:-9999px;
                top:-9999px;
            }
        </style>


Configs Detail
-----------------------------------------------

.. data:: Dialog.config.headerContent

    {String} - 组件的标题 html.

.. data:: Dialog.config.bodyContent

    {String} - 组件的体 html.

.. data:: Dialog.config.footerContent

    {String} - 组件的底部 html.

.. data:: Dialog.config.headerStyle

    {Object} - 组件的标题内联样式.

.. data:: Dialog.config.bodyStyle

    {Object} - 组件体的内联样式.

.. data:: Dialog.config.footerStyle

    {Object} - 组件的底部内联样式.


Attributes Detail
-----------------------------------------------

.. attribute:: Dialog.prototype.header

    {KISSY.Node} - 只读, 组件的头部节点.

.. attribute:: Dialog.prototype.body

    {KISSY.Node} - 只读, 组件的体部节点.

.. attribute:: Dialog.prototype.footer

    {KISSY.Node} - 只读, 组件的底部节点.

.. data:: Dialog.prototype.headerContent

    {String} - 可读写. 组件的标题 html.

.. data:: Dialog.prototype.bodyContent

    {String} - 可读写. 组件的体 html.

.. data:: Dialog.prototype.footerContent

    {String} - 可读写. 组件的底部 html.