.. currentmodule:: mvc

mvc.View
===============================



|  视图类.

Class
---------------------------------

    * :class:`View`
    
    
Config Attributes
-----------------------------------------------

    * :data:`~View.config.el`
    * :data:`~View.config.events`
    
    
Properties
-----------------------------------------------    
    * :attr:`View.prototype.el`
    
    
Methods
-----------------------------------------------

    * :meth:`~View.prototype.render`
    * :meth:`~View.prototype.destroy`
    
    
Class Detail
--------------------------

.. class:: View

    | **View** (config)
    
    * 继承自 :class:`~base.Base` , 包含其全部配置,属性,方法,事件.
    * 视图代表一个节点容器，主要用于事件代理
    
    :param Object config: 配置项.详细见下方 **Config Attributes Detail** .
    
    
Config Attributes Detail
-----------------------------------------------

.. data:: View.config.el

    {String|HTMLDOMNode} - 可选，默认 "<div />" . 选择器或用于 html 字符串或原生节点，用于产生视图容器节点.
    
.. data:: View.config.events

    {Object} - 可选，根节点代理的事件，例如
    
    .. code-block:: javascript
    
        {
            ".edit":{
                click:"editNote"
            },
            ".new":{
                click:function(e){}
            }
        }
        
    那么点击节点容器内带有 edit 样式类的节点会触发当前实例的 editNode 方法，点击带有 new 样式类的节点会触发指定的函数
    
    
Properties Detail
--------------------------------------------------

.. attribute:: View.prototype.el

    {KISSY.Node} - 视图容器的节点，通过 get("el") 获取.     
    
    
Methods Detail
-----------------------------------------------  

.. method:: View.prototype.render

    | **render ( )**
    | 对容器进行渲染，主要用于使用者覆盖，默认返回自身。        
    
    
.. method:: View.prototype.destroy

    | **destroy ( )**
    | 销毁该视图容器