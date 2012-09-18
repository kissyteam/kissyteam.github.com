.. currentmodule:: overlay

Dialog
===============================================

|  对话框.
|  扩展于 :class:`Overlay`

Class
-----------------------------------------------

  * :class:`Dialog`

Configs
-----------------------------------------------

  除了 :class:`Overlay` 的所有配置之外还有：

  * :data:`~component.UIBase.StdMod.config.headerContent`
  * :data:`~component.UIBase.StdMod.config.bodyContent`
  * :data:`~component.UIBase.StdMod.config.footerContent`
  * :data:`~component.UIBase.Drag.config.draggable`
  
Attributes
-----------------------------------------------

  除了 :class:`Overlay` 的所有属性之外还有：
  
  * :attr:`~component.UIBase.StdMod.prototype.header`
  * :attr:`~component.UIBase.StdMod.prototype.body`
  * :attr:`~component.UIBase.StdMod.prototype.footer`
  
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

    * 继承自
    :class:`~Overlay`
    :class:`~component.UIBase.StdMod`
    :class:`~component.UIBase.Drag` ,
    包含其全部配置,属性,方法,事件.
    
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