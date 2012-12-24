.. currentmodule:: component

Component.Extension.ContentBox
===============================

|  内盒。组件扩充类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review



Class
---------------------------------

    * :class:`component.extension.ContentBox`
    

Configs
-----------------------------------------------

    * :data:`~component.extension.ContentBox.config.content`
  

Attributes
-----------------------------------------------     

    * :attr:`~component.extension.ContentBox.prototype.contentEl`
    * :attr:`~component.extension.ContentBox.prototype.content`

Class Detail
--------------------------

.. class:: extension.ContentBox

    | **Component.Extension.ContentBox** (config)
    
    :param Object config: 配置项.
    
    
    
Configs Detail
-----------------------------------------------
    
.. data:: extension.ContentBox.config.content

    {String} - 可选, 设置内盒的内容 html.

    

Attributes Detail
-------------------------------------------------------

.. attribute:: extension.ContentBox.prototype.content

    {String} - 设置的 content 属性

.. attribute:: extension.ContentBox.prototype.contentEl

    {KISSY.Node} - 该组件的根节点. 注意调用 render() 后才可以取得.
